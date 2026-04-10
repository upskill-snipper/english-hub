# Anticipated Red Flags — The English Hub

**Purpose:** Every sub-scale, founder-led business has the same handful of red flags. A buyer's diligence team will find them within a week. The only question is whether you raised them first (which builds trust) or they surfaced them (which destroys it).

**Rule:** Raise every red flag in this document proactively in the first or second buyer meeting. Frame it as "here's the honest state, here's what we're doing about it, here's why it's OK at our stage."

---

## Red flag 1: Single-founder dependency / key-person risk

**What a buyer will say:** "If the founder gets hit by a bus, this business is in trouble. What happens to customer relationships, the codebase, the vision?"

**Honest acknowledgement:** Yes, this is a real risk. The founder currently holds most of the product knowledge, customer relationships, and institutional context. In a sub-scale business that's unavoidable — hiring a deputy before revenue supports it is a faster path to bankruptcy.

**Mitigation in place:**
- Written operational runbooks (see `data-room/00-overview/runbooks/`)
- Customer contact details and context in the CRM (not in the founder's head or personal email)
- Key systems have shared admin access (not only founder-locked)
- Codebase is in a company GitHub org, not a personal account
- Core architecture and key decisions are documented (see `data-room/00-overview/architecture.md`)
- Code escrow planned — see `code-escrow-setup.md`

**Mitigation in progress / post-deal:**
- Retention package for founder as part of any transaction (12–24 month earn-in)
- First key hire funded by acquirer as part of deal
- Explicit knowledge-transfer plan in the 100-day post-close integration

**See also:** `key-person-risk-mitigation.md`

---

## Red flag 2: Early-stage / low ARR

**What a buyer will say:** "ARR is small. Is this even an acquirable business, or just a lifestyle side project?"

**Honest acknowledgement:** ARR is small because the business is young and founder-funded. It has not yet been through a scale phase. Growth rate and unit economics matter more than absolute ARR at this stage.

**What to point at instead of absolute ARR:**
- Growth rate (MoM, YoY)
- Gross margin quality (is each £ of revenue healthy?)
- Customer retention (is what you sold staying sold?)
- CAC payback period (is customer acquisition economic?)
- Founder runway and capital discipline (how far has this gone on how little?)
- Strategic fit (what's the unlock post-acquisition?)

**Position:** "You're not buying ARR. You're buying a de-risked beach-head into [niche] with proven early product-market fit, a loyal customer cohort, clean compliance posture on children's data, and a founder committed to the integration. Acquiring us for ARR-multiple at this stage is the wrong frame — acquiring us for strategic fit and avoided build cost is the right frame."

---

## Red flag 3: Customer concentration

**What a buyer will say:** "Your top customer is FILL IN % of revenue. If they leave, the business has a big hole."

**Honest acknowledgement:** At small revenue bases, concentration is arithmetic — one good customer is a big % of a small total. This resolves naturally as new customers close, but it's currently real.

**Mitigation in place:**
- Multi-year contracts with top customers where possible
- Strong relationships (founder-level, not just buyer-level)
- Documented case studies and reference-able outcomes (increases switching cost)
- Deliberate segment diversification in the sales pipeline — show the pipeline mix

**Disclosure:** List exact concentration (top 1, top 5, top 10 as % of ARR) in the Q&A master under CU3. Don't hide it.

---

## Red flag 4: Children's data / safeguarding exposure

**What a buyer will say:** "You're in EdTech touching under-18 learners. That's a regulatory minefield — ICO Children's Code, safeguarding, DfE expectations, parental consent. Is this a compliance time bomb?"

**Honest acknowledgement:** Children's data is genuinely a high-scrutiny area. Getting it wrong is expensive (regulator fines, reputational damage, lost school contracts). Getting it right is a moat — most competitors cut corners.

**Mitigation in place:**
- Children's Code age-appropriate design assessment completed (`data-room/03-privacy/childrens-code-assessment.md`)
- DPIA for children's data processing (`data-room/03-privacy/dpias/`)
- Minimum data collection principle enforced
- Default privacy settings are the most protective
- No advertising or profiling against children's data
- Safeguarding policy in place if interacting directly with learners
- Staff DBS checks where required

**Position this as a strength, not a weakness:** An acquirer gains a pre-audited, defensible children's-data posture, which saves them 12–18 months of compliance work if they're entering this market.

---

## Red flag 5: Unaudited / management accounts only

**What a buyer will say:** "These numbers aren't audited. How confident are we they're accurate?"

**Honest acknowledgement:** Audit costs £10k+/year and isn't legally required at this revenue level. We have management accounts from [Xero/FreeAgent/etc.] maintained by [founder/bookkeeper/accountant].

**Mitigation in place:**
- Accountant-prepared year-end statements
- Clean bank reconciliation
- No major judgement calls (no complex revenue recognition, no stock-based comp to expense)
- Willing to fund a compilation or limited review report as a deal condition

**Offer:** "If diligence would benefit from a Quality of Earnings report, we're happy to cooperate fully with the buyer's accountant. We don't expect to pay for it pre-LOI; post-LOI it's standard for the buyer to fund."

---

## Red flag 6: Engineering team of one

**What a buyer will say:** "Only the founder understands the codebase. That's not just a key-person risk, it's an integration risk — nobody can onboard a new engineer."

**Honest acknowledgement:** True. The codebase is built for small-team velocity, not handover.

**Mitigation in place:**
- Documentation at the architectural level (even if not line-by-line)
- Tests on core paths
- Conventional framework choices (Next.js, Postgres, etc.) so any competent engineer can read it
- Repo in company GitHub org with access plan documented

**Mitigation post-deal:** Part of the transition plan is a 60-day deep knowledge-transfer window and an acquirer-assigned lead engineer who shadows the founder.

---

## Red flag 7: Reliance on third-party platforms / AI providers

**What a buyer will say:** "If OpenAI changes pricing or terms, what happens?"

**Honest acknowledgement:** We use third-party AI providers for [specific features]. Their pricing and terms can change. If they doubled prices tomorrow, the cost impact would be [FILL IN].

**Mitigation in place:**
- Contract terms reviewed and understood
- Alternative providers identified (Anthropic, open-source fallback)
- Architecture abstracted so provider is swappable with reasonable effort
- Budget sensitivity modeled under 2x and 5x pricing scenarios

---

## Red flag 8: Lumpy growth / not every month up-and-to-the-right

**What a buyer will say:** "ARR jumped then flatlined in [month]. What happened?"

**Honest acknowledgement:** Sub-scale growth is lumpy by definition. One good customer signing creates a step-function; one churn creates a dip. Don't hide the dips — explain them.

**Mitigation in place:** Show the pipeline and the trend line excluding one-offs. Explain each notable movement.

---

## Red flag 9: Founder compensation below market

**What a buyer will say:** "The founder isn't taking a real salary. If we normalize comp to market rates, the business isn't profitable."

**Honest acknowledgement:** Correct. Founder has been taking £FILL IN, which is below market for the role. A normalized P&L should use market-rate founder comp.

**Position:** Provide both a cash P&L and a "normalized" P&L with market-rate founder comp. Buyers will do this calculation anyway — doing it for them shows maturity.

---

## Red flag 10: No formal board or governance

**What a buyer will say:** "Who holds the founder accountable?"

**Honest acknowledgement:** At this stage, no formal board. We do have [advisor / informal board / monthly founder review].

**Mitigation in place:** Regular advisor input, documented strategic decisions, clean company secretarial records (Companies House filings up to date).

**Position:** "Formal board is something we'll build when capital comes in — doing it now would be theatre."

---

## Red flag 11: Brand / domain / trademark gaps

**What a buyer will say:** "Do you actually own the brand? The trademark? The domains?"

**Honest acknowledgement:** Domain owned by the company. Trademark: FILL IN status (filed / registered / not yet). Social handles owned by the company account, not personal.

**Mitigation:** If trademark isn't filed, file it before going to market.

---

## Red flag 12: Customer contracts are informal

**What a buyer will say:** "Some of your customers are on email-agreed terms rather than a signed MSA."

**Honest acknowledgement:** Common at sub-scale. Some customers paid an invoice against a proposal PDF, not a countersigned contract.

**Mitigation in progress:** Rolling existing customers onto a standard MSA at renewal. All new customers on standard MSA from FILL IN date.

**Disclosure:** Quantify — "X% of ARR is on signed MSA, Y% is on proposal-and-invoice terms."

---

## Red flag 13: No security certifications (SOC 2, ISO 27001)

**What a buyer will say:** "You're not SOC 2 or ISO certified. How do you sell to enterprise?"

**Honest acknowledgement:** Certifications cost £30k+ and 6–12 months. At sub-scale the ROI isn't there yet. We have strong practices but no third-party attestation.

**Mitigation:** Published security policy, vendor questionnaire answers ready, pen-test (if done), evidence of data-protection practices.

**Position:** "SOC 2 is on the roadmap at [revenue trigger]. Until then we sell into segments that accept vendor questionnaires rather than formal certs."

---

## Red flag 14: Small team = no bus factor

**What a buyer will say:** "If two people leave, who runs this?"

**Honest acknowledgement:** True. See key-person risk (Red Flag 1). The mitigation is the same.

---

## Red flag 15: No clear exit path for investors (if applicable)

**What a buyer will say (if you've raised money):** "Your existing investors — what do they expect? Do they veto a sale?"

**Honest acknowledgement:** Explain existing investor rights (drag-along, tag-along, consent requirements, liquidation preferences).

**Mitigation:** Clean, standard term sheets. No unusual rights. Alignment conversations with existing investors before going to market so they don't derail a deal.

---

## Summary table

| # | Red flag | Severity | Mitigation status | Disclosure doc |
|---|----------|----------|-------------------|----------------|
| 1 | Single-founder / key-person | HIGH | In progress | `key-person-risk-mitigation.md` |
| 2 | Low absolute ARR | HIGH | Structural / reframe | Q&A master F1 |
| 3 | Customer concentration | MEDIUM | Diversifying | Q&A master CU3 |
| 4 | Children's data exposure | MEDIUM (as strength) | Strong | `03-privacy/` |
| 5 | Unaudited financials | LOW | Acceptable at stage | Q&A master F19 |
| 6 | Engineering team of one | HIGH | In progress | This doc |
| 7 | Third-party AI dependency | MEDIUM | Abstracted | Q&A master P5 |
| 8 | Lumpy growth | LOW | Explainable | Q&A master F2 |
| 9 | Below-market founder comp | LOW | Disclose both views | Q&A master T4 |
| 10 | No formal board | LOW | Stage-appropriate | Q&A master T1 |
| 11 | Trademark/brand gaps | LOW | File before market | Q&A master TE10 |
| 12 | Informal customer contracts | MEDIUM | Rolling onto MSA | Q&A master CU8 |
| 13 | No SOC 2 / ISO | MEDIUM | On roadmap | Q&A master TE7 |
| 14 | Low bus factor | HIGH | Same as #1 | This doc |
| 15 | Investor expectations | Depends | Pre-align | Q&A master F15-16 |

---

**Last reviewed:** FILL IN date
**Owner:** Founder
