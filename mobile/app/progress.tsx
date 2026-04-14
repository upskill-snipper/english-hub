import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';
import {
  getAccuracyOverTime,
  getWeakTopics,
  getStrongTopics,
  getOverallProgress,
} from '../lib/analytics';
import type {
  TimeSeries,
  TopicBreakdown,
  OverallProgress,
} from '../data/analytics-types';
import MasteryCounter from '../components/progress/MasteryCounter';
import AccuracyChart from '../components/progress/AccuracyChart';
import WeakTopicsCard from '../components/progress/WeakTopicsCard';
import { router } from 'expo-router';

// ---------------------------------------------------------------------------
// Screen
// ---------------------------------------------------------------------------

export default function ProgressScreen() {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [progress, setProgress] = useState<OverallProgress | null>(null);
  const [accuracy, setAccuracy] = useState<TimeSeries | null>(null);
  const [weakTopics, setWeakTopics] = useState<TopicBreakdown[]>([]);
  const [strongTopics, setStrongTopics] = useState<TopicBreakdown[]>([]);

  // -- Load all analytics data ------------------------------------------------

  const loadData = useCallback(async () => {
    const [prog, acc, weak, strong] = await Promise.all([
      getOverallProgress(),
      getAccuracyOverTime(7),
      getWeakTopics(),
      getStrongTopics(),
    ]);
    setProgress(prog);
    setAccuracy(acc);
    setWeakTopics(weak);
    setStrongTopics(strong);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [loadData]);

  const handlePractice = (_topic: string) => {
    router.push('/study');
  };

  // -- Loading state ----------------------------------------------------------

  if (loading || !progress || !accuracy) {
    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.primary} />
        </View>
      </SafeAreaView>
    );
  }

  // -- Derived values ---------------------------------------------------------

  const studyHours = Math.round((progress.totalStudyMinutes / 60) * 10) / 10;

  // -- Render -----------------------------------------------------------------

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Header */}
        <Text style={styles.heading}>Your Progress</Text>

        {/* Mastery counters */}
        <MasteryCounter
          masteredTopics={progress.masteredTopics}
          quizzesCompleted={progress.totalQuizzes}
          studyHours={studyHours}
        />

        {/* Accuracy chart */}
        <AccuracyChart series={accuracy} />

        {/* Weak topics */}
        <WeakTopicsCard topics={weakTopics} onPractice={handlePractice} />

        {/* Strong topics */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Strong Topics</Text>

          {strongTopics.length === 0 ? (
            <View style={styles.emptyRow}>
              <Ionicons
                name="star-outline"
                size={20}
                color={theme.textTertiary}
              />
              <Text style={styles.emptyText}>
                Keep studying to unlock strong topics
              </Text>
            </View>
          ) : (
            strongTopics.map((topic, i) => (
              <View
                key={topic.topic}
                style={[
                  styles.strongRow,
                  i < strongTopics.length - 1 && styles.strongRowBorder,
                ]}
              >
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color={theme.success}
                />
                <View style={styles.strongInfo}>
                  <Text style={styles.strongName}>{topic.topic}</Text>
                  <Text style={styles.strongAccuracy}>{topic.accuracy}%</Text>
                </View>
                <Text style={styles.strongAttempts}>
                  {topic.totalAttempted} attempts
                </Text>
              </View>
            ))
          )}
        </View>

        {/* Streak info */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Streaks</Text>
          <View style={styles.streakRow}>
            <View style={styles.streakItem}>
              <Ionicons name="flame" size={24} color={theme.warning} />
              <Text style={styles.streakNumber}>
                {progress.currentStreak}
              </Text>
              <Text style={styles.streakLabel}>Current</Text>
            </View>
            <View style={styles.streakItem}>
              <Ionicons name="trophy" size={24} color={theme.primary} />
              <Text style={styles.streakNumber}>
                {progress.longestStreak}
              </Text>
              <Text style={styles.streakLabel}>Best</Text>
            </View>
            <View style={styles.streakItem}>
              <Ionicons name="stats-chart" size={24} color={theme.success} />
              <Text style={styles.streakNumber}>
                {progress.lifetimeAccuracy}%
              </Text>
              <Text style={styles.streakLabel}>Accuracy</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: t.background,
    },
    scroll: {
      flex: 1,
    },
    content: {
      padding: 20,
      gap: 16,
      paddingBottom: 32,
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 26,
      fontWeight: '800',
      color: t.text,
    },

    // Card shared
    card: {
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 16,
      gap: 14,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: t.text,
    },

    // Empty state
    emptyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    emptyText: {
      fontSize: 14,
      color: t.textSecondary,
    },

    // Strong topics
    strongRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingBottom: 10,
    },
    strongRowBorder: {
      borderBottomWidth: 1,
      borderBottomColor: t.border,
    },
    strongInfo: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    strongName: {
      fontSize: 15,
      fontWeight: '600',
      color: t.text,
    },
    strongAccuracy: {
      fontSize: 13,
      fontWeight: '700',
      color: t.success,
    },
    strongAttempts: {
      fontSize: 12,
      color: t.textTertiary,
    },

    // Streaks
    streakRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    streakItem: {
      alignItems: 'center',
      gap: 4,
    },
    streakNumber: {
      fontSize: 22,
      fontWeight: '800',
      color: t.text,
    },
    streakLabel: {
      fontSize: 12,
      fontWeight: '500',
      color: t.textSecondary,
    },
  });
