import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';

interface DailyGoalCardProps {
  /** Minutes studied today */
  minutesDone: number;
  /** Daily target in minutes */
  minutesGoal: number;
}

export default function DailyGoalCard({ minutesDone, minutesGoal }: DailyGoalCardProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const progress = Math.min(minutesDone / minutesGoal, 1);
  const done = progress >= 1;
  const percent = Math.round(progress * 100);

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Ionicons
          name={done ? 'checkmark-circle' : 'time-outline'}
          size={22}
          color={done ? theme.success : theme.primary}
        />
        <Text style={styles.title}>Daily Goal</Text>
      </View>

      <Text style={styles.subtitle}>
        {minutesDone} min / {minutesGoal} min today
      </Text>

      {/* Progress bar */}
      <View style={styles.barTrack}>
        <View
          style={[
            styles.barFill,
            {
              width: `${percent}%` as unknown as number,
              backgroundColor: done ? theme.success : theme.primary,
            },
          ]}
        />
      </View>

      <Text style={[styles.percentText, done && { color: theme.success }]}>
        {done ? 'Goal reached!' : `${percent}% complete`}
      </Text>
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
      gap: 8,
    },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    title: {
      fontSize: 17,
      fontWeight: '700',
      color: t.text,
    },
    subtitle: {
      fontSize: 14,
      color: t.textSecondary,
    },
    barTrack: {
      height: 10,
      borderRadius: 5,
      backgroundColor: t.border,
      overflow: 'hidden',
      marginTop: 4,
    },
    barFill: {
      height: '100%',
      borderRadius: 5,
    },
    percentText: {
      fontSize: 13,
      fontWeight: '600',
      color: t.textSecondary,
    },
  });
