# Legitimate Interest Assessments (LIAs)

**The English Hub Ltd**
**Article 6(1)(f) UK GDPR**
**Last reviewed:** `[REPLACE WITH DATE]`
**Owner:** DPO

> Where we rely on **legitimate interests** as our lawful basis (Article 6(1)(f) UK GDPR), we must complete a Legitimate Interest Assessment ("LIA") using the three-part test:
> 1. **Purpose test** — is there a legitimate interest?
> 2. **Necessity test** — is the processing necessary?
> 3. **Balancing test** — do our interests override the rights and interests of the data subject?
>
> Extra caution applies where the data subject is a **child**. Children's interests weigh heavily in the balancing test.

---

## LIA 1 — Security monitoring and abuse prevention

### Purpose test
- **What are you trying to achieve?** Detect and prevent unauthorised access, brute-force attacks, bot traffic, scraping, account takeover, denial of service, and fraudulent account creation.
- **Why do you want to process the data?** To maintain the security and availability of the service for all users.
- **Is there a wider public benefit?** Yes — protecting children's data from bad actors is in everyone's interest and is an expectation under Article 32.
- **Is the interest legitimate?** Yes — it is lawful, real, and specific. Recital 49 UK GDPR expressly acknowledges network and information security as a legitimate interest.

### Necessity test
- **Does the processing actually achieve the purpose?** Yes — without logs and rate-limiting we cannot detect abuse.
- **Is the processing proportionate?** Yes — we collect minimal data (IP, user agent, authentication events) and retain for 90 days.
- **Is there a less intrusive way to achieve the purpose?** No. Consent is not workable because bad actors would opt out. Contract basis does not cover pre-authentication requests.

### Balancing test
- **Whose interests are affected?** All visitors to the service, including children.
- **Nature of data:** IP address, device fingerprint, auth events — low-to-medium sensitivity.
- **Reasonable expectations:** Users expect online services to protect their accounts. Security monitoring is an industry norm.
- **Impact if we do not process:** Service compromise, data breach, potential harm to children.
- **Impact on individuals:** Minimal — no profiling, no targeting, no sharing beyond security vendors under DPAs. Logs are aggregated and pseudonymised where possible.
- **Children specifically:** The processing is in their interests and does not involve any targeting or detrimental use. Any cross-reference to child accounts is made only for abuse investigation.
- **Safeguards:** 90-day retention; access restricted to security team; logs pseudonymised; IPs truncated in analytics.
- **Opt-out / object:** Users can object; we would consider case-by-case but typically this interest overrides objection for the pre-authentication surface.

### Conclusion
**Legitimate interest is the appropriate basis.** Our interests in maintaining a secure service are not overridden by individual interests, and the processing is expected and low-impact.

---

## LIA 2 — Product analytics (pseudonymised, excluding children)

### Purpose test
- **What are you trying to achieve?** Understand how users interact with the product so we can fix bugs, improve UX, and measure reach.
- **Why?** Without analytics, we cannot improve the service based on real data.
- **Legitimate?** Yes — continuous product improvement is a recognised legitimate interest for SaaS businesses.

### Necessity test
- **Achieves the purpose?** Yes — aggregated, pseudonymised event data is sufficient.
- **Proportionate?** Yes — we use PostHog Cloud EU with:
  - Pseudonymised user IDs (no name or email)
  - IP truncation
  - No personally identifying event properties
  - Retention of 12 months rolling
- **Less intrusive alternative?** We considered consent-based analytics; we use consent for marketing cookies on the marketing site (see cookie policy). Pseudonymised product analytics is less intrusive than consent-required personalised analytics.

### Balancing test
- **Subjects affected:** Adult users by default. **Children's accounts are excluded by default** — no behavioural events are recorded for child accounts in the product analytics pipeline.
- **Data nature:** Low sensitivity (pseudonymised events).
- **Reasonable expectations:** Adult users of modern SaaS expect product analytics. We tell them in the privacy notice and cookie policy.
- **Impact:** Very low. No decisions are made about individuals.
- **Children:** Excluded — no balancing required for them because the processing does not occur for child accounts.
- **Safeguards:** Children excluded by default; users can opt out; data stays in EU; PII scrubbing; contract with processor (Art 28).
- **Children's Code Standard 7 (default settings):** compliant — children are default-excluded.
- **Children's Code Standard 12 (profiling):** no behavioural profiling of children.

### Conclusion
**Legitimate interest is appropriate for adults only.** The processing is pseudonymised, low-impact, and expected.

---

## LIA 3 — Service improvement from aggregate learning outcomes

