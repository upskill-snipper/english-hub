/**
 * grant-reviewer-entitlement.ts
 *
 * Grant the Apple App Review demo account a Teacher Annual entitlement so
 * Apple's reviewer can evaluate every paid surface without going through the
 * StoreKit purchase flow.
 *
 * Usage:
 *   npx tsx scripts/grant-reviewer-entitlement.ts <SUPABASE_USER_UUID>
 *
 * Preconditions:
 *   1. The founder has already created the Supabase auth user via the
 *      Supabase Dashboard → Auth → Users → Add user, with email
 *      `apple-reviewer@upskillenergy.com` and "Auto Confirm User" checked.
 *   2. The UUID printed by the dashboard is passed in as argv[2].
 *
 * What it does (all idempotent — re-runs are safe):
 *
 *   a. Upsert a Prisma `User` row keyed on `supabaseUserId`, with role TEACHER,
 *      a sentinel passwordHash (Supabase Auth owns the real one), and
 *      lastLoginAt held in the future so the dormancy sweep skips the account.
 *
 *   b. Upsert a `Subscription` row for that user — Teacher Annual, ACTIVE,
 *      currentPeriodEnd = NOW + 365 days, platform IOS, RevenueCat product
 *      id `com.upskillenergy.theenglishhub.teacher.annual`. This is what the
 *      `pickEntitlement()` resolver reads to set `pro=true`, `teacher_tools=
 *      true`, `status=active` on the wire.
 *
 *   c. Upsert `PrivacySettings` with marketing/analytics/research/AI-training
 *      all FALSE so the reviewer never gets marketing emails or shows up in
 *      research-data exports.
 *
 *   d. Upsert TERMS + PRIVACY consent rows at version 1.0 so any consent gate
 *      in the UI is satisfied.
 *
 * It does NOT seed essays — for demo essays + feedback run
 * `npx tsx scripts/seed-reviewers.ts --emails=apple-reviewer@upskillenergy.com`
 * after this script has finished.
 */

import {
  PrismaClient,
  Role,
  AccountStatus,
  SubscriptionPlan,
  SubscriptionStatus,
  SubscriptionPlatform,
  ConsentType,
  ConsentMethod,
  ProfileVisibility,
} from '@prisma/client'

const prisma = new PrismaClient()

const REVIEWER_EMAIL = 'apple-reviewer@upskillenergy.com'
const REVIEWER_FIRST_NAME = 'Apple'
const REVIEWER_LAST_NAME = 'Reviewer'
// Apple's RevenueCat product id for Teacher Annual — matches the catalogue
// used by `src/lib/revenuecat/reconcile.ts` PRODUCT_CATALOGUE.
const TEACHER_ANNUAL_PRODUCT_ID = 'com.upskillenergy.theenglishhub.teacher.annual'

// Stable synthetic ids so reruns upsert cleanly.
const USER_ID = 'usr_apple_reviewer'
const SUBSCRIPTION_ID = 'sub_apple_reviewer'
const PRIVACY_ID = 'prv_apple_reviewer'

function isUuid(v: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v)
}

