'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { useT } from '@/lib/i18n/use-t'
// Aliased to avoid conflict with local callback params named `t`
type TFn = (key: string) => string

/* ─── Types ──────────────────────────────────────────────────── */

type Category = 'shakespeare' | 'nineteenth' | 'modern' | 'poetry'

type TextCard = {
  title: string
  slug: string
  author: string
  category: Category
  boards: string[]
  themes: string[]
  icon: string
  type: 'play' | 'novel' | 'novella' | 'allegory' | 'anthology'
}

/* ─── Text data ──────────────────────────────────────────────── */

const TEXTS: TextCard[] = [
  // Shakespeare
  {
    title: 'Macbeth',
    slug: 'macbeth',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Ambition', 'Power', 'Guilt', 'Supernatural'],
    icon: 'crown',
    type: 'play',
  },
  {
    title: 'Romeo and Juliet',
    slug: 'romeo-and-juliet',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Love', 'Fate', 'Conflict', 'Family'],
    icon: 'heart',
    type: 'play',
  },
  {
    title: 'The Tempest',
    slug: 'the-tempest',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Power', 'Colonialism', 'Forgiveness', 'Magic'],
    icon: 'storm',
    type: 'play',
  },
  {
    title: 'Much Ado About Nothing',
    slug: 'much-ado-about-nothing',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Deception', 'Love', 'Honour', 'Gender'],
    icon: 'masks',
    type: 'play',
  },
  {
    title: 'The Merchant of Venice',
    slug: 'merchant-of-venice',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Justice', 'Mercy', 'Prejudice', 'Appearance vs Reality'],
    icon: 'scales',
    type: 'play',
  },
  {
    title: 'Othello',
    slug: 'othello',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Jealousy', 'Race', 'Manipulation', 'Honour'],
    icon: 'masks',
    type: 'play',
  },

  // 19th Century Novels
  {
    title: 'A Christmas Carol',
    slug: 'christmas-carol',
    author: 'Charles Dickens',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Redemption', 'Poverty', 'Social Responsibility', 'Christmas'],
    icon: 'candle',
    type: 'novella',
  },
  {
    title: 'Jekyll and Hyde',
    slug: 'jekyll-and-hyde',
    author: 'Robert Louis Stevenson',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Duality', 'Repression', 'Science', 'Secrecy'],
    icon: 'potion',
    type: 'novella',
  },
  {
    title: 'Frankenstein',
    slug: 'frankenstein',
    author: 'Mary Shelley',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Creation', 'Responsibility', 'Isolation', 'Ambition'],
    icon: 'bolt',
    type: 'novel',
  },
  {
    title: 'Great Expectations',
    slug: 'great-expectations',
    author: 'Charles Dickens',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Class', 'Ambition', 'Identity', 'Loyalty'],
    icon: 'star',
    type: 'novel',
  },
  {
    title: 'Jane Eyre',
    slug: 'jane-eyre',
    author: 'Charlotte Bront\u00EB',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Independence', 'Class', 'Gender', 'Love'],
    icon: 'quill',
    type: 'novel',
  },
  {
    title: 'Pride and Prejudice',
    slug: 'pride-and-prejudice',
    author: 'Jane Austen',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Love', 'Class', 'Pride', 'Marriage'],
    icon: 'quill',
    type: 'novel',
  },
  {
    title: 'The Sign of the Four',
    slug: 'sign-of-four',
    author: 'Arthur Conan Doyle',
    category: 'nineteenth',
    boards: ['Edexcel'],
    themes: ['Justice', 'Empire', 'Reason vs Emotion', 'Wealth'],
    icon: 'magnifier',
    type: 'novel',
  },
  {
    title: 'Silas Marner',
    slug: 'silas-marner',
    author: 'George Eliot',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Community', 'Redemption', 'Class', 'Isolation'],
    icon: 'candle',
    type: 'novel',
  },

  // Modern Texts
  {
    title: 'An Inspector Calls',
    slug: 'inspector-calls',
    author: 'J.B. Priestley',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Responsibility', 'Class', 'Gender', 'Morality'],
    icon: 'magnifier',
    type: 'play',
  },
  {
    title: 'Lord of the Flies',
    slug: 'lord-of-the-flies',
    author: 'William Golding',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Civilisation vs Savagery', 'Power', 'Fear', 'Innocence'],
    icon: 'fire',
    type: 'novel',
  },
  {
    title: 'Animal Farm',
    slug: 'animal-farm',
    author: 'George Orwell',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Power', 'Corruption', 'Revolution', 'Propaganda'],
    icon: 'flag',
    type: 'allegory',
  },
  {
    title: 'Blood Brothers',
    slug: 'blood-brothers',
    author: 'Willy Russell',
    category: 'modern',
    boards: ['AQA', 'Edexcel'],
    themes: ['Class', 'Nature vs Nurture', 'Superstition', 'Friendship'],
    icon: 'twins',
    type: 'play',
  },
  {
    title: 'Never Let Me Go',
    slug: 'never-let-me-go',
    author: 'Kazuo Ishiguro',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Identity', 'Mortality', 'Ethics', 'Memory'],
    icon: 'dna',
    type: 'novel',
  },
  {
    title: 'The Woman in Black',
    slug: 'woman-in-black',
    author: 'Susan Hill',
    category: 'modern',
    boards: ['Edexcel'],
    themes: ['Fear', 'Isolation', 'Revenge', 'Supernatural'],
    icon: 'ghost',
    type: 'novel',
  },
  {
    title: 'The Crucible',
    slug: 'the-crucible',
    author: 'Arthur Miller',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Hysteria', 'Reputation', 'Power', 'Integrity'],
    icon: 'fire',
    type: 'play',
  },
  {
    title: 'A View from the Bridge',
    slug: 'view-from-the-bridge',
    author: 'Arthur Miller',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Justice', 'Immigration', 'Masculinity', 'Betrayal'],
    icon: 'scales',
    type: 'play',
  },
  {
    title: 'Of Mice and Men',
    slug: 'of-mice-and-men',
    author: 'John Steinbeck',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Loneliness', 'The American Dream', 'Friendship', 'Prejudice'],
    icon: 'wheat',
    type: 'novella',
  },

  // Poetry Anthologies
  {
    title: 'Power and Conflict Poetry',
    slug: 'power-and-conflict',
    author: 'AQA Anthology',
    category: 'poetry',
    boards: ['AQA'],
    themes: ['War', 'Power', 'Identity', 'Nature'],
    icon: 'scroll',
    type: 'anthology',
  },
  {
    title: 'Love and Relationships Poetry',
    slug: 'love-and-relationships',
    author: 'AQA Anthology',
    category: 'poetry',
    boards: ['AQA'],
    themes: ['Love', 'Memory', 'Family', 'Distance'],
    icon: 'feather',
    type: 'anthology',
  },
]

