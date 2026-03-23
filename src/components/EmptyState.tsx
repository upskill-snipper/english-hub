import Link from "next/link";

/* ─── Types ──────────────────────────────────────────────────── */

interface EmptyStateAction {
  label: string;
  href: string;
}

interface EmptyStateProps {
  /** Main heading. */
  title: string;
  /** Descriptive message. */
  description?: string;
  /** Optional custom icon. Falls back to a default empty-box icon. */
  icon?: React.ReactNode;
  /** Optional primary action button. */
  action?: EmptyStateAction;
  /** Additional CSS classes for the container. */
  className?: string;
}

/* ─── Default icon ───────────────────────────────────────────── */

function DefaultIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-gray-400"
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
  );
}

/* ─── Component ──────────────────────────────────────────────── */

export function EmptyState({
  title,
  description,
  icon,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-6 py-12 text-center ${className}`}
    >
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
        {icon ?? <DefaultIcon />}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      {description && (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
          {description}
        </p>
      )}

      {/* Action */}
      {action && (
        <Link
          href={action.href}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#1A5276] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1A5276]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] focus-visible:ring-offset-2 transition-colors"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
