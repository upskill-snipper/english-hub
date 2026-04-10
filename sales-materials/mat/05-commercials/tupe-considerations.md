# TUPE and Data Portability Considerations — Schools Leaving a MAT

**Purpose**: Clear notes for sales and legal on what happens when a school leaves a MAT that is a customer of The English Hub, covering both TUPE implications (where relevant) and data portability.

**Important**: This is internal guidance for sales conversations, not legal advice. All TUPE-related questions raised by a MAT prospect should be referred to qualified employment and data protection legal counsel.

---

## Context — why this matters to MAT buyers

MAT composition changes. Schools transfer between trusts via DfE-brokered re-brokering, trust consolidation, or academy orders. A prospective MAT buyer will often ask:

- "What happens to our data if one of our schools moves to another trust?"
- "Does your contract lock us in if our trust changes shape?"
- "If we merge with another MAT, what happens commercially?"
- "Does TUPE apply to your staff servicing our contract?"

A clear answer here is a deal-closing asset, not a defensive footnote. Most competitors have not thought this through.

---

## TUPE — summary

**TUPE** = Transfer of Undertakings (Protection of Employment) Regulations 2006.

TUPE is primarily an **employment law** regime. It applies when a business, or an identifiable part of it providing specific services, transfers from one owner/provider to another. The effect is that employees assigned to that business or service transfer automatically to the new owner with preserved terms and conditions.

### Does TUPE apply to The English Hub?

In the vast majority of cases, **no**.

The English Hub is a software-as-a-service provider. We provide access to a platform, not people. Our staff are not assigned to a specific MAT customer, they work across the whole customer base. When a school leaves a MAT:

- Our Customer Success Managers don't transfer.
- Our engineers don't transfer.
- Our platform access is terminated or redirected under contract, not transferred as a service.

In the language of TUPE, the English Hub's provision is an "asset-based supply of software" rather than a "labour-intensive service provision change". Case law consistently treats such supply as falling outside TUPE.

### Where TUPE may come up

TUPE conversations arise more often when:

- A MAT is considering insourcing vs. outsourcing other services (catering, cleaning, IT support).
- A MAT is transferring schools between trusts and wants to ensure no disruption to service contracts.
- A school is being re-brokered out of a MAT and the receiving trust uses a different platform.

The English Hub can confidently tell MAT buyers: "TUPE does not typically apply to our software contract. We're a SaaS supply, not a labour-provision service."

### Caveat — bespoke service arrangements

If The English Hub ever provides a MAT with a **dedicated**, **named**, **on-site** team of staff as part of a bespoke enterprise deal, TUPE analysis may become relevant. Any such arrangement is flagged to legal before signature.

---

## Data portability — what happens when a school leaves a MAT

This is the more practical issue and the one customers ask about most.

### The principle

**Data about a school's pupils, staff, and teaching belongs to the school, not the MAT and not The English Hub.** Our contract always reflects this.

### What data is in scope

- Pupil accounts, pupil profiles, pupil progress data.
- Teacher accounts (for the school's teachers).
- Curriculum adaptations made by the school (if any).
- Assessment results.
- Engagement and usage data.
- Any school-specific reports generated.

### What happens on departure — step by step

1. **Notification.** The trust notifies The English Hub that a school is leaving the trust on a specific date.
2. **Confirmation of destination.**
    - Option A — school stays on English Hub under a new trust (new trust already a customer).
    - Option B — school stays on English Hub as a standalone customer.
    - Option C — school moves to a different platform.
3. **Data export.** The English Hub provides a full export of the school's data in a machine-readable format within [30] days of notification. Format is CSV/JSON with a documented schema.
4. **Data migration (Option A or B).** For schools staying on English Hub, the account is simply re-parented to the new trust. No data movement required.
5. **Data migration (Option C).** The school receives the export and we provide reasonable assistance during the transition period.
6. **Data deletion.** 90 days after the school's departure (or at the school's earlier written request), The English Hub deletes the school's data from the originating trust's account, save where retention is legally required.

### Billing impact

- The trust's annual per-student count is adjusted at the next anniversary to remove the departed school's pupils.
- No mid-year refund is issued for the departed school (the framework is designed around anniversary true-ups).
- The trust may, at its option, assign the remainder of the Order Form for that school to the receiving trust — subject to our written consent and the receiving trust's execution of a compatible framework agreement.

### Order Form assignment clause (sample)

> "If an Activated School ceases to be part of the Trust during the term of its Order Form, the Trust may request that The English Hub transfer the remainder of that Order Form to the receiving trust. The English Hub will not unreasonably withhold consent to such transfer, subject to the receiving trust having (or executing) a compatible Master Framework Agreement with The English Hub."

---

## MAT consolidation — two MATs merging

Increasingly common. If two MATs merge:

1. The surviving legal entity (usually the larger of the two) inherits all contracts of the dissolved entity.
2. The English Hub framework agreement from the dissolved trust is novated to the surviving trust.
3. Pricing is re-banded based on the combined pupil count at the next anniversary.
4. If the combined trust qualifies for a more favourable band, that band applies from the next anniversary.
5. If only one of the two MATs was an English Hub customer, the merger is an opportunity to pitch the wider trust.

---

## Common MAT buyer questions — prepared answers

### "What if the DfE re-brokers one of our schools to another trust?"

> "The school's data is the school's. We'll migrate it to the new trust's platform of choice — including us, if the receiving trust is also a customer. Our framework agreement explicitly supports re-brokering without penalty clauses for the originating MAT."

### "What if our whole trust dissolves?"

> "Rare but it happens. In that scenario, each school's data is made available to that school's receiving trust. No hostage-taking. No exit fees beyond the remainder of the current annual invoice."

### "Does TUPE mean your staff transfer to another trust if we leave?"

> "No. We're a software provider, not a labour-provision service. TUPE doesn't apply to our contract. Your legal team can confirm — we're happy to put the question to your DPO directly."

### "Do you hold us hostage on data if we leave?"

> "No. Our contract includes an unconditional data export obligation in a machine-readable format. You can leave with everything you put in, at any time. We don't hold 'proprietary insights' or 'derived data' as a lock-in weapon."

### "What happens to teacher accounts if teachers leave the MAT?"

> "Teacher accounts are deactivated at the MAT's direction. If a teacher moves to a different school inside the same MAT, we re-assign their account. If they move to a different MAT that also uses English Hub, we can migrate their content (with their consent). If they leave the sector, we delete the account on request."

### "What happens to our trust-wide dashboards if a school leaves?"

> "The dashboard auto-adjusts at the school's departure date. Historical cross-school comparisons remain available for the period during which the departed school was part of the trust. You retain full audit trail."

---

## Internal process when a MAT customer loses a school

1. Customer Success Manager is notified.
2. CSM creates a departure plan in CRM within 48 hours.
3. CSM contacts the departing school's named contact directly with transition options.
4. Account renewal team flags the anniversary price adjustment.
5. Sales team is alerted to the receiving trust as a potential new opportunity.
6. Data team schedules the 90-day deletion window.
7. Legal is notified if the departure is contentious or if the school intends to take the contract with them to a new trust.

---

## Documentation and evidence

The English Hub maintains the following for every MAT customer in case of a departure:

- Signed master framework agreement
- Signed order forms per school
- Data Processing Agreement
- Data export audit log
- Deletion certificate (issued on completion of 90-day deletion window)

These form the paper trail required for both trust governance and GDPR accountability.
