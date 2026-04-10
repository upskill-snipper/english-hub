# Code Escrow — Setup Guide

**What is code escrow?** A trusted third party holds a copy of the source code (and build instructions, keys, and dependency manifests) and will release it to a named beneficiary if a pre-defined "release event" occurs — typically bankruptcy, abandonment, or breach of the license agreement by the licensor.

**Why it matters in diligence:** Buyers — and enterprise customers buying from a sub-scale vendor — ask "what happens to the source code if you disappear?". Code escrow is the accepted industry answer. Having it in place, or a credible plan to put it in place, removes a common diligence friction point.

---

## When to set up code escrow

**You probably don't need it yet if:**
- You have no enterprise customers asking for it in contracts
- You have no pending acquisition conversation
- Your annual escrow cost would be a meaningful % of monthly revenue

**You probably do need it if:**
- An enterprise or school customer is asking for escrow as a contract term
- A buyer is in diligence and has flagged source-code protection as a concern
- You are about to close a deal and the buyer wants continuity insurance

**For The English Hub today:** FILL IN current status. Likely "not yet in place; plan documented here, to be actioned pre-LOI or at customer request."

---

## Who provides code escrow

UK/EU well-known providers:

| Provider | Website | Notes |
|----------|---------|-------|
| NCC Group Escrow | nccgroup.com/uk/escrow | Industry leader, higher cost, verified releases |
| Escode (NCC brand) | escode.com | Same group, alternative branding |
| EscrowTech | escrowtech.com | Mid-market, US-headquartered, UK services |
| Iron Mountain | ironmountain.com/services/intellectual-property-management | Document + code escrow |

Typical cost: **£1,000–£3,500/year** for a single-beneficiary technical escrow, depending on deposit frequency and verification level.

---

## What gets deposited

A complete, reproducible build:

1. **Source code** — full repository, all branches relevant to production
2. **Build instructions** — README or script sufficient for a competent engineer to build
3. **Dependencies** — package manifests (package.json, requirements.txt, Gemfile.lock) and vendored critical deps if practical
4. **Infrastructure as code** — Terraform / Pulumi / scripts describing the production environment
5. **Environment variables** — template file listing names (never values; secrets handled separately)
6. **Secrets handling plan** — instructions for generating fresh secrets on release
7. **Database schema and sample data** — schema DDL and a scrubbed sample to aid bring-up
8. **Build verification results** — proof the current deposit compiles cleanly

Deposit frequency: quarterly is standard; monthly for high-change systems.

---

## Release events (the triggers)

Standard release triggers — carefully drafted so they are objective and unambiguous:

1. **Insolvency** — licensor enters administration, liquidation, or equivalent
2. **Abandonment** — licensor ceases trading, ceases to maintain the software, or fails to respond to written notices for a defined period
3. **Material breach** — licensor breaches the licence agreement in a way that denies the beneficiary access to the software, and fails to cure within a notice period
4. **Acquisition of assets** (sometimes) — if the licensor's assets are acquired in a fire-sale scenario

Trigger language should be negotiated so it is hard to invoke frivolously but reachable in genuine distress.

---

## Beneficiaries

Who can trigger a release and receive the deposit?

- **For customer-requested escrow:** the customer is the beneficiary for their specific licence
- **For buyer-requested escrow (pre-acquisition):** the prospective buyer; usually terminates at closing or at walk-away
- **For investor-requested escrow:** rare; usually handled by reps and warranties instead

A single escrow account can have multiple beneficiaries.

---

## Verification levels

Escrow providers offer tiers; choose based on how much assurance the beneficiary wants.

| Level | What it does | Cost |
|-------|--------------|------|
| Basic deposit | Physical/digital hold of what you deposit, no verification | £ |
| File verification | Provider confirms the deposit isn't corrupt and matches the manifest | ££ |
| Compile verification | Provider builds the deposit in a clean environment to confirm it compiles | £££ |
| Functional verification | Provider runs a smoke test to confirm the built software runs | ££££ |

For The English Hub, **file verification** is the right default at sub-scale — low cost, materially more useful than no verification, and avoids the expense of full functional testing.

---

## Setup checklist

- [ ] Select provider
- [ ] Review standard agreement template (most providers have one)
- [ ] Negotiate release events, notice periods, cure periods
- [ ] Identify beneficiary/beneficiaries
- [ ] Prepare the deposit package (see "What gets deposited" above)
- [ ] Perform first deposit
- [ ] Set quarterly deposit reminder in calendar
- [ ] Store the escrow agreement in `data-room/02-legal/`
- [ ] Add "code escrow in place" to Q&A master TE4
- [ ] Notify any customers whose contracts reference escrow

---

## Post-deal treatment

When The English Hub is acquired:

- The existing escrow becomes redundant (buyer owns the code directly)
- Terminate the escrow agreement OR novate it to the buyer if the buyer has enterprise customers who still require escrow
- Recoup any prepaid fees where possible
- Update customer-facing language

---

## Fast-track alternative for sub-scale companies

If cost or speed is the constraint, a **lightweight alternative** acceptable for many buyers:

1. Push the repository to a private **company GitHub org** (not founder personal account)
2. Grant admin access to a **second director** or trusted advisor
3. Keep a **disaster recovery packet** (encrypted USB or 1Password vault) containing: repo mirror, secrets template, build instructions, key vendor contacts
4. Document the above in a **"DR handover" memo** visible in the data room
5. Offer to upgrade to formal escrow as a condition of any deal

This is not the same as third-party escrow but it covers 80% of the buyer's concern at 5% of the cost. State plainly what you have and don't oversell it.

---

**Current status for The English Hub:** FILL IN
- [ ] Escrow in place
- [ ] Lightweight DR packet in place (describe in `data-room/00-overview/disaster-recovery.md`)
- [ ] Neither yet; plan above to be actioned at customer or buyer request

**Owner:** Founder
**Last reviewed:** FILL IN