async function main(): Promise<void> {
  const supabaseUserId = process.argv[2]
  if (!supabaseUserId) {
    throw new Error(
      'Missing argument. Usage: npx tsx scripts/grant-reviewer-entitlement.ts <SUPABASE_USER_UUID>',
    )
  }
  if (!isUuid(supabaseUserId)) {
    throw new Error(
      `Argument is not a valid UUID: ${supabaseUserId}. Copy it from Supabase Dashboard → Auth → Users → row → ID column.`,
    )
  }

  const now = new Date()
  const periodStart = new Date(now.getTime() - 24 * 60 * 60 * 1000) // 24h ago
  const periodEnd = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000) // +365d
  // Hold lastLoginAt in the future so the dormancy / re-engagement sweep skips
  // this account during the App Review window.
  const futureLogin = new Date(now.getTime() + 400 * 24 * 60 * 60 * 1000)

  // eslint-disable-next-line no-console
  console.log(
    `Granting Teacher Annual entitlement to ${REVIEWER_EMAIL} (supabaseUserId=${supabaseUserId})\n`,
  )

  await prisma.$transaction(async (tx) => {
    // ── a. User shell row (TEACHER, locked) ──────────────────────────────
    // We upsert keyed on email since that's @unique and stable across reruns.
    // The supabaseUserId binds the Prisma row to the auth.users row created
    // via the Supabase Dashboard.
    const user = await tx.user.upsert({
      where: { email: REVIEWER_EMAIL },
      create: {
        id: USER_ID,
        supabaseUserId,
        email: REVIEWER_EMAIL,
        // Sentinel — Supabase Auth owns the real password hash. The web
        // sign-in path no longer reads this column for Supabase-linked
        // users; this value is never used to authenticate.
        passwordHash: '__SUPABASE_AUTH_OWNS_PASSWORD__',
        firstName: REVIEWER_FIRST_NAME,
        lastName: REVIEWER_LAST_NAME,
        dateOfBirth: new Date('1990-01-01'),
        role: Role.TEACHER,
        isMinor: false,
        country: 'GB',
        accountStatus: AccountStatus.ACTIVE,
        lastLoginAt: futureLogin,
      },
      update: {
        supabaseUserId,
        firstName: REVIEWER_FIRST_NAME,
        lastName: REVIEWER_LAST_NAME,
        role: Role.TEACHER,
        accountStatus: AccountStatus.ACTIVE,
        lastLoginAt: futureLogin,
      },
    })

    // ── b. Subscription — Teacher Annual ACTIVE ──────────────────────────
    await tx.subscription.upsert({
      where: { userId: user.id },
      create: {
        id: SUBSCRIPTION_ID,
        userId: user.id,
        plan: SubscriptionPlan.ANNUAL,
        status: SubscriptionStatus.ACTIVE,
        currentPeriodStart: periodStart,
        currentPeriodEnd: periodEnd,
        paymentCount: 1,
        isTeacherPlan: true,
        platform: SubscriptionPlatform.IOS,
        originalPurchaseDate: periodStart,
        revenuecatAppUserId: supabaseUserId,
        revenuecatProductId: TEACHER_ANNUAL_PRODUCT_ID,
        // Stripe identity stays null — this is a comp / RevenueCat-style row.
        stripeCustomerId: null,
        stripeSubscriptionId: null,
      },
      update: {
        plan: SubscriptionPlan.ANNUAL,
        status: SubscriptionStatus.ACTIVE,
        currentPeriodStart: periodStart,
        currentPeriodEnd: periodEnd,
        isTeacherPlan: true,
        platform: SubscriptionPlatform.IOS,
        originalPurchaseDate: periodStart,
        revenuecatAppUserId: supabaseUserId,
        revenuecatProductId: TEACHER_ANNUAL_PRODUCT_ID,
        cancelledAt: null,
        refundedAt: null,
      },
    })

    // ── c. PrivacySettings — locked (no marketing, no analytics) ─────────
    await tx.privacySettings.upsert({
      where: { userId: user.id },
      create: {
        id: PRIVACY_ID,
        userId: user.id,
        analyticsEnabled: false,
        marketingEnabled: false,
        aiTrainingOptIn: false,
        aiOptOut: true,
        schoolSharingEnabled: false,
        researchDataEnabled: false,
        profileVisibility: ProfileVisibility.PRIVATE,
      },
      update: {
        analyticsEnabled: false,
        marketingEnabled: false,
        aiTrainingOptIn: false,
        aiOptOut: true,
        schoolSharingEnabled: false,
        researchDataEnabled: false,
        profileVisibility: ProfileVisibility.PRIVATE,
      },
    })

    // ── d. Consent — TERMS + PRIVACY at v1.0 ─────────────────────────────
    for (const consentType of [ConsentType.TERMS, ConsentType.PRIVACY]) {
      const consentId = `cns_apple_reviewer_${consentType}`
      await tx.consent.upsert({
        where: { id: consentId },
        create: {
          id: consentId,
          userId: user.id,
          consentType,
          version: '1.0',
          granted: true,
          method: ConsentMethod.ACTIVE_CHECKBOX,
          ipAddress: '127.0.0.1',
        },
        update: {
          granted: true,
          grantedAt: new Date(),
          withdrawnAt: null,
          version: '1.0',
        },
      })
    }
  })

  // ── Verification ────────────────────────────────────────────────────────
  const verified = await prisma.user.findUnique({
    where: { email: REVIEWER_EMAIL },
    include: {
      subscription: true,
      consents: true,
      privacySettings: true,
    },
  })
  if (!verified) {
    throw new Error('Verification failed: user not found after upsert.')
  }

  // eslint-disable-next-line no-console
  console.log('────────────────────────────────────────────────')
  // eslint-disable-next-line no-console
  console.log(' Apple reviewer entitlement — verification')
  // eslint-disable-next-line no-console
  console.log('────────────────────────────────────────────────')
  // eslint-disable-next-line no-console
  console.log(`  email:           ${verified.email}`)
  // eslint-disable-next-line no-console
  console.log(`  role:            ${verified.role}`)
  // eslint-disable-next-line no-console
  console.log(`  supabaseUserId:  ${verified.supabaseUserId}`)
  // eslint-disable-next-line no-console
  console.log(
    `  subscription:    ${verified.subscription?.status ?? '—'}/${verified.subscription?.plan ?? '—'}/${verified.subscription?.platform ?? '—'} teacher=${verified.subscription?.isTeacherPlan ?? '—'}`,
  )
  // eslint-disable-next-line no-console
  console.log(
    `  renews_on:       ${verified.subscription?.currentPeriodEnd?.toISOString().slice(0, 10) ?? '—'}`,
  )
  // eslint-disable-next-line no-console
  console.log(`  consents:        ${verified.consents.length}`)
  // eslint-disable-next-line no-console
  console.log(`  privacy locked:  ${verified.privacySettings ? 'yes' : 'no'}`)
  // eslint-disable-next-line no-console
  console.log("\n Next: seed demo essays so the reviewer's home screen is populated:")
  // eslint-disable-next-line no-console
  console.log(`   npx tsx scripts/seed-reviewers.ts --emails=${REVIEWER_EMAIL}\n`)
}

main()
  .catch((err: unknown) => {
    // eslint-disable-next-line no-console
    console.error('grant-reviewer-entitlement failed:', err)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
