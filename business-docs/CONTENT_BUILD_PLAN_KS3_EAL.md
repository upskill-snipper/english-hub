# 48-Hour Autonomous Content Build — KS3 + EAL

> **Status:** active build — kicked off 2026-05-14
> **Cadence:** 8 deploy waves, one every 6 hours, over 48 hours
> **Drivers:** local Ollama (qwen2.5:14b primary, llama3.1:8b fallback) at `D:\AI-Agent-Server\agents\english-hub-co\scripts\` — no Anthropic API spend
> **Governance:** binds to `business-docs/exam-board-endorsement/aqa/03-evidence/accuracy-commitment.md` + `compliance/childrens-code/03-dpias/dpia-ai-features.md`

## Goal

Bring KS3 and EAL to **the same depth, format, and learning-opportunity surface area as the GCSE / IGCSE exam-board set-text pages**, so a Year 7 student visiting `/ks3/year-7/term-1/...` gets the same caliber of revision material as a Year 11 student studying Macbeth, and an Arabic L1 student visiting `/eal/word-order` gets the same caliber as one studying Edexcel IGCSE.

The current state:
- **KS3 lib data:** 10.5k lines (`year-7.ts` + `year-8.ts` + `year-9.ts` carry weekly lesson plans, half-term assessments, key vocabulary, skill codes, end-of-KS3 standards) — but presentation surface is only **8 routes** (landing, [year], [year]/[term], [year]/[term]/[week], skills, rubrics, end-of-ks3, layout).
- **EAL lib data:** 1.2k lines, **10 topics** with concept + examples + errors + exercises — presentation is just `/eal` and `/eal/[slug]`.
- **GCSE set texts for comparison:** Macbeth alone has **12 routes** (`act-1`, `act-2`, `act-3`, `acts`, `characters`, `context`, `essay-plans`, `extract-walkthrough`, `key-quotes`, `landing`, `read`, `themes`). Each route is 200–2,500 lines of curated content.

## Anchor authorities (no synthetic content)

Every fact must trace back to one of these:

1. **DfE National Curriculum for KS3 English** — `https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study`
2. **AQA / Edexcel / OCR / Eduqas / Cambridge GCSE & IGCSE specifications** — already on file
3. **Public-domain set-text editions** — Shakespeare, Dickens, Brontë, Stevenson, Priestley (all out of copyright). Quotations are verified against canonical editions.
4. **Common European Framework of Reference for Languages (CEFR)** — `https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions` for EAL banding
5. **Cambridge English Young Learners + A2 Key / B1 Preliminary / B2 First specifications** — for EAL skill descriptors
6. **British Council LearnEnglish + LearnEnglish Teens** — for EAL methodology + topic taxonomy (no copying — methodology only)

**No fact gets shipped without one of these listed as a source comment in the data file.**

## Forbidden by site rules (`accuracy-commitment.md`)

- ❌ Grade guarantees ("get a 9 in three weeks")
- ❌ Examiner-secret claims ("the hack examiners don't tell you")
- ❌ AQA / Edexcel / OCR endorsement claims (we are not endorsed)
- ❌ Quotations that aren't in the canonical text
- ❌ Spec references that don't match the live published spec
- ❌ Past-paper question reproduction without attribution and within copyright

## Hard constraints

- ✅ **All content bilingual** — every user-facing string has EN + AR (Khaleeji)
- ✅ **Two-tier verification** — content auto-validated by `verify_content.py`, then human-spot-checked by the user before each wave goes live
- ✅ **CJK/Cyrillic leak filter** — model output passed through `clean_content_ts.py`
- ✅ **`tsc --noEmit` + `next build` MUST pass** before each push to Vercel
- ✅ **Per-wave commit message** lists exactly which routes/files landed and which sources back each fact
- ✅ **AI-suggestion labelling** — every AI-generated micro-feedback area shows the "AI suggestion" badge per the DPIA

## Wave plan (48h / 8 waves @ 6h)

### Wave 1 (h0–h6) — Foundation routes + KS3 set-text scaffold

**KS3 new routes:**
- `/ks3/year-7/[unit]` — per-unit deep dive (currently year-7 has 12 weeks across 6 half-terms; unit = a set-text-equivalent block)
- `/ks3/year-7/[unit]/characters`
- `/ks3/year-7/[unit]/themes`
- `/ks3/year-7/[unit]/key-quotes`
- `/ks3/year-7/[unit]/context`
- `/ks3/year-7/[unit]/extract-walkthrough`
- `/ks3/year-7/[unit]/essay-plans`
- `/ks3/year-7/[unit]/practice` (mini quizzes)
- Same scaffold for `[year=year-8|year-9]`

**EAL new routes:**
- `/eal/[slug]/level/[cefr]` — A2 / B1 / B2 / C1 bands per topic
- `/eal/[slug]/reading` — comprehension passage + questions
- `/eal/[slug]/listening` — transcript + audio script (text-only initially)
- `/eal/[slug]/speaking` — prompts + sample responses + assessment criteria
- `/eal/[slug]/writing` — task + model answer + marking grid
- `/eal/practice/mock-exam-[cefr]` — full mock exams banded by CEFR

### Wave 2 (h6–h12) — Year 7 deep content
Generate full character/themes/quotes/context content for Year 7 set-texts (3 units typical: an autumn novel, a spring poetry sequence, a summer Shakespeare).

### Wave 3 (h12–h18) — Year 8 deep content
Same depth as wave 2 for Year 8 set-texts.

### Wave 4 (h18–h24) — Year 9 deep content
Same depth as wave 2+3 for Year 9 set-texts.

### Wave 5 (h24–h30) — EAL skill-banded content
For each of the 10 EAL topics, generate A2/B1/B2/C1 banded variants with reading/listening/speaking/writing modules.

### Wave 6 (h30–h36) — EAL mock exams
Full A2 / B1 / B2 / C1 mock exams modelled on Cambridge English Qualifications format (R&UoE, Reading, Writing, Listening, Speaking).

### Wave 7 (h36–h42) — Cross-link + practice
Wire KS3 → GCSE progression hints, EAL → exam-board hints, sitewide nav refresh, internal-link audit.

### Wave 8 (h42–h48) — QA hardening + final translations
- Full link crawler (every `<Link>` resolves)
- Mobile responsive audit on every new route (EN + AR/RTL)
- Final dictionary fill for any new keys
- README in business-docs documenting what shipped

## Pipeline architecture

```
scripts/wave_runner.py                — orchestrates one wave end-to-end
    ├── plan_wave.py                  — reads PLAN section, decides what to build
    ├── generate_ks3_unit_content.py  — for each Year/Unit, expands lib data into per-route content
    ├── generate_eal_skill_band.py    — for each Topic/CEFR, expands curriculum into banded content
    ├── clean_content_ts.py            — strips CJK/Cyrillic/Hangul leakage from Arabic output
    ├── verify_content.py              — accuracy gate (quote-match against canonical texts,
                                          spec-citation match against board specs, no-grade-guarantee
                                          word-list, no-hack-claim word-list, source-trace presence)
    ├── tsc_check.py                   — npx tsc --noEmit
    ├── next_build_check.py            — npx next build (Vercel parity)
    ├── git_commit_push.py             — atomic commit/push (skips if any gate failed)
    └── post_wave_status.py            — writes status to D:/AI-Agent-Server/.../waves/<n>.json
