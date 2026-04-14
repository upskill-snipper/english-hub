# Transfer Impact Assessments (TIAs)

**The English Hub Ltd**
**UK GDPR — Chapter V; Schrems II; ICO TRA guidance**
**Last reviewed:** 12 April 2026
**Owner:** DPO

> Following the Schrems II judgment, ICO guidance requires that before transferring personal data outside the UK (or EEA where EU GDPR applies), the exporter must assess whether the recipient country's laws and practices provide **essentially equivalent** protection — and if not, whether supplementary measures make the transfer lawful.
>
> This file contains TIAs for each transfer The English Hub makes where the destination is not covered by UK adequacy. Transfers to adequate destinations (EEA, others) do not require a TIA but are still logged.

---

## TIA process

For every transfer outside the UK/EEA:

1. **Map the transfer** — data, parties, volume, frequency, purpose, location.
2. **Identify the transfer tool** — adequacy decision, IDTA / UK Addendum / SCCs, BCRs, derogation (Art 49).
3. **Assess the destination law** — does it provide "essentially equivalent" protection, particularly re: government access?
4. **Assess supplementary measures** — technical (encryption), organisational (no-log), contractual (transparency, challenge).
5. **Decide and document.**
6. **Review annually** or on legal / factual change.

ICO's TRA tool and EDPB Recommendations 01/2020 are reference guides.

---

## Transfers summary

| # | Recipient | Destination | Transfer tool | Risk rating | TIA date | Next review |
|---|---|---|---|---|---|---|
| 1 | Vercel Inc. | US | UK IDTA (UK Addendum) | Low | 12 April 2026 | April 2027 |
| 2 | Postmark (ActiveCampaign) | US | UK IDTA | Low-Medium | 12 April 2026 | April 2027 |
| 3 | Cloudflare Inc. | Global edge | UK IDTA + Data Localisation Suite | Low | 12 April 2026 | April 2027 |
| 4 | Anthropic PBC | US | UK IDTA | Low | 12 April 2026 | April 2027 |
| 5 | Sentry (Functional Software Inc.) | EU (Frankfurt) — no TIA needed | UK adequacy (EEA) | — | — | — |
| 6 | Stripe Payments Europe | Ireland (EEA) — no TIA needed | UK adequacy | — | — | — |
| 7 | AWS EMEA SARL | London (UK) — no TIA needed | UK adequacy (processing in UK) | — | — | — |
| 8 | Supabase Inc. | Frankfurt (EEA) — no TIA needed | UK adequacy | — | — | — |

---

## TIA 1 — Vercel Inc.

### 1. Transfer details
- **Exporter:** The English Hub Ltd (UK)
- **Importer:** Vercel Inc., headquartered in the United States
- **Purpose:** Host static assets and edge functions for the frontend
- **Data categories:** Technical data only — IP, request headers, cached static responses. No account data, no student work, no learning data is stored on Vercel; persistent data resides in Supabase (EEA).
- **Volume:** All web and mobile traffic to the marketing and app domains
- **Frequency:** Continuous
- **Sensitivity:** Low — pseudonymised log data

### 2. Transfer tool
- **UK International Data Transfer Agreement (IDTA)** or **UK Addendum to the EU SCCs**, incorporated into Vercel's standard DPA.

### 3. Destination assessment
- **Country:** United States
- **Relevant laws:** FISA 702, EO 12333, CLOUD Act
- **Is the importer a "Section 702 covered entity"?** Vercel is a US-based electronic communication service provider; potentially subject to FISA 702.
- **Practical risk:** Low in this context:
  - Data at rest on Vercel is limited to cached static assets and transient edge logs.
  - No durable student or learning data on Vercel.
  - Vercel publishes transparency reports and has processes to challenge overbroad requests.

### 4. Supplementary measures
- **Technical:** All traffic encrypted in transit (TLS 1.2+). Sensitive data is not stored on Vercel; student data lives in Supabase EU. Minimal log retention at the edge.
- **Organisational:** Vendor assessment completed; contracted vendor; SOC 2 Type II.
- **Contractual:** DPA including Standard Contractual Clauses / UK IDTA; confidentiality; breach notification; audit rights; transparency on government access requests; challenge commitments.

### 5. Conclusion
Transfer is **lawful** with the UK IDTA + supplementary measures in place. Data minimisation at the edge means the residual impact of any US surveillance access would be very limited.

### 6. Review triggers
- Material change to US surveillance law
- Vercel adding durable storage features we use for personal data
- New ICO guidance

---

## TIA 2 — Postmark (ActiveCampaign LLC)

### 1. Transfer details
- **Exporter:** The English Hub Ltd
- **Importer:** ActiveCampaign LLC (Postmark), United States
- **Purpose:** Transactional email — receipts, password resets, account notifications, DSR responses
- **Data categories:** Name, email, email message content
- **Volume:** Per-user transactional — e.g., 1–5 messages per user per month
- **Sensitivity:** Low-Medium — message body may contain contextual info about the account

### 2. Transfer tool
- **UK IDTA** incorporated into Postmark's DPA.

### 3. Destination assessment
- **Country:** United States
- **Relevant laws:** As above
- **Practical risk:** Low-Medium. Email is inherently not end-to-end encrypted in most cases. Content is limited to account-related messages; no learning data or essays are sent through Postmark.

### 4. Supplementary measures
- **Technical:** TLS for SMTP; OPPORTUNISTIC TLS for outbound delivery; no attachments from child accounts via Postmark; bounce and open tracking disabled for child-facing emails.
- **Organisational:** Vendor assessment; SOC 2 Type II.
- **Contractual:** DPA with IDTA; transparency on government requests; deletion on request.

