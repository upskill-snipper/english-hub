// ---------------------------------------------------------------------------
// DailyChallengeCard — Shows today's 3 daily challenges with progress
// ---------------------------------------------------------------------------

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';
import type { DailyChallenge } from '../lib/daily-challenges';

interface DailyChallengeCardProps {
  challenges: DailyChallenge[];
  streakMultiplier: number;
}

export default function DailyChallengeCard({
  challenges,
  streakMultiplier,
}: DailyChallengeCardProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const completedCount = challenges.filter((c) => c.completed).length;

  return (
    <View style={styles.card}>
      {/* Header row */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <Ionicons name="flash-outline" size={22} color={theme.primary} />
          <Text style={styles.title}>Daily Challenges</Text>
        </View>
        {streakMultiplier > 1 && (
          <View style={[styles.streakBadge, { backgroundColor: theme.warning + '22' }]}>
            <Ionicons name="flame" size={14} color={theme.warning} />
            <Text style={[styles.streakBadgeText, { color: theme.warning }]}>
              {streakMultiplier}x XP!
            </Text>
          </View>
        )}
      </View>

      {/* Overall progress */}
      <Text style={styles.overallProgress}>
        {completedCount} of {challenges.length} complete
      </Text>

      {/* Challenge list */}
      {challenges.map((challenge) => (
        <ChallengeRow key={challenge.id} challenge={challenge} theme={theme} />
      ))}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Individual challenge row
// ---------------------------------------------------------------------------

function ChallengeRow({
  challenge,
  theme,
}: {
  challenge: DailyChallenge;
  theme: ColorTokens;
}) {
  const styles = makeStyles(theme);
  const { completed, progress, condition, title, icon, xpReward } = challenge;
  const target = condition.target;
  const progressPercent = Math.min(progress / target, 1);
  const percent = Math.round(progressPercent * 100);

  return (
    <View style={styles.challengeRow}>
      {/* Icon */}
      <View
        style={[
          styles.challengeIcon,
          {
            backgroundColor: completed
              ? theme.success + '18'
              : theme.primary + '12',
          },
        ]}
      >
        {completed ? (
          <Ionicons name="checkmark-circle" size={20} color={theme.success} />
        ) : (
          <Ionicons
            name={icon as keyof typeof Ionicons.glyphMap}
            size={20}
            color={theme.primary}
          />
        )}
      </View>

      {/* Content */}
      <View style={styles.challengeContent}>
        <View style={styles.challengeTitleRow}>
          <Text
            style={[
              styles.challengeTitle,
              completed && {
                textDecorationLine: 'line-through',
                color: theme.textTertiary,
              },
            ]}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.xpBadge,
              completed
                ? { color: theme.success }
                : { color: theme.textSecondary },
            ]}
          >
            +{xpReward} XP
          </Text>
        </View>

        {/* Progress bar */}
        <View style={styles.barTrack}>
          <View
            style={[
              styles.barFill,
              {
                width: `${percent}%` as unknown as number,
                backgroundColor: completed ? theme.success : theme.primary,
              },
            ]}
          />
        </View>

        {/* Progress label */}
        <Text style={styles.progressLabel}>
          {completed ? 'Complete' : `${progress}/${target}`}
        </Text>
      </View>
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
      padding: 20,
      gap: 12,
    },

    // Header
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
      fontSize: 17,
      fontWeight: '700',
      color: t.text,
    },
    streakBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
    },
    streakBadgeText: {
      fontSize: 13,
      fontWeight: '700',
    },

    // Overall progress
    overallProgress: {
      fontSize: 13,
      fontWeight: '500',
      color: t.textSecondary,
    },

    // Challenge row
    challengeRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
    },
    challengeIcon: {
      width: 36,
      height: 36,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2,
    },
    challengeContent: {
      flex: 1,
      gap: 4,
    },
    challengeTitleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    challengeTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: t.text,
      flex: 1,
      marginRight: 8,
    },
    xpBadge: {
      fontSize: 12,
      fontWeight: '700',
    },

    // Progress bar
    barTrack: {
      height: 6,
      borderRadius: 3,
      backgroundColor: t.border,
      overflow: 'hidden',
    },
    barFill: {
      height: '100%',
      borderRadius: 3,
    },
    progressLabel: {
      fontSize: 12,
      fontWeight: '500',
      color: t.textTertiary,
    },
  });
