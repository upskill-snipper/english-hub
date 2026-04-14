import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';

export interface StudyStats {
  totalMinutes: number;
  streakDays: number;
  quizzesCompleted: number;
  flashcardsReviewed: number;
}

interface StatItem {
  label: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

interface StudyStatsCardProps {
  stats: StudyStats;
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export default function StudyStatsCard({ stats }: StudyStatsCardProps) {
  const { theme } = useTheme();
  const s = makeStyles(theme);

  const items: StatItem[] = [
    {
      label: 'Study Time',
      value: formatTime(stats.totalMinutes),
      icon: 'time-outline',
      color: '#3b82f6',
    },
    {
      label: 'Streak',
      value: `${stats.streakDays}d`,
      icon: 'flame',
      color: '#f97316',
    },
    {
      label: 'Quizzes',
      value: String(stats.quizzesCompleted),
      icon: 'checkmark-circle-outline',
      color: '#10b981',
    },
    {
      label: 'Flashcards',
      value: String(stats.flashcardsReviewed),
      icon: 'albums-outline',
      color: '#8b5cf6',
    },
  ];

  return (
    <View style={s.card}>
      <Text style={s.title}>Study Stats</Text>
      <View style={s.grid}>
        {items.map((item) => (
          <View key={item.label} style={s.statBox}>
            <View style={[s.iconCircle, { backgroundColor: item.color + '18' }]}>
              <Ionicons name={item.icon} size={22} color={item.color} />
            </View>
            <Text style={s.statValue}>{item.value}</Text>
            <Text style={s.statLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
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
    title: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
      marginBottom: 16,
    },
    grid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    statBox: {
      alignItems: 'center',
      flex: 1,
    },
    iconCircle: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
    },
    statValue: {
      fontSize: 18,
      fontWeight: '800',
      color: t.text,
    },
    statLabel: {
      fontSize: 12,
      color: t.textSecondary,
      marginTop: 2,
    },
  });
