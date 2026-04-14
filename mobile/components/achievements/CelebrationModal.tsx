// ---------------------------------------------------------------------------
// CelebrationModal -- full-screen confetti + badge reveal celebration
// ---------------------------------------------------------------------------

import React, { useEffect, useRef, useMemo } from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ColorTokens } from '../../lib/theme';
import type { Achievement } from '../../data/achievements';

// ---------------------------------------------------------------------------
// Confetti config
// ---------------------------------------------------------------------------

const CONFETTI_COUNT = 40;
const CONFETTI_COLORS = [
  '#f43f5e', // rose
  '#8b5cf6', // violet
  '#3b82f6', // blue
  '#10b981', // emerald
  '#f59e0b', // amber
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#eab308', // yellow
];

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

interface ConfettiDot {
  x: number;
  color: string;
  size: number;
  delay: number;
  drift: number;
  duration: number;
  isCircle: boolean;
}

function generateConfetti(): ConfettiDot[] {
  return Array.from({ length: CONFETTI_COUNT }, () => ({
    x: Math.random() * SCREEN_W,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: 6 + Math.random() * 8,
    delay: Math.random() * 600,
    drift: (Math.random() - 0.5) * 120,
    duration: 2000 + Math.random() * 1500,
    isCircle: Math.random() > 0.5,
  }));
}

// ---------------------------------------------------------------------------
// Single confetti piece (animated)
// ---------------------------------------------------------------------------

function ConfettiPiece({ dot }: { dot: ConfettiDot }) {
  const fall = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const spin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(fall, {
          toValue: 1,
          duration: dot.duration,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.delay(dot.duration - 700),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(spin, {
          toValue: 1,
          duration: dot.duration,
          useNativeDriver: true,
        }),
      ]).start();
    }, dot.delay);

    return () => clearTimeout(timer);
  }, [dot, fall, opacity, spin]);

  const translateY = fall.interpolate({
    inputRange: [0, 1],
    outputRange: [-40, SCREEN_H + 40],
  });

  const translateX = fall.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, dot.drift, dot.drift * 0.6],
  });

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: dot.x,
        top: 0,
        width: dot.size,
        height: dot.isCircle ? dot.size : dot.size * 0.5,
        borderRadius: dot.isCircle ? dot.size / 2 : 2,
        backgroundColor: dot.color,
        opacity,
        transform: [{ translateY }, { translateX }, { rotate }],
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface CelebrationModalProps {
  visible: boolean;
  achievement: Achievement | null;
  onDismiss: () => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CelebrationModal({
  visible,
  achievement,
  onDismiss,
}: CelebrationModalProps) {
  const { theme, isDark } = useTheme();
  const styles = makeStyles(theme, isDark);

  // Badge bounce-in
  const bounce = useRef(new Animated.Value(0)).current;
  // Glow pulse
  const glow = useRef(new Animated.Value(0.3)).current;
  // XP counter pop
  const xpScale = useRef(new Animated.Value(0)).current;
  // Button slide-up
  const buttonY = useRef(new Animated.Value(40)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  // Regenerate confetti each time modal opens
  const confetti = useMemo(
    () => (visible ? generateConfetti() : []),
    [visible],
  );

  useEffect(() => {
    if (!visible) {
      bounce.setValue(0);
      glow.setValue(0.3);
      xpScale.setValue(0);
      buttonY.setValue(40);
      buttonOpacity.setValue(0);
      return;
    }

    // 1. Badge bounces in with a spring
    Animated.spring(bounce, {
      toValue: 1,
      friction: 4,
      tension: 60,
      useNativeDriver: true,
      delay: 300,
    }).start();

    // 2. Glow ring pulses continuously
    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(glow, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // 3. XP pops in after badge
    Animated.spring(xpScale, {
      toValue: 1,
      friction: 5,
      tension: 80,
      useNativeDriver: true,
      delay: 700,
    }).start();

    // 4. Button slides up
    Animated.parallel([
      Animated.timing(buttonY, {
        toValue: 0,
        duration: 400,
        delay: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 400,
        delay: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [visible, bounce, glow, xpScale, buttonY, buttonOpacity]);

  const badgeScale = bounce.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1],
  });

  if (!achievement) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onDismiss}
    >
      <View style={styles.overlay}>
        {/* Confetti layer */}
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          {confetti.map((dot, i) => (
            <ConfettiPiece key={i} dot={dot} />
          ))}
        </View>

        {/* Content card */}
        <View style={styles.card}>
          {/* Glowing ring behind badge */}
          <Animated.View style={[styles.glowRing, { opacity: glow }]} />

          {/* Badge icon with bounce */}
          <Animated.View
            style={[styles.iconCircle, { transform: [{ scale: badgeScale }] }]}
          >
            <Text style={styles.emoji}>{achievement.icon}</Text>
          </Animated.View>

          {/* Label */}
          <Text style={styles.unlockedLabel}>Achievement Unlocked!</Text>

          {/* Title */}
          <Text style={styles.title}>{achievement.title}</Text>

          {/* Description */}
          <Text style={styles.description}>{achievement.description}</Text>

          {/* XP reward with pop-in */}
          <Animated.View
            style={[styles.xpRow, { transform: [{ scale: xpScale }] }]}
          >
            <Ionicons name="star" size={20} color="#fbbf24" />
            <Text style={styles.xpAmount}>+{achievement.xpReward} XP</Text>
          </Animated.View>

          {/* Dismiss button with slide-up */}
          <Animated.View
            style={{ opacity: buttonOpacity, transform: [{ translateY: buttonY }] }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={onDismiss}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Awesome!</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

function makeStyles(theme: ColorTokens, isDark: boolean) {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: isDark ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.7)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 32,
    },

    card: {
      width: '100%',
      maxWidth: 340,
      backgroundColor: theme.card,
      borderRadius: 24,
      padding: 32,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.primaryLight,
      shadowColor: theme.primary,
      shadowOpacity: 0.35,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 8 },
      elevation: 12,
    },

    // Glow ring behind badge
    glowRing: {
      position: 'absolute',
      top: 12,
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: theme.primaryLight,
    },

    // Badge circle
    iconCircle: {
      width: 96,
      height: 96,
      borderRadius: 48,
      backgroundColor: isDark ? 'rgba(59,130,246,0.2)' : 'rgba(30,64,175,0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 3,
      borderColor: theme.primaryLight,
    },

    emoji: {
      fontSize: 44,
    },

    unlockedLabel: {
      fontSize: 13,
      fontWeight: '700',
      color: theme.primaryLight,
      textTransform: 'uppercase',
      letterSpacing: 1.5,
      marginBottom: 6,
    },

    title: {
      fontSize: 24,
      fontWeight: '900',
      color: theme.text,
      textAlign: 'center',
      marginBottom: 8,
    },

    description: {
      fontSize: 14,
      color: theme.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: 20,
    },

    xpRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginBottom: 24,
      backgroundColor: isDark ? 'rgba(251,191,36,0.12)' : 'rgba(251,191,36,0.1)',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 16,
    },

    xpAmount: {
      fontSize: 20,
      fontWeight: '800',
      color: '#d97706',
    },

    button: {
      backgroundColor: theme.primary,
      paddingHorizontal: 48,
      paddingVertical: 14,
      borderRadius: 14,
      shadowColor: theme.primary,
      shadowOpacity: 0.4,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 3 },
      elevation: 4,
    },

    buttonText: {
      fontSize: 17,
      fontWeight: '800',
      color: '#ffffff',
    },
  });
}
