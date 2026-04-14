# The English Hub — Site Improvement Plan
## Derived from the Commercial DD Report (11 April 2026)

**Objective:** Address every product/technical weakness flagged by the DD report to move the site from a **C+ technical grade** to **A-/B+**, close compliance gaps, strengthen the content moat, and make the product demonstrably superior to every competitor before go-to-market.

**Scope:** Site and product only. Go-to-market, sales, and entity restructure are handled separately by the founder.

---

## Phase 1: Technical Foundation (Week 1-2)
### Goal: Move technical grade from C+ to B+

#### 1.1 Re-enable TypeScript checking at build time
- Remove `ignoreBuildErrors: true` from `next.config.js`
- Run `npx tsc --noEmit` and fix every type error
- Expect 50-200 errors from the rapid agent-driven development
- Categories: missing imports, wrong prop types, `use(params)` vs sync params (Next 14 vs 15 mismatch), `asChild` vs `render` prop usage
- **Acceptance:** `npx tsc --noEmit` exits with 0 errors

#### 1.2 Re-enable ESLint at build time
- Remove `ignoreDuringBuilds: true` from `next.config.js`
- Create `.eslintrc.json` with `next/core-web-vitals` + `@typescript-eslint`
- Create `.prettierrc` with consistent formatting rules
- Install `husky` + `lint-staged` for pre-commit hooks
- Run `npx next lint` and fix all errors
- **Acceptance:** `npx next lint` exits with 0 warnings/errors

#### 1.3 Unify the two parallel board stores
- Delete `src/store/board-store.ts` (legacy Zustand store with uppercase enum, 6 boards)
- Migrate all imports to the canonical `src/lib/board/board-store.ts` (cookie-backed, 7 boards)
- Files to update: `src/app/mock-exams/page.tsx`, `src/app/practice/page.tsx`, any file importing from `@/store/board-store`
- Remove the `ExamBoard` enum from `prisma/schema.prisma` or reconcile it with the app-layer type (currently 5 vs 7 values)
- **Acceptance:** `grep -r "store/board-store" src/` returns 0 results

#### 1.4 Remove dead `next-auth` dependency
- Uninstall `next-auth` (`npm uninstall next-auth @auth/prisma-adapter`)
- Remove any `[...nextauth]` route files if they exist
- Auth is handled entirely by Supabase SSR — next-auth is vestigial
- **Acceptance:** `grep -r "next-auth" src/ package.json` returns 0

#### 1.5 Fix React types version mismatch
- Currently `@types/react@^19.2.14` with `react@^18` — requires `--legacy-peer-deps`
- Downgrade `@types/react` to `^18.x` to match runtime
- Remove `--legacy-peer-deps` from `vercel.json` installCommand
- **Acceptance:** `npm install` succeeds without `--legacy-peer-deps`

#### 1.6 Re-enable Sentry source map upload
- The Sentry wrapper was disabled because it hung on 700+ routes
- With /analysis removed (210 pages), re-test with Sentry enabled
- If still hanging: configure Sentry to skip source map upload but keep runtime error tracking:
  ```js
  withSentryConfig(nextConfig, {
    silent: true,
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  })
  ```
- **Acceptance:** Vercel build completes with Sentry enabled, stack traces are symbolicated in Sentry dashboard

#### 1.7 Resolve TODO/FIXME backlog
- Audit all 96 TODO/FIXME comments across 63 files
- Categorise: (a) fix now, (b) file as GitHub issue, (c) delete if obsolete
- Target: reduce to <20 active TODOs, all with linked issues

---

## Phase 2: Test Coverage (Week 2-3)
### Goal: Move from 1-2% to 40%+ coverage on critical paths

#### 2.1 Unit tests for core business logic
- `src/lib/board/board-store.ts` — board selection, cookie sync, getBoardConfig
- `src/lib/board/board-filter.ts` — isForBoard, filterByBoard, isIgcseBoard
- `src/lib/board/set-texts.ts` — getSetTextsForBoard, textAvailableForBoard
- `src/lib/board/grade-boundaries.ts` — grade system mapping
- `src/lib/reading-assessment.ts` — WPM calculation, grade scoring, ceiling rule
- `src/lib/game-scores.ts` — scoreToGrade, saveGameScore
- `src/lib/marking/grade-predictor.ts` — grade prediction from AO scores
- `src/lib/marking/prompt-builder.ts` — prompt construction
- `src/lib/affiliate/tiers.ts` — tier calculation, commission rates
- `src/lib/parent/link-codes.ts` — code generation, validation
- `src/app/revision/quiz/quiz-data.ts` — question filtering by board

