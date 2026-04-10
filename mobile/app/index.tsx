import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView, WebViewMessageEvent, WebViewNavigation } from 'react-native-webview';
import { router } from 'expo-router';
import { getAuthToken, setAuthToken } from '../lib/auth';

const WEB_URL = 'https://theenglishhub.app';

type NativeBridgeMessage =
  | { type: 'auth'; token: string }
  | { type: 'logout' }
  | { type: 'navigate'; route: string }
  | { type: 'openSaved' }
  | { type: 'ready' };

// Custom UA so the web app can detect it's running inside the native shell.
const NATIVE_USER_AGENT =
  'Mozilla/5.0 (Mobile; TheEnglishHubNative/1.0) AppleWebKit/605.1.15 (KHTML, like Gecko)';

export default function HomeScreen() {
  const webViewRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [injectedJS, setInjectedJS] = useState<string>('');

  useEffect(() => {
    (async () => {
      const token = await getAuthToken();
      const bridge = `
        window.__ENGLISH_HUB_NATIVE__ = true;
        window.__ENGLISH_HUB_TAB__ = 'home';
        window.postNativeMessage = function(msg) {
          if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
            window.ReactNativeWebView.postMessage(JSON.stringify(msg));
          }
        };
        ${token ? `document.cookie = "eh_auth=${token}; path=/; secure; samesite=lax";` : ''}
        true;
      `;
      setInjectedJS(bridge);
    })();
  }, []);

  const handleMessage = useCallback(async (event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data) as NativeBridgeMessage;
      switch (data.type) {
        case 'auth':
          await setAuthToken(data.token);
          break;
        case 'logout':
          await setAuthToken(null);
          break;
        case 'navigate':
          router.push(data.route as never);
          break;
        case 'openSaved':
          router.push('/saved');
          break;
        case 'ready':
          setLoading(false);
          break;
      }
    } catch (err) {
      console.warn('Failed to parse bridge message', err);
    }
  }, []);

  const handleNavigationStateChange = useCallback((navState: WebViewNavigation) => {
    if (!navState.loading) setLoading(false);
  }, []);

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorBox}>
          <Text style={styles.errorTitle}>Unable to connect</Text>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setError(null);
              setLoading(true);
              webViewRef.current?.reload();
            }}
          >
            <Text style={styles.buttonText}>Retry</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSecondary]}
            onPress={() => router.push('/saved')}
          >
            <Text style={styles.buttonText}>View saved content</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <WebView
        ref={webViewRef}
        source={{ uri: WEB_URL }}
        userAgent={NATIVE_USER_AGENT}
        injectedJavaScriptBeforeContentLoaded={injectedJS}
        onMessage={handleMessage}
        onNavigationStateChange={handleNavigationStateChange}
        onError={(e) => setError(e.nativeEvent.description || 'Network error')}
        onHttpError={(e) =>
          setError(`HTTP ${e.nativeEvent.statusCode}: ${e.nativeEvent.description}`)
        }
        sharedCookiesEnabled
        thirdPartyCookiesEnabled
        domStorageEnabled
        javaScriptEnabled
        originWhitelist={['https://theenglishhub.app', 'https://*.theenglishhub.app']}
        pullToRefreshEnabled
        allowsBackForwardNavigationGestures
        style={styles.webview}
      />
      {loading ? (
        <View style={styles.loadingOverlay} pointerEvents="none">
          <ActivityIndicator size="large" color="#1e40af" />
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  webview: { flex: 1 },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  errorBox: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTitle: { fontSize: 20, fontWeight: '700', color: '#111827', marginBottom: 8 },
  errorText: { fontSize: 14, color: '#4b5563', textAlign: 'center', marginBottom: 24 },
  button: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonSecondary: { backgroundColor: '#6b7280' },
  buttonText: { color: '#ffffff', fontWeight: '600', fontSize: 16 },
});
