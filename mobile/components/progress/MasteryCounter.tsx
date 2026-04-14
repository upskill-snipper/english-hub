import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../../lib/theme';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface MasteryCounterProps {
  masteredTopics: number;
  quizzesCompleted: number;
  studyHours: number;
}

// ---------------------------------------------------------------------------
// Animated counter hook
// ---------------------------------------------------------------------------

function useAnimatedValue(target: number, duration = 800): Animated.Value {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: target,
      duration,
      useNativeDriver: false,
    }).start();
  }, [target, anim, duration]);

  return anim;
}

// ---------------------------------------------------------------------------
// Single counter item
// ---------------------------------------------------------------------------

interface CounterItemProps {
  value: number;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  theme: ColorTokens;
}

function CounterItem({ value, label, icon, color, theme }: CounterItemProps) {
  const styles = makeItemStyles(theme);
  const animValue = useAnimatedValue(value);

  // Map animated value to a display string
  const displayValue = animValue.interpolate({
    inputRange: [0, value || 1],
    outputRange: ['0', String(value)],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.item}>
      <View style={[styles.iconBg, { backgroundColor: color + '20' }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <Animated.Text style={styles.number}>
        {/* Use the interpolated value rounded for display */}
        {displayValue}
      </Animated.Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const makeItemStyles = (t: ColorTokens) =>
  StyleSheet.create({
    item: {
      flex: 1,
      alignItems: 'center',
      gap: 6,
    },
    iconBg: {
      width: 44,
      height: 44,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    number: {
      fontSize: 26,
      fontWeight: '800',
      color: t.text,
    },
    label: {
      fontSize: 12,
      fontWeight: '500',
      color: t.textSecondary,
      textAlign: 'center',
    },
  });

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function MasteryCounter({
  masteredTopics,
  quizzesCompleted,
  studyHours,
}: MasteryCounterProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.card}>
      <CounterItem
        value={masteredTopics}
        label="Mastered"
        icon="trophy"
        color={theme.warning}
        theme={theme}
      />
      <View style={styles.divider} />
      <CounterItem
        value={quizzesCompleted}
        label="Quizzes"
        icon="help-circle"
        color={theme.primary}
        theme={theme}
      />
      <View style={styles.divider} />
      <CounterItem
        value={studyHours}
        label="Hours"
        icon="time"
        color={theme.success}
        theme={theme}
      />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 20,
      alignItems: 'center',
    },
    divider: {
      width: 1,
      height: 48,
      backgroundColor: t.border,
    },
  });
