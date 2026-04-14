import { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';

interface SearchBarProps {
  /** Called with the debounced search text */
  onSearch: (query: string) => void;
  /** Placeholder text shown when the input is empty */
  placeholder?: string;
  /** Debounce delay in ms (default 300) */
  debounceMs?: number;
}

export default function SearchBar({
  onSearch,
  placeholder = 'Search saved content\u2026',
  debounceMs = 300,
}: SearchBarProps) {
  const { theme } = useTheme();
  const s = styles(theme);

  const [text, setText] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onSearch(text);
    }, debounceMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, debounceMs, onSearch]);

  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
        placeholderTextColor={theme.textTertiary}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        accessibilityLabel={placeholder}
        accessibilityRole="search"
      />
      {text.length > 0 && (
        <TouchableOpacity
          onPress={() => setText('')}
          style={s.clearButton}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityRole="button"
          accessibilityLabel="Clear search"
          accessibilityHint="Removes all search text"
        >
          <Ionicons name="close-circle" size={20} color={theme.textTertiary} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = (t: ColorTokens) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: t.backgroundSecondary,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: t.border,
      paddingHorizontal: 12,
      height: 42,
    },
    input: {
      flex: 1,
      fontSize: 15,
      color: t.text,
      paddingVertical: 0,
    },
    clearButton: {
      marginLeft: 8,
      padding: 4,
      minWidth: 44,  // WCAG minimum touch-target size
      minHeight: 44, // WCAG minimum touch-target size
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
