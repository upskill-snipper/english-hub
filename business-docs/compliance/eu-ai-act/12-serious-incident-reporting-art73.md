# 12 — Serious Incident Reporting Procedure (Art 73 EU AI Act)

**Regulation:** Regulation (EU) 2024/1689, Article 73 (reporting of serious incidents by providers of high-risk AI systems to the market surveillance authorities of the Member States where the incident occurred).
**System:** "The English Hub" — high-risk, **Annex III(3)(b)**. **Provider (reporting entity):** The English Hub Ltd, `cj@upskillenergy.com`.
**Document status:** v0.1 DRAFT — pending legal sign-off.
**Cross-references:** doc 02 (RMS), doc 11 (PMM — detection feed), doc 08 (deployer instructions — Deployers must report to the Provider), doc 09 (deployer Art 26(4) duty), doc 15 (DPIA), `business-docs/compliance/cyber-essentials/02-policies/incident-response-policy.md` (existing security IR — this AI procedure runs alongside it, it does not replace it).

> Scope note: Art 73 obligations apply to incidents **within the EU** once the system is placed on the EU market. This procedure also governs the GDPR personal-data-breach interface (children's data — UK GDPR/EU GDPR Art 33–34 run in parallel with their own 72-hour clock and authorities).

---

## 1. Definition — what is a "serious incident" for THIS system

Per Art 3(49), a "serious incident" is an incident or malfunctioning of an AI system that directly or indirectly leads to any of: (a) death or serious harm to a person's health; (b) serious and irreversible disruption of critical infrastructure; (c) infringement of fundamental-rights-protecting Union law obligations; (d) serious harm to property or the environment.

**Concrete triggers for an education marking system (any ONE = treat as a candidate serious incident):**

| # | Scenario | Why it qualifies |
|---|---|---|
| S1 | An essay contains a safeguarding disclosure (self-harm, abuse, suicidal ideation) and the system processes/returns a mark with **no escalation** because there is **no disclosure detector** (doc 08 L6), and a minor is harmed or put at risk | Serious harm to health (a) / fundamental rights of the child (c) |
| S2 | Systematic, materially wrong marking/predicted grades used by a Deployer for a decision affecting pupils (setting, tiering, predicted grades submitted externally) causing detriment | Infringement of rights / right to education (c) |
| S3 | Demonstrated discriminatory bias against EAL/SEND/protected groups in marking | Breach of Union non-discrimination law (c) |
| S4 | Personal-data breach exposing children's essays/identifiers (incl. via the Anthropic/US path or a sub-processor) | Fundamental rights (c) + parallel GDPR Art 33/34 |
| S5 | The **false "Reviewed by humans" claim** (doc 10) or another deceptive transparency defect materially misleads pupils/parents into relying on an unreviewed AI grade, causing detriment | Fundamental rights / consumer-protection Union law (c) |
| S6 | Harmful AI output to a minor (abusive, self-harm-encouraging, grossly inappropriate feedback) reaching a pupil | Serious harm to health / dignity (a)/(c) |
| S7 | A malfunction (prompt-injection breakout, mass mis-scoring after a model/version change) with foreseeable serious impact | Malfunction within Art 3(49) |

A **widespread infringement** or an incident affecting many minors is escalated with priority. Near-misses and incidents not meeting the threshold are still logged in the RMS/PMM (doc 02/doc 11) and may inform corrective action.

---

## 2. Timelines (Art 73(2)–(4))

| Trigger | Report to | Deadline |
|---|---|---|
| Serious incident, **general rule** | Market surveillance authority of the Member State(s) where the incident occurred | **Immediately** after the provider establishes a causal link (or reasonable likelihood) to the AI system, and **no later than 15 days** after awareness |
| Serious incident = **death of a person** | As above | **Immediately**, at the latest **10 days** after awareness |
| **Widespread infringement** or serious disruption of critical infrastructure | As above | **Immediately**, at the latest **2 days** after awareness |
| Initial report incomplete | As above | Submit **initial** report within the deadline, then a **complete** report without undue delay |
| Personal-data breach (parallel) | UK ICO and/or EU lead supervisory authority; data subjects if high risk | **72 hours** (GDPR Art 33); without undue delay to individuals (Art 34) |
| Internal "stop the harm" actions | n/a | **Immediately on awareness**, before/independent of regulator deadlines |

"Awareness" = the moment any Provider personnel, or a Deployer report received by the Provider, gives reasonable grounds to suspect a §1 trigger.

---

## 3. Roles & responsibilities

| Role | Holder | Responsibility |
|---|---|---|
| **Incident Lead / AI Compliance Owner** | **[TO BE APPOINTED — placeholder]** (`human-action-checklist.md`) | Owns the Art 73 process end-to-end; decides "serious incident: yes/no"; submits regulator reports |
| Founder / accountable executive | Calum Jardine, `cj@upskillenergy.com` | Ultimate accountability; authorises feature suspension; signs regulator submissions |
| Data Protection Officer | **[DPO_NAME — placeholder]** | Runs the parallel GDPR Art 33/34 assessment; ICO/SA liaison |
| Designated Safeguarding Lead interface | **[DSL — placeholder]** + the Deployer's DSL | Child-safety actions for S1/S6 (Deployer's DSL leads on the pupil; Provider supports) |
| Engineering on-call | Provider eng | Containment: suspend the AI function, preserve logs, root-cause |
| Legal counsel | **[EXTERNAL COUNSEL — placeholder]** | Reviews classification, regulator wording, AR coordination |
| EU Authorised Representative (Art 22) | **[AR — placeholder]** | Required if no EU establishment; conduit to authorities (doc 16, `human-action-checklist.md`) |

