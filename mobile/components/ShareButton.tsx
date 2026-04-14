// ---------------------------------------------------------------------------
// ShareButton — icon button with haptic feedback
// ---------------------------------------------------------------------------

import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../lib/theme';

interface ShareButtonProps {
  onPress: () => void;
  size?: number;
  color?: string;
}

export default function ShareButton({ onPress, size = 22, color }: ShareButtonProps) {
  const { theme } = useTheme();
  const iconColor = color ?? theme.primary;

  const handlePress = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onPress();
  }, [onPress]);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel="Share"
    >
      <Ionicons name="share-outline" size={size} color={iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
