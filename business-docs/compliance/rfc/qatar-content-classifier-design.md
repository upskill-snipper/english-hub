# Qatar-Aware Content Classifier — Design (PDPPL Remediation 3)

**Status**: draft v1.0 · authored 2026-05-12.
**Owner**: Engineering + DPO.
**Trigger**: AI Governance page commit 8f64766 — we render AI-generated content into Qatar without jurisdiction-aware pre-publication filtering.

## 1. Categories of concern (delta from UK/EU norms)

Qatar's Cybercrime Law 14/2014 (notably Arts. 6, 7, 8) plus the Penal Code create exposure beyond UK Defamation Act / Online Safety Act baselines. The classifier targets six categories:

| # | Category | Qatar-specific trigger |
|---|----------|------------------------|
| C1 | Defamation of individuals | Truth is **not** a complete defence; honour/dignity offences criminalised. Threshold materially lower than UK. |
| C2 | Religious offence | Any content blasphemous toward Islam, derogatory toward Abrahamic faiths, or visually depicting the Prophet (incl. cartoons, AI-generated imagery, literary descriptions). |
| C3 | Public morality | Approving discussion of extramarital sex, alcohol, drug use, gambling, LGBTQ+ relationships portrayed positively, nudity, profanity in Arabic or English. |
| C4 | Public order | Criticism of the Emir, ruling family, government, GCC heads of state, judiciary, armed forces. Includes satire. |
| C5 | National security | State secrets, military/installation imagery, content prejudicing foreign relations or "social peace". |
| C6 | Sectarian incitement | Sunni/Shia divisive framing, tribal incitement. |

## 2. Detection approach — two-stage

**Stage 1: rule-based denylist (fast path, ~3 ms)**
- Regex/keyword denylist per category with Arabic + English variants
- Named-entity lists: Emir Tamim bin Hamad, Al Thani family members, current ministers, GCC heads of state (auto-refreshed quarterly)
- Phrase patterns: e.g. `\b(Prophet|Muhammad)\b.{0,50}\b(cartoon|drawing|image|depict)\b` (C2)
- Output: hard BLOCK on unambiguous matches, otherwise route to Stage 2

**Stage 2: Claude Haiku classifier (nuanced path, ~400 ms, ~$0.0003/call)**

Haiku 4.5 with structured JSON output evaluates context. Sonnet reserved for human-review queue augmentation.

**Verdicts**: `PASS`, `FLAG` (human review), `BLOCK` (suppress + log).

## 3. Haiku prompt skeleton

```text
SYSTEM:
You are a pre-publication content safety classifier for an English-language
education SaaS serving students in the UK and Qatar. You assess whether
content is safe to render to a user whose jurisdiction is Qatar under
Cybercrime Law 14/2014 and the Penal Code.

You DO NOT moderate from a Western liberal viewpoint. You assess against
Qatari law and prevailing public-morality standards, while preserving
legitimate academic discussion of literary set texts (which is permitted).

Evaluate the CONTENT against these categories:
  C1 Defamation of named individuals (lower threshold than UK)
  C2 Religious offence (Islam, Abrahamic faiths, Prophet depictions)
  C3 Public morality (approving framing of extramarital sex, alcohol,
     drugs, LGBTQ+ relationships, gambling)
  C4 Public order (criticism of Emir, ruling family, GCC heads, judiciary)
  C5 National security / state secrets
  C6 Sectarian incitement

Distinguish:
  - APPROVING / ADVOCATING framing  → likely FLAG or BLOCK
  - DESCRIPTIVE / ACADEMIC / LITERARY discussion → likely PASS
  - Set-text references (Gatsby, Othello, A View from the Bridge etc.)
    are PASS when discussed analytically.

Return ONLY this JSON:
{
  "verdict": "PASS" | "FLAG" | "BLOCK",
  "categories_triggered": ["C1"|"C2"|...],
  "confidence": 0.0-1.0,
  "rationale": "<=2 sentences",
  "academic_context_detected": true|false,
  "suggested_redaction": "<string or null>"
}
```

Determinism: `temperature=0`, JSON mode on. If Haiku refuses, treat as FLAG (fail-safe).

## 4. Hook point

**Build-time (CI step)** for static blog/SEO/marketing content — one pass per article at publish, cached forever.

**Render-time middleware** for per-user AI output (essay marking, model answers, vocabulary explainer) — wraps the Anthropic call response before the SSE stream reaches the client.

```ts
// app/api/mark/route.ts
import { classifyForJurisdiction } from "@/lib/content-safety/qatar"

export async function POST(req: Request) {
  const { essay, userId } = await req.json()
  const user = await getUser(userId)
  const aiResponse = await anthropic.messages.create({...})
  const draftMarking = aiResponse.content[0].text

  if (user.jurisdiction === "QA") {
    const verdict = await classifyForJurisdiction(draftMarking, {
      feature: "essay_marking",
      ageBand: user.ageBand,
      setTextRef: detectSetText(essay),
    })
    if (verdict.verdict === "BLOCK") {
      await auditLog.record({ userId, verdict, draftMarking })
      return Response.json({
        body: "[Marking unavailable in your region — a teacher will review.]",
        flagged: true,
      })
    }
    if (verdict.verdict === "FLAG") {
      await reviewQueue.enqueue({ userId, verdict, draftMarking, sla: "24h" })
      return Response.json({
        body: "Your marking is being reviewed by a teacher and will be available within 24 hours.",
        pending: true,
      })
    }
  }
  return Response.json({ body: draftMarking })
}
```

## 5. Editorial-override workflow

- **FLAG** routes to internal queue (`qa_review_queue` Supabase table). Reviewer sees: payload, classifier verdict, categories, suggested redaction. 24-hour SLA. Actions: `approve_as_is`, `approve_with_redaction`, `block`.
- **BLOCK** silently substitutes neutral string. Never reveal which category was hit (anti-signalling). Audit row written immediately.
- **Audit log** append-only: timestamp, user_id, jurisdiction, feature, verdict, categories, content_hash (full content only on BLOCK pending DPO review, retained 90 days).
- DPO owns the SOP for reviewers.

## 6. False-positive handling

- **Set-text whitelist**: maintained list of GCSE/IGCSE/A-level set texts (AQA, Edexcel, Cambridge International, OCR). Detected via title/author entity match.
- **Academic-context detector**: feature in Haiku prompt (`academic_context_detected`) + regex on essay-style markers ("the author uses…", "in chapter X…", line references, quotation marks).
- **Permitted analytical frame**: Daisy's drinking in *Gatsby*, Iago's incitement in *Othello*, sexual themes in *A Streetcar Named Desire* — all PASS when surrounding text is analytical.
- **Blocked even in academic frame**: visual generation of the Prophet (any context), positive personal endorsement of category C3 behaviours, direct insult of named individuals C1/C4.
- **Tuning loop**: weekly review of last 7 days' FLAGs by DPO + Qatari editorial consultant.

## 7. Local-jurisdiction caveat

We cannot guarantee zero exposure. Two-stage filtering catches the obvious and the moderately nuanced; it does not catch novel adversarial inputs, evolving political sensitivity, or an Emir-family relative joining the news cycle between quarterly entity-list updates. **Residual risk: Medium.** Owner: DPO. Mitigation: keep a Qatar legal counsel on retainer for incident response; preserve audit logs to demonstrate a reasonable, documented filtering programme if challenged.
