'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

/* ─── Types ───────────────────────────────────────────────────── */

type Subject = 'english-language' | 'english-literature' | null;
type ExamBoard = 'aqa' | 'edexcel' | 'caie' | 'ocr';
type ResourceType = 'study-guide' | 'practice' | 'notes' | 'all';
type Difficulty = 'foundation' | 'higher' | null;

interface ResourceFilters {
  subject: Subject;
  /** @deprecated Exam board filtering removed — kept for type compatibility */
  examBoards: ExamBoard[];
  topic: string;
  type: ResourceType;
  difficulty: Difficulty;
  search: string;
}

interface ResourceFilterProps {
  filters: ResourceFilters;
  onChange: (filters: ResourceFilters) => void;
  className?: string;
}

/* ─── Constants ───────────────────────────────────────────────── */

const SUBJECTS: { value: Subject; label: string }[] = [
  { value: 'english-language', label: 'English Language' },
  { value: 'english-literature', label: 'English Literature' },
];

const RESOURCE_TYPES: { value: ResourceType; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'study-guide', label: 'Study Guides' },
  { value: 'practice', label: 'Practice' },
  { value: 'notes', label: 'Notes' },
];

const LANGUAGE_TOPICS = [
  'Reading Comprehension',
  'Creative Writing',
  'Transactional Writing',
  'Language Techniques',
  'Comparing Perspectives',
  'Spoken Language',
];

const LITERATURE_TOPICS = [
  'Shakespeare',
  'Poetry Anthology',
  'Modern Prose',
  '19th Century Novel',
  'Unseen Poetry',
  'Drama',
];

/* ─── Default filters ─────────────────────────────────────────── */

const DEFAULT_FILTERS: ResourceFilters = {
  subject: null,
  examBoards: [],
  topic: '',
  type: 'all',
  difficulty: null,
  search: '',
};

/* ─── Icons ───────────────────────────────────────────────────── */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-4 w-4'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-4 w-4'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
      />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-4 w-4'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-4 w-4'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

/* ─── Pill button ─────────────────────────────────────────────── */

function Pill({
  selected,
  onClick,
  children,
  size = 'md',
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md';
}) {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-sm';

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-flex items-center rounded-full font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        sizeClasses,
        selected
          ? 'bg-primary text-white shadow-sm'
          : 'border border-border bg-card text-primary hover:border-primary/30 hover:bg-primary/10',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}

/* ─── Topic dropdown ──────────────────────────────────────────── */

