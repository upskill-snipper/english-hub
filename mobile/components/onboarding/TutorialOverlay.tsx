import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { useTheme, type ColorTokens } from '../../lib/theme';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TutorialStep {
  /** Tooltip message shown to the user. */
  message: string;
  /** Vertical placement of the tooltip bubble. */
  position: 'top' | 'center' | 'bottom';
}

interface TutorialOverlayProps {
  /** Ordered list of coach-mark steps. */
  steps: TutorialStep[];
  /** Called when the user finishes (or dismisses) all steps. */
  onComplete: () => void;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function TutorialOverlay({ steps, onComplete }: TutorialOverlayProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const [currentIndex, setCurrentIndex] = useState(0);
  const fade = useRef(new Animated.Value(0)).current;

  const step = steps[currentIndex];
  const isLast = currentIndex === steps.length - 1;

  // Fade in on mount and on step change
  useEffect(() => {
    fade.setValue(0);
    Animated.timing(fade, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [currentIndex, fade]);

  const advance = () => {
    Animated.timing(fade, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      if (isLast) {
        onComplete();
      } else {
        setCurrentIndex((i) => i + 1);
      }
    });
  };

  if (!step) {
    return null;
  }

  // Resolve vertical alignment for the tooltip
  const tooltipPosition =
    step.position === 'top'
      ? { top: SCREEN_HEIGHT * 0.15 }
      : step.position === 'bottom'
        ? { bottom: SCREEN_HEIGHT * 0.15 }
        : { top: SCREEN_HEIGHT * 0.5 - 60 }; // center

  return (
    <Animated.View style={[styles.overlay, { opacity: fade }]}>
      {/* Dark background — tapping anywhere also advances */}
      <TouchableOpacity
        style={StyleSheet.absoluteFill}
        activeOpacity={1}
        onPress={advance}
      />

      {/* Tooltip bubble */}
      <View style={[styles.tooltip, tooltipPosition]} pointerEvents="box-none">
        <Text style={styles.message}>{step.message}</Text>

        {/* Step indicator */}
        {steps.length > 1 && (
          <Text style={styles.counter}>
            {currentIndex + 1} / {steps.length}
          </Text>
        )}

        <TouchableOpacity style={styles.button} onPress={advance} activeOpacity={0.8}>
          <Text style={styles.buttonText}>{isLast ? 'Got it' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: t.overlay,
      zIndex: 9999,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tooltip: {
      position: 'absolute',
      left: 24,
      right: 24,
      backgroundColor: t.card,
      borderRadius: 16,
      padding: 24,
      alignItems: 'center',
      // Subtle shadow
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 8,
    },
    message: {
      fontSize: 17,
      fontWeight: '600',
      color: t.text,
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 12,
    },
    counter: {
      fontSize: 13,
      color: t.textTertiary,
      marginBottom: 16,
    },
    button: {
      backgroundColor: t.primary,
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 32,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '700',
      color: '#ffffff',
    },
  });
