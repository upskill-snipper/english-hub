/**
 * Mobile auth helpers — mirror the web app's auto-login behaviour.
 *
 * From 28 Apr 2026, The English Hub allows sign-up without an email-link
 * verification round-trip. When Supabase email-confirmation is disabled
 * (dashboard toggle), signUp() returns a session immediately; we then
 * navigate the user straight into the app rather than showing a
 * "check your email" screen. The verification-pending screen still
 * renders if the dashboard toggle is on.
 */

import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { loginToRevenueCat, logoutFromRevenueCat } from './purchases';

const AUTH_TOKEN_KEY = 'eh_auth_token';
const USER_ID_KEY = 'eh_user_id';

// ---------------------------------------------------------------------------
// Token / user-id storage (existing API — preserved as-is)
// ---------------------------------------------------------------------------

export async function getAuthToken(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(AUTH_TOKEN_KEY);
  } catch (err) {
    console.warn('Failed to read auth token', err);
    return null;
  }
}

export async function setAuthToken(token: string | null): Promise<void> {
  try {
    if (token === null) {
      await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY);
      // Clear the RevenueCat session so the next user doesn't inherit the
      // previous user's entitlements on shared devices.
      await logoutFromRevenueCat();
    } else {
      await SecureStore.setItemAsync(AUTH_TOKEN_KEY, token, {
        keychainAccessible: SecureStore.WHEN_UNLOCKED,
      });
    }
  } catch (err) {
    console.warn('Failed to write auth token', err);
  }
}

export async function getUserId(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(USER_ID_KEY);
  } catch {
    return null;
  }
}

export async function setUserId(userId: string | null): Promise<void> {
  try {
    if (userId === null) {
      await SecureStore.deleteItemAsync(USER_ID_KEY);
    } else {
      await SecureStore.setItemAsync(USER_ID_KEY, userId);
      // Alias the RevenueCat anonymous device id to the canonical Supabase
      // user id so any anonymous purchases this device made before sign-in
      // merge into the user account.
      await loginToRevenueCat(userId);
    }
  } catch (err) {
    console.warn('Failed to write user id', err);
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const token = await getAuthToken();
  return token !== null && token.length > 0;
}

// ---------------------------------------------------------------------------
// Sign-up (mirrors web)
// ---------------------------------------------------------------------------

/**
 * Discriminated result from `signUp`. Callers `switch (result.kind)` to
 * decide what to render next: navigate home, show "check your email", or
 * surface a calm error message.
 */
export type SignUpResult =
  | { kind: 'session'; userId: string }
  | { kind: 'verification-pending'; email: string }
  | { kind: 'error'; message: string };

/**
 * Enumeration-safe message we surface for any sign-up failure path. Mirrors
 * the web app's wording — never leak whether an email is already registered.
 */
const SIGN_UP_GENERIC_MESSAGE =
  "If this email is valid and not already registered, we've sent a verification link. Please check your inbox.";

interface SupabaseSignUpUser {
  id: string;
  email?: string;
}

interface SupabaseSignUpSession {
  access_token: string;
  refresh_token?: string;
}

interface SupabaseSignUpResponse {
  user?: SupabaseSignUpUser | null;
  session?: SupabaseSignUpSession | null;
  // Supabase REST returns `id`/`email` at the top level when the user is
  // returned without a session; tolerate both shapes.
  id?: string;
  email?: string;
  msg?: string;
  error_description?: string;
  error?: string;
}

function readSupabaseConfig(): { url: string; anonKey: string } | null {
  const extra =
    (Constants.expoConfig?.extra as Record<string, unknown> | undefined) ?? {};
  const env = process.env;

  const url =
    typeof extra.supabaseUrl === 'string' && extra.supabaseUrl.length > 0
      ? extra.supabaseUrl
      : env.EXPO_PUBLIC_SUPABASE_URL || '';
  const anonKey =
    typeof extra.supabaseAnonKey === 'string' && extra.supabaseAnonKey.length > 0
      ? extra.supabaseAnonKey
      : env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!url || !anonKey) return null;
  return { url, anonKey };
}

/**
 * Sign a user up. Mirrors the web's auto-login behaviour: if Supabase email
 * confirmation is disabled at the dashboard level, the response carries a
 * session and we return `{ kind: 'session' }` so the caller can navigate
 * straight into the app. Otherwise we return `{ kind: 'verification-pending' }`
 * and the caller renders the "check your email" screen.
 *
 * Calls Supabase's REST `/auth/v1/signup` endpoint directly so we don't add
 * a `@supabase/supabase-js` dependency to the mobile bundle. Configure with
 * `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` (or the
 * matching `extra.supabaseUrl` / `extra.supabaseAnonKey` keys in
 * `app.json`).
 */
export async function signUp(
  email: string,
  password: string,
): Promise<SignUpResult> {
  const config = readSupabaseConfig();
  if (!config) {
    if (__DEV__) {
      console.warn(
        '[auth] Supabase not configured. Set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY.',
      );
    }
    return { kind: 'error', message: SIGN_UP_GENERIC_MESSAGE };
  }

  let response: Response;
  try {
    response = await fetch(`${config.url}/auth/v1/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: config.anonKey,
      },
      body: JSON.stringify({ email, password }),
    });
  } catch (err) {
    if (__DEV__) console.warn('[auth] signUp network error', err);
    return { kind: 'error', message: SIGN_UP_GENERIC_MESSAGE };
  }

  let data: SupabaseSignUpResponse;
  try {
    data = (await response.json()) as SupabaseSignUpResponse;
  } catch {
    return { kind: 'error', message: SIGN_UP_GENERIC_MESSAGE };
  }

  if (!response.ok) {
    if (__DEV__) {
      console.warn(
        '[auth] signUp failed',
        response.status,
        data.msg ?? data.error_description ?? data.error,
      );
    }
    return { kind: 'error', message: SIGN_UP_GENERIC_MESSAGE };
  }

  // Auto-login path: Supabase returned a session, mirror the web behaviour
  // and let the caller navigate straight into the app.
  if (data.session && data.user) {
    await setAuthToken(data.session.access_token);
    await setUserId(data.user.id);
    return { kind: 'session', userId: data.user.id };
  }

  // No session: confirmation email was sent. Caller renders
  // "check your inbox".
  const userId = data.user?.id ?? data.id ?? null;
  const userEmail = data.user?.email ?? data.email ?? email;
  if (userId !== null) {
    return { kind: 'verification-pending', email: userEmail };
  }

  return { kind: 'error', message: SIGN_UP_GENERIC_MESSAGE };
}

// ---------------------------------------------------------------------------
// Google sign-in (stub)
// ---------------------------------------------------------------------------

/**
 * Sign in with Google. The standard Expo + Supabase flow uses
 * `expo-auth-session` and `WebBrowser.openAuthSessionAsync`. That package
 * is not currently a dependency of this app, so this remains a stub —
 * wire it up once the dependency is added.
 *
 * TODO: install `expo-auth-session` (`npx expo install expo-auth-session`)
 * and replace this stub with an OAuth flow that hands the resulting
 * Supabase session to `setAuthToken` / `setUserId`.
 */
export async function signInWithGoogle(): Promise<
  { ok: true } | { ok: false; message: string }
> {
  return { ok: false, message: 'Google sign-in not configured yet' };
}
