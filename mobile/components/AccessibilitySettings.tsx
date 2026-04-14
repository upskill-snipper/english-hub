import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';
import {
  type AccessibilityPrefs,
  DEFAULT_PREFS,
  getAccessibilityPrefs,
  setAccessibilityPrefs,
} from '../lib/accessibility';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ToggleRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  description: string;
  value: boolean;
  onValueChange: (next: boolean) => void;
  theme: ColorTokens;
  isLast?: boolean;
}

// ---------------------------------------------------------------------------
// Toggle row
// ---------------------------------------------------------------------------

function ToggleRow({
  icon,
  label,
  description,
  value,
  onValueChange,
  theme,
  isLast = false,
}: ToggleRowProps) {
  return (
    <View
      style={[
        rowStyles.row,
        !isLast && { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: theme.border },
      ]}
      accessible
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityHint={description}
      accessibilityState={{ checked: value }}
    >
      <View style={rowStyles.left}>
        <Ionicons name={icon} size={20} color={theme.primary} style={rowStyles.icon} />
        <View style={rowStyles.textGroup}>
          <Text style={[rowStyles.label, { color: theme.text }]}>{label}</Text>
          <Text style={[rowStyles.desc, { color: theme.textSecondary }]}>{description}</Text>
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: theme.border, true: theme.primary + '66' }}
        thumbColor={value ? theme.primary : theme.textTertiary}
        accessibilityLabel={label}
      />
    </View>
  );
}

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    marginRight: 12,
  },
  textGroup: {
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
  desc: {
    fontSize: 13,
    marginTop: 2,
    lineHeight: 17,
  },
});

// ---------------------------------------------------------------------------
// AccessibilitySettings
// ---------------------------------------------------------------------------

interface AccessibilitySettingsProps {
  /** Called after any pref changes so the parent can react (e.g. re-render) */
  onChange?: (prefs: AccessibilityPrefs) => void;
}

export default function AccessibilitySettings({ onChange }: AccessibilitySettingsProps) {
  const { theme } = useTheme();
  const s = makeStyles(theme);

  const [prefs, setPrefs] = useState<AccessibilityPrefs>(DEFAULT_PREFS);

  useEffect(() => {
    getAccessibilityPrefs().then(setPrefs);
  }, []);

  const toggle = useCallback(
    (key: keyof AccessibilityPrefs) => {
      const next = { ...prefs, [key]: !prefs[key] };
      setPrefs(next);
      setAccessibilityPrefs(next);
      onChange?.(next);
    },
    [prefs, onChange],
  );

  return (
    <View style={s.card}>
      <View style={s.headerRow}>
        <Ionicons name="accessibility-outline" size={20} color={theme.primary} />
        <Text style={s.title}>Accessibility</Text>
      </View>

      <ToggleRow
        icon="text-outline"
        label="Dyslexia-friendly font"
        description="Use a typeface designed for easier reading"
        value={prefs.dyslexiaFont}
        onValueChange={() => toggle('dyslexiaFont')}
        theme={theme}
      />
      <ToggleRow
        icon="resize-outline"
        label="Larger text"
        description="Increase text size by 20%"
        value={prefs.largerText}
        onValueChange={() => toggle('largerText')}
        theme={theme}
      />
      <ToggleRow
        icon="pause-circle-outline"
        label="Reduced motion"
        description="Minimise animations and transitions"
        value={prefs.reducedMotion}
        onValueChange={() => toggle('reducedMotion')}
        theme={theme}
      />
      <ToggleRow
        icon="contrast-outline"
        label="High contrast"
        description="Sharper text and borders for better visibility"
        value={prefs.highContrast}
        onValueChange={() => toggle('highContrast')}
        theme={theme}
        isLast
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
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 20,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4,
    },
    title: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
    },
  });
