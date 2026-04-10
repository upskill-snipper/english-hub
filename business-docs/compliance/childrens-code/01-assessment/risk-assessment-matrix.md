# Children's Code — Risk Assessment Matrix

**Service:** The English Hub
**Date:** 2026-04-10
**Owner:** Data Protection Lead
**Methodology:** ICO DPIA approach, likelihood × impact on a 1–5 scale, 25-point matrix

---

## 1. Scale definitions

### Likelihood

| Score | Label | Meaning |
|---|---|---|
| 1 | Rare | Would require multiple independent failures; not credible under current design |
| 2 | Unlikely | Requires a specific, foreseeable but uncommon sequence |
| 3 | Possible | Could occur once or twice a year under normal operation |
| 4 | Likely | Would be expected to occur several times a year |
| 5 | Almost certain | Would be expected to occur monthly or more |

### Impact (on child users)

| Score | Label | Meaning |
|---|---|---|
| 1 | Minimal | Annoyance, momentary confusion; no lasting effect |
| 2 | Minor | Short-term distress, limited data exposure; recoverable |
| 3 | Moderate | Meaningful privacy loss; welfare concern; recoverable with effort |
| 4 | Major | Significant privacy / welfare / safety harm; hard to reverse |
| 5 | Severe | Grave welfare or safety harm; legal, physical, psychological; irreversible |

### Risk score = Likelihood × Impact

| Score | Band | Action |
|---|---|---|
| 1–4 | Low (green) | Monitor; no mandatory action |
| 5–9 | Medium (yellow) | Mitigate within 90 days; track |
| 10–14 | High (orange) | Mitigate within 30 days; escalate to Founder |
| 15–25 | Critical (red) | Immediate mitigation; feature freeze if necessary; consider ICO prior consultation |

---

## 2. Risk register — per Children's Code standard

### Standard 1 — Best interests of the child

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Commercial optimisation (retention, conversion) quietly erodes child wellbeing | 3 | 3 | 9 | Med | Mandatory "child impact" check in feature specs; no advertising business model; research with partner schools | 4 (Low) |
| Feature decisions made without age-specific input | 3 | 2 | 6 | Med | Youth/teacher consultation before launch of streaks, leaderboards, social features | 3 (Low) |

### Standard 2 — DPIAs

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| High-risk processing goes live without DPIA | 2 | 4 | 8 | Med | DPIA required in release checklist; CI check blocks deploy if new personal data category introduced | 2 (Low) |
| DPIA exists but is out of date | 3 | 3 | 9 | Med | Annual review cadence; review trigger on sub-processor/feature change | 3 (Low) |

### Standard 3 — Age appropriate application

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Adult-mode weakening of protections applied to an actual child | 3 | 4 | 12 | High | Default all accounts to child-mode; no self-declaration path downgrades settings | 4 (Low) |
| Under-13 gains access without parental consent via lying on age gate | 4 | 3 | 12 | High | Age gate + neutral wording + no obvious "click 18+" nudge; under-13 accounts require parent email confirmation | 6 (Med) |
| School-provisioned accounts misclassified by year group | 2 | 3 | 6 | Med | Teacher-confirmed roster; year-group change audit | 3 (Low) |

### Standard 4 — Transparency

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Child does not understand what data is collected or why | 4 | 3 | 12 | High | Child-friendly privacy notice; just-in-time bite-size notices; icons | 4 (Low) |
| Privacy notice out of sync with actual processing | 2 | 4 | 8 | Med | Change log; quarterly audit; automated "claims vs. live" checks (planned) | 4 (Low) |

### Standard 5 — Detrimental use of data

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Notifications encourage compulsive use affecting sleep / wellbeing | 3 | 3 | 9 | Med | Daily cap, quiet hours 21:00–07:00, silent by default, off by default | 3 (Low) |
| Streaks / gamification create anxiety-inducing loss aversion | 4 | 3 | 12 | High | Streaks off by default for under-16s (planned); no "you lost your streak!" punishment copy | 4 (Low) |
| Essay content used for advertising / marketing profiling | 1 | 5 | 5 | Med | Architectural control — no ad SDKs; explicit policy | 1 (Low) |
| Leaderboards expose children to peer comparison harm | 3 | 3 | 9 | Med | Opt-in only, school-scoped, first-name only, teacher kill-switch | 3 (Low) |

### Standard 6 — Policies and community standards

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Published standards not enforced in practice | 2 | 3 | 6 | Med | Quarterly internal audit; published enforcement log | 3 (Low) |
| Inappropriate content in peer-visible essays (bullying, hate) | 3 | 4 | 12 | High | Peer sharing off by default; moderation queue for any public share; keyword + report flow | 6 (Med) |