### Purpose test
- **What are you trying to achieve?** Measure how effective different lessons and feedback patterns are at improving student learning outcomes, at the aggregate level.
- **Why?** To build a better product and improve learning for all students.
- **Legitimate?** Yes — education quality improvement is a public benefit.

### Necessity test
- **Achieves the purpose?** Yes — aggregated outcomes allow us to see which lessons work and which don't.
- **Proportionate?** Yes — we work from anonymised aggregates. No individual profile is built for this purpose.
- **Less intrusive?** We do not need individual-level data for this purpose, so we use aggregate/anonymised data where possible.

### Balancing test
- **Subjects:** Students (children).
- **Data nature:** Learning outcome metrics, de-identified.
- **Reasonable expectations:** Students and parents reasonably expect an education service to get better over time.
- **Impact:** None at an individual level if data is truly anonymised. Anonymised data is outside the scope of UK GDPR, but we apply the LIA framework conservatively because aggregation happens on personal data upstream.
- **Children specifically:** This is in their interests. No decisions are made about individuals. The processing is benign and aligned with the purpose of the service.
- **Safeguards:**
  - Anonymisation before reporting
  - k-anonymity threshold (e.g., minimum 10 students per cohort before reporting)
  - Access restricted to product team
  - Never shared externally in individual form
- **Right to object:** Supported — users who object to their data being used in aggregate analysis can contact us; we will exclude their account from aggregation.

### Conclusion
**Legitimate interest is appropriate**, subject to anonymisation and k-anonymity threshold safeguards being implemented before any aggregate analysis.

---

## LIA 4 — Customer and prospect outreach (B2B to schools)

### Purpose test
- **What are you trying to achieve?** Contact schools and teachers (as organisational / professional contacts) about The English Hub.
- **Why?** To grow a useful product used by schools.
- **Legitimate?** Yes — B2B marketing to professional contacts at schools is a recognised legitimate interest under PECR (for corporate subscribers) and under UK GDPR.

### Necessity test
- **Achieves the purpose?** Yes.
- **Proportionate?** Yes — we use publicly available professional contact information (teacher emails at schools), send only a small number of non-intrusive messages, and honour opt-outs immediately.
- **Less intrusive?** We considered inbound-only marketing. Outbound to schools is a normal and accepted practice for education-sector B2B.

### Balancing test
- **Subjects:** Teachers and school staff in their professional capacity. **Not students.**
- **Data nature:** Professional contact details (work email, name, role).
- **Reasonable expectations:** Teachers reasonably expect professional outreach from education-sector suppliers.
- **Impact:** Low — suppression list maintained; easy unsubscribe; no personal harm.
- **Children:** Not involved.
- **Safeguards:** One-click unsubscribe, suppression list, no children's data ever used, clear sender identity.

### Conclusion
**Legitimate interest is appropriate** for B2B outreach to school staff. Students and parents are out of scope for this LIA; marketing to them requires consent (Art 6(1)(a) and PECR).

---

## LIA 5 — Fraud prevention in payments

### Purpose test
- **What are you trying to achieve?** Prevent payment fraud and chargebacks.
- **Why?** To protect the business and lawful users.
- **Legitimate?** Yes — Recital 47 UK GDPR explicitly recognises fraud prevention.

### Necessity test
- **Achieves the purpose?** Yes.
- **Proportionate?** Yes — handled largely by Stripe (our payment processor) under their own fraud models. We review flagged transactions only.
- **Less intrusive?** No — this is the standard minimum approach.

### Balancing test
- **Subjects:** Paying adults.
- **Data nature:** Transaction metadata.
- **Expectations:** Fraud prevention is a universal expectation at payment time.
- **Impact:** Low.
- **Children:** Not involved (children do not pay).

### Conclusion
**Legitimate interest is appropriate.**

---

## Template for new LIAs

```
## LIA N — [Title]

### Purpose test
- What are you trying to achieve?
- Why do you want to process?
- Is there a wider benefit?
- Is the interest legitimate, specific, and lawful?

### Necessity test
- Does the processing achieve the purpose?
- Is it proportionate?
- Is there a less intrusive way?

### Balancing test
- Whose interests are affected?
- Nature of the data?
- Reasonable expectations?
- Impact if processed / not processed?
- Children involved? If so, strong weighting to their interests.
- Safeguards in place?
- Can individuals object?

### Conclusion
- Is legitimate interest appropriate?
- Any conditions / mitigations required before proceeding?
```

---

## Review log

| Date | Reviewer | Changes |
|---|---|---|
| `[REPLACE WITH DATE]` | DPO | Initial LIAs drafted |
