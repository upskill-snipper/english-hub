import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { getItem, setItem } from './storage';

// ---------------------------------------------------------------------------
// Color tokens
// ---------------------------------------------------------------------------

export const colors = {
  light: {
    primary: '#1e40af',
    primaryLight: '#3b82f6',
    primaryDark: '#1e3a8a',
    background: '#ffffff',
    backgroundSecondary: '#f9fafb',
    text: '#111827',
    textSecondary: '#6b7280',
    textTertiary: '#9ca3af',
    card: '#ffffff',
    cardBorder: '#e5e7eb',
    border: '#e5e7eb',
    tabBar: '#ffffff',
    tabBarBorder: '#e5e7eb',
    tabBarActive: '#1e40af',
    tabBarInactive: '#6b7280',
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    overlay: 'rgba(0, 0, 0, 0.4)',
  },
  dark: {
    primary: '#3b82f6',
    primaryLight: '#60a5fa',
    primaryDark: '#1e40af',
    background: '#0f172a',
    backgroundSecondary: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    textTertiary: '#64748b',
    card: '#1e293b',
    cardBorder: '#334155',
    border: '#334155',
    tabBar: '#1e293b',
    tabBarBorder: '#334155',
    tabBarActive: '#3b82f6',
    tabBarInactive: '#94a3b8',
    success: '#34d399',
    warning: '#fbbf24',
    error: '#f87171',
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
} as const;

export type ThemeMode = 'light' | 'dark' | 'system';
export type ColorTokens = { [K in keyof (typeof colors)['light']]: string };

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface ThemeContextValue {
  mode: ThemeMode;
  isDark: boolean;
  theme: ColorTokens;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [mode, setModeState] = useState<ThemeMode>('system');
  const [loaded, setLoaded] = useState(false);

  // Load persisted preference on mount
  useEffect(() => {
    (async () => {
      const stored = await getItem<ThemeMode>('theme');
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        setModeState(stored);
      }
      setLoaded(true);
    })();
  }, []);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    setItem('theme', newMode);
  };

  const isDark = mode === 'system' ? systemScheme === 'dark' : mode === 'dark';
  const theme = isDark ? colors.dark : colors.light;

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, isDark, theme, setMode }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode, isDark],
  );

  // Avoid rendering children before preferences are loaded
  if (!loaded) {
    return null;
  }

  return React.createElement(ThemeContext.Provider, { value }, children);
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Text-scale helpers (driven by accessibility prefs)
// ---------------------------------------------------------------------------

/**
 * Returns the font size scaled by the given multiplier.
 * Intended for use with `textScaleMultiplier` from `./accessibility`.
 *
 * @example
 *   const scale = textScaleMultiplier(prefs);
 *   { fontSize: scaledFont(16, scale) }
 */
export function scaledFont(base: number, scale: number): number {
  return Math.round(base * scale);
}