### 5. Conclusion
**Lawful** with IDTA + supplementary measures. We will revisit if Postmark's architecture changes, or if the UK reaches a new arrangement with the US that requires switching tools.

### 6. Alternatives considered
- Mailgun EU, Mailjet EU, Sendgrid EU region — kept as fallback if risk profile changes.

---

## TIA 3 — Cloudflare Inc.

### 1. Transfer details
- **Exporter:** The English Hub Ltd
- **Importer:** Cloudflare Inc., US-headquartered
- **Purpose:** WAF, DDoS protection, CDN, DNS
- **Data categories:** IP address, request metadata, TLS fingerprints
- **Volume:** All inbound traffic
- **Sensitivity:** Low — metadata only; traffic is encrypted end-to-end

### 2. Transfer tool
- **UK IDTA** + Cloudflare's **Data Localisation Suite**, which restricts data inspection and WAF processing to UK/EU regions.

### 3. Destination assessment
- **Country:** Although Cloudflare is US-incorporated, processing for EU/UK traffic can be constrained to UK/EU edge.
- **Practical risk:** Low. With Data Localisation Suite, decrypted traffic and WAF rules are processed in-region.

### 4. Supplementary measures
- **Technical:** Data Localisation Suite enabled; Customer Keys (HYOK) considered for future; minimal metadata beyond request lifecycle.
- **Organisational:** ISO 27001, SOC 2 Type II, PCI-DSS.
- **Contractual:** DPA with IDTA.

### 5. Conclusion
**Lawful** with IDTA + Data Localisation Suite.

---

## TIA 4 — Anthropic PBC

### 1. Transfer details
- **Exporter:** The English Hub Ltd (UK)
- **Importer:** Anthropic PBC, United States
- **Purpose:** AI-assisted feedback on student writing (essay marking, grammar, content suggestions)
- **Data categories:** Student writing submissions (transient — zero-data-retention API); no account data is sent
- **Volume:** Per-student per-submission; typically 1–5 API calls per essay
- **Frequency:** On-demand when students submit work
- **Sensitivity:** Medium — student essays may contain personal opinions or sensitive disclosures; however, data is transient and not stored by Anthropic

### 2. Transfer tool
- **UK International Data Transfer Agreement (IDTA)** incorporated into Anthropic's enterprise API agreement.

### 3. Destination assessment
- **Country:** United States
- **Relevant laws:** FISA 702, EO 12333, CLOUD Act
- **Is the importer a "Section 702 covered entity"?** Anthropic is a US-based AI company; potentially subject to FISA 702.
- **Practical risk:** Low in this context:
  - Zero-data-retention policy: API inputs and outputs are not stored beyond the duration of the request.
  - No training on customer data (contractually prohibited).
  - Data is transient — there is no durable store for authorities to compel access to.

### 4. Supplementary measures
- **Technical:** All API traffic encrypted in transit (TLS 1.2+). Zero-data-retention means no data at rest on Anthropic's systems. Student identifiers are not sent in API calls — only essay text and system prompts.
- **Organisational:** Vendor assessment completed; enterprise agreement; SOC 2 Type II.
- **Contractual:** Enterprise DPA with UK IDTA; zero-data-retention commitment; no training on inputs; breach notification; audit rights.

### 5. Conclusion
Transfer is **lawful** with the UK IDTA + supplementary measures. The zero-data-retention architecture means there is effectively no data at rest for surveillance authorities to access.

### 6. Review triggers
- Material change to US surveillance law
- Anthropic changing data retention practices
- New ICO guidance
- Change in AI model or API architecture

---

## TIA 5 — Sentry (Functional Software Inc.)

> Sentry processes data in the EU (Frankfurt). No TIA is required as this is covered by UK adequacy for EEA transfers. Included here for completeness.

### 1. Transfer details
- **Exporter:** The English Hub Ltd (UK)
- **Importer:** Functional Software Inc. (Sentry), EU region (Frankfurt)
- **Purpose:** Application error monitoring and crash reporting
- **Data categories:** Error stack traces, IP addresses (scrubbed), pseudonymised user IDs. No student work, essay content, or learning data.
- **Volume:** Error events only — variable, typically low
- **Sensitivity:** Low — PII scrubbing enabled; no message bodies captured

### 2. Transfer tool
- **UK adequacy (EEA)** — no IDTA required. Sentry's EU data region (Frankfurt) is within the EEA.

### 3. Conclusion
No TIA required. Transfer is to an adequate destination.

---

## Template for new TIAs

```
## TIA N — [Recipient name]

### 1. Transfer details
- Exporter / Importer
- Purpose
- Data categories
- Volume and frequency
- Sensitivity

### 2. Transfer tool
- Adequacy? IDTA? UK Addendum? SCCs? Derogation?

### 3. Destination assessment
- Country
- Relevant surveillance / disclosure laws
- Is importer subject to those laws?
- Practical risk of access

### 4. Supplementary measures
- Technical (encryption, pseudonymisation, split, minimisation)
- Organisational (policies, transparency commitments)
- Contractual (challenge, notification, audit)

### 5. Conclusion
- Lawful? Conditional? Block?

### 6. Review triggers
- Legal changes
- Importer changes
- Data category changes
```

---

## Review log

| Date | Reviewer | Changes |
|---|---|---|
| 12 April 2026 | DPO | Initial TIAs drafted; Anthropic and Sentry assessments added |
