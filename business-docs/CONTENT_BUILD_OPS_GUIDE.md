# 48-hour KS3 + EAL Content Build — Ops Guide

> **What this is:** The autonomous 8-wave content build the founder kicked off on 2026-05-14. This guide is for the founder + anyone else who needs to inspect, intervene, abort, or audit it.

## Status quick-look

```powershell
# What state is the build in?
Get-Content D:\AI-Agent-Server\agents\english-hub-co\data\waves\state.json | ConvertFrom-Json | Select-Object started_at, current_wave, last_run_at

# When does the next wave fire?
Get-ScheduledTask -TaskName "EnglishHubWave*" |
    Select-Object TaskName, State,
        @{N='NextRun';E={(Get-ScheduledTaskInfo $_).NextRunTime}} |
    Format-Table -AutoSize

# What happened in each completed wave?
Get-ChildItem D:\AI-Agent-Server\agents\english-hub-co\data\waves\wave-*.json |
    ForEach-Object {
        $w = Get-Content $_ | ConvertFrom-Json
        "{0,-2} {1,-50} verify={2} tsc={3} build={4} push={5} OK={6}" -f `
            $w.wave, $w.title, $w.verify_content_ok, $w.tsc_ok,
            $w.next_build_ok, $w.push_ok, $w.ok
    }
```

## Wave plan summary

| Wave | Fires (Riyadh local) | Title                                | Adds                                                                                       |
|-----:|----------------------|--------------------------------------|--------------------------------------------------------------------------------------------|
|    1 | h+0 (manual)         | Foundation routes + scaffolds        | 17 new routes: 8 KS3 deep-route templates, 5 EAL skill-level + 4 EAL CEFR mock-exam pages |
|    2 | h+6                  | Year 7 deep content                  | Per-unit characters/themes/quotes/context/extract/essay/practice content                   |
|    3 | h+12                 | Year 8 deep content                  | Same shape as Wave 2 for Year 8                                                            |
|    4 | h+18                 | Year 9 deep content                  | Same shape as Wave 2 for Year 9                                                            |
|    5 | h+24                 | EAL skill-banded content             | A2/B1/B2/C1 banded variants per topic (reading/listening/speaking/writing)                 |
|    6 | h+30                 | EAL mock exams                       | A2 Key / B1 Preliminary / B2 First / C1 Advanced mocks                                     |
|    7 | h+36                 | Cross-link + practice + audit        | KS3→GCSE hints, EAL→board hints, link audit, mobile audit                                  |
|    8 | h+42                 | QA hardening + final translations    | Dictionary fill, CJK sweep, end-of-build README                                            |

## Verification gates (every wave)

Each wave is gated by **all three** of these before it can push:

1. **`verify_content.py`** — Source-trace + forbidden-phrase + CJK-leak gate. Binds to `business-docs/exam-board-endorsement/aqa/03-evidence/accuracy-commitment.md` §6 ("What we will never claim"):
   - ❌ Grade guarantees (`guaranteed grade 9`, `get a 9 in 3 weeks`, etc.)
   - ❌ Examiner-secret claims (`hack`, `secret examiners don't tell you`)
   - ❌ Endorsement claims (`AQA-endorsed`, `approved by Edexcel`)
   - ❌ Privacy-violating inference claims (`we infer your emotions`)
   - ⚠ CJK / Cyrillic / Hangul / Devanagari char in any `ar:` field (warning — caught by Wave 8 sweep)
   - ⚠ `[[dictionary.key]]` placeholders rendering (warning)

2. **`tsc --noEmit`** — TypeScript compile across the whole repo.

3. **`npx next build` (with NODE_OPTIONS=--max-old-space-size=8192)** — Same build Vercel runs. Local OOM is tolerated (workstation has less RAM than Vercel's 60GB box) — anything else is a hard fail.

If any gate fails, the wave **does not push**. The failure log is written to `D:\AI-Agent-Server\agents\english-hub-co\data\waves\wave-NN.json` for diagnosis.

## Halt / restart

```powershell
# Stop the schedule (next waves won't fire):
py D:\AI-Agent-Server\agents\english-hub-co\scripts\content_build\install_wave_schedule.py --remove

# Re-install schedule (resets all fire times to +6h, +12h, ... from "now"):
py D:\AI-Agent-Server\agents\english-hub-co\scripts\content_build\install_wave_schedule.py

# Manually run a single wave:
cd D:\AI-Agent-Server\agents\english-hub-co
py scripts\content_build\wave_runner.py --wave 3
```

## Files of interest

| Path                                                          | What it does                                                  |
|---------------------------------------------------------------|---------------------------------------------------------------|
| `business-docs/CONTENT_BUILD_PLAN_KS3_EAL.md`                 | The full 48h plan (anchor authorities, governance, etc.)      |
| `business-docs/CONTENT_BUILD_OPS_GUIDE.md` (this file)        | Operational quick-look + halt/restart                         |
| `business-docs/CONTENT_BUILD_KS3_EAL_RESULTS.md`              | End-of-build summary (written by Wave 8)                      |
| `D:\AI-Agent-Server\agents\english-hub-co\scripts\content_build\` | All pipeline scripts (wave_runner, generators, verifier)  |
| `D:\AI-Agent-Server\agents\english-hub-co\data\waves\`        | Per-wave state + verify_content reports                       |

## Notes for the founder

- **Local Ollama** drives every generator — no Anthropic API spend.
- **Each wave commits separately** with a clear message naming the wave + scope.
- **Vercel auto-deploys** every commit; the live site gets a fresh deploy every ~6 hours during the build.
- **`accuracy-commitment.md` is honoured** by the verify_content gate — anything fishy fails closed and the wave doesn't push.
- **No synthetic data** by construction: generators only RESHAPE typed lib data (already in `src/lib/ks3/year-N.ts` and `src/lib/eal/curriculum.ts`) authored against the DfE National Curriculum + CEFR. Ollama is used for AR translation + UI prose, not for inventing facts.
