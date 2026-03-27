'use client';

import React from 'react';
import Link from 'next/link';

/* ─── Types ───────────────────────────────────────────────────── */

type ResourceTypeBadge = 'Study Guide' | 'Practice' | 'Notes';
type ExamBoardLabel = 'AQA' | 'Edexcel' | 'Cambridge' | 'OCR';
type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

interface ResourceCardData {
  id: string;
  title: string;
  description?: string;
  type: ResourceTypeBadge;
  examBoard: ExamBoardLabel;
  subject: 'English Language' | 'English Literature';
  difficulty: DifficultyLevel;
  href: string;
  tag?: string;
}

interface ResourceCardProps {
  resource: ResourceCardData;
  className?: string;
}

/* ─── Constants ───────────────────────────────────────────────── */

const TYPE_STYLES: Record<ResourceTypeBadge, { bg: string; text: string; ring: string }> = {
  'Study Guide': {
    bg: 'bg-accent-50',
    text: 'text-accent-700',
    ring: 'ring-accent-200',
  },
  Practice: {
    bg: 'bg-success-50',
    text: 'text-success-700',
    ring: 'ring-success-200',
  },
  Notes: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    ring: 'ring-yellow-200',
  },
};

const BOARD_COLORS: Record<ExamBoardLabel, string> = {
  AQA: 'bg-accent-50 text-accent-700',
  Edexcel: 'bg-success-50 text-success-700',
  Cambridge: 'bg-warn-50 text-warn-700',
  OCR: 'bg-purple-50 text-purple-700',
};

/* ─── Icons ───────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

/* ─── Difficulty dots ─────────────────────────────────────────── */

function DifficultyIndicator({ level }: { level: DifficultyLevel }) {
  const labels = ['Beginner', 'Easy', 'Intermediate', 'Challenging', 'Advanced'];

  return (
    <div className="flex items-center gap-1.5" title={labels[level - 1]}>
      <span className="sr-only">
        Difficulty: {labels[level - 1]} ({level} of 5)
      </span>
      {[1, 2, 3, 4, 5].map((dot) => (
        <span
          key={dot}
          className={`inline-block h-1.5 w-1.5 rounded-full transition-colors ${
            dot <= level ? 'bg-primary-500' : 'bg-gray-200'
          }`}
          aria-hidden="true"
        />
      ))}
      <span className="ml-1 text-xs text-gray-500" aria-hidden="true">
        {labels[level - 1]}
      </span>
    </div>
  );
}

/* ─── ResourceCard component ──────────────────────────────────── */

function ResourceCard({ resource, className = '' }: ResourceCardProps) {
  const typeStyle = TYPE_STYLES[resource.type];
  const boardColor = BOARD_COLORS[resource.examBoard];

  return (
    <Link
      href={resource.href}
      className={[
        'group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm',
        'transition-all duration-300 ease-out',
        'hover:shadow-md hover:border-primary-200 hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Top row: type badge + exam board */}
      <div className="flex items-start justify-between gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${typeStyle.bg} ${typeStyle.text} ${typeStyle.ring}`}
        >
          {resource.type}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${boardColor}`}
        >
          {resource.examBoard}
        </span>
      </div>

      {/* Tag ribbon */}
      {resource.tag && (
        <span className="mt-3 inline-flex self-start items-center rounded-md bg-primary-500/10 px-2 py-0.5 text-xs font-semibold text-primary-700">
          {resource.tag}
        </span>
      )}

      {/* Title */}
      <h3
        className={`${resource.tag ? 'mt-2' : 'mt-4'} text-base font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-primary-600`}
      >
        {resource.title}
      </h3>

      {/* Description */}
      {resource.description && (
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {resource.description}
        </p>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom row: subject, difficulty, CTA */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">{resource.subject}</span>
          <DifficultyIndicator level={resource.difficulty} />
        </div>

        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-500 transition-colors duration-200 group-hover:text-primary-600">
          Start revising <ArrowRight />
        </span>
      </div>
    </Link>
  );
}

/* ─── Grid wrapper ────────────────────────────────────────────── */

interface ResourceGridProps {
  children: React.ReactNode;
  className?: string;
}

function ResourceGrid({ children, className = '' }: ResourceGridProps) {
  return (
    <div
      className={[
        'grid gap-5 sm:grid-cols-2 lg:grid-cols-3',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}

export {
  ResourceCard,
  ResourceGrid,
  type ResourceCardProps,
  type ResourceCardData,
  type ResourceTypeBadge,
  type ExamBoardLabel,
  type DifficultyLevel,
};
