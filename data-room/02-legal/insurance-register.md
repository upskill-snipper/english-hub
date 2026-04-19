# Insurance Register — Upskill Energy Limited

**Authoritative record** of all insurance policies in force for Upskill Energy Limited (trading as The English Hub). Mirror in `data-room/00-overview/company-register.md` § Insurance register. Store all policy PDFs in `data-room/02-legal/insurance/`.

**Last reviewed:** April 2026

---

## Policy 1 — Professional Indemnity (PII)

| Field | Detail |
|---|---|
| Insurer | AXA Insurance UK plc (Co. No. 78950, 20 Gracechurch Street, London EC3V 0BG) |
| Regulator | Prudential Regulation Authority + FCA authorised |
| Policy number | **550.295.859** |
| Name of insured | Upskill Energy (Limited — extend to full legal name at renewal) |
| Profession / occupation as declared | Training consultancy |
| Policy start | 15 November 2025 00:00 |
| Policy end | **14 November 2026 23:59** |
| Limit of indemnity | £500,000 each claim |
| Retroactive date | 15 November 2025 |
| Excess | _[CHECK ON SCHEDULE]_ |
| Premium | _[CHECK ON SCHEDULE]_ |
| Policy wording version | _[CHECK ON SCHEDULE]_ |
| Signed by | Tara Foley, CEO AXA UK & Ireland |
| Broker (if applicable) | _[INSERT]_ |

### Flags requiring action

| # | Flag | Severity | Action | Owner | Due |
|---|---|---|---|---|---|
| 1 | Profession coded "Training consultancy" not "online educational technology platform / AI-assisted educational services / SaaS" | **High** | Contact AXA / broker for midterm adjustment. Non-disclosure risk at claim time. | Director | Before first school contract signed |
| 2 | £500k each-claim limit is light for EdTech-with-children + AI | Medium | Upgrade to £1m–£2m at renewal 14 Nov 2026 | Director | 14 Nov 2026 |
| 3 | Name of insured is "Upskill Energy" not full legal name "Upskill Energy Limited" | Low | Clarify at renewal | Director | 14 Nov 2026 |
| 4 | Retroactive date same as inception (15 Nov 2025) | Low risk (company young) | Extend to incorporation date (11 June 2025) at renewal if affordable | Director | 14 Nov 2026 |
| 5 | No cyber insurance layer | **High** | Add standalone cyber policy — £250k–£500k limit | Director | Before first school contract |

### Evidence
- Certificate PDF: `data-room/02-legal/insurance/axa-pii-certificate-2025-26.pdf` _[save as received]_
- Policy wording: `data-room/02-legal/insurance/axa-pii-wording-2025-26.pdf` _[request from AXA]_
- Schedule: `data-room/02-legal/insurance/axa-pii-schedule-2025-26.pdf` _[request from AXA]_

---

## Policy 2 — Cyber Insurance

**STATUS: NOT IN PLACE. PRIORITY GAP.**

### Why this matters

The English Hub processes:
- Children's personal data (under ICO Children's Code)
- User-submitted essays (may contain identifying or sensitive content)
- Payment data via Stripe (limited PCI scope but still ICO-visible)
- Inter-school data on behalf of Founding Schools (controller-processor under DPAs)

Sub-processors include US-resident services (Anthropic, OpenAI, Vercel) under UK IDTA/SCCs. A breach at any sub-processor flows back to Upskill Energy as controller.

**Material exposure without cyber cover:**
- ICO administrative fines up to £17.5m or 4% of global turnover (UK GDPR)
- Third-party claims from affected data subjects / schools
- Breach notification costs (forensic, legal, PR, credit monitoring)
- Business interruption from ransomware or DDoS
- Data restoration costs

### Recommended policy

| Parameter | Target |
|---|---|
| Limit | £250,000 – £500,000 each claim |
| Premium | £300 – £800/year for a micro EdTech |
| Cover pillars | (1) First-party data breach response (forensic, notification, credit monitoring, legal) · (2) Third-party liability (claims from subjects, schools, processors) · (3) Business interruption · (4) Ransomware including payment if unlawful to pay ruled out · (5) Regulatory defence including ICO fine defence costs |
| Retroactive date | Match PII if possible — 15 November 2025 |
| Excess | £500–£2,500 typical at this limit |

### Suggested providers (UK, EdTech-friendly)

- Hiscox — Cyber & Data insurance (well-known for SME tech)
- CFC Underwriting — "Cyber for Small Business"
- Beazley — Beazley Breach Response (enterprise-style but has SME tier)
- Markel — Tech + Cyber bundle
- Your AXA broker — AXA also offers cyber; check if they can bundle with existing PII for discount

**Action:** get three quotes in the next 30 days; bind before first Founding School contract.

---

## Policy 3 — Public Liability

**STATUS: NOT IN PLACE.**

| Parameter | Target |
|---|---|
| Limit | £1,000,000 minimum (£2m common) |
| Premium | £100–£250/year for a home-based operation |
| Trigger | Required by Bett Show and most trade-show exhibitor terms. Required by some schools in visitor waivers (rarely binding). |

**Action:** bundle with PII at next renewal, or get a standalone micro policy via Simply Business, Hiscox, or Direct Line Business.

---

## Policy 4 — Directors & Officers (D&O)

**STATUS: NOT IN PLACE. Recommended.**

| Parameter | Target |
|---|---|
| Limit | £500,000 – £1,000,000 |
| Premium | £400–£1,200/year for a micro company |
| Cover | Defence costs for regulatory / statutory investigations, shareholder disputes, employment disputes (EPLI overlap), breach of fiduciary duty claims |

**Why relevant:** As sole director, personal liability for the company's regulatory compliance (ICO, HMRC, Companies House, KCSIE) falls on you. D&O transfers that exposure to the insurer.

**Action:** get a quote alongside cyber insurance. Bind before first institutional investor or acquirer enters diligence.

---

## Policy 5 — Employers' Liability

**NOT REQUIRED** while Upskill Energy has no employees. The Employers' Liability (Compulsory Insurance) Act 1969 mandates a minimum £5m limit from the first PAYE hire.

---

## Policy 6 — Product Liability

**Typically bundled with PII or PL.** No separate need for a pure-digital SaaS at this scale. Re-examine if ever selling physical products (revision guide print-on-demand, branded merch).

---

## Cost summary (if you bind the recommended gaps)

| Policy | Year-1 £ |
|---|---|
| PII (in force) | _[check schedule]_ |
| Cyber (recommended new) | 300 – 800 |
| Public Liability (recommended new) | 100 – 250 |
| D&O (recommended new) | 400 – 1,200 |
| **Additional Year-1 cost** | **£800 – £2,250** |

At Breakout trajectory (post-£500k ARR, Founding Schools filled, Cyber Essentials Plus) insurance costs rise to ~£3,000–£5,000/yr as limits step up to £1m–£2m across each layer.

---

## Audit trail

| Date | Event | Owner |
|---|---|---|
| 15 Nov 2025 | AXA PII bound (policy 550.295.859) | Director |
| April 2026 | Insurance register created; 5 flags raised on PII; cyber / PL / D&O gaps identified | — |
| TBC | AXA profession description updated to "EdTech SaaS" | Director |
| TBC | Cyber insurance bound | Director |
| TBC | Public Liability bound | Director |
| TBC | D&O bound | Director |
