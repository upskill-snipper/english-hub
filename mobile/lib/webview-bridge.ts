/**
 * Shared WebView ↔ native message bridge.
 *
 * The web app (loaded inside `react-native-webview`) calls
 * `window.postNativeMessage({ type, ... })` to hand a message back to the
 * native shell. This module parses the payload, dispatches to typed
 * handlers, and writes the resulting state to SecureStore via the auth
 * helpers in `./auth`. RevenueCat login is wired through `setUserId`,
 * so an `auth` message with a Supabase user id automatically aliases
 * the device's RevenueCat session — no extra hop required.
 *
 * Message types currently understood (see also `mobile/README.md`):
 *
 * | Type      | Payload                                | Effect                                   |
 * | --------- | -------------------------------------- | ---------------------------------------- |
 * | `auth`    | `{ token: string, userId?: string }`   | Persist token + user id to SecureStore   |
 * | `logout`  | `{}`                                   | Clear token + user id (logs out RC too)  |
 * | `navigate`| `{ route: string }`                    | Push a native route via expo-router      |
 * | `openSaved` | `{}`                                 | Push the Saved tab                       |
 * | `ready`   | `{}`                                   | Hide the WebView's loading spinner       |
 *
 * Anything we don't recognise gets logged in dev and ignored in prod —
 * never trust the payload (it can carry whatever the page injects).
 */

import { router } from 'expo-router';
import type { WebViewMessageEvent } from 'react-native-webview';
import { setAuthToken, setUserId } from './auth';

// ─── Types ─────────────────────────────────────────────────────────────────

interface AuthMessage {
  type: 'auth';
  token: string;
  userId?: string;
}
interface LogoutMessage {
  type: 'logout';
}
interface NavigateMessage {
  type: 'navigate';
  route: string;
}
interface OpenSavedMessage {
  type: 'openSaved';
}
interface ReadyMessage {
  type: 'ready';
}

type BridgeMessage =
  | AuthMessage
  | LogoutMessage
  | NavigateMessage
  | OpenSavedMessage
  | ReadyMessage;

interface BridgeOptions {
  /** Called when the WebView reports it has finished loading. */
  onReady?: () => void;
}

// ─── Public ────────────────────────────────────────────────────────────────

/**
 * Build a `WebViewMessageEvent → void` handler. Pass to
 * `<WebView onMessage={...}>`. The factory pattern lets each tab pass its
 * own `onReady` callback (e.g. to hide a per-tab loading spinner) while
 * sharing the bulk of the dispatch logic.
 */
export function createWebViewMessageHandler(options: BridgeOptions = {}) {
  return (event: WebViewMessageEvent) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(event.nativeEvent.data);
    } catch (err) {
      if (__DEV__) console.warn('[bridge] Malformed payload:', event.nativeEvent.data);
      return;
    }

    if (!isBridgeMessage(parsed)) {
      if (__DEV__) console.warn('[bridge] Unknown message shape:', parsed);
      return;
    }

    void dispatch(parsed, options);
  };
}

// ─── Internal ──────────────────────────────────────────────────────────────

function isBridgeMessage(value: unknown): value is BridgeMessage {
  if (!value || typeof value !== 'object') return false;
  const v = value as { type?: unknown };
  return typeof v.type === 'string';
}

async function dispatch(msg: BridgeMessage, options: BridgeOptions): Promise<void> {
  switch (msg.type) {
    case 'auth': {
      // Persist the session token first so any subsequent reload of a
      // WebView already has it available via cookie/SecureStore.
      if (typeof msg.token === 'string' && msg.token.length > 0) {
        await setAuthToken(msg.token);
      }
      // Aliasing the canonical Supabase user id into RevenueCat is
      // handled automatically by `setUserId` — see `lib/auth.ts`.
      if (typeof msg.userId === 'string' && msg.userId.length > 0) {
        await setUserId(msg.userId);
      }
      return;
    }
    case 'logout': {
      // setAuthToken(null) cascades to logoutFromRevenueCat() so the
      // RC session is cleared in the same call.
      await setAuthToken(null);
      await setUserId(null);
      return;
    }
    case 'navigate': {
      if (typeof msg.route === 'string' && msg.route.length > 0) {
        try {
          router.push(msg.route as never);
        } catch (err) {
          if (__DEV__) console.warn('[bridge] router.push failed:', err);
        }
      }
      return;
    }
    case 'openSaved': {
      try {
        router.push('/saved');
      } catch (err) {
        if (__DEV__) console.warn('[bridge] router.push(/saved) failed:', err);
      }
      return;
    }
    case 'ready': {
      options.onReady?.();
      return;
    }
    default: {
      // Exhaustiveness — TypeScript guarantees this is unreachable for a
      // well-typed message; runtime fallback stays a silent no-op.
      const _exhaustive: never = msg;
      void _exhaustive;
      return;
    }
  }
}
