import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

const GAMES_URL = 'https://theenglishhub.app/games';

const NATIVE_USER_AGENT =
  'Mozilla/5.0 (Mobile; TheEnglishHubNative/1.0) AppleWebKit/605.1.15 (KHTML, like Gecko)';

const BRIDGE_JS = `
  window.__ENGLISH_HUB_NATIVE__ = true;
  window.__ENGLISH_HUB_TAB__ = 'games';
  window.postNativeMessage = function(msg) {
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
      window.ReactNativeWebView.postMessage(JSON.stringify(msg));
    }
  };
  true;
`;

export default function GamesScreen() {
  const webViewRef = useRef<WebView>(null);

  const handleMessage = (event: WebViewMessageEvent) => {
    try {
      const msg = JSON.parse(event.nativeEvent.data);
      if (__DEV__) console.log('[games] bridge message', msg);
    } catch {
      /* ignore malformed payloads */
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.webviewWrapper}>
        <WebView
          ref={webViewRef}
          source={{ uri: GAMES_URL }}
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
          mediaPlaybackRequiresUserAction={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  webviewWrapper: { flex: 1 },
});
