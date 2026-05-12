'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { TrustpilotReviewLink } from '@/components/trustpilot/TrustpilotReviewLink'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { isGcseBoard, isIgcseBoard } from '@/lib/board/board-filter'
import { useT } from '@/lib/i18n/use-t'
import type { ExamBoard } from '@/lib/board/board-store'

type FooterLink = {
  href: string
  // i18n dictionary key resolved at render time via useT().
  labelKey: string
  // Restrict link to certain boards. If omitted, link is shown for every board.
  boards?: ExamBoard[]
  // Restrict to a board type (easier than listing individual boards).
  boardType?: 'gcse' | 'igcse'
}

type FooterSection = {
  // i18n dictionary key for the section heading.
  titleKey: string
  // When true the whole section is generic and never filtered (pricing, about, legal, etc).
  generic?: boolean
  links: FooterLink[]
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    titleKey: 'footer.section.product',
    generic: true,
    links: [
      { href: '/courses', labelKey: 'footer.link.courses' },
      { href: '/games', labelKey: 'footer.link.games' },
      { href: '/assessment/reading', labelKey: 'footer.link.reading_assessment' },
      { href: '/mock-exams', labelKey: 'footer.link.mock_exams' },
      { href: '/practice', labelKey: 'footer.link.practice' },
      { href: '/resources', labelKey: 'footer.link.resources' },
      { href: '/pricing', labelKey: 'header.nav.pricing' },
    ],
  },
  {
    titleKey: 'footer.section.revision',
    links: [
      { href: '/revision', labelKey: 'footer.link.revision_hub' },
      // Poetry clusters are board-specific.
      {
        href: '/revision/poetry/power-and-conflict',
        labelKey: 'footer.link.power_and_conflict',
        boards: ['aqa'],
      },
      {
        href: '/revision/poetry/love-and-relationships',
        labelKey: 'footer.link.love_and_relationships',
        boards: ['aqa'],
      },
      {
        href: '/revision/poetry/edexcel',
        labelKey: 'footer.link.edexcel_anthology',
        boards: ['edexcel'],
      },
      { href: '/revision/poetry/ocr', labelKey: 'footer.link.ocr_anthology', boards: ['ocr'] },
      {
        href: '/revision/poetry/eduqas',
        labelKey: 'footer.link.eduqas_anthology',
        boards: ['eduqas'],
      },
      { href: '/revision/poetry', labelKey: 'footer.link.poetry', boardType: 'gcse' },
      { href: '/revision/texts', labelKey: 'footer.link.texts' },
      { href: '/revision/flashcards', labelKey: 'footer.link.flashcards' },
      { href: '/revision/exam-technique', labelKey: 'footer.link.exam_technique' },
      { href: '/revision/language', labelKey: 'footer.link.language' },
      { href: '/revision/grade-targets', labelKey: 'footer.link.grade_targets' },
      { href: '/revision/quiz', labelKey: 'footer.link.quiz' },
    ],
  },
  {
    titleKey: 'footer.section.igcse',
    links: [
      { href: '/igcse/edexcel', labelKey: 'footer.link.edexcel_igcse', boards: ['edexcel-igcse'] },
      {
        href: '/igcse/cambridge/0500',
        labelKey: 'footer.link.cambridge_0500',
        boards: ['cambridge-0500'],
      },
      {
        href: '/igcse/cambridge/0990',
        labelKey: 'footer.link.cambridge_0990',
        boards: ['cambridge-0990'],
      },
      { href: '/igcse', labelKey: 'footer.link.igcse_hub', boardType: 'igcse' },
    ],
  },
  {
    titleKey: 'footer.section.resources',
    generic: true,
    links: [
      { href: '/resources', labelKey: 'footer.link.resources_hub' },
      { href: '/resources/revision-notes', labelKey: 'footer.link.study_guides' },
      { href: '/resources/writing-skills', labelKey: 'footer.link.writing_skills' },
      { href: '/resources/techniques', labelKey: 'footer.link.techniques' },
      { href: '/resources/model-answers', labelKey: 'footer.link.model_answers' },
      { href: '/resources/vocabulary', labelKey: 'footer.link.vocabulary' },
      { href: '/resources/study-tools', labelKey: 'footer.link.study_tools' },
    ],
  },
  {
    titleKey: 'footer.section.company',
    generic: true,
    links: [
      { href: '/about', labelKey: 'footer.link.about' },
      { href: '/about/verified-content', labelKey: 'footer.link.verified_content' },
      { href: '/for-teachers', labelKey: 'header.nav.teachers' },
      { href: '/for-schools', labelKey: 'header.nav.schools' },
      { href: '/for-parents', labelKey: 'header.nav.parents' },
      { href: '/contact', labelKey: 'footer.link.contact' },
      { href: '/press', labelKey: 'footer.link.press' },
      { href: '/affiliates', labelKey: 'footer.link.affiliate_programme' },
    ],
  },
  {
    titleKey: 'footer.section.legal',
    generic: true,
    links: [
      { href: '/privacy-policy', labelKey: 'legal.privacy_policy' },
      { href: '/terms', labelKey: 'footer.link.terms_of_service' },
      { href: '/cookie-policy', labelKey: 'legal.cookie_policy' },
      { href: '/refund-policy', labelKey: 'footer.link.refund_policy' },
      { href: '/accessibility', labelKey: 'footer.link.accessibility' },
    ],
  },
  {
    titleKey: 'footer.section.support',
    generic: true,
    links: [
      { href: '/help', labelKey: 'footer.link.help_centre' },
      { href: '/faqs', labelKey: 'footer.link.faqs' },
    ],
  },
]

