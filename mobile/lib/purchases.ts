/**
 * RevenueCat integration for The English Hub mobile.
 *
 * Wraps the `react-native-purchases` SDK with thin helpers the rest of the
 * app calls. RevenueCat handles StoreKit 2 (iOS) and Play Billing (Android)
 * receipt validation behind a single API surface.
 *
 * Lifecycle:
 *   1. `initPurchases()` — called once on app launch from `_layout.tsx`.
 *   2. `loginToRevenueCat(userId)` — called immediately after we receive
 *      a Supabase user id from the WebView's `auth` postMessage. Aliases
 *      the anonymous device id to the canonical user id so subscriptions
 *      survive cross-device sign-in.
 *   3. `logoutFromRevenueCat()` — called on sign-out so the next user
 *      doesn't inherit entitlements.
 *
 * Product catalogue lives in `src/lib/revenuecat/reconcile.ts` on the
 * web side. Both must stay in sync.
 */

import { Platform } from 'react-native';
import Purchases, {
  type CustomerInfo,
  type PurchasesOffering,
  type PurchasesPackage,
  LOG_LEVEL,
} from 'react-native-purchases';
import Constants from 'expo-constants';

// ─── Config ────────────────────────────────────────────────────────────────

/**
 * Public RevenueCat SDK API keys. These are safe to embed in the client
 * (they're scoped to this app + platform). Configure under
 * `expo.extra.revenuecat` in `app.json`, or via EAS env vars at build
 * time as `EXPO_PUBLIC_REVENUECAT_IOS_API_KEY` /
 * `EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY`.
 */
function resolveApiKey(): string | null {
  const extra =
    (Constants.expoConfig?.extra as Record<string, unknown> | undefined) ?? {};
  const env = process.env;
  if (Platform.OS === 'ios') {
    return (
      (extra.revenuecatIosApiKey as string | undefined) ||
      env.EXPO_PUBLIC_REVENUECAT_IOS_API_KEY ||
      null
    );
  }
  if (Platform.OS === 'android') {
    return (
      (extra.revenuecatAndroidApiKey as string | undefined) ||
      env.EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY ||
      null
    );
  }
  return null;
}

/** RevenueCat entitlement that maps to "premium access" on the web side. */
export const PREMIUM_ENTITLEMENT_ID = 'premium';

/** Identifier of the default offering configured in RevenueCat. */
export const DEFAULT_OFFERING_ID = 'default';

// ─── State ─────────────────────────────────────────────────────────────────

/**
 * Resolves once `Purchases.configure()` has been called (or skipped because
 * no API key was available). All public helpers below await this so callers
 * that fire before init has finished — e.g. a WebView `auth` postMessage
 * arriving while the layout's IIFE is still running — block instead of
 * silently no-op'ing.
 *
 * `null` until the first call to `initPurchases()`. After that it's a
 * cached promise so repeat calls are idempotent.
 */
let initPromise: Promise<void> | null = null;

/** Indicates whether configure was actually called (vs. skipped). */
let configured = false;

// ─── Public API ────────────────────────────────────────────────────────────

/**
 * Configure the RevenueCat SDK. Idempotent — safe to call from multiple
 * mount points. Logs a warning and no-ops if the API key is missing
 * (e.g. in dev builds without IAP keys), so the rest of the app still
 * boots.
 */
export async function initPurchases(): Promise<void> {
  if (initPromise) return initPromise;
  initPromise = (async () => {
    const apiKey = resolveApiKey();
    if (!apiKey) {
      console.warn(
        '[purchases] No RevenueCat API key configured for platform ' +
          Platform.OS +
          '. IAP will be unavailable. Add EXPO_PUBLIC_REVENUECAT_IOS_API_KEY ' +
          'and EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY to your build env.',
      );
      return;
    }
    if (__DEV__) {
      Purchases.setLogLevel(LOG_LEVEL.DEBUG);
    }
    Purchases.configure({ apiKey });
    configured = true;
  })();
  return initPromise;
}

/**
 * Tell RevenueCat which user is signed in. Should be called on every
 * sign-in event after we know the Supabase user id. RevenueCat handles
 * the merge between any anonymous purchases the device made before
 * sign-in and the canonical user id.
 */
export async function loginToRevenueCat(userId: string): Promise<void> {
  if (!initPromise) return;
  await initPromise;
  if (!configured) return;
  if (!userId) return;
  try {
    await Purchases.logIn(userId);
  } catch (err) {
    console.warn('[purchases] logIn failed:', err);
  }
}

/**
 * Disassociate the device from any signed-in user. RevenueCat will
 * generate a fresh anonymous id for the next session.
 */
export async function logoutFromRevenueCat(): Promise<void> {
  if (!initPromise) return;
  await initPromise;
  if (!configured) return;
  try {
    await Purchases.logOut();
  } catch (err) {
    // logOut is allowed to fail if the user is already anonymous — swallow.
    if (__DEV__) console.warn('[purchases] logOut soft-failed:', err);
  }
}

/**
 * Returns the default offering with all four English Hub packages
 * (student monthly/annual, teacher monthly/annual). `null` when
 * RevenueCat hasn't been configured or the offering is missing.
 */
export async function getDefaultOffering(): Promise<PurchasesOffering | null> {
  if (!initPromise) return null;
  await initPromise;
  if (!configured) return null;
  try {
    const offerings = await Purchases.getOfferings();
    return offerings.current ?? offerings.all[DEFAULT_OFFERING_ID] ?? null;
  } catch (err) {
    console.warn('[purchases] getOfferings failed:', err);
    return null;
  }
}

/**
 * Open the StoreKit / Play Billing purchase sheet for one package and
 * return the resulting `CustomerInfo`. Throws if the user cancels — the
 * caller should catch and treat as a no-op.
 */
export async function purchasePackage(
  pkg: PurchasesPackage,
): Promise<CustomerInfo> {
  if (initPromise) await initPromise;
  const result = await Purchases.purchasePackage(pkg);
  return result.customerInfo;
}

/**
 * Apple-mandated restore-purchases flow. Asks the store to replay every
 * receipt for the signed-in Apple ID and returns the resulting customer
 * info, which will reflect the entitlement state after replay.
 */
export async function restorePurchases(): Promise<CustomerInfo> {
  if (initPromise) await initPromise;
  return await Purchases.restorePurchases();
}

/**
 * Convenience helper: does the current user have an active `premium`
 * entitlement? `false` for anonymous, free-tier, expired, or revoked
 * users.
 */
export async function hasPremiumEntitlement(): Promise<boolean> {
  if (!initPromise) return false;
  await initPromise;
  if (!configured) return false;
  try {
    const info = await Purchases.getCustomerInfo();
    return info.entitlements.active[PREMIUM_ENTITLEMENT_ID] !== undefined;
  } catch (err) {
    console.warn('[purchases] getCustomerInfo failed:', err);
    return false;
  }
}

/**
 * Subscribe to entitlement changes. Caller is responsible for invoking
 * the returned cleanup function when the listener is no longer needed.
 *
 * If init hasn't completed yet, the listener is registered after init
 * resolves. The returned cleanup is safe to call at any point — it will
 * remove the listener whether init has resolved or not.
 */
export function onCustomerInfoChange(
  callback: (info: CustomerInfo) => void,
): () => void {
  let cancelled = false;
  if (initPromise) {
    initPromise.then(() => {
      if (cancelled || !configured) return;
      Purchases.addCustomerInfoUpdateListener(callback);
    });
  }
  return () => {
    cancelled = true;
    if (configured) {
      Purchases.removeCustomerInfoUpdateListener(callback);
    }
  };
}
