import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';

interface QuickAction {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
}

interface QuickActionGridProps {
  actions: QuickAction[];
}

export default function QuickActionGrid({ actions }: QuickActionGridProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.grid}>
      {actions.map((action) => (
        <TouchableOpacity
          key={action.label}
          style={styles.card}
          activeOpacity={0.7}
          onPress={action.onPress}
          accessibilityRole="button"
          accessibilityLabel={action.label}
          accessibilityHint={`Open ${action.label}`}
        >
          <View style={[styles.iconCircle, { backgroundColor: action.color + '18' }]}>
            <Ionicons name={action.icon} size={28} color={action.color} />
          </View>
          <Text style={styles.label} numberOfLines={2}>
            {action.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    card: {
      width: '48%' as unknown as number,
      flexGrow: 1,
      flexBasis: '46%',
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 18,
      alignItems: 'center',
      gap: 10,
      minHeight: 44, // WCAG minimum touch-target size
    },
    iconCircle: {
      width: 52,
      height: 52,
      borderRadius: 26,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      color: t.text,
      textAlign: 'center',
    },
  });