function linkMatchesBoard(link: FooterLink, board: ExamBoard | null): boolean {
  // No board selected — show everything except explicitly-scoped links,
  // so first-time visitors see the full site map.
  if (!board) {
    return !link.boards && !link.boardType
  }
  if (link.boards && !link.boards.includes(board)) return false
  if (link.boardType === 'gcse' && !isGcseBoard(board)) return false
  if (link.boardType === 'igcse' && !isIgcseBoard(board)) return false
  return true
}

/** Group visible sections into 4 columns for the editorial layout. */
function groupIntoColumns(sections: FooterSection[]): FooterSection[][] {
  // Distribute sections roughly evenly across 4 columns.
  const cols: FooterSection[][] = [[], [], [], []]
  sections.forEach((section, i) => {
    cols[i % 4].push(section)
  })
  return cols
}

export function Footer() {
  const { board, isHydrated } = useBoard()
  const t = useT()
  const effectiveBoard = isHydrated ? board : null
  const boardConfig = getBoardConfig(effectiveBoard)
  // Stable section heading used to detect the Legal section (which
  // gets the additional "Manage cookies" button). We match by titleKey
  // rather than translated text so the comparison stays locale-stable.
  const LEGAL_SECTION_KEY = 'footer.section.legal'

  const visibleSections = useMemo(() => {
    return FOOTER_SECTIONS.map((section) => {
      if (section.generic) return section
      const links = section.links.filter((l) => linkMatchesBoard(l, effectiveBoard))
      return { ...section, links }
    }).filter((section) => section.links.length > 0)
  }, [effectiveBoard])

  const columns = useMemo(() => groupIntoColumns(visibleSections), [visibleSections])

  return (
    <footer
      className="border-t"
      style={{
        background: '#0F1411',
        borderColor: 'rgba(255,255,255,0.08)',
        color: '#B5B8B3',
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Board badge bar */}
        {boardConfig && (
          <div
            className="flex flex-wrap items-center justify-between gap-3 border-b py-4"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-2 text-sm">
              <BookOpen className="h-4 w-4 text-[#B5B8B3]" aria-hidden="true" />
              <span className="text-[#B5B8B3]">{t('footer.board_badge.studying')}</span>
              <Badge variant="secondary" className="bg-white/10 text-[#FBF7F0] border-0">
                {boardConfig.shortName}
              </Badge>
              <span className="hidden text-[#B5B8B3] sm:inline">
                &mdash; {boardConfig.fullName}
              </span>
            </div>
            <Link
              href="/board-select?change=1"
              className="text-sm font-medium text-[#E8A382] hover:text-[#f0b89a] underline-offset-4 hover:underline transition-colors"
            >
              {t('board.change')}
            </Link>
          </div>
        )}

        {/* Main 5-column grid: brand column + 4 link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-5">
          {/* Column 1 — Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 lg:pr-4">
            <Link href="/" className="inline-block">
              <span
                className="font-serif text-3xl font-medium tracking-tight"
                style={{ color: '#2dd4a8' }}
              >
                The
                <br />
                <em className="italic" style={{ color: '#E8A382' }}>
                  English
                </em>
                <br />
                Hub
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#B5B8B3]/70 max-w-[240px]">
              {t('footer.brand_tagline')}
            </p>
            <div className="mt-4">
              <TrustpilotReviewLink />
            </div>
            {process.env.NEXT_PUBLIC_EDTECH_IMPACT_LIVE === 'true' && (
              <div className="mt-3 flex items-center gap-2 text-[11px] font-mono tracking-wide text-[#B5B8B3]/70">
                {/* Grey star icon */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#B5B8B3" aria-hidden="true">
                  <path d="M12 2l2.955 6.985L22 10.05l-5.27 4.94L18.18 22 12 18.27 5.82 22l1.45-7.01L2 10.05l7.045-1.065z" />
                </svg>
                <span>{t('footer.edtech_impact_note')}</span>
              </div>
            )}
          </div>

          {/* Columns 2-5 — Link groups */}
          {columns.map((colSections, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-8">
              {colSections.map((section) => (
                <div key={section.titleKey}>
                  <h3
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] mb-4"
                    style={{ color: '#FBF7F0' }}
                  >
                    {t(section.titleKey)}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#B5B8B3]/80 transition-colors duration-200 hover:text-[#FBF7F0]"
                        >
                          {t(link.labelKey)}
                        </Link>
                      </li>
                    ))}
                    {section.titleKey === LEGAL_SECTION_KEY && (
                      <li>
                        <button
                          type="button"
                          onClick={() =>
                            window.dispatchEvent(new CustomEvent('open-cookie-consent'))
                          }
                          className="text-sm text-[#B5B8B3]/80 transition-colors duration-200 hover:text-[#FBF7F0]"
                        >
                          {t('footer.manage_cookies')}
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="border-t py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="font-mono text-[11px] tracking-wide text-[#B5B8B3]/60">
              &copy; 2024&ndash;{new Date().getFullYear()} {t('footer.copyright_suffix')}
            </p>
            <span className="hidden sm:inline text-[#B5B8B3]/30">&middot;</span>
            <p className="font-mono text-[11px] tracking-wide text-[#B5B8B3]/60">
              {t('footer.company_registration')}
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono tracking-wide">
            <Link
              href="/privacy-policy"
              className="text-[#B5B8B3]/60 hover:text-[#FBF7F0] transition-colors"
            >
              {t('footer.bottom.privacy')}
            </Link>
            <Link
              href="/terms"
              className="text-[#B5B8B3]/60 hover:text-[#FBF7F0] transition-colors"
            >
              {t('footer.bottom.terms')}
            </Link>
            <a
              href="mailto:info@upskillenergy.com"
              className="text-[#B5B8B3]/60 hover:text-[#FBF7F0] transition-colors"
            >
              {t('footer.bottom.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
