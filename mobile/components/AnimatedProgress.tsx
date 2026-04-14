import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useTheme, type ColorTokens } from '../lib/theme';

// ---------------------------------------------------------------------------
// Animated SVG Circle wrapper
// ---------------------------------------------------------------------------

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface AnimatedProgressProps {
  /** Target percentage (0-100) */
  percent: number;
  /** Outer diameter of the ring in dp */
  size?: number;
  /** Thickness of the ring stroke */
  strokeWidth?: number;
  /** Optional label shown below the percentage */
  label?: string;
  /** Colour of the progress arc (defaults to theme.primary) */
  color?: string;
  /** Duration of the fill animation in ms */
  duration?: number;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function AnimatedProgress({
  percent,
  size = 96,
  strokeWidth = 8,
  label,
  color,
  duration = 800,
}: AnimatedProgressProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const progressColor = color ?? theme.primary;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Animated values
  const animatedProgress = useRef(new Animated.Value(0)).current;
  const displayPercent = useRef(new Animated.Value(0)).current;

  // Clamp to 0-100
  const clamped = Math.max(0, Math.min(100, percent));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedProgress, {
        toValue: clamped,
        duration,
        useNativeDriver: false, // SVG props can't use native driver
      }),
      Animated.timing(displayPercent, {
        toValue: clamped,
        duration,
        useNativeDriver: false,
      }),
    ]).start();
  }, [clamped, duration, animatedProgress, displayPercent]);

  // Derive strokeDashoffset from animated value
  const animatedOffset = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  // Derive display string
  const animatedLabel = displayPercent.interpolate({
    inputRange: [0, 100],
    outputRange: ['0', '100'],
  });

  return (
    <View style={styles.wrapper}>
      <View style={[styles.ringContainer, { width: size, height: size }]}>
        <Svg width={size} height={size}>
          {/* Background track */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={theme.border}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Animated progress arc */}
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={progressColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={animatedOffset}
            rotation={-90}
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>

        {/* Centered percentage text */}
        <View style={styles.labelOverlay}>
          <AnimatedPercentText value={animatedLabel} style={styles.percentText} />
        </View>
      </View>

      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Animated percent text (renders rounded integer from Animated.Value)
// ---------------------------------------------------------------------------

interface AnimatedPercentTextProps {
  value: Animated.AnimatedInterpolation<string>;
  style: object;
}

function AnimatedPercentText({ value, style }: AnimatedPercentTextProps) {
  const textRef = useRef<Text>(null);

  useEffect(() => {
    const listenerId = value.addListener(({ value: v }) => {
      if (textRef.current) {
        textRef.current.setNativeProps({ text: `${Math.round(Number(v))}%` });
      }
    });
    return () => value.removeListener(listenerId);
  }, [value]);

  return (
    <Animated.Text ref={textRef} style={style}>
      0%
    </Animated.Text>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    wrapper: {
      alignItems: 'center',
    },
    ringContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    labelOverlay: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
    },
    percentText: {
      fontSize: 18,
      fontWeight: '700',
      color: t.text,
    },
    label: {
      fontSize: 13,
      fontWeight: '600',
      color: t.textSecondary,
      marginTop: 8,
      textAlign: 'center',
    },
  });
