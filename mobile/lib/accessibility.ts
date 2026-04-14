import AsyncStorage from '@react-native-async-storage/async-storage';

// ---------------------------------------------------------------------------
// Accessibility preferences
// ---------------------------------------------------------------------------

export interface AccessibilityPrefs {
  /** Use OpenDyslexic / dyslexia-friendly font throughout the app */
  dyslexiaFont: boolean;
  /** Scale text up by ~20 % for users who need larger type */
  largerText: boolean;
  /** Disable non-essential animations (swipes, parallax, etc.) */
  reducedMotion: boolean;
  /** Increase contrast ratios for text and UI elements */
  highContrast: boolean;
}

const STORAGE_KEY = 'eh_accessibility';

export const DEFAULT_PREFS: AccessibilityPrefs = {
  dyslexiaFont: false,
  largerText: false,
  reducedMotion: false,
  highContrast: false,
};

// ---------------------------------------------------------------------------
// Persistence helpers
// ---------------------------------------------------------------------------

/**
 * Read accessibility preferences from AsyncStorage.
 * Returns defaults for any missing keys.
 */
export async function getAccessibilityPrefs(): Promise<AccessibilityPrefs> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFS };
    const parsed = JSON.parse(raw) as Partial<AccessibilityPrefs>;
    return { ...DEFAULT_PREFS, ...parsed };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

/**
 * Persist accessibility preferences to AsyncStorage.
 */
export async function setAccessibilityPrefs(
  prefs: AccessibilityPrefs,
): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (err) {
    console.warn('[accessibility] Failed to save prefs:', err);
  }
}

// ---------------------------------------------------------------------------
// Text-scale multiplier
// ---------------------------------------------------------------------------

/**
 * Returns a font-size multiplier based on the current prefs.
 * Normal = 1, largerText = 1.2.
 */
export function textScaleMultiplier(prefs: AccessibilityPrefs): number {
  return prefs.largerText ? 1.2 : 1;
}

/**
 * Scale a base font size according to accessibility prefs.
 */
export function scaledFontSize(
  base: number,
  prefs: AccessibilityPrefs,
): number {
  return Math.round(base * textScaleMultiplier(prefs));
}
