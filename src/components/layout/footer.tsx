'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { TrustpilotReviewLink } from '@/components/trustpilot/TrustpilotReviewLink'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { isGcseBoard, isIgcseBoard } from '@/lib/board/board-filter'
import type { ExamBoard } from '@/lib/board/board-store'

type FooterLink = {
  href: string
  label: string
  // Restrict link to certain boards. If omitted, link is shown for every board.
  boards?: ExamBoard[]
  // Restrict to a board type (easier than listing individual boards).
  boardType?: 'gcse' | 'igcse'
}

type FooterSection = {
  title: string
  // When true the whole section is generic and never filtered (pricing, about, legal, etc).
  generic?: boolean
  links: FooterLink[]
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Product',
    generic: true,
    links: [
      { href: '/courses', label: 'Courses' },
      { href: '/games', label: 'Games' },
      { href: '/assessment/reading', label: 'Reading Assessment' },
      { href: '/mock-exams', label: 'Mock Exams' },
      { href: '/practice', label: 'Practice' },
      { href: '/resources', label: 'Resources' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Revision',
    links: [
      { href: '/revision', label: 'Revision Hub' },
      // Poetry clusters are board-specific.
      { href: '/revision/poetry/power-and-conflict', label: 'Power & Conflict', boards: ['aqa'] },
      {
        href: '/revision/poetry/love-and-relationships',
        label: 'Love & Relationships',
        boards: ['aqa'],
      },
      { href: '/revision/poetry/edexcel', label: 'Edexcel Anthology', boards: ['edexcel'] },
      { href: '/revision/poetry/ocr', label: 'OCR Anthology', boards: ['ocr'] },
      { href: '/revision/poetry/eduqas', label: 'Eduqas Anthology', boards: ['eduqas'] },
      { href: '/revision/poetry', label: 'Poetry', boardType: 'gcse' },
      { href: '/revision/texts', label: 'Texts' },
      { href: '/revision/flashcards', label: 'Flashcards' },
      { href: '/revision/exam-technique', label: 'Exam Technique' },
      { href: '/revision/language', label: 'Language' },
      { href: '/revision/grade-targets', label: 'Grade Targets' },
      { href: '/revision/quiz', label: 'Quiz' },
    ],
  },
  {
    title: 'IGCSE',
    links: [
      { href: '/igcse/edexcel', label: 'Edexcel IGCSE', boards: ['edexcel-igcse'] },
      { href: '/igcse/cambridge/0500', label: 'Cambridge 0500', boards: ['cambridge-0500'] },
      { href: '/igcse/cambridge/0990', label: 'Cambridge 0990', boards: ['cambridge-0990'] },
      { href: '/igcse', label: 'IGCSE Hub', boardType: 'igcse' },
    ],
  },
  {
    title: 'Resources',
    generic: true,
    links: [
      { href: '/resources', label: 'Resources Hub' },
      { href: '/resources/revision-notes', label: 'Study Guides' },
      { href: '/resources/writing-skills', label: 'Writing Skills' },
      { href: '/resources/techniques', label: 'Techniques' },
      { href: '/resources/model-answers', label: 'Model Answers' },
      { href: '/resources/vocabulary', label: 'Vocabulary' },
      { href: '/resources/study-tools', label: 'Study Tools' },
    ],
  },
  {
    title: 'Company',
    generic: true,
    links: [
      { href: '/about', label: 'About' },
      { href: '/about/verified-content', label: 'Verified content' },
      { href: '/for-teachers', label: 'For Teachers' },
      { href: '/for-schools', label: 'For Schools' },
      { href: '/for-parents', label: 'For Parents' },
      { href: '/contact', label: 'Contact' },
      { href: '/press', label: 'Press' },
      { href: '/affiliates', label: 'Affiliate Programme' },
    ],
  },
  {
    title: 'Legal',
    generic: true,
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookie-policy', label: 'Cookie Policy' },
      { href: '/refund-policy', label: 'Refund Policy' },
      { href: '/accessibility', label: 'Accessibility' },
    ],
  },
  {
    title: 'Support',
    generic: true,
    links: [
      { href: '/help', label: 'Help Centre' },
      { href: '/faqs', label: 'FAQs' },
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
  const effectiveBoard = isHydrated ? board : null
  const boardConfig = getBoardConfig(effectiveBoard)

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
              <span className="text-[#B5B8B3]">Studying</span>
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
              Change board
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
              GCSE &amp; IGCSE English revision, courses, and exam prep &mdash; built for students,
              teachers, and schools.
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
                <span>Reviewed on EdTech Impact (4.x &#9733; &mdash; listing live Q3 2026)</span>
              </div>
            )}
          </div>

          {/* Columns 2-5 — Link groups */}
          {columns.map((colSections, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-8">
              {colSections.map((section) => (
                <div key={section.title}>
                  <h3
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] mb-4"
                    style={{ color: '#FBF7F0' }}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#B5B8B3]/80 transition-colors duration-200 hover:text-[#FBF7F0]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    {section.title === 'Legal' && (
                      <li>
                        <button
                          type="button"
                          onClick={() =>
                            window.dispatchEvent(new CustomEvent('open-cookie-consent'))
                          }
                          className="text-sm text-[#B5B8B3]/80 transition-colors duration-200 hover:text-[#FBF7F0]"
                        >
                          Manage Cookies
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
              &copy; 2024&ndash;{new Date().getFullYear()} The English Hub. All rights reserved.
            </p>
            <span className="hidden sm:inline text-[#B5B8B3]/30">&middot;</span>
            <p className="font-mono text-[11px] tracking-wide text-[#B5B8B3]/60">
              Upskill Energy Limited &middot; Co. 16511479 &middot; ICO ZC016690 &middot; Registered
              in England &amp; Wales &middot; Registered office on request
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono tracking-wide">
            <Link
              href="/privacy-policy"
              className="text-[#B5B8B3]/60 hover:text-[#FBF7F0] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[#B5B8B3]/60 hover:text-[#FBF7F0] transition-colors"
            >
              Terms
            </Link>
            <a
              href="mailto:info@upskillenergy.com"
              className="text-[#B5B8B3]/60 hover:text-[#FBF7F0] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
