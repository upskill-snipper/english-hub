import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';

interface StreakDisplayProps {
  days: number;
}

export default function StreakDisplay({ days }: StreakDisplayProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const message =
    days === 0
      ? 'Start your streak today!'
      : days === 1
        ? 'Great start! Keep it going!'
        : days < 7
          ? 'Keep it going!'
          : days < 30
            ? "You're on fire!"
            : 'Incredible dedication!';

  return (
    <View style={styles.card}>
      <View style={styles.flameRow}>
        <Ionicons
          name="flame"
          size={36}
          color={days > 0 ? '#f97316' : theme.textTertiary}
        />
        <Text style={styles.count}>{days}</Text>
      </View>
      <Text style={styles.label}>day streak</Text>
      <Text style={styles.message}>{message}</Text>
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
      alignItems: 'center',
    },
    flameRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    count: {
      fontSize: 40,
      fontWeight: '800',
      color: t.text,
    },
    label: {
      fontSize: 14,
      color: t.textSecondary,
      marginTop: 2,
    },
    message: {
      fontSize: 15,
      fontWeight: '600',
      color: '#f97316',
      marginTop: 8,
    },
  });
