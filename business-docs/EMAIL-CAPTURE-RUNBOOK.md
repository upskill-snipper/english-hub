# Email Capture Runbook

Operational notes for the lead-magnet email-capture system that powers
`<EmailCaptureCard />` across study guides, blog posts, and dedicated
landing pages.

## Why this exists

The SEO strategy ships free, ungated lead magnets (PDF quote banks,
revision sheets, model-answer extracts) on study-guide and blog pages.
Visitors hand over an email address in exchange for the resource so we
can:

1. Email the resource (and any future companion content) on request.
2. Build a marketing list of ICSE/GCSE/IGCSE/A-Level English students,
   parents, and teachers — the warm audience that converts to paid.
3. Attribute traffic to channels via UTM tags captured at sign-up time.

The system is deliberately small: a single Postgres table, one POST
endpoint, and one React component. There is no double-opt-in flow yet
(documented as a follow-up below), and no provider integration — the
list lives in our database, not Mailchimp or ConvertKit.

## How it works

| Layer | Path | Role |
|-------|------|------|
| DB    | `supabase/migrations/20260504120000_email_subscribers.sql` | Table + indexes + service-role-only RLS |
| API   | `src/app/api/email/capture/route.ts`                       | POST handler, Zod validation, rate-limit |
| UI    | `src/components/marketing/EmailCaptureCard.tsx`            | Client component used on marketing pages |

The `email_subscribers` table has `UNIQUE(email, magnet_slug)`, which
makes captures idempotent per magnet — the same visitor signing up for
the same magnet twice returns `already_subscribed: true` rather than
erroring.

## Running the migration

### Local development

```bash
# Option A — Supabase CLI (preferred)
supabase db push

# Option B — psql against the local stack
psql "$DATABASE_URL" -f supabase/migrations/20260504120000_email_subscribers.sql
```

### Production

The Supabase project ships migrations via the same `supabase db push`
flow used for every other table. Deploy steps:

1. Merge the PR adding the migration to `main`.
2. From a machine with the production Supabase CLI link:
   ```bash
   supabase link --project-ref <prod-project-ref>
   supabase db push
   ```
3. Verify in the Supabase dashboard SQL editor:
   ```sql
   SELECT relname FROM pg_class WHERE relname = 'email_subscribers';
   ```

The migration is idempotent (`CREATE TABLE IF NOT EXISTS`,
`CREATE INDEX IF NOT EXISTS`) so re-running it is safe.

## Querying the table

The table is service-role-only — query it via the Supabase dashboard
SQL editor or a script that uses `SUPABASE_SERVICE_ROLE_KEY`.

### Top magnets by capture count (last 30 days)

```sql
SELECT
  magnet_slug,
  COUNT(*) AS captures,
  COUNT(DISTINCT email) AS unique_emails
FROM public.email_subscribers
WHERE created_at >= now() - interval '30 days'
GROUP BY magnet_slug
ORDER BY captures DESC;
```

### Daily capture trend

```sql
SELECT
  date_trunc('day', created_at) AS day,
  COUNT(*) AS captures
FROM public.email_subscribers
WHERE created_at >= now() - interval '90 days'
GROUP BY day
ORDER BY day DESC;
```

### Capture funnel by UTM campaign

```sql
SELECT
  utm_campaign,
  utm_source,
  COUNT(*) AS captures
FROM public.email_subscribers
WHERE utm_campaign IS NOT NULL
GROUP BY utm_campaign, utm_source
ORDER BY captures DESC;
```

## Right-to-erasure (UK DPA / GDPR)

When a subscriber emails asking to be removed, delete every row that
matches their address:

```sql
DELETE FROM public.email_subscribers
WHERE lower(email) = lower('subscriber@example.com');
```

Reply confirming the deletion and the date. The address is now free to
re-subscribe in the future via any magnet — there is no suppression
list (subscriber removal is a hard delete, not a flag).

If a `subject access request` (SAR) comes in instead of erasure:

```sql
SELECT *
FROM public.email_subscribers
WHERE lower(email) = lower('subscriber@example.com')
ORDER BY created_at;
```

Export the result and send it to the subscriber within the 30-day
statutory window. Include this table's contents in any wider DSAR
export the data-retention helper produces.

## Integrating `<EmailCaptureCard />` into a page

The component is a client component, so it can be dropped into any
server-rendered page without further wiring. Pass the lead-magnet
metadata as props:

```tsx
import EmailCaptureCard from '@/components/marketing/EmailCaptureCard'

export default function MacbethGuidePage() {
  return (
    <article>
      {/* ...guide content... */}

      <EmailCaptureCard
        magnetTitle="Free Macbeth quote bank"
        magnetDescription="40 hand-picked quotes mapped to AQA themes, with mark-scheme phrasing for each one."
        magnetSlug="macbeth-quote-bank-2026"
        className="mt-12"
      />
    </article>
  )
}
```

The `magnetSlug` is the database key — pick a stable, kebab-case value
and don't change it once the magnet is live (it's how repeat visitors
are deduplicated).

## TODOs

- **Signed download URLs.** The API route currently returns
  `signed_download_url: null` on every response. A follow-up ticket
  will add a `lead_magnets` table mapping `magnet_slug` to a Supabase
  Storage object key, and the route will mint a short-lived signed URL
  to return alongside the success response. The UI already handles a
  non-null `signed_download_url` — it shows a download button instead
  of the "check your inbox" copy.
- **Double-opt-in.** The current flow trusts the consent checkbox.
  Once Resend templates are in place, send a confirmation email with a
  one-time link the user has to click before we treat them as opted-in
  for ongoing marketing. Schema field for this is not yet added —
  add a `confirmed_at TIMESTAMPTZ` column when implementing.
- **ESP sync.** When the marketing list grows past a few hundred,
  pipe new captures into Mailchimp/ConvertKit via a Supabase webhook
  or a daily cron job. Until then the list lives in Postgres only.
