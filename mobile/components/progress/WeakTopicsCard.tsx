import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../../lib/theme';
import type { TopicBreakdown } from '../../data/analytics-types';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface WeakTopicsCardProps {
  topics: TopicBreakdown[];
  onPractice?: (topic: string) => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function WeakTopicsCard({
  topics,
  onPractice,
}: WeakTopicsCardProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  if (topics.length === 0) {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Weak Topics</Text>
        <View style={styles.emptyRow}>
          <Ionicons name="checkmark-circle" size={20} color={theme.success} />
          <Text style={styles.emptyText}>
            No weak topics -- keep it up!
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Weak Topics</Text>

      {topics.map((topic, i) => (
        <View
          key={topic.topic}
          style={[styles.row, i < topics.length - 1 && styles.rowBorder]}
        >
          {/* Left: topic info */}
          <View style={styles.topicInfo}>
            <Text style={styles.topicName}>{topic.topic}</Text>
            <View style={styles.statRow}>
              <Text style={styles.accuracy}>{topic.accuracy}%</Text>
              <Text style={styles.attempts}>
                {topic.totalAttempted} attempts
              </Text>
            </View>

            {/* Mini progress bar */}
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${topic.accuracy}%`,
                    backgroundColor:
                      topic.accuracy < 30 ? theme.error : theme.warning,
                  },
                ]}
              />
            </View>
          </View>

          {/* Right: practice button */}
          <TouchableOpacity
            style={styles.practiceBtn}
            activeOpacity={0.7}
            onPress={() => onPractice?.(topic.topic)}
          >
            <Text style={styles.practiceBtnText}>Practice now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    card: {
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 16,
      gap: 14,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: t.text,
    },
    emptyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    emptyText: {
      fontSize: 14,
      color: t.textSecondary,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 12,
    },
    rowBorder: {
      borderBottomWidth: 1,
      borderBottomColor: t.border,
    },
    topicInfo: {
      flex: 1,
      gap: 4,
      marginRight: 12,
    },
    topicName: {
      fontSize: 15,
      fontWeight: '600',
      color: t.text,
    },
    statRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    accuracy: {
      fontSize: 13,
      fontWeight: '700',
      color: t.error,
    },
    attempts: {
      fontSize: 12,
      color: t.textTertiary,
    },
    progressTrack: {
      height: 4,
      borderRadius: 2,
      backgroundColor: t.backgroundSecondary,
      marginTop: 2,
    },
    progressFill: {
      height: '100%',
      borderRadius: 2,
    },
    practiceBtn: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 10,
      backgroundColor: t.primaryLight + '20',
    },
    practiceBtnText: {
      fontSize: 13,
      fontWeight: '600',
      color: t.primary,
    },
  });