---

## 4. Procedure (step-by-step)

1. **Detect & log (T0).** Source: PMM signals (doc 11 M5/M9/M10), Sentry, support inbox, or a Deployer Art 26(4) report. Create an incident record (template §5); start the clock.
2. **Immediate containment.** Where harm is ongoing or likely: suspend the affected AI function (organisational kill-switch / disable feature flag), preserve all logs (`marking_submissions`, `HumanReviewRequest`, Sentry, audit trail), do not delete data.
3. **Triage & classify (≤24h target).** Incident Lead + counsel + DPO assess §1 triggers and Art 3(49); decide serious-incident yes/no and which deadline (§2) applies; assess parallel GDPR breach.
4. **Child-safety path (S1/S6).** Immediately engage the affected Deployer's DSL and the Provider DSL interface; follow safeguarding-first actions independent of regulatory timelines.
5. **Notify Deployers** affected (so they can act under Art 26 and inform pupils/parents) and instruct interim risk-control.
6. **Report to market surveillance authority** within the §2 deadline using §5; submit initial-then-complete if needed; coordinate via the Art 22 AR if applicable.
7. **GDPR parallel:** DPO files ICO/SA breach notification within 72h if personal data is involved; notify data subjects if high risk.
8. **Investigate & corrective action (Art 20).** Root cause; corrective/withdrawal/recall measures; RMS update (doc 02); DPIA/FRIA re-trigger (doc 15/doc 09); technical-file update (doc 04); EU-DB entry update if conformity-relevant (doc 14).
9. **Cooperate** with the authority's investigation; do not destroy evidence; provide records on request (Art 26(8) for Deployers; provider equivalent).
10. **Close & learn.** Post-incident review; preventive measures into the backlog; update this procedure and PMM thresholds.

---

## 5. Serious-incident report template (internal record + basis for regulator submission)

```
SERIOUS INCIDENT RECORD — The English Hub (Annex III(3)(b))
Incident ID:                 [SI-YYYYMMDD-nn]
Date/time aware (T0, UTC):   [...]
Detected via:                [PMM signal / Sentry / support / Deployer report]
Reporter:                    [name/role or Deployer]
System & version:            The English Hub AI Marking; model claude-sonnet-4-20250514; release [tag]
Member State(s) of incident: [...]
Deployer(s) affected:        [school(s) / N/A B2C]
Data subjects affected:      [count; minors yes/no; ages; EAL/SEND if known]

WHAT HAPPENED (facts):       [...]
§1 TRIGGER MATCHED:          [S1..S7]
SERIOUS INCIDENT?            [Yes / No] — Art 3(49) limb: [a/b/c/d]; reasoning: [...]
APPLICABLE DEADLINE:         [15d / 10d (death) / 2d (widespread)] — due: [date]
HARM (actual/potential):     [...]
CAUSAL LINK to AI system:    [established / likely / under investigation]

PERSONAL DATA BREACH?        [Yes/No] — GDPR Art 33 due: [T0+72h]; authority: [ICO/EU SA]
SAFEGUARDING ENGAGED?        [Yes/No] — Deployer DSL + Provider DSL actions: [...]

IMMEDIATE CONTAINMENT:       [feature suspended? logs preserved? Deployers notified?]
ROOT CAUSE (interim/final):  [...]
CORRECTIVE ACTION (Art 20):  [...]
RMS / DPIA / FRIA updated:   [refs]
TECH FILE / EU-DB updated:   [refs]

REGULATOR SUBMISSION
  Authority:                 [Member State market surveillance authority — see §6]
  Submitted (initial):       [date/ref]
  Submitted (complete):      [date/ref]
  AR (Art 22) involved:      [name / N/A]
Incident Lead sign-off:      [name, date]
Founder sign-off:            [name, date]
```

---

## 6. Market surveillance authority contacts (placeholders)

The provider reports to the **national market surveillance authority** of the Member State(s) where the incident occurred (Art 73(1), Art 70). To be confirmed by counsel per target market and kept current:

| Member State (target) | Designated AI market surveillance authority | Contact | Status |
|---|---|---|---|
| `[Ireland]` | `[per national designation under Art 70 — TBC]` | `[portal/email]` | **Placeholder — counsel to confirm** |
| `[Germany]` | `[per national designation — TBC]` | `[…]` | **Placeholder** |
| `[…each target Member State…]` | `[…]` | `[…]` | **Placeholder** |
| EU AI Office (coordination / GPAI matters) | European Commission AI Office | `[official channel — TBC]` | **Placeholder** |
| UK (parallel, if UK users) — ICO for data breach | Information Commissioner's Office | `https://ico.org.uk` | Known |

**GAP — owner: Counsel; confirm the designated Art 70 authority and reporting portal for each EU target market and the AI Office serious-incident channel; target: before EU placement / 2 Aug 2026.** Reporting may use the electronic template/portal the AI Office/authorities provide once available.

## 7. Declared gaps (no invented controls)

| Gap | Owner | Target |
|---|---|---|
| No incident-detection automation for S1/S6 (no disclosure detector) | Provider eng / Deployer policy interim | doc 15 remediation |
| Incident Lead / DPO / DSL / counsel / AR all unappointed | Founder/counsel | Immediate (`human-action-checklist.md`) |
| Authority contacts are placeholders | Counsel | Before EU placement |
| Audit-log persistence incomplete (evidence preservation) | Provider eng | Before 2 Aug 2026 |

*End of doc 12.*
