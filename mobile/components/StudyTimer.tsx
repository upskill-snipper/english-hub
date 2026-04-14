import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme, type ColorTokens } from '../lib/theme';
import {
  useStudyTimer,
  formatTimeDisplay,
  phaseLabel,
  isBreakPhase,
  getMotivationalQuote,
  SESSIONS_BEFORE_LONG_BREAK,
  type TimerPhase,
} from '../lib/study-timer';

// ---------------------------------------------------------------------------
// Animated SVG Circle
// ---------------------------------------------------------------------------

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// ---------------------------------------------------------------------------
// Ring sizing
// ---------------------------------------------------------------------------

const RING_SIZE = 260;
const STROKE_WIDTH = 12;
const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function StudyTimer() {
  const { theme } = useTheme();
  const s = makeStyles(theme);

  const [quote, setQuote] = useState(getMotivationalQuote);

  // ---- Timer state machine ----
  const handlePhaseComplete = useCallback((completedPhase: TimerPhase) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setQuote(getMotivationalQuote());
  }, []);

  const [timer, actions] = useStudyTimer(handlePhaseComplete);

  // ---- Ring animation ----
  const animatedProgress = useRef(new Animated.Value(CIRCUMFERENCE)).current;

  useEffect(() => {
    const fraction = timer.total > 0 ? timer.remaining / timer.total : 0;
    const offset = CIRCUMFERENCE * (1 - fraction);
    Animated.timing(animatedProgress, {
      toValue: offset,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [timer.remaining, timer.total, animatedProgress]);

  // ---- Derived display values ----
  const isBreak = isBreakPhase(timer.phase);
  const ringColor = isBreak ? theme.success : theme.primary;
  const ringTrackColor = isBreak
    ? theme.success + '20'
    : theme.primary + '20';
  const statusText = phaseLabel(timer.phase);
  const timeText = formatTimeDisplay(timer.remaining);
  const sessionLabel =
    timer.phase === 'idle'
      ? 'Press play to start'
      : `Focus ${timer.currentSession} of ${SESSIONS_BEFORE_LONG_BREAK}`;

  // ---- Stats formatting ----
  const todayMinutes = timer.totalFocusedMinutes;
  const todaySessions = timer.completedSessions;
  const statsText = `Today: ${todayMinutes} min  |  ${todaySessions} session${todaySessions !== 1 ? 's' : ''}`;

  // ---- Button handlers ----
  const onPlayPause = useCallback(() => {
    if (timer.status === 'idle') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      actions.start();
    } else if (timer.status === 'running') {
      actions.pause();
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      actions.resume();
    }
  }, [timer.status, actions]);

  const onReset = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    actions.reset();
  }, [actions]);

  const onSkip = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    actions.skip();
  }, [actions]);

  // ---- Play/pause icon ----
  const playPauseIcon: keyof typeof Ionicons.glyphMap =
    timer.status === 'running' ? 'pause' : 'play';

  return (
    <View style={s.container}>
      {/* Status label */}
      <Text style={[s.statusLabel, isBreak && { color: theme.success }]}>
        {statusText}
      </Text>

      {/* Session counter */}
      <Text style={s.sessionCounter}>{sessionLabel}</Text>

      {/* Countdown ring */}
      <View style={s.ringWrapper}>
        <Svg width={RING_SIZE} height={RING_SIZE}>
          {/* Background track */}
          <Circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RADIUS}
            stroke={ringTrackColor}
            strokeWidth={STROKE_WIDTH}
            fill="none"
          />
          {/* Progress arc */}
          <AnimatedCircle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RADIUS}
            stroke={ringColor}
            strokeWidth={STROKE_WIDTH}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={animatedProgress}
            rotation={-90}
            origin={`${RING_SIZE / 2}, ${RING_SIZE / 2}`}
          />
        </Svg>

        {/* Centered time display */}
        <View style={s.timeOverlay}>
          <Text style={[s.timeText, isBreak && { color: theme.success }]}>
            {timeText}
          </Text>
        </View>
      </View>

      {/* Motivational quote */}
      <Text style={s.quote}>{quote}</Text>

      {/* Control buttons */}
      <View style={s.controls}>
        {/* Reset */}
        <Pressable
          style={({ pressed }) => [
            s.controlBtn,
            s.secondaryBtn,
            pressed && s.pressed,
          ]}
          onPress={onReset}
          disabled={timer.phase === 'idle'}
          accessibilityLabel="Reset timer"
          accessibilityRole="button"
        >
          <Ionicons
            name="refresh"
            size={24}
            color={timer.phase === 'idle' ? theme.textTertiary : theme.text}
          />
        </Pressable>

        {/* Play / Pause */}
        <Pressable
          style={({ pressed }) => [
            s.controlBtn,
            s.primaryBtn,
            { backgroundColor: isBreak ? theme.success : theme.primary },
            pressed && s.pressed,
          ]}
          onPress={onPlayPause}
          accessibilityLabel={
            timer.status === 'running' ? 'Pause timer' : 'Start timer'
          }
          accessibilityRole="button"
        >
          <Ionicons name={playPauseIcon} size={32} color="#ffffff" />
        </Pressable>

        {/* Skip */}
        <Pressable
          style={({ pressed }) => [
            s.controlBtn,
            s.secondaryBtn,
            pressed && s.pressed,
          ]}
          onPress={onSkip}
          disabled={timer.phase === 'idle'}
          accessibilityLabel="Skip to next phase"
          accessibilityRole="button"
        >
          <Ionicons
            name="play-skip-forward"
            size={24}
            color={timer.phase === 'idle' ? theme.textTertiary : theme.text}
          />
        </Pressable>
      </View>

      {/* Daily stats */}
      <View style={s.statsRow}>
        <Ionicons name="stats-chart" size={16} color={theme.textSecondary} />
        <Text style={s.statsText}>{statsText}</Text>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: 24,
      paddingHorizontal: 16,
    },
    statusLabel: {
      fontSize: 20,
      fontWeight: '700',
      color: t.primary,
      marginBottom: 4,
    },
    sessionCounter: {
      fontSize: 14,
      fontWeight: '500',
      color: t.textSecondary,
      marginBottom: 20,
    },
    ringWrapper: {
      width: RING_SIZE,
      height: RING_SIZE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    timeOverlay: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
    },
    timeText: {
      fontSize: 48,
      fontWeight: '800',
      color: t.primary,
      fontVariant: ['tabular-nums'],
    },
    quote: {
      fontSize: 13,
      fontStyle: 'italic',
      color: t.textTertiary,
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 24,
      paddingHorizontal: 32,
      lineHeight: 18,
    },
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      marginBottom: 28,
    },
    controlBtn: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryBtn: {
      width: 68,
      height: 68,
      borderRadius: 34,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    secondaryBtn: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: t.border,
    },
    pressed: {
      opacity: 0.7,
    },
    statsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      backgroundColor: t.backgroundSecondary,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 12,
    },
    statsText: {
      fontSize: 14,
      fontWeight: '600',
      color: t.textSecondary,
    },
  });
