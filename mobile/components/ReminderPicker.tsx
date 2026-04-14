import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';
import { registerForPushNotificationsAsync } from '../lib/notifications';

const REMINDER_ENABLED_KEY = 'eh_reminder_enabled';
const REMINDER_HOUR_KEY = 'eh_reminder_hour';
const REMINDER_MINUTE_KEY = 'eh_reminder_minute';
const REMINDER_NOTIF_ID_KEY = 'eh_reminder_notif_id';

const DEFAULT_HOUR = 9;
const DEFAULT_MINUTE = 0;

async function getStoredReminder(): Promise<{
  enabled: boolean;
  hour: number;
  minute: number;
}> {
  const [enabled, hour, minute] = await Promise.all([
    AsyncStorage.getItem(REMINDER_ENABLED_KEY),
    AsyncStorage.getItem(REMINDER_HOUR_KEY),
    AsyncStorage.getItem(REMINDER_MINUTE_KEY),
  ]);
  return {
    enabled: enabled === 'true',
    hour: hour !== null ? parseInt(hour, 10) : DEFAULT_HOUR,
    minute: minute !== null ? parseInt(minute, 10) : DEFAULT_MINUTE,
  };
}

async function persistReminder(enabled: boolean, hour: number, minute: number): Promise<void> {
  await Promise.all([
    AsyncStorage.setItem(REMINDER_ENABLED_KEY, enabled ? 'true' : 'false'),
    AsyncStorage.setItem(REMINDER_HOUR_KEY, String(hour)),
    AsyncStorage.setItem(REMINDER_MINUTE_KEY, String(minute)),
  ]);
}

async function cancelExistingReminder(): Promise<void> {
  const existingId = await AsyncStorage.getItem(REMINDER_NOTIF_ID_KEY);
  if (existingId) {
    await Notifications.cancelScheduledNotificationAsync(existingId);
    await AsyncStorage.removeItem(REMINDER_NOTIF_ID_KEY);
  }
}

async function scheduleDailyReminder(hour: number, minute: number): Promise<void> {
  await cancelExistingReminder();

  await registerForPushNotificationsAsync();

  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Time to study!',
      body: 'Keep your streak going -- open The English Hub and practice today.',
      sound: true,
    },
    trigger: {
      hour,
      minute,
      repeats: true,
    },
  });

  await AsyncStorage.setItem(REMINDER_NOTIF_ID_KEY, id);
}

function formatTime(hour: number, minute: number): string {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  const displayMinute = String(minute).padStart(2, '0');
  return `${displayHour}:${displayMinute} ${period}`;
}

export default function ReminderPicker() {
  const { theme } = useTheme();
  const s = makeStyles(theme);

  const [enabled, setEnabled] = useState(false);
  const [hour, setHour] = useState(DEFAULT_HOUR);
  const [minute, setMinute] = useState(DEFAULT_MINUTE);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getStoredReminder().then((r) => {
      setEnabled(r.enabled);
      setHour(r.hour);
      setMinute(r.minute);
      setLoaded(true);
    });
  }, []);

  const handleToggle = useCallback(
    async (value: boolean) => {
      setEnabled(value);
      await persistReminder(value, hour, minute);
      if (value) {
        await scheduleDailyReminder(hour, minute);
      } else {
        await cancelExistingReminder();
      }
    },
    [hour, minute],
  );

  const adjustTime = useCallback(
    async (newHour: number, newMinute: number) => {
      setHour(newHour);
      setMinute(newMinute);
      await persistReminder(enabled, newHour, newMinute);
      if (enabled) {
        await scheduleDailyReminder(newHour, newMinute);
      }
    },
    [enabled],
  );

  const incrementHour = () => adjustTime((hour + 1) % 24, minute);
  const decrementHour = () => adjustTime((hour + 23) % 24, minute);
  const incrementMinute = () => adjustTime(hour, (minute + 15) % 60);
  const decrementMinute = () => adjustTime(hour, (minute + 45) % 60);

  if (!loaded) return null;

  return (
    <View style={s.card}>
      <View style={s.headerRow}>
        <View style={s.headerLeft}>
          <Ionicons name="notifications-outline" size={20} color={theme.primary} />
          <Text style={s.title}>Study Reminders</Text>
        </View>
        <Switch
          value={enabled}
          onValueChange={handleToggle}
          trackColor={{ false: theme.border, true: theme.primary + '80' }}
          thumbColor={enabled ? theme.primary : theme.textTertiary}
        />
      </View>

      {enabled && (
        <>
          <TouchableOpacity
            style={s.timeButton}
            activeOpacity={0.7}
            onPress={() => setShowTimePicker(!showTimePicker)}
          >
            <Ionicons name="time-outline" size={18} color={theme.textSecondary} />
            <Text style={s.timeText}>{formatTime(hour, minute)}</Text>
            <Ionicons
              name={showTimePicker ? 'chevron-up' : 'chevron-down'}
              size={16}
              color={theme.textTertiary}
            />
          </TouchableOpacity>

          {showTimePicker && (
            <View style={s.pickerRow}>
              <View style={s.pickerColumn}>
                <TouchableOpacity onPress={incrementHour} style={s.arrowButton}>
                  <Ionicons name="chevron-up" size={20} color={theme.textSecondary} />
                </TouchableOpacity>
                <Text style={s.pickerValue}>
                  {String(hour === 0 ? 12 : hour > 12 ? hour - 12 : hour).padStart(2, '0')}
                </Text>
                <TouchableOpacity onPress={decrementHour} style={s.arrowButton}>
                  <Ionicons name="chevron-down" size={20} color={theme.textSecondary} />
                </TouchableOpacity>
              </View>

              <Text style={s.pickerSeparator}>:</Text>

              <View style={s.pickerColumn}>
                <TouchableOpacity onPress={incrementMinute} style={s.arrowButton}>
                  <Ionicons name="chevron-up" size={20} color={theme.textSecondary} />
                </TouchableOpacity>
                <Text style={s.pickerValue}>{String(minute).padStart(2, '0')}</Text>
                <TouchableOpacity onPress={decrementMinute} style={s.arrowButton}>
                  <Ionicons name="chevron-down" size={20} color={theme.textSecondary} />
                </TouchableOpacity>
              </View>

              <Text style={s.pickerPeriod}>{hour >= 12 ? 'PM' : 'AM'}</Text>
            </View>
          )}

          <Text style={s.hint}>You'll get a daily reminder at {formatTime(hour, minute)}</Text>
        </>
      )}
    </View>
  );
}

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    card: {
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 20,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    title: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
    },
    timeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
      backgroundColor: t.backgroundSecondary,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 10,
      alignSelf: 'flex-start',
    },
    timeText: {
      fontSize: 15,
      fontWeight: '600',
      color: t.text,
    },
    pickerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
      gap: 8,
    },
    pickerColumn: {
      alignItems: 'center',
      gap: 4,
    },
    arrowButton: {
      padding: 6,
    },
    pickerValue: {
      fontSize: 28,
      fontWeight: '700',
      color: t.text,
      minWidth: 48,
      textAlign: 'center',
    },
    pickerSeparator: {
      fontSize: 28,
      fontWeight: '700',
      color: t.textSecondary,
      marginHorizontal: 2,
    },
    pickerPeriod: {
      fontSize: 16,
      fontWeight: '600',
      color: t.primary,
      marginLeft: 8,
    },
    hint: {
      fontSize: 13,
      color: t.textSecondary,
      marginTop: 12,
    },
  });