```

## Cron schedule

8 cron jobs registered via Anthropic's scheduled-tasks MCP — one fires every 6h to invoke the next wave's runner. Each job is idempotent: re-running a completed wave is a no-op.

## Safety rails

- 🛑 If `verify_content.py` finds a quote that doesn't match its canonical source, **the wave aborts** and writes a flag file. The user gets a Slack/email notification.
- 🛑 If `tsc --noEmit` or `next build` fails, **no push happens.** The wave runner writes the build log to `waves/<n>-failure.log` so a human can diagnose.
- 🛑 If model output contains any of `{grade guarantee, examiner secret, AQA-endorsed, Edexcel-endorsed, OCR-endorsed}`, the content is rejected and re-prompted.
- 🛑 If model output contains any CJK / Cyrillic / Hangul / Devanagari char in an `ar:` field, that entry is replaced with the EN fallback (no broken Arabic in production).
- 🛑 No deploy is fired if the previous deploy is still building on Vercel.

## Deliverables checklist

By end of 48 hours:

- [ ] KS3 routes match the depth of `revision/texts/<set-text>/` exam-board pages (12+ sub-routes per Year/Unit)
- [ ] EAL routes carry CEFR-banded variants of every topic with reading/listening/speaking/writing modules
- [ ] Both have full Khaleeji Arabic translations
- [ ] No `[[placeholder]]` keys rendering in production
- [ ] `tsc --noEmit` clean across the entire repo
- [ ] All 8 Vercel deploys land READY (not ERROR)
- [ ] User receives end-of-build summary on Wave 8 completion with a link to every new route
