import { useLocalSearchParams } from 'expo-router';
import { useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { createWebViewMessageHandler } from '../lib/webview-bridge';

const ORIGIN = 'https://theenglishhub.app';
const DEFAULT_PATH = '/revision';

// Custom UA so the web app can detect it's running inside the native shell.
// Keep the "TheEnglishHubNative/1.0" token stable — the web app can feature-detect on it.
const NATIVE_USER_AGENT =
  'Mozilla/5.0 (Mobile; TheEnglishHubNative/1.0) AppleWebKit/605.1.15 (KHTML, like Gecko)';

// Injected before the page runs so window.__ENGLISH_HUB_NATIVE__ is available
// to the web app (auth handoff, native nav, etc.) from the very first paint.
const BRIDGE_JS = `
  window.__ENGLISH_HUB_NATIVE__ = true;
  window.__ENGLISH_HUB_TAB__ = 'learn';
  window.postNativeMessage = function(msg) {
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
      window.ReactNativeWebView.postMessage(JSON.stringify(msg));
    }
  };
  true;
`;

/** Sanitise an incoming `?path=` so we only ever load same-origin URLs. */
function buildSafeUrl(rawPath: unknown): string {
  if (typeof rawPath !== 'string' || rawPath.length === 0) {
    return ORIGIN + DEFAULT_PATH;
  }
  // Reject anything that tries to load off-origin (`//evil.com`, `https://...`)
  if (
    rawPath.startsWith('http:') ||
    rawPath.startsWith('https:') ||
    rawPath.startsWith('//')
  ) {
    return ORIGIN + DEFAULT_PATH;
  }
  // Always anchor with a leading slash so the URL is well-formed.
  const path = rawPath.startsWith('/') ? rawPath : '/' + rawPath;
  return ORIGIN + path;
}

/**
 * Hub WebView — single point of truth for the website's full content. Accepts
 * a `?path=` query param so any caller (Study screen "View full guide", push
 * notifications, Universal Links) can deep-link into a specific page on
 * theenglishhub.app without forking off into Safari.
 *
 * Examples:
 *   /learn                                                  → /revision (the hub)
 *   /learn?path=/revision/poetry/love-and-relationships     → that anthology
 *   /learn?path=/igcse/cambridge                            → IGCSE Cambridge hub
 *   /learn?path=/practice                                   → Practice
 *   /learn?path=/mock-exams                                 → Mock papers
 */
export default function LearnScreen() {
  const webViewRef = useRef<WebView>(null);
  const params = useLocalSearchParams<{ path?: string }>();
  const url = useMemo(() => buildSafeUrl(params?.path), [params?.path]);

  // Wire the WebView ↔ native bridge. `auth` and `logout` cascade to
  // SecureStore + RevenueCat via `lib/auth.ts` and `lib/purchases.ts`.
  const handleMessage = useMemo(() => createWebViewMessageHandler(), []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.webviewWrapper}>
        <WebView
          ref={webViewRef}
          source={{ uri: url }}
          userAgent={NATIVE_USER_AGENT}
          injectedJavaScriptBeforeContentLoaded={BRIDGE_JS}
          onMessage={handleMessage}
          sharedCookiesEnabled
          thirdPartyCookiesEnabled
          domStorageEnabled
          javaScriptEnabled
          originWhitelist={['https://theenglishhub.app', 'https://*.theenglishhub.app']}
          pullToRefreshEnabled
          allowsBackForwardNavigationGestures
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  webviewWrapper: { flex: 1 },
});