function TopicDropdown({
  subject,
  value,
  onChange,
}: {
  subject: Subject;
  value: string;
  onChange: (topic: string) => void;
}) {
  const topics = subject === 'english-literature' ? LITERATURE_TOPICS : LANGUAGE_TOPICS;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={[
          'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          value
            ? 'border-primary/30 bg-primary/10 text-primary'
            : 'border-border bg-card text-muted-foreground hover:border-primary/30 hover:bg-primary/10',
        ].join(' ')}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {value || 'Topic'}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-border bg-card py-1 shadow-lg"
          role="listbox"
        >
          <button
            type="button"
            onClick={() => {
              onChange('');
              setOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              !value ? 'bg-primary/10 font-medium text-primary' : 'text-muted-foreground hover:bg-muted'
            }`}
            role="option"
            aria-selected={!value}
          >
            All Topics
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => {
                onChange(topic);
                setOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                value === topic
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
              role="option"
              aria-selected={value === topic}
            >
              {topic}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Active filter count ─────────────────────────────────────── */

function countActiveFilters(filters: ResourceFilters): number {
  let count = 0;
  if (filters.subject) count++;
  if (filters.topic) count++;
  if (filters.type !== 'all') count++;
  if (filters.difficulty) count++;
  if (filters.search) count++;
  return count;
}

/* ─── ResourceFilter component ────────────────────────────────── */

function ResourceFilter({ filters, onChange, className = '' }: ResourceFilterProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const activeCount = countActiveFilters(filters);

  const updateFilter = useCallback(
    <K extends keyof ResourceFilters>(key: K, value: ResourceFilters[K]) => {
      onChange({ ...filters, [key]: value });
    },
    [filters, onChange],
  );

  const clearAll = useCallback(() => {
    onChange(DEFAULT_FILTERS);
  }, [onChange]);

  // Lock body scroll when mobile panel is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [mobileOpen]);

  /* ── Shared filter controls ─────────────────────────────────── */
  const filterControls = (mobile: boolean) => (
    <>
      {/* Subject */}
      <div className={mobile ? '' : 'flex items-center gap-2'}>
        {mobile && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Subject
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map((s) => (
            <Pill
              key={s.value}
              selected={filters.subject === s.value}
              onClick={() =>
                updateFilter('subject', filters.subject === s.value ? null : s.value)
              }
            >
              {s.label}
            </Pill>
          ))}
        </div>
      </div>

      {/* Topic */}
      <div className={mobile ? 'mt-5' : 'flex items-center gap-2'}>
        {mobile && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Topic
          </p>
        )}
        {!mobile && <div className="h-6 w-px bg-muted" aria-hidden="true" />}
        <TopicDropdown
          subject={filters.subject}
          value={filters.topic}
          onChange={(t) => updateFilter('topic', t)}
        />
      </div>

      {/* Resource type */}
      <div className={mobile ? 'mt-5' : 'flex items-center gap-2'}>
        {mobile && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Resource Type
          </p>
        )}
        {!mobile && <div className="h-6 w-px bg-muted" aria-hidden="true" />}
        <div className="flex flex-wrap gap-2">
          {RESOURCE_TYPES.map((t) => (
            <Pill
              key={t.value}
              selected={filters.type === t.value}
              onClick={() => updateFilter('type', t.value)}
              size="sm"
            >
              {t.label}
            </Pill>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div className={mobile ? 'mt-5' : 'flex items-center gap-2'}>
        {mobile && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Difficulty
          </p>
        )}
        {!mobile && <div className="h-6 w-px bg-muted" aria-hidden="true" />}
        <div className="flex gap-2">
          {(['foundation', 'higher'] as const).map((d) => (
            <Pill
              key={d}
              selected={filters.difficulty === d}
              onClick={() =>
                updateFilter('difficulty', filters.difficulty === d ? null : d)
              }
              size="sm"
            >
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </Pill>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className={className}>
      {/* ── Desktop filter bar ────────────────────────────────────── */}
      <div className="hidden md:block">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          {/* Search row */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-xs">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="search"
                placeholder="Search resources..."
                value={filters.search}
                onChange={(e) => updateFilter('search', e.target.value)}
                className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {activeCount > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <CloseIcon className="h-3.5 w-3.5" />
                Clear filters
                <span className="ml-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {activeCount}
                </span>
              </button>
            )}
          </div>

          {/* Filter pills row */}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {filterControls(false)}
          </div>
        </div>
      </div>

      {/* ── Mobile filter trigger ─────────────────────────────────── */}
      <div className="md:hidden">
        {/* Search bar always visible */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="search"
            placeholder="Search resources..."
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            className="w-full rounded-xl border border-border bg-card py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <FilterIcon className="h-4 w-4" />
          Filters
          {activeCount > 0 && (
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
              {activeCount}
            </span>
          )}
        </button>
      </div>

      {/* ── Mobile bottom sheet ───────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            ref={panelRef}
            style={{ animation: 'slideUp 0.3s ease-out' }}
            className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-card shadow-2xl"
            role="dialog"
            aria-label="Filter options"
          >
            {/* Handle */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card px-5 py-4">
              <h2 className="text-lg font-bold text-foreground">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close filters"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Filter content */}
            <div className="px-5 py-5">{filterControls(true)}</div>

            {/* Bottom actions */}
            <div className="sticky bottom-0 flex items-center gap-3 border-t border-border bg-card px-5 py-4">
              <button
                type="button"
                onClick={() => {
                  clearAll();
                  setMobileOpen(false);
                }}
                className="flex-1 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Clear All
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export {
  ResourceFilter,
  DEFAULT_FILTERS,
  type ResourceFilters,
  type ResourceFilterProps,
  type Subject,
  type ExamBoard,
  type ResourceType,
  type Difficulty,
};
