import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/study-tools' },
  title: 'Study Tools - GCSE English Revision',
  description:
    'Interactive study tools for GCSE and IGCSE English revision. Revision planner, quote flashcards, quote tester, and progress checklists to help you prepare for your exams.',
}

/* ─── Data ───────────────────────────────────────────────────── */

type Tool = {
  id: 'revision_planner' | 'flashcards' | 'tester' | 'checklists'
  href: string
  featureKeys: string[]
  colour: string
  icon: React.ReactNode
}

const TOOLS: Tool[] = [
  {
    id: 'revision_planner',
    href: '/resources/study-tools/revision-planner',
    featureKeys: [
      'resources.study_tools.rp.feat.calendar',
      'resources.study_tools.rp.feat.countdown',
      'resources.study_tools.rp.feat.plan',
      'resources.study_tools.rp.feat.checklist',
    ],
    colour: 'from-primary/[0.08] to-primary/[0.02]',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    id: 'flashcards',
    href: '/resources/study-tools/flashcards',
    featureKeys: [
      'resources.study_tools.fc.feat.sm2',
      'resources.study_tools.fc.feat.grade',
      'resources.study_tools.fc.feat.difficult',
      'resources.study_tools.fc.feat.streak',
    ],
    colour: 'from-primary/[0.08] to-primary/[0.02]',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
        />
      </svg>
    ),
  },
  {
    id: 'tester',
    href: '/resources/study-tools/tester',
    featureKeys: [
      'resources.study_tools.qt.feat.fill_blank',
      'resources.study_tools.qt.feat.timed',
      'resources.study_tools.qt.feat.sr',
      'resources.study_tools.qt.feat.score',
    ],
    colour: 'from-primary/[0.08] to-primary/[0.02]',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    id: 'checklists',
    href: '/resources/study-tools/checklists',
    featureKeys: [
      'resources.study_tools.cl.feat.aqa',
      'resources.study_tools.cl.feat.edexcel',
      'resources.study_tools.cl.feat.cambridge',
      'resources.study_tools.cl.feat.autosave',
    ],
    colour: 'from-primary/[0.08] to-primary/[0.02]',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

function tailorChecklistFeatures(
  board: ExamBoard | null,
  defaultFeatures: string[],
  boardLangLabel: string,
  boardLitLabel: string,
  topicLabel: string,
  autosaveLabel: string,
): string[] {
  if (!board) return defaultFeatures
  const cfg = getBoardConfig(board)
  const name = cfg?.shortName ?? ''
  return [`${name} ${boardLangLabel}`, `${name} ${boardLitLabel}`, topicLabel, autosaveLabel]
}

export default async function StudyToolsHub() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)

  // Resolve all visible strings up front.
  const staticKeys = [
    'resources.study_tools.title',
    'resources.study_tools.board_prefix',
    'resources.study_tools.subtitle',
    'resources.study_tools.cta.open',
    'resources.study_tools.tip.title',
    'resources.study_tools.tip.start.label',
    'resources.study_tools.tip.start.body',
    'resources.study_tools.tip.daily.label',
    'resources.study_tools.tip.daily.body',
    'resources.study_tools.tip.track.label',
    'resources.study_tools.tip.track.body',
    // Tool titles + descriptions
    'resources.study_tools.rp.title',
    'resources.study_tools.rp.desc',
    'resources.study_tools.fc.title',
    'resources.study_tools.fc.desc',
    'resources.study_tools.qt.title',
    'resources.study_tools.qt.desc',
    'resources.study_tools.cl.title',
    'resources.study_tools.cl.desc',
    // Checklist tailor helpers
    'resources.study_tools.cl.lang_suffix',
    'resources.study_tools.cl.lit_suffix',
    'resources.study_tools.cl.topic_tracker',
    'resources.study_tools.cl.autosave_label',
  ] as const

  const featureKeys = TOOLS.flatMap((t) => t.featureKeys)
  const labels = await tMany([...staticKeys, ...featureKeys])

  const [
    title,
    boardPrefix,
    subtitle,
    ctaOpen,
    tipTitle,
    tipStartLabel,
    tipStartBody,
    tipDailyLabel,
    tipDailyBody,
    tipTrackLabel,
    tipTrackBody,
    rpTitle,
    rpDesc,
    fcTitle,
    fcDesc,
    qtTitle,
    qtDesc,
    clTitle,
    clDesc,
    clLangSuffix,
    clLitSuffix,
    clTopicTracker,
    clAutosaveLabel,
  ] = labels

  // Slice out feature labels per tool, then assemble.
  const featureOffset = staticKeys.length
  const featuresByTool: Record<string, string[]> = {}
  let cursor = featureOffset
  for (const tool of TOOLS) {
    featuresByTool[tool.id] = labels.slice(cursor, cursor + tool.featureKeys.length)
    cursor += tool.featureKeys.length
  }

  const TITLE_BY_ID: Record<Tool['id'], string> = {
    revision_planner: rpTitle,
    flashcards: fcTitle,
    tester: qtTitle,
    checklists: clTitle,
  }
  const DESC_BY_ID: Record<Tool['id'], string> = {
    revision_planner: rpDesc,
    flashcards: fcDesc,
    tester: qtDesc,
    checklists: clDesc,
  }

  const tools = TOOLS.map((tool) => ({
    ...tool,
    title: TITLE_BY_ID[tool.id],
    description: DESC_BY_ID[tool.id],
    features:
      tool.id === 'checklists'
        ? tailorChecklistFeatures(
            board,
            featuresByTool[tool.id],
            clLangSuffix,
            clLitSuffix,
            clTopicTracker,
            clAutosaveLabel,
          )
        : featuresByTool[tool.id],
  }))

  return (
    <>
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
        {boardConfig && (
          <div className="mt-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {boardPrefix} {boardConfig.shortName}
            </span>
          </div>
        )}
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      </div>

      {/* Tool cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-lg hover:border-primary/30"
          >
            {/* Header */}
            <div className={`bg-gradient-to-br ${tool.colour} px-6 py-6`}>
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold leading-tight text-foreground">{tool.title}</h2>
                <div className="text-primary opacity-80">{tool.icon}</div>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{tool.description}</p>

              {/* Feature list */}
              <ul className="mt-4 space-y-1.5">
                {tool.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-5">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary transition-colors">
                  {ctaOpen}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tip box */}
      <div className="mt-10 rounded-xl border border-primary/20 bg-primary/[0.04] p-6">
        <h3 className="text-lg font-bold text-foreground">{tipTitle}</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>{tipStartLabel}</strong> {tipStartBody}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>{tipDailyLabel}</strong> {tipDailyBody}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>{tipTrackLabel}</strong> {tipTrackBody}
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}
