-- Trustpilot review-invitation dedup table.
-- One row per user × trigger. UNIQUE constraint prevents re-sending.
--
-- Service role writes; no non-admin SELECT policy (reviews are between the
-- user and Trustpilot, not something the user needs to see in-app).
--
-- Cascade on user delete so GDPR right-to-erasure cleanly removes invite
-- history.

create table if not exists public.trustpilot_invite (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  trigger text not null check (
    trigger in (
      'student_first_mark',
      'student_first_mark_followup_7d',
      'student_first_mock',
      'student_90d_retention',
      'teacher_first_bulk_mark',
      'parent_30d_dashboard'
    )
  ),
  status text not null default 'sent' check (status in ('sent', 'skipped', 'failed')),
  sent_at timestamptz not null default now(),
  message_id text,
  error text,
  skipped_reason text,
  unique (user_id, trigger)
);

create index if not exists trustpilot_invite_user_idx on public.trustpilot_invite(user_id);
create index if not exists trustpilot_invite_trigger_idx on public.trustpilot_invite(trigger);
create index if not exists trustpilot_invite_sent_at_idx on public.trustpilot_invite(sent_at desc);

alter table public.trustpilot_invite enable row level security;

create policy "service role manages trustpilot_invite"
  on public.trustpilot_invite
  for all
  to service_role
  using (true)
  with check (true);

-- No user-visible SELECT policy. A user cannot see their own invite history
-- from the app — that's fine, there's no UI for it. If that changes later,
-- add: `create policy "users see own invites" on trustpilot_invite for select
--       using (auth.uid() = user_id);`

comment on table public.trustpilot_invite is
  'Trustpilot review-invitation dedup. One row per (user_id, trigger). Service role writes only.';
