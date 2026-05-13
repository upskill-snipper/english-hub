import Link from 'next/link'
import { t } from '@/lib/i18n/t'

/* ─── Types ──────────────────────────────────────────────────── */

interface EmptyStateAction {
  /**
   * Pre-resolved label. Optional when `labelKey` is provided. When both are
   * present, `label` wins so existing call sites passing translated strings
   * continue to behave identically.
   */
  label?: string
  /** Dictionary key for the action label (e.g. `empty.action.browse`). */
  labelKey?: string
  href: string
}

interface EmptyStateProps {
  /** Pre-resolved main heading. Optional when `titleKey` is given. */
  title?: string
  /** Dictionary key for the heading (e.g. `empty.default.title`). */
  titleKey?: string
  /** Pre-resolved descriptive message. */
  description?: string
  /** Dictionary key for the description (e.g. `empty.default.description`). */
  descriptionKey?: string
  /** Optional custom icon. Falls back to a default empty-box icon. */
  icon?: React.ReactNode
  /** Optional primary action button. */
  action?: EmptyStateAction
  /** Additional CSS classes for the container. */
  className?: string
}

/* ─── Default icon ───────────────────────────────────────────── */

function DefaultIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-muted-foreground"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    </svg>
  )
}

/* ─── Component ──────────────────────────────────────────────── */

export async function EmptyState({
  title,
  titleKey,
  description,
  descriptionKey,
  icon,
  action,
  className = '',
}: EmptyStateProps) {
  // Resolve i18n-keyed copy on the server. Pre-resolved props win so legacy
  // call sites (passing fully translated strings) keep working unchanged.
  const resolvedTitle = title ?? (titleKey ? await t(titleKey) : await t('empty.default.title'))
  const resolvedDescription = description ?? (descriptionKey ? await t(descriptionKey) : undefined)
  const resolvedActionLabel = action
    ? (action.label ??
      (action.labelKey ? await t(action.labelKey) : await t('empty.default.action')))
    : undefined

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background px-6 py-12 text-center ${className}`}
    >
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        {icon ?? <DefaultIcon />}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-base font-semibold text-foreground">{resolvedTitle}</h3>

      {/* Description */}
      {resolvedDescription && (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {resolvedDescription}
        </p>
      )}

      {/* Action */}
      {action && resolvedActionLabel && (
        <Link
          href={action.href}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
        >
          {resolvedActionLabel}
        </Link>
      )}
    </div>
  )
}
