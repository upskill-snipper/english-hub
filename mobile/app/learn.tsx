import { useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { createWebViewMessageHandler } from '../lib/webview-bridge';

const LEARN_URL = 'https://theenglishhub.app/revision';

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

export default function LearnScreen() {
  const webViewRef = useRef<WebView>(null);

  // Wire the WebView ↔ native bridge. `auth` and `logout` cascade to
  // SecureStore + RevenueCat via `lib/auth.ts` and `lib/purchases.ts`.
  const handleMessage = useMemo(() => createWebViewMessageHandler(), []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.webviewWrapper}>
        <WebView
          ref={webViewRef}
          source={{ uri: LEARN_URL }}
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
