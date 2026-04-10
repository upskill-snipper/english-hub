import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { getAuthToken, setAuthToken } from '../lib/auth';
import {
  getNotificationsEnabled,
  setNotificationsEnabled,
} from '../lib/notifications';

export default function AccountScreen() {
  const [signedIn, setSignedIn] = useState(false);
  const [notificationsOn, setNotificationsOn] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await getAuthToken();
      setSignedIn(!!token);
      const notif = await getNotificationsEnabled();
      setNotificationsOn(notif);
    })();
  }, []);

  const handleSignOut = async () => {
    Alert.alert('Sign out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign out',
        style: 'destructive',
        onPress: async () => {
          await setAuthToken(null);
          setSignedIn(false);
        },
      },
    ]);
  };

  const toggleNotifications = async (value: boolean) => {
    setNotificationsOn(value);
    await setNotificationsEnabled(value);
  };

  const openExternal = async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Account</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status</Text>
          <Text style={styles.cardText}>
            {signedIn ? 'Signed in' : 'Not signed in'}
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.cardTitle}>Notifications</Text>
            <Switch value={notificationsOn} onValueChange={toggleNotifications} />
          </View>
          <Text style={styles.cardText}>
            Get reminders for new poems, quizzes, and daily practice.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.linkRow}
          onPress={() => router.push('/saved')}
        >
          <Text style={styles.linkText}>Saved content</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkRow}
          onPress={() => openExternal('https://theenglishhub.app/privacy')}
        >
          <Text style={styles.linkText}>Privacy policy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkRow}
          onPress={() => openExternal('https://theenglishhub.app/terms')}
        >
          <Text style={styles.linkText}>Terms of service</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkRow}
          onPress={() => openExternal('https://theenglishhub.app/support')}
        >
          <Text style={styles.linkText}>Contact support</Text>
        </TouchableOpacity>

        {signedIn ? (
          <TouchableOpacity style={styles.signOut} onPress={handleSignOut}>
            <Text style={styles.signOutText}>Sign out</Text>
          </TouchableOpacity>
        ) : null}

        <Text style={styles.version}>v1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  content: { padding: 20 },
  title: { fontSize: 28, fontWeight: '700', color: '#111827', marginBottom: 20 },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 4 },
  cardText: { fontSize: 14, color: '#6b7280' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  linkRow: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  linkText: { fontSize: 16, color: '#1e40af', fontWeight: '500' },
  signOut: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#fef2f2',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  signOutText: { color: '#dc2626', fontWeight: '600', fontSize: 16 },
  version: {
    marginTop: 24,
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: 12,
  },
});
