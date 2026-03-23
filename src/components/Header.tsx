"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Types ──────────────────────────────────────────────────── */

type UserRole = "student" | "teacher" | "parent";

interface HeaderProps {
  /** Pass user session data when available. Null = logged out. */
  user?: {
    name?: string | null;
    email?: string | null;
    role?: UserRole | null;
    examBoard?: string | null;
  } | null;
  /** Callback for logout action */
  onLogout?: () => void;
}

/* ─── Navigation items by role ───────────────────────────────── */

interface NavLink {
  href: string;
  label: string;
}

const PUBLIC_NAV_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/resources", label: "Resources" },
  { href: "/legal/terms", label: "Legal" },
];

function getNavLinks(role?: UserRole | null): NavLink[] {
  if (!role) return PUBLIC_NAV_LINKS;

  switch (role) {
    case "student":
      return [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/resources", label: "Resources" },
        { href: "/pricing", label: "Pricing" },
      ];
    case "teacher":
      return [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/resources", label: "Resources" },
        { href: "/dashboard/classes", label: "My Classes" },
        { href: "/pricing", label: "Pricing" },
      ];
    case "parent":
      return [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/dashboard/progress", label: "Progress" },
        { href: "/resources", label: "Resources" },
      ];
    default:
      return PUBLIC_NAV_LINKS;
  }
}

const USER_MENU_LINKS = [
  { href: "/dashboard/settings", label: "Settings" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/dashboard/subscription", label: "Subscription" },
] as const;

/* ─── Icons ──────────────────────────────────────────────────── */

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

/* ─── Safeguarding Banner ────────────────────────────────────── */

function SafeguardingBanner() {
  return (
    <div className="bg-[#1A5276] px-4 py-1.5 text-center text-xs text-white sm:text-sm">
      <span className="mr-1">Need help?</span>
      <Link
        href="/legal/safeguarding"
        className="font-medium underline underline-offset-2 hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
      >
        Safeguarding &amp; support resources
      </Link>
    </div>
  );
}

/* ─── Exam Board Badge ───────────────────────────────────────── */

function ExamBoardBadge({ examBoard }: { examBoard: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#2E86C1]/15 px-2.5 py-0.5 text-xs font-semibold text-[#1A5276]">
      {examBoard}
    </span>
  );
}

/* ─── Header ─────────────────────────────────────────────────── */

export function Header({ user, onLogout }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = getNavLinks(user?.role);

  // Close user menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header>
      <SafeguardingBanner />

      <nav
        className="border-b border-[#1A5276]/10 bg-white"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* ── Logo + exam board badge ────────────────────── */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-[#1A5276] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] rounded-sm"
              aria-label="The English Hub - Home"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1A5276] text-sm font-bold text-white"
                aria-hidden="true"
              >
                EH
              </span>
              <span className="hidden sm:inline">The English Hub</span>
            </Link>

            {user?.examBoard && (
              <ExamBoardBadge examBoard={user.examBoard} />
            )}
          </div>

          {/* ── Desktop nav ───────────────────────────────── */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] ${
                  isActive(link.href)
                    ? "bg-[#2E86C1]/10 text-[#1A5276] font-semibold"
                    : "text-[#1A5276]/70 hover:bg-[#2E86C1]/5 hover:text-[#1A5276]"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Right side: user menu / login ─────────────── */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen((o) => !o)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#1A5276]/70 hover:bg-[#2E86C1]/5 hover:text-[#1A5276] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276]"
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                  aria-label="User menu"
                >
                  <UserIcon />
                  <span className="hidden sm:inline">
                    {user.name ?? user.email ?? "Account"}
                  </span>
                </button>

                {/* Dropdown */}
                {userMenuOpen && (
                  <div
                    className="absolute right-0 z-40 mt-1 w-48 rounded-lg border border-[#1A5276]/10 bg-white py-1 shadow-lg"
                    role="menu"
                    aria-label="User menu"
                  >
                    {USER_MENU_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-[#1A5276]/80 hover:bg-[#2E86C1]/5 hover:text-[#1A5276] focus-visible:outline-none focus-visible:bg-[#2E86C1]/5"
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="my-1 border-t border-[#1A5276]/10" />
                    <button
                      onClick={onLogout}
                      className="block w-full px-4 py-2 text-left text-sm text-[#1A5276]/80 hover:bg-[#2E86C1]/5 hover:text-[#1A5276] focus-visible:outline-none focus-visible:bg-[#2E86C1]/5"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="rounded-lg bg-[#1A5276] px-4 py-2 text-sm font-medium text-white hover:bg-[#2E86C1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] focus-visible:ring-offset-2"
              >
                Sign In
              </Link>
            )}

            {/* ── Mobile menu toggle ──────────────────────── */}
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="rounded-lg p-2 text-[#1A5276]/70 hover:bg-[#2E86C1]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* ── Mobile nav ──────────────────────────────────── */}
        {mobileMenuOpen && (
          <div className="border-t border-[#1A5276]/10 bg-white px-4 pb-4 pt-2 md:hidden">
            {/* Exam board badge in mobile */}
            {user?.examBoard && (
              <div className="mb-2 px-3 py-1">
                <ExamBoardBadge examBoard={user.examBoard} />
              </div>
            )}

            <ul className="space-y-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] ${
                      isActive(link.href)
                        ? "bg-[#2E86C1]/10 text-[#1A5276] font-semibold"
                        : "text-[#1A5276]/70 hover:bg-[#2E86C1]/5 hover:text-[#1A5276]"
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile user links (logged in only) */}
            {user && (
              <>
                <div className="my-2 border-t border-[#1A5276]/10" />
                <ul className="space-y-1" role="list">
                  {USER_MENU_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm text-[#1A5276]/70 hover:bg-[#2E86C1]/5 hover:text-[#1A5276] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={onLogout}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-[#1A5276]/70 hover:bg-[#2E86C1]/5 hover:text-[#1A5276] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276]"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
