import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIF_ENABLED_KEY = 'eh_notifications_enabled';
const PUSH_TOKEN_KEY = 'eh_push_token';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function registerForPushNotificationsAsync(): Promise<string | null> {
  if (!Device.isDevice) {
    console.info('Push notifications only work on a physical device.');
    return null;
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Default',
      importance: Notifications.AndroidImportance.DEFAULT,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#1e40af',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    console.info('Push notification permission not granted.');
    return null;
  }

  try {
    const projectId =
      Constants.expoConfig?.extra?.eas?.projectId ??
      (Constants as unknown as { easConfig?: { projectId?: string } }).easConfig?.projectId;
    const tokenResponse = await Notifications.getExpoPushTokenAsync(
      projectId ? { projectId } : undefined
    );
    const token = tokenResponse.data;
    await AsyncStorage.setItem(PUSH_TOKEN_KEY, token);
    return token;
  } catch (err) {
    console.warn('Failed to get push token', err);
    return null;
  }
}

export async function getStoredPushToken(): Promise<string | null> {
  return AsyncStorage.getItem(PUSH_TOKEN_KEY);
}

export async function getNotificationsEnabled(): Promise<boolean> {
  const v = await AsyncStorage.getItem(NOTIF_ENABLED_KEY);
  return v === 'true';
}

export async function setNotificationsEnabled(enabled: boolean): Promise<void> {
  await AsyncStorage.setItem(NOTIF_ENABLED_KEY, enabled ? 'true' : 'false');
  if (enabled) {
    await registerForPushNotificationsAsync();
  }
}

export async function scheduleLocalNotification(
  title: string,
  body: string,
  seconds: number
): Promise<string> {
  return Notifications.scheduleNotificationAsync({
    content: { title, body },
    trigger: { seconds, repeats: false },
  });
}
