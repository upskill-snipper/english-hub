# THE ENGLISH HUB — QA/QC MASTER LOG

**Site:** https://theenglishhub.app
**Repo:** `D:/Coding/english-hub/`
**Entity:** Upskill Energy Limited (Co. **16511479** — confirmed with owner 2026-04-19; original mission-brief number 16254656 was incorrect)
**Audience:** Minors (14–16) + Teachers + Schools
**Branch:** main @ 427f69f
**Run start:** 2026-04-19

---

## METHODOLOGY NOTE (from QA Director)

The original mission spec called for 50 agents × 5 cycles with many tasks
that would involve attacking the live production platform (XSS payloads,
brute-force auth probing, IDOR testing, self-harm prompt-injection of the
live AI). I have **deliberately not run those tasks** against production
because:

1. Real users (including minors) are on the platform right now
2. Injection/brute-force probes pollute logs, trigger WAF/Sentry/Stripe
   fraud flags, and contaminate safeguarding data
3. No staging environment was provided in the manifest
4. Testing-on-prod against a platform serving children is not defensible
   under the Computer Misuse Act even with owner consent, if it degrades
   service to third parties

What is being run instead: a **genuine, evidence-based audit** consisting of

- **Static code audit** of the actual repo (RLS policies, Stripe handlers,
  auth flow, API authz, XSS sinks, AI guardrails, env/secret handling)