// label/description are i18n keys resolved at render time via tr().
const CATEGORIES: { key: Category; labelKey: string; descKey: string }[] = [
  {
    key: 'shakespeare',
    labelKey: 'study.revnotes.hub.cat.shakespeare',
    descKey: 'study.revnotes.hub.cat.shakespeare.desc',
  },
  {
    key: 'nineteenth',
    labelKey: 'study.revnotes.hub.cat.nineteenth',
    descKey: 'study.revnotes.hub.cat.nineteenth.desc',
  },
  {
    key: 'modern',
    labelKey: 'study.revnotes.hub.cat.modern',
    descKey: 'study.revnotes.hub.cat.modern.desc',
  },
  {
    key: 'poetry',
    labelKey: 'study.revnotes.hub.cat.poetry',
    descKey: 'study.revnotes.hub.cat.poetry.desc',
  },
]

/* ─── Slug mapping ────────────────────────────────────────────── */
// The TEXTS array above uses the directory slugs (the slugs that own a
// page.tsx under /resources/revision-notes/<slug>/). The authoritative
// board data lives in @/lib/board/set-texts which uses a slightly
// different slug convention (e.g. "a-christmas-carol" vs "christmas-carol").
// Map local slug -> canonical set-texts slug so we can ask set-texts
// whether the user's board actually studies the text.
const LOCAL_SLUG_TO_SET_TEXT_SLUG: Record<string, string> = {
  'christmas-carol': 'a-christmas-carol',
  'inspector-calls': 'an-inspector-calls',
  'merchant-of-venice': 'the-merchant-of-venice',
  'sign-of-four': 'the-sign-of-four',
  'view-from-the-bridge': 'a-view-from-the-bridge',
  'much-ado': 'much-ado-about-nothing',
}

function toSetTextSlug(localSlug: string): string {
  return LOCAL_SLUG_TO_SET_TEXT_SLUG[localSlug] ?? localSlug
}

// labelKey is an i18n key resolved at render time via tr().
const TYPE_LABELS: Record<string, { labelKey: string; bg: string; text: string }> = {
  play: { labelKey: 'study.revnotes.hub.type.play', bg: 'bg-primary/10', text: 'text-primary' },
  novel: { labelKey: 'study.revnotes.hub.type.novel', bg: 'bg-primary/10', text: 'text-primary' },
  novella: {
    labelKey: 'study.revnotes.hub.type.novella',
    bg: 'bg-primary/10',
    text: 'text-primary',
  },
  allegory: {
    labelKey: 'study.revnotes.hub.type.allegory',
    bg: 'bg-primary/10',
    text: 'text-primary',
  },
  anthology: {
    labelKey: 'study.revnotes.hub.type.anthology',
    bg: 'bg-primary/10',
    text: 'text-primary',
  },
}

/* ─── Icons ──────────────────────────────────────────────────── */

