// ---------------------------------------------------------------------------
// XPBar -- animated progress bar with level number and XP counts
// ---------------------------------------------------------------------------

import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ColorTokens } from '../../lib/theme';
import { getXPForLevel } from '../../lib/achievements';

interface XPBarProps {
  currentXP: number;
  level: number;
}

export default function XPBar({ currentXP, level }: XPBarProps) {
  const { theme, isDark } = useTheme();
  const styles = makeStyles(theme, isDark);

  const levelStart = getXPForLevel(level);
  const levelEnd = getXPForLevel(level + 1);
  const xpInLevel = currentXP - levelStart;
  const xpNeeded = levelEnd - levelStart;
  const progress = xpNeeded > 0 ? Math.min(xpInLevel / xpNeeded, 1) : 1;

  // Animate the bar width
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [progress, widthAnim]);

  const barWidth = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  // Pulse animation on the level badge
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 1.15,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [level, pulseAnim]);

  return (
    <View style={styles.container}>
      {/* Level badge */}
      <Animated.View
        style={[styles.levelBadge, { transform: [{ scale: pulseAnim }] }]}
      >
        <Ionicons name="shield" size={16} color="#ffffff" />
        <Text style={styles.levelNumber}>{level}</Text>
      </Animated.View>

      {/* Bar section */}
      <View style={styles.barSection}>
        <View style={styles.labelRow}>
          <Text style={styles.xpLabel}>
            {xpInLevel.toLocaleString()} / {xpNeeded.toLocaleString()} XP
          </Text>
          <Text style={styles.levelLabel}>Level {level + 1}</Text>
        </View>

        <View style={styles.barTrack}>
          <Animated.View style={[styles.barFill, { width: barWidth }]}>
            {/* Shimmer highlight */}
            <View style={styles.shimmer} />
          </Animated.View>
        </View>

        <Text style={styles.totalXP}>
          Total: {currentXP.toLocaleString()} XP
        </Text>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

function makeStyles(theme: ColorTokens, isDark: boolean) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.card,
      borderRadius: 16,
      padding: 16,
      borderWidth: 1,
      borderColor: theme.cardBorder,
      gap: 14,
    },

    // -- Level badge --
    levelBadge: {
      width: 52,
      height: 52,
      borderRadius: 26,
      backgroundColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: theme.primary,
      shadowOpacity: 0.4,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 6,
    },

    levelNumber: {
      fontSize: 16,
      fontWeight: '900',
      color: '#ffffff',
      marginTop: -2,
    },

    // -- Bar section --
    barSection: {
      flex: 1,
    },

    labelRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6,
    },

    xpLabel: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
    },

    levelLabel: {
      fontSize: 12,
      fontWeight: '500',
      color: theme.textSecondary,
    },

    barTrack: {
      height: 12,
      borderRadius: 6,
      backgroundColor: isDark ? 'rgba(100,116,139,0.25)' : 'rgba(0,0,0,0.08)',
      overflow: 'hidden',
    },

    barFill: {
      height: '100%',
      borderRadius: 6,
      backgroundColor: theme.primary,
      overflow: 'hidden',
    },

    shimmer: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 40,
      height: '100%',
      borderRadius: 6,
      backgroundColor: 'rgba(255,255,255,0.25)',
    },

    totalXP: {
      fontSize: 11,
      color: theme.textTertiary,
      marginTop: 4,
    },
  });
}
