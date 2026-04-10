# Key-Person Risk Mitigation — The English Hub

**The risk in plain English:** The English Hub is currently founder-led. If the founder were suddenly unavailable (accident, illness, departure), the business would be seriously disrupted. Customer relationships, product decisions, codebase knowledge, and commercial judgement all run through one person.

**Why buyers care:** Key-person risk is the single most-cited reason buyers discount sub-scale businesses. It affects valuation (discount applied), deal structure (earnout to retain the founder), and integration risk (can we absorb this if the founder leaves?).

**This document's purpose:** Show the buyer that the founder has thought about this, is actively mitigating it, and has a realistic post-deal handover plan. Mitigation is never complete at sub-scale — the goal is credible evidence of awareness and progress.

---

## Mitigation framework

Key-person risk decomposes into **five categories**. For each, show what's in place today and what the plan is.

### 1. Customer relationship risk

**Risk:** Customers bought from the founder, not from the company. If the founder leaves, they leave too.

**In place today:**
- Every customer contact logged in a CRM (not in a personal inbox or notebook) — FILL IN system name
- Relationship history notes for each top-10 customer: origin, key dates, sensitivities, renewal date
- At least one non-founder point of contact introduced where possible (e.g., customer success, technical onboarding)
- Customer success emails come from a company domain, not founder personal

**Planned / in progress:**
- Warm-handover letter template ready for worst-case scenario
- Customer CSAT / NPS data captured periodically so the buyer can see the relationship isn't only founder-fragile
- Named secondary contact in the company introduced to top accounts over next 6 months

**Post-deal:** Founder commits to a 12-month customer-transition window with named handover for each key account.

---

### 2. Product and architectural knowledge risk

**Risk:** The founder built the product. Nobody else knows why it's built the way it is.

**In place today:**
- Architecture document (`data-room/00-overview/architecture.md`) covering components, data flows, and key design decisions
- Repository README with setup instructions an experienced engineer can follow
- Decision log / ADRs for major technical choices
- Conventional, well-known stack (Next.js / Postgres / etc.) — not esoteric choices

**Planned / in progress:**
- Test coverage on critical paths increasing
- Runbook for deployment, rollback, and incident response
- Recorded walkthrough video of the codebase (15–30 minutes) kept in the data room

**Post-deal:** 60-day deep knowledge-transfer window with the buyer's lead engineer.

---

### 3. Operational and vendor knowledge risk

**Risk:** The founder knows which vendors are critical, who to call when something breaks, and what the unwritten operational rules are.

**In place today:**
- Vendor register (`data-room/00-overview/vendors.md`) with supplier, contact, renewal date, criticality
- Payment methods documented (not only on a founder personal card)
- Admin accounts for all critical systems shared with company email (founder + secondary if possible)
- Password manager shared with business credentials (not personal)

**Planned / in progress:**
- 1-hour weekly runbook update
- Quarterly fire-drill: "if the founder were unavailable for a week, what would break?"

---

### 4. Commercial / deal-making knowledge risk

**Risk:** Pricing decisions, discount policy, and negotiation style live in the founder's head.

**In place today:**
- Standard pricing sheet and published rate card
- Discount policy documented (maximum standard discount, approval thresholds)
- Lost-deal notes: why we lost each deal (becomes training material)
- Win-deal notes: why we won (what to replicate)

**Planned / in progress:**
- Sales playbook as customer volume grows

---

### 5. Company memory / founder context risk

**Risk:** Why the company was started, what was tried and abandoned, what the founder learned — all vulnerable to loss.

**In place today:**
- Founder memo: history of the company, lessons learned, current strategy
- Monthly founder updates archived — these form a time-series record of decisions
- Customer interviews and user research archived

---

## Post-deal commitment

In any acquisition conversation, the founder is prepared to commit to:

- **12–24 months** continued engagement in a defined role (CEO of the acquired unit, product lead, or integration lead)
- **60-day intensive** knowledge-transfer window at the start
- **Reference-able transition plan** with specific named deliverables (docs, walkthroughs, customer intros)
- **Retention package** tied to transition milestones, not purely to time

---

## Buyer's FAQ

**Q: What if the founder refuses to stay?**
A: In practice a well-structured earnout aligns interests. The founder has signalled willingness for a 12–24 month post-deal transition in any serious conversation.

**Q: What if the founder dies?**
A: Director's death process: Companies House filing, board-level authority vested in second director or company secretary if named, professional executors engaged. Operationally, the documentation above is designed to survive this scenario long enough to recruit a replacement.

**Q: Is there key-person insurance?**
A: FILL IN. At this stage policies are expensive and add limited value to the buyer directly; discussable as a deal condition.

**Q: Are customer relationships exclusive to the founder?**
A: Being reduced over time. See section 1 above.

**Q: Is there a deputy / COO / CTO in the wings?**
A: Not yet. The cost/benefit of hiring a deputy before revenue supports it is bad at sub-scale. Post-deal, the acquirer is best placed to fund and integrate this hire.

---

## Mitigation maturity — where we honestly are

| Category | Maturity | Plan |
|----------|----------|------|
| Customer relationships | Early | 6 months to secondary contact coverage |
| Product / codebase knowledge | Medium | Architecture and ADRs in place; tests expanding |
| Operational / vendor | Medium | Register maintained; quarterly fire-drill planned |
| Commercial | Medium | Documented; playbook on roadmap |
| Company memory | Good | Regular memos, archive habit in place |
| Governance / second director | Low | Considered; currently not in place |

---

**Owner:** Founder
**Last reviewed:** FILL IN
**Next fire-drill:** FILL IN
