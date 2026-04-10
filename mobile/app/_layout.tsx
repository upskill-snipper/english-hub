import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { registerForPushNotificationsAsync } from '../lib/notifications';

export default function RootLayout() {
  useEffect(() => {
    registerForPushNotificationsAsync().catch((err) => {
      console.warn('Push notification registration failed:', err);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#1e40af',
          tabBarInactiveTintColor: '#6b7280',
          tabBarStyle: {
            borderTopWidth: 0.5,
            borderTopColor: '#e5e7eb',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="learn"
          options={{
            title: 'Learn',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="games"
          options={{
            title: 'Games',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="game-controller-outline" size={size} color={color} />
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
          name="account"
          options={{
            title: 'Account',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
