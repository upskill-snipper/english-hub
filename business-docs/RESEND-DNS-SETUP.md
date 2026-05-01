# Resend DNS setup for `theenglishhub.app`

This document is the founder-facing runbook for getting Supabase Auth verification emails (and any other transactional email sent through Resend) actually delivered.

## TL;DR — most likely root cause

If a brand-new sign-up didn't receive a verification email today, **the sending domain is almost certainly not yet verified at Resend**. Resend will refuse to deliver mail from `noreply@theenglishhub.app` until DNS records (SPF + 2x DKIM CNAMEs + DMARC) are present in Cloudflare DNS for `theenglishhub.app`.

Until verification completes, Resend's free tier only delivers to the **account holder's verified email** (Resend's anti-abuse sandbox). Anything sent to a third-party recipient is silently rejected.

## 1. Add the domain at Resend

1. Sign in at https://resend.com/domains
2. Click "Add Domain" → enter `theenglishhub.app` → choose region (closest to your Vercel region)
3. Resend will display the exact DNS records you need (the SPF and DMARC values are stable; the two DKIM CNAMEs are unique to your account — copy from Resend, do not invent)

## 2. Add 4 records at Cloudflare

Cloudflare → `theenglishhub.app` → DNS → Records → Add record. **Important: set Proxy status to DNS only (grey cloud) for every record below.** Cloudflare's proxy will mangle DKIM/SPF lookups if it's left orange.

| #   | Type  | Name                  | Value                                                    | Purpose |
| --- | ----- | --------------------- | -------------------------------------------------------- | ------- |
| 1   | TXT   | `@`                   | `v=spf1 include:_spf.resend.com ~all`                    | SPF     |
| 2   | CNAME | `resend._domainkey`   | (value Resend shows you — copy verbatim)                 | DKIM #1 |
| 3   | CNAME | `resend2._domainkey`  | (value Resend shows you — copy verbatim)                 | DKIM #2 |
| 4   | TXT   | `_dmarc`              | `v=DMARC1; p=none; rua=mailto:dmarc@theenglishhub.app`   | DMARC   |

### Notes on each record

- **SPF (record 1)** — if a `v=spf1` TXT already exists at the apex (because of another sender, e.g. Google Workspace), do NOT add a second one. Merge them: `v=spf1 include:_spf.google.com include:_spf.resend.com ~all`. Two separate SPF records will break SPF entirely.
- **DKIM (records 2 + 3)** — these are CNAMEs whose target is in Resend's domain. The exact target string is unique per account; always copy from the Resend dashboard the moment they show it.
- **DMARC (record 4)** — `p=none` means "monitor only, do not block" — safe starting point. The `rua` mailbox `dmarc@theenglishhub.app` does not need to exist for delivery to work; it just receives aggregate reports if you ever want them.

## 3. Verify

1. Wait ~5 minutes for DNS propagation
2. Back at https://resend.com/domains, click "Verify DNS records" on the domain row
3. Each record should flip to green / "verified". If any stay red, click into the record and read the diff Resend shows you.
4. Re-check via the in-app diagnostics page: `/admin/email-diagnostics`

## 4. Re-test sign-up

Once Resend reports the domain as verified:

1. Open `/admin/email-diagnostics` and use the "Send test" form to send a test email to your own address. Confirm it arrives in inbox (not spam).
2. Sign up a fresh test user with a real personal address (Gmail/Outlook/etc.).
3. Confirm the verification email arrives. If not, check:
   - Supabase → Logs → auth — does Supabase report a successful SMTP send?
   - Resend → Emails — is the message there with status "delivered" / "bounced" / "complained"?
   - Recipient's spam folder.

## 5. Supabase SMTP settings (for reference)

Supabase Studio → Authentication → SMTP Settings:

```
Host:        smtp.resend.com
Port:        587
Username:    resend
Password:    <your RESEND_API_KEY value>
Sender:      noreply@theenglishhub.app
Sender name: The English Hub
```

Also: Authentication → Providers → Email → "Confirm email" must be ON, otherwise Supabase never generates the verification email in the first place.

## 6. If it's still failing after all of this

- Recipient inbox has aggressive filtering — try a different provider (Apple iCloud, ProtonMail) to triangulate.
- Resend account is on the free tier and the domain is still pending — Resend's sandbox blocks third-party recipients until verified.
- Vercel's `RESEND_API_KEY` env var doesn't match the value pasted into Supabase SMTP settings. They don't have to match each other (Supabase uses SMTP, the app uses HTTP) but both must be valid Resend API keys with sending permission.
