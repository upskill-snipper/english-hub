# System reference

Twelve chapters covering the whole of The English Hub, written to be read rather
than searched. Each was written by reading the code, then fact-checked against
the code by a second pass that found and corrected thirty-five claims the first
pass got wrong. That number is the honest measure of how easy it is to be
confidently wrong about this system, and it is the reason the chapters cite
file:line for anything you would want to check.

**Read [`01`](01-architecture.md), [`02`](02-data-model.md) and
[`05`](05-auth-identity-consent.md) before you change anything.** Together they
explain the two-identity model, which is the root cause of six separate
production defects and the single thing most likely to make a correct-looking
change wrong.

|     | Chapter                                                          | What it answers                                                                                                                     |
| --- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 01  | [Architecture and code map](01-architecture.md)                  | What the application is, how a request flows, what the build does, and which large parts of the tree are dead                       |
| 02  | [The data model](02-data-model.md)                               | Two schemas in one Postgres, which tables are keyed on which identity, and where the database disagrees with its own migrations     |
| 03  | [The API surface](03-api-surface.md)                             | 199 route handlers grouped by purpose, what gates each, and which are a published contract with the mobile app                      |
| 04  | [The marking engine](04-marking-engine.md)                       | The thing customers pay for: how an essay becomes a mark, the model tiers, mark schemes, escalation and the eval regime             |
| 05  | [Auth, identity and consent](05-auth-identity-consent.md)        | Who a request belongs to, how old they are, what they have agreed to, and why UNKNOWN blocks                                        |
| 06  | [Billing and entitlements](06-billing-and-entitlements.md)       | How money becomes access, the two entitlement stores, the Stripe event map, trials and mobile purchases                             |
| 07  | [Content and curriculum](07-content-and-curriculum.md)           | The 34 MB of teaching material, how a text becomes a page, exam boards, and how to add one                                          |
| 08  | [Schools, teachers and parents](08-schools-teachers-parents.md)  | The B2B and guardian surfaces, every role, and what each can actually reach                                                         |
| 09  | [Scheduled work](09-scheduled-work.md)                           | Fifteen crons, what each writes, and which ones irreversibly delete children's data                                                 |
| 10  | [Integrations and communication](10-integrations-and-comms.md)   | Fourteen external services, both email transports, and how the product degrades when each is absent                                 |
| 11  | [Compliance and safeguarding](11-compliance-and-safeguarding.md) | What the regulations require, what the code actually implements, and where the documents claim more than the code delivers          |
| 12  | [i18n and accessibility](12-i18n-and-accessibility.md)           | Three locales of which one is interface-only, why the dictionary chain order is load-bearing, and the state of the a11y commitments |

## How to read these

**They are current as of 18 September 2026 and they will rot.** When a chapter
disagrees with the code, the code is right and the chapter is a bug - fix it in
the same commit as the change that made it wrong.

**They say what is broken, inline.** Dead code that looks live is the recurring
hazard in this repo, so each chapter marks it where you would meet it rather
than collecting it in an appendix you would not read. If a chapter says
something is dead, unreachable or silently failing, it was verified.

**They mark uncertainty.** Where a chapter could not establish something from
the code it says so. Treat those as open questions worth answering, not as
gaps in the writing.

For orientation, what changed recently and how to work here, see
[`../HANDOVER.md`](../HANDOVER.md). For the rules that apply to every change,
see [`../../CLAUDE.md`](../../CLAUDE.md).