#### 2.2 Integration tests for API routes
- `src/app/api/mark/route.ts` — essay marking flow
- `src/app/api/board/route.ts` — board setting
- `src/app/api/parent/link-child/route.ts` — parent linking
- `src/app/api/affiliate/track-click/route.ts` — affiliate tracking
- Stripe webhook handler — already has tests, extend coverage

#### 2.3 Component tests for critical UI
- `BoardSelectorSection` — board selection flow
- `InteractivePoemViewer` — annotation toggles, overlay modes
- `GameShell` — score tracking, grade conversion
- `QuizEngine` — question flow, scoring, topic filtering
- `WrongBoardBanner` — blocking overlay renders for wrong board, hidden for correct board

#### 2.4 E2E tests (Playwright)
- Full signup → board select → revision → quiz flow
- Board gate redirect (visit wrong-board content → redirected)
- Reading assessment (minimum read time enforced, WPM capped)
- Game play → score saved → grade displayed

---

## Phase 3: Content Moat (Week 3-5)
### Goal: Make the content genuinely harder to replicate than "ask ChatGPT"

#### 3.1 Restore SEO /analysis pages sustainably
- The 210 SEO pages were removed due to Vercel build OOM
- Restore using ONE of these approaches:
  - **Option A (recommended):** Convert to MDX-driven dynamic route: single `src/app/analysis/[...slug]/page.tsx` that reads content from `.mdx` files at build time. Reduces compilation from 210 page.tsx to 1 dynamic route.
  - **Option B:** Use ISR with `revalidate = 86400` on a parent layout (already attempted — may still OOM on compilation)
  - **Option C:** Deploy analysis pages to a separate Vercel project as a micro-frontend
- **Acceptance:** All 210 SEO pages accessible at their original URLs, build completes under 8 minutes

#### 3.2 Expand question banks
- Current: 100 quiz questions, ~25 per topic
- Target: 500+ questions, 100+ per topic
- Board-tag every new question
- Add question difficulty levels (Foundation / Higher)
- Source: write from GCSE past papers (public domain after exam session)
- Add question explanations referencing specific mark scheme bands

#### 3.3 Expand game content
- Quote Detective: increase from 25 quotes to 100+ (10+ per set text)
- Grade Climber: increase from 41 questions to 150+
- Theme Matcher: add more theme-text pairings
- Comprehension Challenge: add 10+ more passages (public domain)
- Each game should have enough content for 10+ unique sessions without repetition

#### 3.4 Add more interactive poem pages
- AQA: 30 exist, but some are basic (no annotations). Upgrade all to full InteractivePoemViewer with 8+ key quotes, 6+ language devices
- Edexcel: only 6 full poems built — add 6 more public domain poems
- OCR: only 6 full poems — add 6 more
- Eduqas: 8 full poems — add 4 more public domain
- Total target: 60+ fully interactive poem study pages (up from ~50)

#### 3.5 Add more set text study guides
- Currently 11 rich guides (of-mice-and-men, TKAM, etc.)
- Missing: Macbeth, Romeo & Juliet, An Inspector Calls, A Christmas Carol, Jekyll & Hyde — these are the TOP 5 most-studied GCSE texts and don't have dedicated `/revision/texts/` rich guides
- Create full study guides for all 5 with: plot, characters, themes, context, 20+ key quotes, essay plans
- These are the highest-traffic pages on any GCSE English site

#### 3.6 Add student-generated content features
- "My notes" on each text/poem page (saved to localStorage → Supabase if logged in)
- "My quote bank" — students save their favourite quotes with personal annotations
- "My flashcard deck" — custom deck builder from existing content
- These create switching costs that LLM-generated content cannot replicate

---

## Phase 4: Children's Code Compliance (Week 3-4)
### Goal: Close all 4 P1 gaps from the ICO assessment

#### 4.1 Default privacy settings for under-16s
- Turn off personalised recommendations by default for child accounts
- Turn off streaks/nudge notifications by default
- Make cookie consent genuinely neutral (no dark patterns — equal-weight Accept/Reject)
- Add a dormancy deletion job: auto-purge inactive child accounts after 12 months

