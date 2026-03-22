# English Hub - Comprehensive Test Plan

**Last updated:** 2026-03-22
**Test framework:** Vitest (unit/integration), Playwright (E2E)
**CI environment:** GitHub Actions

---

## Table of Contents

1. [Unit Tests](#1-unit-tests)
2. [Integration Tests](#2-integration-tests)
3. [E2E Test Scenarios](#3-e2e-test-scenarios)
4. [Performance Test Scenarios](#4-performance-test-scenarios)
5. [Security Test Scenarios](#5-security-test-scenarios)
6. [Test Infrastructure](#6-test-infrastructure)

---

## 1. Unit Tests

Run with `npx vitest` using the existing `vitest.config.ts` (jsdom environment, `@/` alias).

### 1.1 Utility Functions -- `utils.test.ts` (EXISTS)

| Test | Status |
|------|--------|
| `formatTime` -- 0s, 90s, boundary values | Done |
| `formatDate` -- ISO string formatting | Done |
| `shuffleArray` -- length, elements, immutability | Done |
| `validateRedirect` -- safe/unsafe URLs, relative paths, null | Done |
| `getCourseName` -- valid slug, invalid slug, edge cases | Done |

### 1.2 Rate Limiter -- `rate-limit.test.ts` (EXISTS)

| Test | Status |
|------|--------|
| In-memory fallback: allows requests within limit | Done |
| In-memory fallback: blocks requests over limit | Done |
| Returns `resetAt` timestamp in the future | Done |
| Window expiry resets counter (mock timers with `vi.advanceTimersByTime`) | To add |
| Different keys are tracked independently | To add |
| Upstash Redis path (mock `@upstash/ratelimit`): success/failure | To add |

### 1.3 Webhook Handlers -- `webhook.test.ts` (EXISTS)

| Test | Status |
|------|--------|
| Rejects invalid Stripe signature (401) | Done |
| Handles `checkout.session.completed` -- updates user to pro | Done |
| Handles `customer.subscription.updated` -- status change | Done |
| Handles `customer.subscription.deleted` -- downgrades user | Done |
| Ignores unhandled event types gracefully (200) | To add |
| Handles missing customer email gracefully | To add |
| Handles Supabase write failure (returns 500) | To add |

### 1.4 Content Safety -- `content-safety.test.ts` (EXISTS)

| Test | Status |
|------|--------|
| Passes clean essay text | Done |
| Rejects essays containing profanity/slurs | Done |
| Rejects essays that are too short | Done |
| Rejects essays that are too long | Done |
| Handles edge cases (empty string, whitespace only) | Done |

### 1.5 Request Validation -- `validate-request.test.ts` (EXISTS)

| Test | Status |
|------|--------|
| Returns null for valid request payload | Done |
| Rejects missing board | Done |
| Rejects invalid paper type | Done |
| Rejects essay below minimum word count | Done |
| Rejects invalid question type | Done |

### 1.6 Data Integrity -- `data-integrity.test.ts` (EXISTS)

| Test | Status |
|------|--------|
| At least 8 courses loaded | Done |
| All course IDs are unique | Done |
| Every course has modules | Done |
| Every module has content | Done |
| Practice questions have valid references | Done |
| Flashcard decks are well-formed | Done |
| Techniques data is well-formed | Done |

### 1.7 Parental Consent -- `consent.test.ts` (EXISTS)

| Test | Status |
|------|--------|
| Rejects unauthenticated user | Done |
| Validates consent token structure | Done |
| Handles expired consent token | To verify |
| Creates consent record on valid token | Done |

### 1.8 Course Data Loaders (TO ADD: `course-loader.test.ts`)

| Test | Priority |
|------|----------|
| `allCourses` returns courses for each board (AQA, Edexcel, OCR, iGCSE, KS3) | High |
| Course loader resolves correct modules for a given course slug | High |
| `mock-exam-loader` returns exams matching board + paper filter | High |
| `mock-exam-loader` returns empty array for nonexistent board | Medium |
| `course-index.ts` mapping covers all known course IDs | Medium |
| Edexcel-specific module files export correct structure | Medium |
| iGCSE assessment data has valid mark scheme references | Medium |
| `exam-questions.ts` entries have non-empty question text and valid types | Low |
| `mark-schemes.ts` entries reference existing questions | Low |

### 1.9 School Auth Verification (TO ADD: `school-auth.test.ts`)

Tests for `src/lib/school-auth.ts`:

| Test | Priority |
|------|----------|
| Returns school data for valid authenticated school admin | High |
| Returns 401 for unauthenticated request | High |
| Returns 403 for user who is not a school admin | High |
| Returns 403 for user associated with a different school | Medium |
| Handles Supabase query failure gracefully | Medium |
| Validates school subscription status (active vs expired) | Medium |

### 1.10 Board Filter (TO ADD: `board-filter.test.ts`)

Tests for `src/lib/board-filter.ts`:

| Test | Priority |
|------|----------|
| Returns correct courses for each board | High |
| Handles unknown board name (returns empty or all) | Medium |
| Filter is case-insensitive | Low |

### 1.11 Admin Auth (TO ADD: `admin-auth.test.ts`)

Tests for `src/lib/admin-auth.ts`:

| Test | Priority |
|------|----------|
| Returns true for user with admin role | High |
| Returns false for regular user | High |
| Returns false for unauthenticated request | High |

### 1.12 API Response Helpers (TO ADD: `api-response.test.ts`)

Tests for `src/lib/api-response.ts`:

| Test | Priority |
|------|----------|
| `success()` returns 200 with correct JSON shape | Medium |
| `error()` returns specified status code and message | Medium |
| `unauthorized()` returns 401 | Medium |

---

## 2. Integration Tests

These test API routes with mocked Supabase and external services. Use `vitest` with `NextRequest`/`NextResponse` imports.

### 2.1 Stripe Checkout Flow (TO ADD: `integration/stripe-checkout.test.ts`)

**Mocks needed:** Supabase client, Stripe SDK

| Test | Priority |
|------|----------|
| `POST /api/stripe/checkout` -- authenticated user gets checkout session URL | High |
| Rejects unauthenticated request (401) | High |
| Includes correct `price_id` and `success_url` in session creation | High |
| Passes user email and metadata to Stripe | Medium |
| Handles Stripe API error gracefully (500) | Medium |
| `POST /api/stripe/portal` -- returns billing portal URL for subscribed user | Medium |
| Rejects portal access for free-tier user | Medium |

### 2.2 School Join Code Flow (TO ADD: `integration/school-join.test.ts`)

**Mocks needed:** Supabase service role client

| Test | Priority |
|------|----------|
| `POST /api/school/join` -- valid join code adds student to school | High |
| Rejects expired join code (400) | High |
| Rejects invalid/nonexistent join code (404) | High |
| Rejects unauthenticated user (401) | High |
| Rejects user already in a school (409) | Medium |
| `POST /api/school/join-codes` -- school admin can generate new code | Medium |
| `POST /api/school/join-codes` -- rejects non-admin (403) | Medium |
| Join code respects max student limit | Low |

### 2.3 Parental Consent Flow (TO ADD: `integration/parental-consent.test.ts`)

**Mocks needed:** Supabase client, email service (if applicable)

| Test | Priority |
|------|----------|
| `POST /api/parent/link-child` -- creates pending link with valid child email | High |
| Rejects link to non-existent child account (404) | High |
| Rejects if parent is not authenticated (401) | High |
| Rejects duplicate link request (409) | Medium |
| `GET /api/parent/progress` -- returns child progress data | Medium |
| `GET /api/parent/progress` -- rejects parent without linked child (403) | Medium |
| `POST /api/school/consent` -- school admin can trigger consent request | Medium |

### 2.4 Essay Feedback Flow (TO ADD: `integration/essay-feedback.test.ts`)

**Mocks needed:** Supabase client, AI/LLM service, rate limiter

| Test | Priority |
|------|----------|
| `POST /api/essay-feedback` -- returns structured feedback for valid essay | High |
| Rejects essay failing content safety check | High |
| Rejects essay failing request validation (bad board/paper) | High |
| Applies rate limiting per user | High |
| Rejects unauthenticated user (401) | Medium |
| Handles AI service timeout gracefully | Medium |

### 2.5 Affiliate System (TO ADD: `integration/affiliates.test.ts`)

**Mocks needed:** Supabase client, Rewardful SDK

| Test | Priority |
|------|----------|
| `POST /api/affiliates/apply` -- creates affiliate application | Medium |
| `POST /api/admin/affiliates` -- admin approves application | Medium |
| `POST /api/admin/affiliates` -- rejects non-admin (403) | Medium |
| Referral tracking via `src/lib/referral.ts` stores referral cookie | Medium |
| Rewardful integration records conversion on subscription | Low |

### 2.6 School Management (TO ADD: `integration/school-management.test.ts`)

**Mocks needed:** Supabase service role client

| Test | Priority |
|------|----------|
| `GET /api/school/overview` -- returns school stats for admin | Medium |
| `GET /api/school/students` -- returns student list | Medium |
| `POST /api/school/invite` -- sends invite email | Medium |
| `GET /api/school/classes` -- returns class list | Medium |
| `POST /api/school/export` -- exports data in expected format | Low |
| `GET /api/school/members` -- returns member list with roles | Low |

### 2.7 Teacher Signup (TO ADD: `integration/teacher-signup.test.ts`)

| Test | Priority |
|------|----------|
| `POST /api/teacher-signup` -- creates teacher account with school association | Medium |
| Validates required fields (name, email, school) | Medium |
| Rejects duplicate email (409) | Medium |

---

## 3. E2E Test Scenarios

Use Playwright. Each scenario should run against a test environment with seeded data.

### 3.1 User Registration and Course Access

```
Scenario: New user registers, browses courses, starts free trial, accesses course
  1. Navigate to homepage
  2. Click "Sign Up"
  3. Fill registration form (email, password)
  4. Verify redirect to dashboard
  5. Browse course catalogue
  6. Click a GCSE English Language course
  7. Verify course overview page loads with module list
  8. Click "Start Free Trial"
  9. Verify trial activation (no payment required)
  10. Access first module content
  11. Verify content renders (text, questions visible)
```

**Assertions:**
- Registration creates user in Supabase auth
- Dashboard shows "Free Trial" badge
- Course content is accessible during trial
- Navigation between modules works
- Progress is tracked

### 3.2 Student Join School and Complete Course

```
Scenario: Student joins school via code, completes course, gets certificate
  1. Log in as student
  2. Navigate to "Join School" page
  3. Enter valid join code
  4. Verify school association appears in profile
  5. Navigate to assigned course
  6. Complete each module (read content, answer questions)
  7. Complete final assessment
  8. Navigate to certificate page
  9. Verify certificate is generated with correct details
```

**Assertions:**
- Join code validation works end-to-end
- Student appears in school's student list
- Progress bar updates after each module
- Certificate contains student name, course name, completion date
- Certificate is downloadable/printable

### 3.3 Parent Link Child and View Progress

```
Scenario: Parent links to child account, views learning progress
  1. Log in as parent
  2. Navigate to parent dashboard
  3. Click "Link Child Account"
  4. Enter child's email or account ID
  5. Verify pending link status
  6. (As child) Accept link / (or auto-approve in test)
  7. (As parent) Refresh dashboard
  8. Verify child's courses and progress are visible
  9. Check progress details (modules completed, time spent)
```

**Assertions:**
- Link request appears in child's notifications or is auto-approved
- Parent dashboard shows accurate progress data
- Parent cannot modify child's account
- Consent flow is triggered for under-13 if applicable

### 3.4 Teacher Create Class and View Analytics

```
Scenario: Teacher creates class, invites students, views analytics
  1. Log in as teacher (associated with a school)
  2. Navigate to teacher dashboard
  3. Click "Create Class"
  4. Enter class name, select year group
  5. Click "Invite Students" -- generate join code or send invites
  6. (As student) Join class using code
  7. (As teacher) View class roster -- verify student appears
  8. (As student) Complete some course modules
  9. (As teacher) Navigate to analytics page
  10. Verify analytics show student progress, completion rates
```

**Assertions:**
- Class creation persists
- Invite code is unique and time-limited
- Analytics update in near-real-time (or on refresh)
- Teacher can see per-student breakdown

### 3.5 Admin Approve Affiliate

```
Scenario: Admin approves affiliate application, affiliate earns commission
  1. (As applicant) Submit affiliate application via /api/affiliates/apply
  2. Log in as admin
  3. Navigate to admin affiliate management page
  4. View pending applications
  5. Approve the application
  6. Verify affiliate receives approval (status change)
  7. (As affiliate) Share referral link
  8. (As new user) Register via referral link
  9. (As new user) Subscribe to pro plan
  10. Verify commission is recorded (Rewardful or internal tracking)
```

**Assertions:**
- Application status transitions: pending -> approved
- Referral link contains correct tracking parameter
- Conversion is attributed to the affiliate
- Admin can view affiliate earnings

### 3.6 Mock Exam Flow

```
Scenario: Student starts mock exam, answers questions, submits, views results
  1. Log in as student with active subscription
  2. Navigate to mock exams page
  3. Select board (e.g., AQA) and paper (e.g., Paper 1)
  4. Click "Start Exam"
  5. Verify timer starts (if timed)
  6. Answer each question (mix of MCQ and written)
  7. Navigate between questions (next/previous)
  8. Click "Submit Exam"
  9. Verify confirmation dialog
  10. View results page
  11. Check score breakdown by question
  12. Verify mark scheme / model answer is shown
```

**Assertions:**
- Correct questions load for selected board/paper
- Timer counts down accurately
- Answers persist when navigating between questions
- Results page shows score, percentage, grade boundary comparison
- Mark scheme references are valid

### 3.7 Board Selection Persistence

```
Scenario: Board selection persists across navigation
  1. Navigate to homepage or course browser
  2. Select a board (e.g., Edexcel)
  3. Navigate to courses page -- verify Edexcel courses shown
  4. Navigate to mock exams page -- verify Edexcel is pre-selected
  5. Navigate to practice questions -- verify Edexcel filter active
  6. Refresh the page -- verify Edexcel is still selected
  7. Close and reopen browser -- verify Edexcel persists (localStorage/cookie)
```

**Assertions:**
- Board selection stored in localStorage or cookie
- All filtered pages respect the selection
- Selection survives page refresh
- Selection survives browser restart
- Can be changed at any time and new selection propagates

---

## 4. Performance Test Scenarios

### 4.1 Page Load Times

| Page | Target (3G) | Target (4G) | Tool |
|------|-------------|-------------|------|
| Homepage | < 3.0s | < 1.5s | Lighthouse CI |
| Course catalogue | < 3.0s | < 1.5s | Lighthouse CI |
| Course content page | < 3.0s | < 1.5s | Lighthouse CI |
| Mock exam page | < 3.0s | < 2.0s | Lighthouse CI |
| Dashboard | < 3.0s | < 2.0s | Lighthouse CI |
| Certificate page | < 3.0s | < 2.0s | Lighthouse CI |

**How to test:**
```bash
# Using Lighthouse CI
npx lhci autorun --collect.url=http://localhost:3000 \
  --collect.url=http://localhost:3000/courses \
  --assert.preset=lighthouse:recommended \
  --assert.assertions.first-contentful-paint=["error", {"maxNumericValue": 3000}]
```

### 4.2 Bundle Size Targets

| Bundle | Max Size (gzipped) | Tool |
|--------|--------------------|------|
| Initial JS | < 150 KB | `next build` + `@next/bundle-analyzer` |
| Per-page JS (course page) | < 50 KB | `@next/bundle-analyzer` |
| Total CSS | < 30 KB | Build output |
| Largest image asset | < 200 KB | Manual audit |

**How to test:**
```bash
# Build and analyze
ANALYZE=true npx next build
# Check output in .next/analyze/
```

**CI gate:** Add to CI pipeline:
```bash
npx next build 2>&1 | grep "First Load JS" | awk '{print $NF}'
# Fail if any route exceeds 200 KB
```

### 4.3 API Response Times

| Endpoint | Target (p95) | Method |
|----------|-------------|--------|
| `GET /api/health` | < 100ms | k6 / Artillery |
| `POST /api/essay-feedback` | < 5000ms (AI dependent) | k6 |
| `POST /api/stripe/checkout` | < 500ms | k6 |
| `GET /api/school/overview` | < 500ms | k6 |
| `GET /api/parent/progress` | < 500ms | k6 |
| `POST /api/school/join` | < 500ms | k6 |
| `GET /api/cron/*` | < 2000ms | k6 |

**How to test with k6:**
```javascript
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 50,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  const res = http.get('http://localhost:3000/api/health');
  check(res, { 'status 200': (r) => r.status === 200 });
}
```

### 4.4 Database Query Performance

| Query | Target | Notes |
|-------|--------|-------|
| User lookup by ID | < 50ms | Supabase RPC / direct query |
| Course progress fetch | < 100ms | Should use indexed columns |
| School student list (100 students) | < 200ms | Paginated |
| Mock exam results fetch | < 100ms | Indexed by user + exam |
| Analytics aggregation | < 500ms | May need materialized view |

---

## 5. Security Test Scenarios

### 5.1 Authentication Bypass Attempts

| Test | Expected Result | Priority |
|------|----------------|----------|
| Access `/api/school/overview` without auth header | 401 Unauthorized | High |
| Access `/api/parent/progress` with expired JWT | 401 Unauthorized | High |
| Access `/api/admin/stats` with non-admin JWT | 403 Forbidden | High |
| Access `/api/stripe/portal` with forged user ID in body | Uses JWT user, ignores body | High |
| Access school data with valid JWT but wrong school | 403 Forbidden | High |
| Tamper with `school_id` param on school API routes | Server validates against JWT claims | High |
| Access course content without active subscription/trial | 403 or redirect to pricing | Medium |
| Use expired free trial token to access content | Rejected | Medium |

### 5.2 XSS Prevention in Essay Feedback

| Test | Expected Result | Priority |
|------|----------------|----------|
| Submit essay with `<script>alert(1)</script>` | Sanitized in feedback display | High |
| Submit essay with `<img onerror=alert(1)>` | Tag stripped or escaped | High |
| Submit essay with markdown injection `[click](javascript:alert(1))` | Link not rendered as JS | High |
| Feedback containing HTML from AI is escaped before render | No raw HTML in DOM | High |
| Question text with embedded HTML renders safely | Escaped | Medium |
| User-provided class/school names with HTML | Escaped in all views | Medium |

**How to test:**
- Unit: Verify `contentSafetyCheck` flags or strips HTML/script tags
- E2E: Submit malicious essay via Playwright, inspect rendered DOM for unescaped HTML

### 5.3 CSRF Protection

| Test | Expected Result | Priority |
|------|----------------|----------|
| POST to `/api/stripe/checkout` from external origin | Rejected (SameSite cookie / CSRF token) | High |
| POST to `/api/school/join` from external origin | Rejected | High |
| POST to `/api/essay-feedback` with no origin header | Rejected or uses SameSite cookie protection | Medium |
| Verify all state-changing endpoints require POST/PUT/DELETE | GET requests are read-only | Medium |
| Verify Supabase auth cookies use `SameSite=Lax` or `Strict` | Cookie inspection | Medium |

### 5.4 Rate Limiting Effectiveness

| Test | Expected Result | Priority |
|------|----------------|----------|
| Send 100 requests to `/api/essay-feedback` in 1 minute | Blocked after limit (e.g., 10/min) | High |
| Send 50 login attempts in 1 minute | Blocked after limit | High |
| Rate limit applies per-user (different users not affected) | Isolated counters | High |
| Rate limit applies to `/api/school/join` | Prevents brute-force code guessing | High |
| Rate limit response includes `Retry-After` header | Header present | Medium |
| Rate limit resets after window expires | Requests allowed again | Medium |
| Verify rate limit on `/api/contact` and `/api/waitlist` | Prevents spam | Medium |
| Verify rate limit on `/api/affiliates/apply` | Prevents abuse | Low |

### 5.5 Additional Security Checks

| Test | Expected Result | Priority |
|------|----------------|----------|
| SQL injection in search/filter params | Parameterized queries prevent injection | High |
| Path traversal in course slug (`../../etc/passwd`) | Returns 404, no file access | High |
| Oversized request body (> 1MB essay) | Rejected with 413 | Medium |
| Invalid JSON body on POST endpoints | Returns 400, not 500 | Medium |
| Stripe webhook without valid signature | Rejected (401) | High |
| Environment variables not leaked in error responses | Verify error payloads | Medium |
| Sensitive headers (Authorization) not logged | Log audit | Low |
| `X-Frame-Options` or CSP `frame-ancestors` set | Prevents clickjacking | Medium |
| `Content-Security-Policy` header present | XSS mitigation layer | Medium |

---

## 6. Test Infrastructure

### 6.1 Current Setup

- **Framework:** Vitest with jsdom environment
- **Config:** `vitest.config.ts` at project root
- **Setup file:** `src/__tests__/setup.ts`
- **Path alias:** `@/` maps to `src/`
- **Mocking:** `vi.mock()` for Supabase clients, Stripe SDK, rate limiter

### 6.2 Running Tests

```bash
# Run all unit tests
npx vitest

# Run specific test file
npx vitest src/__tests__/utils.test.ts

# Run with coverage
npx vitest --coverage

# Run in watch mode
npx vitest --watch
```

### 6.3 Mock Patterns

**Supabase client mock (reusable pattern):**
```typescript
const mockFrom = vi.fn(() => ({
  select: vi.fn(() => ({
    eq: vi.fn(() => ({
      single: vi.fn(() => ({ data: { id: 'user-123' }, error: null })),
    })),
  })),
  insert: vi.fn(() => ({ error: null })),
  update: vi.fn(() => ({ eq: vi.fn(() => ({ error: null })) })),
}))

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({ auth: { getUser: mockGetUser } }),
  createServiceRoleClient: () => ({ from: mockFrom }),
}))
```

**Stripe mock (reusable pattern):**
```typescript
vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: mockConstructEvent },
    subscriptions: { retrieve: mockRetrieveSubscription },
    checkout: { sessions: { create: mockCreateSession } },
  },
}))
```

### 6.4 Test Data Seeding (for E2E)

Create a `test/seed.ts` script that:
1. Creates test users (student, parent, teacher, admin) in Supabase auth
2. Creates a test school with join codes
3. Creates parent-child links
4. Seeds course progress data
5. Creates an affiliate application (pending + approved)

### 6.5 CI Pipeline Integration

```yaml
# Suggested GitHub Actions workflow
name: Tests
on: [push, pull_request]
jobs:
  unit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx vitest --reporter=verbose --coverage
      - uses: actions/upload-artifact@v4
        with: { name: coverage, path: coverage/ }

  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run build
      - run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: failure()
        with: { name: playwright-report, path: playwright-report/ }

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci && npm run build
      - run: npx lhci autorun
```

### 6.6 Coverage Targets

| Category | Target |
|----------|--------|
| `src/lib/` utility modules | > 90% |
| `src/app/api/` route handlers | > 80% |
| `src/data/` loaders | > 70% |
| Overall project | > 60% |

### 6.7 Priority Roadmap

**Phase 1 (immediate):**
- Complete remaining unit tests for rate limiter edge cases
- Add webhook handler edge case tests
- Add `course-loader.test.ts` and `school-auth.test.ts`

**Phase 2 (next sprint):**
- Integration tests for Stripe checkout and school join code flows
- Integration tests for essay feedback with content safety
- Integration tests for parental consent flow

**Phase 3 (following sprint):**
- Set up Playwright and write core E2E scenarios (3.1, 3.2, 3.6, 3.7)
- Add Lighthouse CI to pipeline
- Add bundle size checks

**Phase 4 (ongoing):**
- Security test scenarios (manual + automated)
- Performance benchmarking with k6
- Remaining E2E scenarios (3.3, 3.4, 3.5)