function Icon({ name }: { name: string }) {
  const cls = 'h-8 w-8'
  const props = {
    className: cls,
    fill: 'none' as const,
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
  }

  switch (name) {
    case 'crown':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75l3-3 4.5 4.5 4.5-7.5 4.5 4.5 3-3V5.25L18 8.25l-4.5-4.5-4.5 7.5-4.5-4.5L2.25 9v9.75z"
          />
        </svg>
      )
    case 'heart':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      )
    case 'storm':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      )
    case 'masks':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      )
    case 'candle':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>
      )
    case 'potion':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      )
    case 'star':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      )
    case 'quill':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      )
    case 'magnifier':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      )
    case 'fire':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
        </svg>
      )
    case 'flag':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
          />
        </svg>
      )
    case 'twins':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      )
    case 'dna':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l-.94.94a1.5 1.5 0 000 2.12l.94.94m0-4l4.24 4.24m10.56-4.24l.94.94a1.5 1.5 0 010 2.12l-.94.94m0-4l-4.24 4.24M5 18.5l4.24-4.24m5.52 0L19.8 18.5"
          />
        </svg>
      )
    case 'scroll':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5"
          />
        </svg>
      )
    case 'feather':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      )
    case 'scales':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
          />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      )
  }
}

/* ─── Page ───────────────────────────────────────────────────── */

export function RevisionNotesView({ board }: { board: ExamBoard | null }) {
  const [search, setSearch] = useState('')
  const boardConfig = getBoardConfig(board)
  const tr: TFn = useT()

  // STRICT board filter driven by set-texts.ts (the source of truth).
  // If the user has chosen a board, only show texts whose set-texts
  // entry includes that board. No board => show everything.
  const boardFiltered = useMemo(() => {
    if (!board) return TEXTS
    const allowedSlugs = new Set(getSetTextsForBoard(board).map((t) => t.slug))
    return TEXTS.filter((t) => allowedSlugs.has(toSetTextSlug(t.slug)))
  }, [board])

  const filtered = useMemo(() => {
    let result = boardFiltered

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.author.toLowerCase().includes(q) ||
          t.themes.some((th) => th.toLowerCase().includes(q)),
      )
    }

    return result
  }, [search, boardFiltered])

  const categoriesWithTexts = CATEGORIES.map((cat) => ({
    ...cat,
    texts: filtered.filter((t) => t.category === cat.key),
  })).filter((cat) => cat.texts.length > 0)

  return (
    <>
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {tr('resources.rev_notes.hub.h1')}
        </h1>
        {boardConfig && (
          <div className="mt-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {tr('resources.rev_notes.hub.for_board')} {boardConfig.shortName}
            </span>
          </div>
        )}
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {tr('resources.rev_notes.hub.subtitle')}
        </p>
      </div>

      {/* Search and filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative max-w-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <svg
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={tr('resources.rev_notes.hub.search_placeholder')}
            className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-md placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* No results */}
      {categoriesWithTexts.length === 0 && (
        <div className="rounded-xl border border-border bg-card py-16 text-center">
          <svg
            className="mx-auto h-12 w-12 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-semibold text-foreground">
            {tr('resources.rev_notes.hub.no_results.h')}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {tr('resources.rev_notes.hub.no_results.sub')}
          </p>
          <button
            onClick={() => {
              setSearch('')
            }}
            className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary"
          >
            {tr('resources.rev_notes.hub.clear_filters')}
          </button>
        </div>
      )}

      {/* Text categories */}
      {categoriesWithTexts.map((cat) => (
        <section key={cat.key} className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">{tr(cat.labelKey)}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{tr(cat.descKey)}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cat.texts.map((text) => {
              const typeInfo = TYPE_LABELS[text.type]
              return (
                <Link
                  key={text.slug}
                  href={
                    text.category === 'poetry'
                      ? `/resources/poetry/${text.slug}`
                      : `/resources/revision-notes/${text.slug}`
                  }
                  className="group relative flex flex-col rounded-xl bg-card border border-border/50 hover:border-primary/25 shadow-sm transition hover:shadow-md"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-3">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold leading-tight text-foreground">
                        {text.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{text.author}</p>
                    </div>
                    <div className="shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                      <Icon name={text.icon} />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col px-5 pb-5">
                    {/* Type badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${typeInfo.bg} ${typeInfo.text}`}
                      >
                        {tr(typeInfo.labelKey)}
                      </span>
                    </div>

                    {/* Themes */}
                    <div className="flex flex-wrap gap-1.5">
                      {text.themes.map((theme) => (
                        <span
                          key={theme}
                          className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                        {tr('resources.rev_notes.hub.view_guide')}
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
              )
            })}
          </div>
        </section>
      ))}

      {/* Study tip box */}
      <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-bold text-foreground">{tr('study.revnotes.hub.how_to_use')}</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Do not just read passively.</strong> Test yourself on quotes and themes after
              each section.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Link quotes to themes.</strong> Every quotation should connect to at least two
              themes for maximum marks.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Learn context actively.</strong> Do not just memorise facts -- explain how
              context shapes the writer&apos;s choices.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Practise timed essays.</strong> Use the essay planning templates in each guide
              to structure your responses.
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}