- **Compliance document audit** (Privacy Policy, Cookie Policy, Terms,
  Refund, Accessibility statement, against ICO Children's Code + UK GDPR)
- **Dependency & infra audit** (`npm audit`, Next.js version, Vercel/Supabase
  config, rate limiting, Sentry)
- **UX / copy / SEO / a11y static audit** of JSX/TSX and metadata
- **Read-only live-site header audit** (curl, no probes, no injection)

Findings from these produce actionable P0/P1/P2/P3 items with file:line
references. The user decides what to fix and whether to grant staging
access for the destructive tests that remain ungated.

Count of focused audits: 5 parallel agents per wave. This is the right
shape for the work, not 50.

---

## CYCLE 1 — WAVE A CONSOLIDATED FINDINGS · 2026-04-19

### Summary counts

| Audit | P0 | P1 | P2 | P3 |
|---|---|---|---|---|
| Security code | 2 | 5 | 5 | 4 |
| Compliance & legal | 5 | 6 | 6 | — |
| Dependency & infra | 2 | 6 | 7 | 4 |
| UX / SEO / a11y static | 2 | 7 | 9 | 6 |
| Live-site headers (prod) | 0 | 2 | 5 | 8 |
| **TOTAL** | **11** | **26** | **32** | **22** |

### PRIORITISED FIX QUEUE

---

#### 🚨 P0 — SHIP-BLOCKERS / REGULATORY / ACTIVE EXPLOIT PATHS

Listed in fix-priority order (not audit order):

**P0-SEC-1 · Unauthenticated parental-notification endpoint with HTML injection**
- `src/app/api/auth/parent-notify/route.ts:27-148`
- No auth check. Body trusted. `studentName` interpolated unescaped into HTML email.
- Impact: Anyone can email arbitrary parents from `noreply@theenglishhub.app` with attacker-controlled HTML. Safeguarding + phishing pivot + brand damage. In-memory rate limit is broken in Vercel serverless (per-instance map).
- Fix: auth + ownership check; switch to Upstash; HTML-escape or use template library.

**P0-SEC-2 · Unauthenticated AI endpoints burning Anthropic credits**
- `src/app/api/toolkit/generate-notes/route.ts:121-189`
- `src/app/api/toolkit/generate-test/route.ts`
- `src/app/api/generate-pptx/route.ts:274-303`
- No `auth.getUser()`, no subscription check. Prompts lack guardrails present on `/api/mark`. `topic` / `weakAreas` interpolated raw = prompt injection exfiltration.
- Impact: financial (uncapped Claude spend), commercial (paid-feature free-for-all), prompt-injection exposure to minors.
- Fix: auth + `hasActiveSubscription` + Upstash per-user limit + content-safety wrapper.

**P0-COMM-1 · Teacher dashboard is hardcoded mock data**
- `src/app/dashboard/teacher/page.tsx:5-79`
- Paying teachers at £12.99/mo see hardcoded students "Emma Thompson / Oliver Chen / Amira Patel". No `/api/teacher/*` implementation.
- Impact: CMA misleading-practice exposure; customer fraud risk. If known-unshipped, should be gated behind "Coming soon" banner, not delivered to paid users.
- Fix: wire real APIs or hide feature behind a release flag + refund any teachers who paid for it.

**P0-COMM-2 · Essay submission is a setTimeout stub**
- `src/app/dashboard/essay/new/page.tsx:66-79`
- Comment: "Stub: POST /api/essays — currently simulates submission". Redirects to hardcoded `/dashboard/essay/1`.
- Impact: if this is the canonical student entry, "AI Essay Marking" marketing claim is undelivered. Other routes (`/api/mark`, `/api/essay-feedback`) exist and are well-built — this may be a dead entrypoint. **Needs owner confirmation.**
- Fix: either wire to real endpoint or remove.

**P0-COMP-1 · Live `[DPO_NAME]` / `[DPO_EMAIL]` placeholders on privacy policy**
- `src/app/privacy-policy/page.tsx:637,641,642`
- Literal placeholder strings rendered to users on production right now.
- Impact: UK GDPR Art. 13(1)(b) breach — users cannot identify/contact DPO.
- Fix: replace with real DPO details or remove the card and rely on `info@upskillenergy.com`.

**P0-COMP-2 · Company number inconsistency — NEEDS OWNER CONFIRMATION**
- Code shows `16511479` (`src/components/layout/footer.tsx:264`, `src/app/terms/page.tsx:29`)
- Original mission manifest said `16254656`
- Impact: if code is wrong, every legal page misstates the contracting party (voidable contracts, Companies Act s.82).
- Fix: confirm correct number at Companies House and correct wherever stated.

**P0-COMP-3 · Vercel Analytics + SpeedInsights + Rewardful fire pre-consent**
- `src/app/layout.tsx:15-16, 74-80, 96-97`
- `<Analytics />`, `<SpeedInsights />`, and `https://r.wdfl.co/rw.js` mounted unconditionally with `afterInteractive`.
- Impact: PECR reg. 6 breach — identifiers set/read before consent. Rewardful also missing from Privacy Policy processor list.
- Fix: gate all three behind existing `hasAnalyticsConsent()`; add to Cookie Policy + Privacy Policy §5.

**P0-COMP-4 · VAT treatment missing on pricing page**
- `src/app/pricing/page.tsx:303-322, 397-417, 500-507`
- All prices shown without "inc VAT" / "ex VAT" label.
- Impact: Price Marking Order 2004 / CRA 2015 — B2C prices must be clearly indicated.
- Fix: label each price block. (Terms §6 says "inc VAT where applicable" — bring to pricing UX.)

**P0-INFRA-1 · Next.js 14.2.35 high-severity DoS CVE (GHSA-h25m-26qc-wcjf)**
- Fix release is Next 15.0.8+ (semver major).
- Impact: external DoS against production; also `@anthropic-ai/sdk@0.80.0` has a moderate sandbox-escape (fix 0.90, also major) — batch these together.
- Fix: plan Next 14→15 migration + SDK bump. Material work; not a one-line patch.

**P0-CC-1 · Rewardful + Vercel Analytics + SpeedInsights load without child-aware consent**
(Partly overlaps P0-COMP-3.) ICO Children's Code Standard 15 (third-party tools) — under-16 defaults should suppress these tools entirely, not just gate behind generic consent.
- Fix: combine consent gate with `getChildProfileDefaults()` check.

---

#### ⚠️ P1 — HIGH RISK (26 items)

**Security**
- P1-SEC-3 · `certificates` table has `FOR SELECT USING (TRUE)` — returns `user_id`, `student_name`, `score`, `assessment_attempt_id` to anyone with the UUID (`supabase/migrations/001_initial_schema.sql:135`)
- P1-SEC-4 · `school_join_codes` selectable by any authenticated user (`supabase/migrations/004_fix_school_rls.sql:322-325`)
- P1-SEC-5 · Login leaks account existence via Supabase error (`src/app/auth/login/page.tsx:82-92`)
- P1-SEC-6 · Registration leaks account existence (`src/app/auth/register/page.tsx:147-151`)
- P1-SEC-7 · CSP allows `script-src 'unsafe-inline'` with no nonce; no COOP/CORP (`next.config.js:79`)

**Infra**
- P1-INFRA-2 · CI workflow uses `npm audit || true` — findings don't fail CI
- P1-INFRA-3 · Deploy workflow has no `needs:` on CI — merge to main can deploy with failing CI
- P1-INFRA-4 · `poweredByHeader: false` not set (leaks `X-Powered-By: Next.js`)
- P1-INFRA-5 · `reactStrictMode` not explicitly enabled
- P1-INFRA-6 · No `sentry.edge.config.ts` — middleware errors (edge runtime) unreported
- P1-INFRA-7 · `amondnet/vercel-action@v25` pinned by tag not SHA — supply-chain risk

**Compliance**
- P1-COMP-5 · Minimum age floor inconsistent: Terms says 14, Privacy says 13, register enforces 13
- P1-COMP-6 · Missing processors in Privacy Policy: Google Analytics, Rewardful, Vercel Analytics, Vercel SpeedInsights
- P1-COMP-7 · Trial length inconsistent: Terms 30 days, pricing "3 free uses", register "first month free"
- P1-COMP-8 · Privacy Policy has no breach-notification section (Art. 34)
- P1-COMP-9 · Soft-delete orphan risk — need to verify `/api/cron/data-retention` hard-deletes after grace
- P1-COMP-10 · Accessibility statement missing explicit alt-format offer (Equality Act 2010)

**UX / SEO**
- P1-UX-8 · Invalid Tailwind class `bg-blue-950/200/10` (`src/app/dashboard/page.tsx:443`)
- P1-UX-9 · `src/app/auth/register/layout.tsx` missing description + OG tags
- P1-UX-10 · Sitemap lists `/dashboard/papers`, `/auth/*`, `/demo/*` while robots.txt disallows those paths
- P1-UX-11 · "Limited to 10 Schools" urgency repeated 10+ times with no live counter (CPUT Regs 2008 risk)
- P1-UX-12 · Teacher dashboard status uses colour-only green/amber (WCAG 1.4.1)
- P1-UX-13 · Flashcard `<div onClick>` with no keyboard handler (WCAG 2.1.1)

**Live site**
- P1-LIVE-1 · CSP `'unsafe-inline'` (same root as P1-SEC-7; confirms prod)
- P1-LIVE-2 · `Cross-Origin-Opener-Policy` absent on prod (site has Stripe popups — should be `same-origin-allow-popups`)

---

#### 🔧 P2 — MEDIUM (32 items)

Highlights (full list in agent reports):
- P2-SEC-1 · AI output rendered via `dangerouslySetInnerHTML` in `toolkit/revision-builder/page.tsx:313`, `toolkit/my-materials/page.tsx:188` — stored XSS if Claude emits HTML (prompt injection from P0-SEC-2 widens this)
- P2-SEC-2 · `parental_consents` migration ordering — `20260322_new_features.sql` recreates a permissive `FOR ALL USING (true)` policy after `004_fix_school_rls.sql` drops it (file sort order)
- P2-SEC-3 · CSRF Origin check passes when Origin header absent (`src/middleware.ts:131-142`)
- P2-SEC-5 · `webhook_events` idempotency table not found in committed migrations (referenced by Stripe webhook handler)
- P2-INFRA · AuditLog stores raw IP + free-form JSON `details` — PII leakage risk
- P2-INFRA · Soft-delete `deletedAt` on minors' data — verify hard-erasure completes
- P2-INFRA · No secret-scan pre-commit hook
- P2-INFRA · ESLint 8.57 EOL, `eslint-config-next` 14 behind
- P2-COMP · Hardcoded "Last updated: March 2026" on all legal pages — no versioning system
- P2-UX · Exam board naming inconsistency ("Edexcel" / "Pearson Edexcel" / "Edexcel (Pearson)" / "WJEC Eduqas" / "WJEC/Eduqas" / "Cambridge IGCSE" / "Cambridge (CAIE)" / "IGCSE/CAIE")
- P2-UX · `/for-schools` "Interactive Demo" label over static tile grid — mismatch with mission spec's "5-slide carousel"
- P2-UX · Book-a-call CTAs all link `/contact` not `/for-schools/contact` (exists, better copy)
- P2-UX · Annual saving shown as % only, not £
- P2-UX · Password strength requirements not communicated pre-submit
- P2-UX · Cookie banner lacks focus management on open (aria-modal set but no explicit trap)
- P2-LIVE · CSP missing `frame-ancestors`, `form-action` directives
- P2-LIVE · `Cross-Origin-Resource-Policy` absent
- P2-LIVE · Marketing pages served `Cache-Control: no-store` — defeats edge CDN
- P2-LIVE · Sitemap/robots mismatches (same root as P1-UX-10)

---

#### 📝 P3 — LOW / HYGIENE (22 items)

Highlights:
- `X-Powered-By: Next.js` leak on prod
- `X-Matched-Path` debug header exposed
- `upgrade-insecure-requests`, CSP `report-uri` not set
- `Permissions-Policy` thin (doesn't explicitly deny payment/usb/etc.)
- `@types/node@25` while `engines.node: >=20`
- Unwired notification badges / AI study-plan placeholders in `SchoolSidebar.tsx:114`, `ReportGenerator.tsx:484`
- Duplicate WJEC sitemap entries
- Twitter card tags missing on some marketing layouts
- Several `h-9` inputs below WCAG 2.2 AAA 44×44 tap target
- `.env.local` on disk (gitignored; rotate when contractors rotate)

---

### QUESTIONS FOR OWNER (block fix phase)

1. **Company number**: is it `16511479` (as deployed) or `16254656` (as stated in mission brief)?
2. **Teacher dashboard mock data**: is the `/dashboard/teacher` route intended to be behind a "coming soon" flag, or was wiring forgotten? Have any teachers actually paid?
3. **Essay submission stub**: is `/dashboard/essay/new` a dead entry point, or is this the live student submission flow? (Real `/api/mark` and `/api/essay-feedback` exist and work — is the student flow going through those?)
4. **VAT registration**: is Upskill Energy VAT-registered? Prices inc/ex answer depends.
5. **"Limited to 10 Schools" claim**: is this commercially enforced (real cap) or aspirational copy? If aspirational, CPUT risk.
6. **Staging environment**: URL + credentials for destructive tests (auth enum, RBAC probing, XSS live, AI prompt injection)?
7. **Next 14 → 15 upgrade appetite**: the DoS CVE fix requires a semver-major migration. OK to plan?
8. **DPO**: who is it? (Or drop the card.)

### AUDIT GAPS (not tested this cycle)

- Authenticated-route behaviour (RBAC, auth cookies, session handling in flight)
- AI prompt-injection resistance against live endpoints
- Live RLS policy state (migrations-committed vs pg_policies actual)
- `webhook_events`, `consent_tokens` schemas (referenced but not found in committed migrations)
- Real screen-reader traversal
- Actual rendered contrast ratios
- Core Web Vitals under real mobile conditions
- Every rate-limited endpoint (sampled 12 of ~100)
- CI end-to-end execution
- Prisma RLS (by design — accessed via `DATABASE_URL`)

### CYCLE 1 WAVE A STATUS

**Complete.** Wave B (fixes) gated on owner answers to questions 1–8 above. No code changes made this cycle.

---

## OWNER ANSWERS · 2026-04-19

1. **Company number:** 16511479 (code correct; brief was wrong) → P0-COMP-2 closed
2. **Teacher dashboard mock:** wiring forgotten, no paid teachers affected → fix by gating with Preview banner
3. **Essay submission:** should be live → wire to existing `/api/essay-feedback`
4. **VAT:** not registered, confirmed below £90k threshold → remove "inc VAT where applicable" from Terms §6; add "No VAT charged" statement; no pricing page label needed
5. **"Limited to 10 Schools":** aspirational; owner wants to onboard as many as possible → rewrite to "First 10 schools get founding partner pricing; subsequent schools welcome at standard rates"
6. **Staging:** not known / not available → destructive tests remain ungated; Wave B is static fixes only
7. **Next 14 → 15 upgrade:** approved → deferred to separate PR on its own branch
8. **DPO:** not set up → owner chose option (a) — hide the card entirely; `info@upskillenergy.com` remains as privacy contact via existing pages

**Trial length:** defaulting to 30-day free trial (matches Terms + `src/constants/pricing.ts:17`). Will align register copy accordingly. Owner can override.

---

## CYCLE 1 — WAVE B (FIXES) · 2026-04-19

**Branch:** `qa/cycle-1-wave-b`
**Scope:** 14 P0/P1 fixes executed autonomously per owner authorisation. Next 14→15 and RLS SQL deferred to separate PRs.

(Change manifest appended below as fixes are completed.)

---


