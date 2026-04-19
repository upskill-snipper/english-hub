# THE ENGLISH HUB — QA/QC MASTER LOG

**Site:** https://theenglishhub.app
**Repo:** `D:/Coding/english-hub/`
**Entity:** Upskill Energy Limited (Co. 16254656)
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
