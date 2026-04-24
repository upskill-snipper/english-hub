# Cloudflare Email Routing — Step-by-Step (15 minutes, £0)

> **Status: COMPLETE 2026-04-21 — all 8 aliases live, test emails verified.** All forward to `info@upskillenergy.com`. Walkthrough retained for reference and in case of future alias additions.

**Why this doc exists:** I cannot log into your Cloudflare or Namecheap accounts. This walkthrough gets you from "no aliases" to "8 working email addresses" in 15 minutes. Every screen described literally. You only type the values in the right column.

**Prerequisite:** You already own `theenglishhub.app` via Namecheap and `info@upskillenergy.com` is reachable in your inbox (Google Workspace — confirmed).

---

## Step 1 — Create Cloudflare account (or log in) · 2 min

1. Open https://dash.cloudflare.com/sign-up in a new tab.
2. Sign up with `info@upskillenergy.com` (so your admin access sits with the primary business inbox — don't use a personal email).
3. Verify the email that Cloudflare sends within 2 minutes.

If you already have a Cloudflare account, skip this step and log in at https://dash.cloudflare.com.

---

## Step 2 — Add `theenglishhub.app` to Cloudflare · 2 min

1. On the Cloudflare dashboard, click **"+ Add a site"** (top right).
2. Paste `theenglishhub.app` and click **"Continue"**.
3. Select the **Free** plan (£0/month). Click **"Continue"**.
4. Cloudflare scans your existing DNS records from Namecheap. Wait ~30 seconds.
5. You will see a list of your existing DNS records (A/CNAME/TXT/MX). **Review it carefully.** Compare against what's currently in Namecheap — everything should be there (Vercel CNAMEs, Google MX if any, Stripe/SendGrid verification records, etc.). If anything is missing, add it manually now before proceeding.

   **Safety rule:** take a screenshot of this screen before clicking Continue. If anything goes wrong in the next 24 hours, you can restore from this screenshot.

6. Click **"Continue to activation"**.
7. Cloudflare shows two nameservers, for example:
   - `alice.ns.cloudflare.com`
   - `bob.ns.cloudflare.com`

   Copy both. (Your actual nameservers will be different — these are examples.)

---

## Step 3 — Update nameservers at Namecheap · 3 min + propagation

1. Open https://ap.www.namecheap.com/domains/list in another tab.
2. Find `theenglishhub.app` in your domain list. Click **"Manage"**.
3. Look for the **"Nameservers"** section. Change the dropdown from "Namecheap BasicDNS" to **"Custom DNS"**.
4. Enter the two Cloudflare nameservers:
   - Line 1: `alice.ns.cloudflare.com` (use your actual value from Step 2)
   - Line 2: `bob.ns.cloudflare.com` (use your actual value from Step 2)
5. Click the green **"Save Changes"** checkmark.

**Propagation** takes 5 minutes to 24 hours (usually under 1 hour). Cloudflare will email you when it detects the nameserver change — leave that tab open.

> If this step fails, the site goes down. **Mitigation:** Cloudflare auto-imported your existing A/CNAME records in Step 2, so the site should resolve the same as before. If it doesn't, switch nameservers back to Namecheap BasicDNS at Namecheap and the site restores immediately.

---

## Step 4 — Enable Email Routing · 3 min

Wait until Cloudflare's dashboard shows `theenglishhub.app` with a green "Active" status. Then:

1. In the Cloudflare dashboard, click `theenglishhub.app` to open the site.
2. On the left nav, click **"Email"** → **"Email Routing"**.
3. Click the big **"Get started"** button.
4. Cloudflare will show you three MX records + one TXT it needs to add. These are automatically added if you're on Cloudflare DNS. Click **"Add records and enable"**.
5. Cloudflare asks you to verify your destination email. Click **"Add destination address"**. Enter `info@upskillenergy.com` and click **"Save"**.
6. Check `info@upskillenergy.com` — you will receive a verification email from Cloudflare within 2 minutes. Click the verification link.
7. Back in Cloudflare, the destination address should show "Verified" with a green tick.

---

## Step 5 — Create the 8 aliases · 4 min

Still in the Cloudflare **Email Routing** panel, you will see two tabs: "Routing rules" and "Settings". Stay on **"Routing rules"**.

For each of the 8 aliases below, click **"Create address"** and fill in the form:

| Custom address (left of @) | Action | Destination |
|---|---|---|
| `dpo@theenglishhub.app` | Send to an email | `info@upskillenergy.com` |
| `security@theenglishhub.app` | Send to an email | `info@upskillenergy.com` |
| `legal@theenglishhub.app` | Send to an email | `info@upskillenergy.com` |
| `privacy@theenglishhub.app` | Send to an email | `info@upskillenergy.com` |
| `safeguarding@theenglishhub.app` | Send to an email | `info@upskillenergy.com` |
| `reviews@theenglishhub.app` | Send to an email | `info@upskillenergy.com` |
| `accessibility@theenglishhub.app` | Send to an email | `info@upskillenergy.com` |
| `press@theenglishhub.app` | Send to an email | `info@upskillenergy.com` |

**Pro-tip** (recommended): also enable the **catch-all**. Still on "Routing rules", find the **"Catch-all address"** section and toggle it **"on"**, then set the action to "Send to an email" and destination `info@upskillenergy.com`. This means any future alias like `billing@theenglishhub.app` or `partners@theenglishhub.app` works automatically, no reconfiguration needed.

Click **"Save"** on each one.

---

## Step 6 — Test · 1 min

From any other email address (Gmail on your phone is easiest), send a one-word email to `dpo@theenglishhub.app`. It should land in `info@upskillenergy.com` within 60 seconds.

If it doesn't arrive:
- Check the Cloudflare "Email Routing" → "Overview" dashboard for any errors (e.g. MX records not yet propagated).
- Wait 10 more minutes. DNS propagation is sometimes slow.
- Check the `info@upskillenergy.com` spam folder (Cloudflare forwards occasionally land in spam on first receipt).

---

## Limitation — you can receive but not send as these aliases

Cloudflare Email Routing is **receive-only**. When someone emails `dpo@theenglishhub.app`, it arrives in `info@upskillenergy.com`. When you reply, the reply goes out as `info@upskillenergy.com`, not as `dpo@theenglishhub.app`.

For most of the filings (ICO registration, Cyber Essentials, UKIPO) this is fine — they only send TO you, they don't expect replies from the alias.

**If you want to SEND as `dpo@theenglishhub.app`** (for proper DPO correspondence where the reply-from address matters):

- **Easy path:** add `theenglishhub.app` as a secondary domain in Google Workspace Admin (`admin.google.com` → Account → Domains → Add alternate domain). Free if you're already on Workspace. Adds ~5 min of DNS verification. Then each alias can be configured as a "Send Mail As" identity in your Gmail settings.

- **Hacky path:** in Gmail settings → Accounts → "Send mail as", add `dpo@theenglishhub.app` as an alias. Gmail will ask to verify by sending a code to `dpo@...` — the code arrives in your `info@upskillenergy.com` (because of the Cloudflare forward). You paste it back and Gmail will let you send as that alias going forward. This works but is officially unsupported by Google.

---

## After this is done — update me

Paste me:

> "Cloudflare Email Routing live. Verified `dpo@theenglishhub.app` receives."

And I will:

1. Update the Terms of Service and Privacy Policy to route DPO queries to `dpo@theenglishhub.app` instead of `info@upskillenergy.com`.
2. Update the /data-processing page, safeguarding policy, and accessibility statement to use the matching aliases.
3. Update the sub-processor register.
4. Update the ICO registration prefill + AXA email drafts to cite the new contact addresses.
5. Confirm the Trustpilot `reviews@` from-address is ready for wiring (see `src/lib/trustpilot/README.md`).

~5 minutes of edit time on my end. All committed and deployed in one pass.

---

**Total time for you: 15 minutes. Total cost: £0.**
