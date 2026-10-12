-- ─── profiles: the Stripe customer id is the server's to write ─────────────
--
-- Second step of 20261012_profiles_users_edit_only_their_details.sql, which
-- limited what a signed-in user may UPDATE on their own profiles row and
-- left stripe_customer_id among the five columns only because checkout and
-- promo redeem saved it with the user's own client.
--
-- WHY IT MATTERS (12 October 2026). /api/stripe/portal opens a billing
-- session for whatever customer profiles.stripe_customer_id names. While a
-- user could write the column, anyone who learned another customer's id
-- (cus_...) could point their own profile at it and see that customer's
-- invoices, payment method and subscription. Checked read-only before
-- writing this: 17 profiles hold an id, all distinct, all well-formed, none
-- contradicting its Subscription row, so nothing suggests it was used.
--
-- ORDER OF DEPLOYMENT. Checkout and promo redeem were moved to the service
-- role in 71e0fd76 and deployed before this file was pushed. Migrations run
-- at build time, while the previous deployment is still serving; had this
-- revoke shipped with that code, a first-time customer reaching the old
-- checkout during the build would have been refused with a 500.
--
-- Users may now update full_name, year_group, exam_board and updated_at,
-- which is exactly what the /account profile form sends. The service role
-- and the SECURITY DEFINER sign-up trigger are untouched. The list is pinned
-- by src/__tests__/a-user-cannot-grant-themselves-paid-access.test.ts.
--
-- Revoking a table privilege also revokes the matching column privileges, so
-- the GRANT below is the complete list afterwards. Idempotent.
-- ────────────────────────────────────────────────────────────────────────────

REVOKE UPDATE ON public.profiles FROM anon, authenticated;

GRANT UPDATE (full_name, year_group, exam_board, updated_at)
  ON public.profiles TO authenticated;