#### 4.2 DPO appointment
- Document the Article 37 assessment (likely don't need a formal DPO at this scale, but document the decision)
- Appoint a named privacy contact
- Add their details to the privacy policy

#### 4.3 DSL (Designated Safeguarding Lead)
- Name a DSL in the safeguarding policy
- Add reporting flow for content concerns
- Document the CEOP/MASH referral process

#### 4.4 Age verification
- Document the age-assurance approach
- Self-declaration + teacher verification for school accounts
- Parent consent flow for under-13s (already scaffolded)

---

## Phase 5: UX Polish and Performance (Week 4-6)
### Goal: Make the site feel premium, not scaffold-quality

#### 5.1 Board selection flow polish
- The two-step GCSE/IGCSE flow is now built — test it, polish animations
- Add smooth page transitions between steps
- Test on mobile thoroughly (the glass-pane cards need touch-friendly sizing)
- Ensure the BlockingModal in BoardGate matches the page styling

#### 5.2 Loading states
- Add skeleton loaders for board-filtered pages (avoid flash of unfiltered content)
- Add suspense boundaries for heavy client components
- Reading assessment: show a passage preview skeleton during load

#### 5.3 Accessibility audit
- Run axe-core / Lighthouse accessibility audit across 10 key pages
- Fix: colour contrast (especially on dark theme), keyboard navigation, screen reader labels
- Ensure all games are keyboard-playable
- Add skip-to-content links

#### 5.4 Performance audit
- Run Lighthouse Performance across 10 pages
- Target: >90 on all key pages
- Focus: image optimisation, font loading, JS bundle size
- The homepage bundle is ~170kB shared — check if tree-shaking is working for lucide-react and base-ui

#### 5.5 Mobile experience
- Full responsive audit: board select, revision hub, poem viewer, games, quiz, reading assessment
- Fix any touch-target issues (<44px)
- Test on real iOS + Android devices

#### 5.6 Dark mode consistency
- Audit all pages for hardcoded colours (the DD flagged some theme token violations)
- Ensure every page looks correct in both light and dark mode
- Pay special attention to games and the poem viewer (complex custom UI)

---

## Phase 6: AI Marking Layer (Week 5-6)
### Goal: Make the AI marking the primary differentiator — a feature competitors can't match

#### 6.1 Connect AI marking to live API
- Currently the marking UI uses mock data (TODO comments everywhere)
- Wire up the submission form to POST to `/api/mark`
- Wire up streaming response to `/api/mark/stream`
- Add real Anthropic API key to Vercel env vars
- Rate limit: 10 submissions per day per user (already coded)

#### 6.2 Add Edexcel and OCR mark schemes
- Currently only AQA Literature P1, Language P1, Language P2
- Add: Edexcel Literature, Edexcel Language, OCR Literature, OCR Language, Eduqas Component 1, Eduqas Component 2
- This makes the marking work for ALL boards — a massive competitive advantage

#### 6.3 Teacher marking dashboard
- Allow teachers to see AI-marked essays for their students
- Add "override grade" functionality
- Add "examiner commentary" that the teacher can edit
- Save marked essays to Supabase

#### 6.4 Model essay bank
- The sample page has 3 model essays (Grade 5, 7, 9)
- Expand to 20+ model essays across multiple texts and question types
- Each model essay should have paragraph-level examiner annotations
- This is content that NO competitor has

---

## Phase 7: Data Moat (Week 6-8)
### Goal: Start collecting data that creates compounding value

#### 7.1 Student progress tracking (Supabase)
- Currently all progress is localStorage-only
- Migrate to Supabase: poems studied, games played, quiz scores, reading age, essays marked
- Add a `/api/progress/sync` endpoint that syncs localStorage → Supabase on login
- This data becomes the foundation for personalised recommendations

#### 7.2 Aggregate analytics
- What percentage of students get each question right? (item-level difficulty)
- Which poems/texts are most studied?
- Average quiz score by board, by grade target
- This data is PROPRIETARY and cannot be replicated by any competitor or LLM

#### 7.3 Personalised recommendations
- "Based on your quiz scores, focus on X"
- "You haven't studied [text] yet — it appears on 40% of past papers"
- "Students aiming for Grade 7 typically study 3 more poems than you have"
- Start simple: localStorage-based. Upgrade to ML when Supabase data accumulates

#### 7.4 Weekly email reports
- For parents: "Your child studied X this week, scored Y on quizzes"
- For students: "Your revision streak is Z days, suggested focus this week"
- For teachers: "Class performance this week, 3 students need attention"
- Wire up to Resend (already in the codebase) via the weekly-reports cron job

---

## Phase 8: Build Reliability (Week 6-7)
### Goal: Every push deploys successfully, every time

#### 8.1 Vercel build stability
- Currently: builds hang due to Sentry or OOM with 700+ routes
- Fix: restore Sentry with source-map-only upload (no full build wrap)
- Fix: keep /analysis pages as MDX dynamic route (Phase 3.1)
- Target: build completes in <5 minutes, never OOMs

#### 8.2 CI/CD pipeline
- Add GitHub Actions workflow:
  - `npm run lint` — fails build if ESLint errors
  - `npx tsc --noEmit` — fails build if type errors
  - `npm run test` — fails build if tests fail
  - Deploy preview for PRs
- This prevents regression from any contributor (human or AI)

#### 8.3 Monitoring
- Re-enable Sentry with source maps
- Add uptime monitoring (UptimeRobot or Better Uptime — free tier)
- Add Vercel analytics for Core Web Vitals
- Set up PagerDuty/Slack alerts for errors

---

## Phase 9: Copyright Hardening (Week 7-8)
### Goal: Eliminate all content copyright risk

#### 9.1 Audit all in-copyright quotations
- Scan every page for quotations from living/recent authors
- In-copyright texts: An Inspector Calls, Lord of the Flies, Animal Farm, Blood Brothers, Anita and Me, Pigeon English, Never Let Me Go, all modern poets (Armitage, Duffy, Dharker, Heaney, Hughes, Clarke, Agard, etc.)
- Ensure every quotation is ≤15 words and clearly attributed
- Remove any extended quotations that exceed fair dealing limits

#### 9.2 Add fair-dealing notices
- Each copyrighted text page should have a notice: "Quotations are reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review."
- Each copyrighted poem page should note: "Full text available in your exam board anthology. The quotations below are short extracts for study purposes only."

#### 9.3 CLA / ALCS licence assessment
- Assess whether a CLA Education Licence or ALCS agreement would cover commercial SaaS use
- Document the decision and keep evidence in the data room

---

## Execution Summary

| Phase | Duration | Key Deliverable | Valuation Impact |
|-------|----------|----------------|-----------------|
| 1. Technical Foundation | Week 1-2 | TypeScript/ESLint on, board store unified, deps clean | +£100-200k |
| 2. Test Coverage | Week 2-3 | 40%+ coverage on critical paths | +£100-200k |
| 3. Content Moat | Week 3-5 | 500+ quiz questions, 60+ poems, 5 top-text guides, SEO restored | +£300-750k |
| 4. Children's Code | Week 3-4 | 4 P1 gaps closed, DPO/DSL named | +£150-300k |
| 5. UX Polish | Week 4-6 | Accessibility, performance, mobile, dark mode | +£100-200k |
| 6. AI Marking | Week 5-6 | Live API, multi-board mark schemes, model essays | +£400-1,000k |
| 7. Data Moat | Week 6-8 | Supabase progress, aggregate analytics, personalisation | +£200-500k |
| 8. Build Reliability | Week 6-7 | CI/CD, monitoring, Sentry restored | +£50-100k |
| 9. Copyright | Week 7-8 | All quotations audited, fair-dealing notices, CLA assessment | Prevents £200-500k haircut |

**Total timeline: 8 weeks of focused work.**
**Estimated total valuation uplift: £1.4-3.7m** (beyond go-to-market impact).

---

## Prompt for Claude Code

When ready to execute, use this prompt to kick off each phase:

```
Deploy [N] agents to execute Phase [X] of the improvement plan at D:/Coding/english-hub/IMPROVEMENT-PLAN.md.

Each agent should:
1. Read the relevant section of IMPROVEMENT-PLAN.md
2. Execute the specific tasks listed
3. Follow existing codebase patterns (theme tokens, Button render={<Link>}, 'use client' where needed)
4. Do NOT run git, next build, or npm install
5. Report briefly what was done

Agents should NOT overlap on files. Assign each agent a clear file boundary.
```

---

*This plan is derived from the Commercial DD Report (COMMERCIAL-REPORT.md) and the 9 supporting DD reports (dd-01 through dd-10). It addresses every product weakness identified by the broker analysis while leaving go-to-market, entity restructure, and sales to the founder.*
