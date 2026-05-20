# NIA certification — readiness note

> **Status:** OPTIONAL — not on the critical path for PDPPL compliance, but the only NCSA-issued certificate available that schools can independently verify.
> **Owner:** Calum Johnston (DPO)
> **Last reviewed:** 2026-05-20
> **Decision required:** whether to pursue it as a procurement asset for Qatar schools.

---

## What NIA certification actually is

The **National Information Assurance (NIA) Policy** is Qatar's national cyber-security standard, administered by NCGAA. NIA certification verifies that an organisation's information-security management aligns with the NIA Policy — it is broadly equivalent in spirit to ISO/IEC 27001 with Qatar-specific overlays.

**NIA certification is NOT the same as PDPPL compliance.** PDPPL is the data-protection law; NIA is the security framework. The two adjacent, often confused. We satisfy PDPPL via the PDMS (`business-docs/compliance/qatar-pdppl/00-pdms-index.md`); NIA certification is a separate, voluntary cybersecurity attestation.

There is no general "PDPPL accreditation" issued by NCSA (DLA Piper country guide confirms). NIA is the only NCSA-issued certificate available that a Qatar school can independently verify via the NCGAA assurance portal.

## Why we might want it

- It is **the only formal NCSA-issued mark** we can put on the for-schools / for-parents pages and a procurement deck.
- Qatar schools — especially government, semi-government (Qatar Foundation network), and large independent schools — increasingly ask for NIA in security questionnaires.
- It puts a third-party check between us and our own security claims (currently we self-assert TLS 1.3, AES-256, Argon2id, etc.).

## Why we might not

- The certification timeline is typically **6–12 months** end-to-end (gap analysis → remediation → independent assessor audit → NCGAA grant).
- Cost is **USD 25k–80k** depending on the assessor, scope, and remediation work needed.
- Some of the NIA controls assume an on-prem / corporate-IT estate, which doesn't map cleanly to a serverless SaaS. The scoping conversation with the assessor is non-trivial.
- For a UK-incorporated controller that doesn't have a Qatar establishment, the value-per-pound is lower than for a Qatar-incorporated entity — most Qatari schools accept ISO/IEC 27001 + a Qatari legal opinion as a substitute.

## Decision logic

| If… | Then… |
|---|---|
| You commit to a Qatar entity (subsidiary, branch, or QFC registration) within the next 12 months | NIA becomes high-value. Start the gap analysis now in parallel with the Qatar entity setup. |
| You stay UK-only and serve Qatari schools as a foreign controller | ISO/IEC 27001 (or SOC 2 Type II) plus the Qatari legal opinion is the better-value path. Defer NIA. |
| A specific Qatar school customer makes NIA a contractual requirement before sign-off | Negotiate a path: time-limited grace, ISO 27001 in lieu, or accept the timeline. |

## Recommended action (today)

1. **Defer.** Do not pursue NIA until either (a) a paying Qatar school customer requires it, or (b) you commit to a Qatar entity. The current PDPPL evidence pack (PDMS + Article 16 permit + Qatari legal opinion) is the procurement evidence Qatari schools actually ask for.
2. **Maintain ISO/IEC 27001 readiness as the international substitute.** Most of the NIA control families map to ISO 27001 control families; getting 27001 first means an NIA audit later is mostly a gap fill, not a fresh build.
3. **Re-review this note** annually, or on the first Qatar school RFP that makes NIA a hard requirement.

## If we do pursue NIA — entry points

- NCGAA NIA Certification overview: <https://assurance.ncsa.gov.qa/en/certification/nia>
- NCGAA accreditation index: <https://assurance.ncsa.gov.qa/en/accreditation>
- Pre-engagement: contact NCGAA via the stakeholder services portal at <https://ncsa.gov.qa/en/pages/personal-data-privacy-stakeholders-services> to confirm scope and the current accredited-assessor list.

## What this note does *not* commit us to

- Spending money on NIA today
- Stating publicly that we hold NIA certification (we do not — never claim this)
- Stating publicly that we are "pursuing" NIA (the website should make no such claim unless and until a real engagement starts)
