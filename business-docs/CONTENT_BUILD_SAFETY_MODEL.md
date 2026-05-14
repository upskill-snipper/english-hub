# Content build — hardened safety model

> Written after the Wave 1 incident on 2026-05-14 in which a route
> conflict (`/ks3/[year]/[unit]` colliding with `/ks3/[year]/[term]`)
> took 257 of 871 production routes offline. The 5 gates below are the
> defence against that exact class of failure recurring.

## The chain

Every wave runs this sequence end-to-end. Any failure aborts the chain
and refuses to fire the next wave.

```
HALT-MARKER CHECK
        ↓
GENERATE (content/scaffold scripts, idempotent)
        ↓
┌──── PRE-DEPLOY GATES ────────────────────────────────────┐
│  1. route_conflict_check.py   — sibling dynamic + groups │
│  2. verify_content.py          — fact + phrase + CJK      │
│  3. tsc --noEmit               — TypeScript                │
│  4. next build                 — Vercel parity             │
│  5. local_smoke_test.py        — next start + curl every │
│                                  static route locally     │
└──────────────────────────────────────────────────────────┘
        ↓
GIT COMMIT + PUSH (only if all gates clean)
        ↓
┌──── POST-DEPLOY GATE ────────────────────────────────────┐
│  6. post_deploy_audit.py                                  │
│     • wait for Vercel READY (or ERROR → fail)             │
│     • curl all 871 production routes                      │
│     • diff against baseline (any regression = fail)       │
└──────────────────────────────────────────────────────────┘
        ↓
ON REGRESSION → rollback_on_regression.py:
        • git revert HEAD
        • git push (Vercel rolls forward to clean state)
        • unregister remaining wave-cron tasks
        • write HALT marker (next wave refuses to start)
```

## Gate-by-gate behaviour

### 1. Route-conflict check (the Wave 1 bug)

The exact issue that failed Wave 1: two dynamic segments at the same
depth (`[term]` and `[unit]` both directly under `[year]/`). Next.js
can't pick which handler to run for any matching URL — silent runtime
hang.

`route_conflict_check.py` enforces:

- **Rule A (blocker):** no parent directory may contain more than one
  `[*]` segment child.
- **Rule C (blocker):** no two `page.tsx` files may resolve to the
  same URL after stripping `(group)` route groups.

If either fires, the wave aborts and no push happens.

### 2. Content verification

Binds to `business-docs/exam-board-endorsement/aqa/03-evidence/accuracy-commitment.md`:

- ❌ Grade guarantees
- ❌ Examiner-secret / "hack" claims
- ❌ Fake AQA/Edexcel/OCR/Cambridge endorsement claims
- ❌ Privacy-violating inference claims
- ⚠ `[[placeholder]]` keys still rendering
- ⚠ CJK/Cyrillic leak in any `ar:` field

### 3. tsc --noEmit

Hard fail-closed. Zero TypeScript errors permitted.

### 4. Full Next.js build

Same `next build` Vercel runs, with `NODE_OPTIONS=--max-old-space-size=8192`.
Local OOM is tolerated (workstation has less RAM than Vercel's 60 GB
build box) — only OOM gets a free pass; everything else hard-fails.

### 5. Local smoke test (NEW after Wave 1)

This is the gate that would have caught the Wave 1 regression
**before push**. Runs `next start` against the built output, then
curls every route under `src/app/**/page.tsx` that has no dynamic
segments.

Any 5xx or timeout = hard fail-closed. The local server runs in
~30 seconds; the curl pass takes 2–4 minutes for ~600 static routes.

### 6. Post-deploy audit (NEW)

After the push lands on `origin/main`, Vercel starts a deploy. The
post-deploy gate:

- Waits up to 12 min for Vercel to settle on the new commit.
- Curls all 871 production routes (including dynamic-pattern samples).
- Diffs against the baseline crawl in `data/audit/baseline-crawl.json`.
- Fails closed if any of:
  - Route times out (status `-1`)
  - Route returns 5xx
  - Route gained `[[placeholder]]` markup it didn't have before
  - Previously-passing route now fails

On success, the new crawl becomes the next baseline.

### Auto-rollback

Fires when the post-deploy gate exits with code 2.

- `git revert --no-edit HEAD` — back out the offending commit
- `git push` — Vercel rolls forward to the now-clean state
- `install_wave_schedule.py --remove` — unregisters all remaining
  wave-cron tasks
- Writes `data/waves/HALTED` with the reason; next wave runner sees
  this file and refuses to start

Manual recovery: diagnose the regression, delete the HALT marker,
re-run `install_wave_schedule.py`.

## What you can verify yourself

```powershell
# Last-run state of all waves
Get-Content D:\AI-Agent-Server\agents\english-hub-co\data\waves\state.json | ConvertFrom-Json |
  Select-Object current_wave, last_run_at, started_at

# Per-wave outcome detail
Get-ChildItem D:\AI-Agent-Server\agents\english-hub-co\data\waves\wave-*.json |
  ForEach-Object {
    $w = Get-Content $_ | ConvertFrom-Json
    "{0} | {1,-50} | pre={2} push={3} post={4} OK={5}" -f `
      $w.wave, $w.title,
      ([bool]($w.gates.local_smoke.ok) -and [bool]($w.gates.tsc.ok)),
      $w.push_ok, ($w.post_deploy_rc -eq 0), $w.ok
  }

# Is the chain halted?
Test-Path D:\AI-Agent-Server\agents\english-hub-co\data\waves\HALTED

# Quick site-wide health check
py D:\AI-Agent-Server\agents\english-hub-co\scripts\content_build\full_site_audit.py
```

## When to update the baseline

Only when you have manually verified the current site state is correct.
Easiest path: after each wave passes its post-deploy gate cleanly, the
runner automatically saves the new state as baseline. Manual save:

```powershell
py D:\AI-Agent-Server\agents\english-hub-co\scripts\content_build\post_deploy_audit.py `
    --sha HEAD --save-baseline
```