### Standard 7 — Default settings

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| New feature ships with a weak privacy default | 3 | 4 | 12 | High | Defaults schedule in `02-policies/default-privacy-settings.md`; release checklist item | 4 (Low) |
| Defaults silently reset on account migration | 2 | 3 | 6 | Med | Settings migration tests; audit logs | 3 (Low) |

### Standard 8 — Data minimisation

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Field collected "just in case" not tied to a feature | 4 | 2 | 8 | Med | Data-field → feature register; quarterly purge | 4 (Low) |
| Retention exceeded on essays of former users | 3 | 3 | 9 | Med | Automated deletion job (planned) | 3 (Low) |
| Analytics events carry more PII than required | 4 | 3 | 12 | High | Allowlist of properties; lint on new events; clean-up ticket open | 6 (Med) |

### Standard 9 — Data sharing

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Sub-processor breach exposes child data | 3 | 4 | 12 | High | DPAs with all processors; minimum-necessary fields; EU/UK regions; encryption in transit + at rest | 6 (Med) |
| Data accidentally sent to a US/non-adequacy region | 2 | 4 | 8 | Med | Regional pinning; IaC region constraints; contractual SCCs as fallback | 4 (Low) |
| School discloses student data back to parents / other staff beyond what they're entitled to | 3 | 3 | 9 | Med | School data sharing agreement; teacher role scoping | 4 (Low) |

### Standard 10 — Geolocation

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Precise location leaked via HTML5 geolocation call | 1 | 4 | 4 | Low | Architectural — no geolocation API usage; CSP blocks | 1 (Low) |
| Coarse location (IP) used beyond security purpose | 2 | 2 | 4 | Low | Policy; data register | 2 (Low) |

### Standard 11 — Parental controls

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Parent monitors child without the child knowing | 3 | 3 | 9 | Med | Persistent "parent linked" banner; list of parent-visible data points in child-facing notice | 3 (Low) |
| Abusive parent uses controls for coercive monitoring | 2 | 4 | 8 | Med | Limited monitoring scope; child retains data rights; safeguarding signposting | 4 (Low) |
| Unauthorised adult claims to be a parent | 2 | 4 | 8 | Med | Parent email confirmation + age-checked payment; school route preferred | 4 (Low) |

### Standard 12 — Profiling

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| AI marker produces an unfair grade that is treated as final | 3 | 4 | 12 | High | Teacher-in-the-loop for anything reported; "this is a suggestion, not a decision" copy; appeal flow | 4 (Low) |
| Adaptive practice creates filter bubble limiting curriculum exposure | 3 | 2 | 6 | Med | Fixed-syllabus fallback; coverage guarantees; user switch | 3 (Low) |
| Model trained on child essays without permission | 1 | 5 | 5 | Med | Zero-retention AI provider contract; prohibition in vendor DPA | 1 (Low) |

### Standard 13 — Nudge techniques

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Cookie banner uses dark pattern | 5 | 2 | 10 | High | Fix in progress — equal-weight Accept/Reject | 2 (Low) |
| "Share your score!" encourages sharing to social platforms | 3 | 3 | 9 | Med | Feature gated off for under-16s (planned) | 3 (Low) |
| Onboarding nudges pupils to enable notifications | 2 | 2 | 4 | Low | Neutral copy; no "required" framing | 2 (Low) |

### Standard 14 — Connected toys/devices

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Standard not materially applicable | 1 | 1 | 1 | Low | N/A | 1 (Low) |

### Standard 15 — Online tools

| Risk | Likelihood | Impact | Score | Band | Mitigation | Residual |
|---|---|---|---|---|---|---|
| Child does not know how to exercise rights | 4 | 3 | 12 | High | "Your data" top-level menu on every screen; plain-language labels; one-tap flows | 4 (Low) |
| Reports of concern not actioned within SLA | 2 | 4 | 8 | Med | 72-hour triage SLA; DPO mailbox; audit trail | 3 (Low) |
| Account deletion fails silently leaving residual data | 2 | 4 | 8 | Med | End-to-end deletion test; confirmation email; audit log | 3 (Low) |

---

## 3. Top risks summary (post-mitigation residuals ≥ 4)

| # | Risk | Standard | Residual score |
|---|---|---|---|
| R-01 | Under-13 defeats age gate | 3 | 6 (Med) |
| R-02 | Inappropriate peer-visible essay content | 6 | 6 (Med) |
| R-03 | Analytics events carry over-collected PII | 8 | 6 (Med) |
| R-04 | Sub-processor breach exposes child data | 9 | 6 (Med) |

All four sit in the "Medium" residual band. None exceed the ICO threshold for mandatory prior consultation (Article 36(1) UK GDPR). They are tracked in `gap-analysis.md`.

## 4. Review log

| Date | Reviewer | Changes |
|---|---|---|
| 2026-04-10 | Data Protection Lead | Initial draft |
