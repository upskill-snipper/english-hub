'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
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
      { href: '/revision/poetry/love-and-relationships', label: 'Love & Relationships', boards: ['aqa'] },
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
      { href: '/for-teachers', label: 'For Teachers' },
      { href: '/for-schools', label: 'For Schools' },
      { href: '/for-parents', label: 'For Parents' },
      { href: '/contact', label: 'Contact' },
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

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {boardConfig && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 py-4">
            <div className="flex items-center gap-2 text-sm">
              <BookOpen className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <span className="text-muted-foreground">Studying</span>
              <Badge variant="secondary">{boardConfig.shortName}</Badge>
              <span className="hidden text-muted-foreground sm:inline">
                — {boardConfig.fullName}
              </span>
            </div>
            <Link
              href="/board-select?change=1"
              className="text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Change board
            </Link>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-3 lg:grid-cols-6">
          {visibleSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
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
                        window.dispatchEvent(
                          new CustomEvent('open-cookie-consent')
                        )
                      }
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      Manage Cookies
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/60 py-6 space-y-2">
          <p className="text-center text-xs text-muted-foreground">
            &copy; 2024–{new Date().getFullYear()} The English Hub. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground">
            A trading name of Upskill Energy Limited · Company No. 16254656 · Registered in England and Wales
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Contact:{' '}
            <a href="mailto:info@Upskillenergy.com" className="hover:text-foreground transition-colors">
              info@Upskillenergy.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
