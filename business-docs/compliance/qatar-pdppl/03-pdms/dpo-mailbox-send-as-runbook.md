# DPO mailbox — "Send Mail As" follow-up runbook

> **Why this exists:** Cloudflare Email Routing is **receive-only**. Today, when someone emails `dpo@theenglishhub.app`, it lands in `info@upskillenergy.com` (verified live since 2026-04-21 — see `business-docs/CLOUDFLARE-EMAIL-SETUP.md`). When the DPO replies, the reply currently goes out as `info@upskillenergy.com` rather than `dpo@theenglishhub.app`. For PDPPL / UK GDPR procurement and for any correspondence with NCGAA, the reply-from address matters. This runbook configures Google Workspace's "Send Mail As" so DPO replies actually originate from `dpo@theenglishhub.app`.
> **Owner:** Calum Johnson (DPO)
> **Estimated time:** 10–15 minutes per alias
> **Last reviewed:** 2026-05-20

---

## Option A (recommended) — Google Workspace alternate domain

If you are on Google Workspace, this is the cleanest path. ~10 minutes of DNS verification, no Gmail "unofficial" workarounds.

1. Open https://admin.google.com → **Account → Domains → Manage domains**.
2. Click **"Add a domain"**.
3. Enter `theenglishhub.app` and select **"Domain alias of upskillenergy.com"**.
4. Google will give you a TXT record to add to DNS to prove ownership.
5. Open Cloudflare DNS for `theenglishhub.app` and add the TXT record. Save.
6. Back in Google Admin, click **"Verify"**. Should succeed within 2–5 minutes (the Cloudflare-fronted DNS propagates fast).
7. Once verified, every Google Workspace user gets `<user>@theenglishhub.app` as an alias of their primary `<user>@upskillenergy.com` address — including `dpo@theenglishhub.app` if the underlying account is set up.

Then in the DPO's Gmail:

8. **Gmail → Settings (gear) → See all settings → Accounts and Import → Send mail as → Add another email address**.
9. Name: `The English Hub — Data Protection Officer`. Email: `dpo@theenglishhub.app`. Untick "Treat as an alias" if you want the From address to be exactly this string on outbound mail.
10. Save. Gmail offers it as a "From" picker in the compose window.

Now all DPO outbound correspondence — including NCGAA submissions and school DPO replies — goes from `dpo@theenglishhub.app`.

## Option B (faster, slightly hacky) — Gmail "Send mail as" alone

If you can't or don't want to add the alternate domain right now:

1. **Gmail → Settings → Accounts and Import → Send mail as → Add another email address**.
2. Email: `dpo@theenglishhub.app`. Untick "Treat as an alias".
3. Gmail will ask which SMTP server to use. Choose **"Send through Gmail"** (the default for Workspace).
4. Gmail will ask to verify ownership by sending a verification code to `dpo@theenglishhub.app`.
5. The code lands in `info@upskillenergy.com` (because of the Cloudflare forward). Copy the code and paste it back to Gmail.
6. Done — Gmail will offer `dpo@theenglishhub.app` as a From-address.

This option works but is not officially documented by Google for non-Workspace aliases; it could change. Option A is the supported path.

## Apply the same to the other aliases that need outbound

In priority order:

| Alias | Used for outbound when? | Priority |
|---|---|---|
| `dpo@theenglishhub.app` | All DPO + PDPPL / GDPR correspondence | P0 — do first |
| `safeguarding@theenglishhub.app` | All DSL correspondence (Lauren Johnson) | P0 — do alongside DPO |
| `legal@theenglishhub.app` | All legal correspondence (NDAs, contracts, takedowns) | P1 |
| `privacy@theenglishhub.app` | (Synonym of `dpo@` — used by the Qatar privacy supplement historically; route to same inbox) | P1 |
| `security@theenglishhub.app` | Security disclosures / responsible disclosure | P1 |
| `reviews@theenglishhub.app` | Trustpilot review invitations (already automated) | P2 |
| `accessibility@theenglishhub.app` | Accessibility statement contact | P2 |
| `press@theenglishhub.app` | Press enquiries | P3 |

For each alias, repeat the relevant Option A / Option B steps in the DPO's (or DSL's) Gmail.

## Verification — a one-liner you can do without screenshots

After the setup:

1. From the DPO's Gmail, compose a test email to your own personal Gmail address.
2. Select `dpo@theenglishhub.app` as the From.
3. Send.
4. In your personal Gmail, check the message header — `From:` should be exactly `The English Hub — Data Protection Officer <dpo@theenglishhub.app>`.

If the From shows `info@upskillenergy.com` with the alias only in the Reply-To, the setup is incomplete — go back to step 9 of Option A and untick "Treat as an alias".

## When this is done

The following changes are no longer blocked:

1. The "Apply to" line in the gap-analysis output (G5) flips to ✅.
2. The Qatar privacy notice §2 and §13 (which already cite `dpo@theenglishhub.app`) become end-to-end real, not just receive-only.
3. NCGAA Article 16 permit application can be filed with the controller's outbound address matching the inbound address — this matters because NCGAA may correspond at that address.
4. The Qatari legal opinion can be obtained with the DPO's outbound channel matching the cited address.

## Failure modes to watch for

- **SPF/DKIM/DMARC drift.** If you add `theenglishhub.app` as a Google Workspace alternate domain, Google will recommend SPF / DKIM / DMARC records. **Accept all of them.** Without them, outbound from `dpo@theenglishhub.app` may go to the recipient's spam folder.
- **Two Cloudflare email rules colliding.** Don't disable the existing receive-only Cloudflare Email Routing — outbound (Workspace) and inbound (Cloudflare forwarding) can co-exist, but if you accidentally change MX records you'll break inbound. The Workspace setup uses different DNS records (TXT + DKIM CNAMEs) and shouldn't touch your MX. Verify by re-running `dig MX theenglishhub.app` after setup — MX should still be Cloudflare's.
- **Cloudflare catch-all swallowing Workspace replies.** If you enabled the catch-all in Cloudflare Email Routing, it forwards *all* unmatched addresses. Workspace replies should still land at the addressed recipient, not be re-forwarded — verify with the test email.

## When it's complete, ping me (Claude) with this exact string

> "DPO send-as is live for dpo@theenglishhub.app and safeguarding@theenglishhub.app — verified."

And I will:

1. Update the Qatar privacy notice §2 to remove the implicit "(currently forwarding via info@upskillenergy.com)" caveat (already removed in v2.0 in fact)
2. Update the PDMS index sign-off block with the active outbound channels
3. Update the Article 16 dossier §1 with the verified-outbound DPO contact
