import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme, type ColorTokens } from '../lib/theme';
import type { CachedItem, CachedItemType } from '../lib/offline-cache';

// ---------------------------------------------------------------------------
// Type icon map — simple text-based icons (no external icon lib needed)
// ---------------------------------------------------------------------------

const TYPE_ICONS: Record<CachedItemType, { emoji: string; label: string }> = {
  poem: { emoji: '\uD83D\uDCDC', label: 'Poem' },        // scroll
  flashcard: { emoji: '\uD83D\uDDC2', label: 'Flashcard' }, // card index dividers
  note: { emoji: '\uD83D\uDDD2', label: 'Note' },          // spiral notepad
  quiz: { emoji: '\u2753', label: 'Quiz' },                // question mark
};

interface SavedItemCardProps {
  item: CachedItem;
  onPress: (item: CachedItem) => void;
}

export default function SavedItemCard({ item, onPress }: SavedItemCardProps) {
  const { theme } = useTheme();
  const s = styles(theme);
  const icon = TYPE_ICONS[item.type] ?? TYPE_ICONS.note;

  const formattedDate = formatDate(item.savedAt);

  return (
    <TouchableOpacity
      style={s.card}
      activeOpacity={0.7}
      onPress={() => onPress(item)}
    >
      <View style={s.iconContainer}>
        <Text style={s.iconText}>{icon.emoji}</Text>
      </View>
      <View style={s.body}>
        <View style={s.titleRow}>
          <Text style={s.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={s.badge}>{icon.label}</Text>
        </View>
        <Text style={s.date}>{formattedDate}</Text>
        <Text style={s.preview} numberOfLines={2}>
          {item.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = (t: ColorTokens) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: t.card,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 14,
      marginBottom: 10,
    },
    iconContainer: {
      width: 42,
      height: 42,
      borderRadius: 10,
      backgroundColor: t.backgroundSecondary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    iconText: {
      fontSize: 20,
    },
    body: {
      flex: 1,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 2,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: t.text,
      flex: 1,
      marginRight: 8,
    },
    badge: {
      fontSize: 11,
      fontWeight: '600',
      color: t.primary,
      backgroundColor: t.backgroundSecondary,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 6,
      overflow: 'hidden',
    },
    date: {
      fontSize: 12,
      color: t.textTertiary,
      marginBottom: 4,
    },
    preview: {
      fontSize: 13,
      lineHeight: 18,
      color: t.textSecondary,
    },
  });
