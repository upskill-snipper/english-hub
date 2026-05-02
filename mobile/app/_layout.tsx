import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState, useCallback } from 'react';
import * as Haptics from 'expo-haptics';
import { ThemeProvider, useTheme } from '../lib/theme';
import { registerForPushNotificationsAsync } from '../lib/notifications';
import { getItem, setItem } from '../lib/storage';
import { initPurchases, loginToRevenueCat } from '../lib/purchases';
import { getUserId } from '../lib/auth';
import ErrorBoundary from '../components/ErrorBoundary';
import WelcomeScreen from '../components/onboarding/WelcomeScreen';
import ProfileSetup from '../components/onboarding/ProfileSetup';

// ---------------------------------------------------------------------------
// Onboarding step type
// ---------------------------------------------------------------------------

type OnboardingStep = 'loading' | 'welcome' | 'profile' | 'done';

// ---------------------------------------------------------------------------
// Inner layout (needs ThemeProvider above it)
// ---------------------------------------------------------------------------

function AppShell() {
  const { theme, isDark } = useTheme();

  const [step, setStep] = useState<OnboardingStep>('loading');

  // Check onboarding status on mount
  useEffect(() => {
    (async () => {
      const complete = await getItem<boolean>('onboardingComplete');
      setStep(complete ? 'done' : 'welcome');
    })();
  }, []);

  useEffect(() => {
    if (step !== 'done') return;
    registerForPushNotificationsAsync().catch((err) => {
      console.warn('Push notification registration failed:', err);
    });
    // Configure RevenueCat once we know we're past onboarding. If a user
    // is already signed in (returning user), alias the canonical Supabase
    // id so prior-purchase entitlements resolve immediately.
    (async () => {
      await initPurchases();
      const userId = await getUserId();
      if (userId) await loginToRevenueCat(userId);
    })();
  }, [step]);

  const handleTabPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
  };

  const handleProfileComplete = useCallback(() => {
    // onboardingComplete is already set to true by ProfileSetup.handleSubmit
    setStep('done');
  }, []);

  // Show nothing while checking AsyncStorage
  if (step === 'loading') return null;

  // Onboarding: welcome carousel
  if (step === 'welcome') {
    return <WelcomeScreen onComplete={() => setStep('profile')} />;
  }

  // Onboarding: profile setup
  if (step === 'profile') {
    return <ProfileSetup onComplete={handleProfileComplete} />;
  }

  // Normal tab layout
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.tabBarActive,
          tabBarInactiveTintColor: theme.tabBarInactive,
          tabBarStyle: {
            backgroundColor: theme.tabBar,
            borderTopWidth: 0.5,
            borderTopColor: theme.tabBarBorder,
          },
        }}
        screenListeners={{
          tabPress: handleTabPress,
        }}
      >
        {/* ---- Visible tabs ---- */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="study"
          options={{
            title: 'Study',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: 'Saved',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />

        {/* ---- Hidden routes (kept so expo-router doesn't error on existing files) ---- */}
        <Tabs.Screen name="learn" options={{ href: null }} />
        <Tabs.Screen name="games" options={{ href: null }} />
        <Tabs.Screen name="account" options={{ href: null }} />
        <Tabs.Screen name="quiz" options={{ href: null }} />
        <Tabs.Screen name="timer" options={{ href: null }} />
        <Tabs.Screen name="progress" options={{ href: null }} />
        <Tabs.Screen name="notes" options={{ href: null }} />
        <Tabs.Screen name="achievements" options={{ href: null }} />
        <Tabs.Screen name="paywall" options={{ href: null }} />
      </Tabs>
    </>
  );
}

// ---------------------------------------------------------------------------
// Root layout
// ---------------------------------------------------------------------------

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <ThemeProvider>
          <AppShell />
        </ThemeProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
