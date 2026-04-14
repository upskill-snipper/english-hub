// ---------------------------------------------------------------------------
// BadgeCard -- individual achievement badge (locked / unlocked states)
// ---------------------------------------------------------------------------

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ColorTokens } from '../../lib/theme';
import type { Achievement } from '../../data/achievements';

interface BadgeCardProps {
  achievement: Achievement;
  unlocked: boolean;
  unlockedAt?: string;
}

export default function BadgeCard({
  achievement,
  unlocked,
  unlockedAt,
}: BadgeCardProps) {
  const { theme, isDark } = useTheme();
  const styles = makeStyles(theme, isDark);

  return (
    <View style={[styles.card, unlocked ? styles.cardUnlocked : styles.cardLocked]}>
      {/* Icon area */}
      <View style={[styles.iconContainer, unlocked ? styles.iconUnlocked : styles.iconLocked]}>
        {unlocked ? (
          <Text style={styles.emoji}>{achievement.icon}</Text>
        ) : (
          <Ionicons name="lock-closed" size={28} color={theme.textTertiary} />
        )}
      </View>

      {/* Title */}
      <Text
        style={[styles.title, !unlocked && styles.titleLocked]}
        numberOfLines={1}
      >
        {achievement.title}
      </Text>

      {/* Description */}
      <Text
        style={[styles.description, !unlocked && styles.descriptionLocked]}
        numberOfLines={2}
      >
        {achievement.description}
      </Text>

      {/* XP reward */}
      <View style={[styles.xpBadge, unlocked ? styles.xpBadgeUnlocked : styles.xpBadgeLocked]}>
        <Ionicons
          name="star"
          size={12}
          color={unlocked ? '#fbbf24' : theme.textTertiary}
        />
        <Text style={[styles.xpText, !unlocked && styles.xpTextLocked]}>
          {achievement.xpReward} XP
        </Text>
      </View>

      {/* Unlocked date */}
      {unlocked && unlockedAt && (
        <Text style={styles.date}>
          {new Date(unlockedAt).toLocaleDateString()}
        </Text>
      )}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

function makeStyles(theme: ColorTokens, isDark: boolean) {
  return StyleSheet.create({
    card: {
      flex: 1,
      borderRadius: 16,
      padding: 14,
      alignItems: 'center',
      borderWidth: 1,
      minHeight: 180,
    },

    cardUnlocked: {
      backgroundColor: theme.card,
      borderColor: theme.primaryLight,
      // Subtle glow via shadow
      shadowColor: theme.primaryLight,
      shadowOpacity: 0.25,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 4,
    },

    cardLocked: {
      backgroundColor: isDark ? 'rgba(30,41,59,0.6)' : 'rgba(249,250,251,0.8)',
      borderColor: theme.border,
    },

    // -- Icon --
    iconContainer: {
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },

    iconUnlocked: {
      backgroundColor: isDark ? 'rgba(59,130,246,0.15)' : 'rgba(30,64,175,0.08)',
    },

    iconLocked: {
      backgroundColor: isDark ? 'rgba(100,116,139,0.2)' : 'rgba(156,163,175,0.15)',
    },

    emoji: {
      fontSize: 28,
    },

    // -- Text --
    title: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      textAlign: 'center',
      marginBottom: 4,
    },

    titleLocked: {
      color: theme.textTertiary,
    },

    description: {
      fontSize: 11,
      color: theme.textSecondary,
      textAlign: 'center',
      lineHeight: 15,
      marginBottom: 8,
    },

    descriptionLocked: {
      color: theme.textTertiary,
    },

    // -- XP badge --
    xpBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 10,
      gap: 4,
    },

    xpBadgeUnlocked: {
      backgroundColor: isDark ? 'rgba(251,191,36,0.15)' : 'rgba(251,191,36,0.12)',
    },

    xpBadgeLocked: {
      backgroundColor: isDark ? 'rgba(100,116,139,0.15)' : 'rgba(156,163,175,0.1)',
    },

    xpText: {
      fontSize: 11,
      fontWeight: '600',
      color: '#d97706',
    },

    xpTextLocked: {
      color: theme.textTertiary,
    },

    date: {
      fontSize: 10,
      color: theme.textTertiary,
      marginTop: 6,
    },
  });
}
