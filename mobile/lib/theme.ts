import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { getItem, setItem } from './storage';

// ---------------------------------------------------------------------------
// Color tokens — The English Hub brand palette (sampled from logo-source.png)
// ---------------------------------------------------------------------------
//
// 02 May 2026 — migrated from generic Tailwind blue/slate to the founder's
// designed brand palette: navy + teal + gold + cream. Hex values come straight
// off the logo via scripts/generate_brand_from_logo.py, so the app icon, splash,
// and the runtime UI all share exactly the same colours. Founder feedback
// before this migration: "Looks very basic too" — root cause was the theme
// used #1e40af blue with no relationship to the brand mark.
//
// Brand swatches (mark-to-token mapping):
//   navy   = #1A2A4D — the "E" letter, "The English" wordmark
//   teal   = #2A8E8E — the "H" letter, "Hub" wordmark, circuit-board accents
//   gold   = #C9A35A — crown, sparkle divider
//   cream  = #FBF7F0 — page background (matches website cream-50)
//
// Tints / shades are derived to give a 6-step ramp around each anchor so
// hover/active/border/disabled states all feel like the same brand.
//
const NAVY = {
  50: '#EEF1F7',
  100: '#D6DDE9',
  300: '#7B89A6',
  500: '#3B4F7B',
  700: '#1A2A4D',  // anchor — "E" + "The English"
  900: '#0E1A33',
} as const;

const TEAL = {
  50: '#E5F2F2',
  100: '#C2E0E0',
  300: '#69B3B3',
  500: '#2A8E8E',  // anchor — "H" + "Hub" + circuits
  700: '#1F6D6D',
  900: '#114545',
} as const;

const GOLD = {
  50: '#FBF6EC',
  100: '#F2E5C9',
  300: '#DDC189',
  500: '#C9A35A',  // anchor — crown + sparkle
  700: '#9F7E3F',
  900: '#5E4A23',
} as const;

const CREAM = {
  50: '#FBF7F0',  // anchor — page bg, matches website cream-50
  100: '#F5EFE3',
  200: '#E9DFCC',
} as const;

const INK = {
  50: '#F4F2EE',
  100: '#E5E0D6',
  500: '#5C5849',
  700: '#2C2A23',
  900: '#141A17',  // dark-mode background, matches website ink-900
} as const;

export const colors = {
  light: {
    primary: TEAL[500],
    primaryLight: TEAL[300],
    primaryDark: TEAL[700],
    background: CREAM[50],
    backgroundSecondary: CREAM[100],
    text: NAVY[900],
    textSecondary: NAVY[500],
    textTertiary: NAVY[300],
    card: '#FFFFFF',
    cardBorder: CREAM[200],
    border: CREAM[200],
    tabBar: '#FFFFFF',
    tabBarBorder: CREAM[200],
    tabBarActive: TEAL[500],
    tabBarInactive: NAVY[300],
    success: TEAL[700],   // teal as success keeps the brand feel
    warning: GOLD[500],   // gold = the brand's accent for highlights
    error: '#B33A3A',     // muted, on-brand red rather than aggressive #DC2626
    overlay: 'rgba(20, 26, 23, 0.4)',
  },
  dark: {
    primary: TEAL[300],   // teal pops against deep ink in dark mode
    primaryLight: TEAL[100],
    primaryDark: TEAL[500],
    background: INK[900],
    backgroundSecondary: INK[700],
    text: CREAM[50],
    textSecondary: CREAM[100],
    textTertiary: INK[100],
    card: INK[700],
    cardBorder: INK[500],
    border: INK[500],
    tabBar: INK[900],
    tabBarBorder: INK[500],
    tabBarActive: TEAL[300],
    tabBarInactive: INK[100],
    success: TEAL[300],
    warning: GOLD[300],
    error: '#E58787',
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
} as const;

/**
 * Raw brand swatches exported for ad-hoc use (gradients, decorative shapes,
 * onboarding illustrations). Prefer the semantic tokens above (`theme.primary`,
 * `theme.text`, etc.) for normal UI.
 */
export const brand = { NAVY, TEAL, GOLD, CREAM, INK } as const;

// ---------------------------------------------------------------------------
// Typography — Newsreader (serif headings) + Geist (sans body)
// ---------------------------------------------------------------------------
//
// Use the named font families directly in StyleSheets:
//   { fontFamily: typography.serif.bold, fontSize: 28 }
// Or use the preset shorthands:
//   { ...typography.heading.lg }
//
// Loaded via @expo-google-fonts/{newsreader,geist} in app/_layout.tsx —
// every screen sees these names available after first render.
//

export const typography = {
  serif: {
    regular: 'Newsreader_400Regular',
    medium: 'Newsreader_500Medium',
    semibold: 'Newsreader_600SemiBold',
    bold: 'Newsreader_700Bold',
  },
  sans: {
    regular: 'Geist_400Regular',
    medium: 'Geist_500Medium',
    semibold: 'Geist_600SemiBold',
    bold: 'Geist_700Bold',
  },
  // Display / heading presets — match the website's editorial scale
  display: {
    fontFamily: 'Newsreader_700Bold',
    fontSize: 36,
    lineHeight: 42,
    letterSpacing: -0.6,
  },
  heading: {
    lg: {
      fontFamily: 'Newsreader_600SemiBold',
      fontSize: 24,
      lineHeight: 30,
      letterSpacing: -0.3,
    },
    md: {
      fontFamily: 'Newsreader_600SemiBold',
      fontSize: 20,
      lineHeight: 26,
      letterSpacing: -0.2,
    },
    sm: {
      fontFamily: 'Newsreader_600SemiBold',
      fontSize: 17,
      lineHeight: 22,
    },
  },
  body: {
    lg: {
      fontFamily: 'Geist_400Regular',
      fontSize: 16,
      lineHeight: 24,
    },
    md: {
      fontFamily: 'Geist_400Regular',
      fontSize: 14,
      lineHeight: 21,
    },
    sm: {
      fontFamily: 'Geist_400Regular',
      fontSize: 12,
      lineHeight: 18,
    },
  },
  caption: {
    fontFamily: 'Geist_500Medium',
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.4,
    textTransform: 'uppercase' as const,
  },
} as const;

// ---------------------------------------------------------------------------
// Shape — radii, spacing, elevation. Drop on any View / TouchableOpacity to
// match the brand's softly-rounded, subtly-shadowed surfaces.
// ---------------------------------------------------------------------------

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  pill: 999,
} as const;

export const spacing = {
  '0.5': 2,
  '1': 4,
  '2': 8,
  '3': 12,
  '4': 16,
  '5': 20,
  '6': 24,
  '8': 32,
  '10': 40,
  '12': 48,
} as const;

/**
 * Cross-platform soft shadow that reads "premium" rather than "default RN
 * card". Use as `style={{ ...elevation.card }}`. iOS uses native shadows;
 * Android relies on the `elevation` numeric prop.
 */
export const elevation = {
  none: {
    shadowOpacity: 0,
    elevation: 0,
  },
  card: {
    shadowColor: '#0E1A33',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardHover: {
    shadowColor: '#0E1A33',
    shadowOpacity: 0.1,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  modal: {
    shadowColor: '#0E1A33',
    shadowOpacity: 0.18,
    shadowRadius: 28,
    shadowOffset: { width: 0, height: 14 },
    elevation: 12,
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
