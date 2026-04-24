-- Trustpilot invite pipeline expansion (23 April 2026).
--
-- Extends the dedup table established in 20260419_trustpilot_invites.sql to
-- cover:
--   • the InviteJS atomic reserve-and-fire path (`reserved` status)
--   • the `teacher_month_3_streak` trigger shipped with the full BCC +
--     InviteJS rollout
--   • the 12-month per-trigger / 90-day global dedup rules — the previous
--     UNIQUE(user_id, trigger) was "once ever", which is now too strict for
--     year-on-year retention invites.

-- Drop the previous CHECK on trigger so the new name is permitted.
alter table public.trustpilot_invite
  drop constraint if exists trustpilot_invite_trigger_check;

alter table public.trustpilot_invite
  add constraint trustpilot_invite_trigger_check
  check (
    trigger in (
      'student_first_mark',
      'student_first_mark_followup_7d',
      'student_first_mock',
      'student_90d_retention',
      'teacher_first_bulk_mark',
      'teacher_month_3_streak',
      'parent_30d_dashboard'
    )
  );

-- Allow the atomic reserve status used by the InviteJS path.
alter table public.trustpilot_invite
  drop constraint if exists trustpilot_invite_status_check;

alter table public.trustpilot_invite
  add constraint trustpilot_invite_status_check
  check (status in ('sent', 'skipped', 'failed', 'reserved'));

-- Drop the "once ever" UNIQUE; replaced by application-level 12-month
-- per-trigger + 90-day global windows in src/lib/trustpilot/dedup.ts.
-- A partial unique index on (user_id, trigger) WHERE status in
-- ('sent','reserved') retains atomicity for the reserve-and-fire race.
alter table public.trustpilot_invite
  drop constraint if exists trustpilot_invite_user_id_trigger_key;

create unique index if not exists trustpilot_invite_active_unique_idx
  on public.trustpilot_invite(user_id, trigger)
  where status in ('sent', 'reserved');
