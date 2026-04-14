import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../../lib/theme';
import type { Note } from '../../data/notes-types';
import { deleteNote, getAllNotes, searchNotes } from '../../lib/notes';
import SearchBar from '../SearchBar';

// ---------------------------------------------------------------------------
// Tag pill colors (must stay in sync with NoteEditor)
// ---------------------------------------------------------------------------

const TAG_COLORS: Record<string, string> = {
  poetry: '#8b5cf6',
  characters: '#ec4899',
  themes: '#f59e0b',
  quotes: '#10b981',
  language: '#3b82f6',
  'exam-tips': '#ef4444',
};

// ---------------------------------------------------------------------------
// Swipeable row
// ---------------------------------------------------------------------------

interface SwipeRowProps {
  children: React.ReactNode;
  onDelete: () => void;
  theme: ColorTokens;
}

function SwipeRow({ children, onDelete, theme }: SwipeRowProps) {
  const pan = useRef(new Animated.Value(0)).current;
  const [swiped, setSwiped] = useState(false);

  const handleDelete = useCallback(() => {
    Alert.alert('Delete note', 'This cannot be undone.', [
      { text: 'Cancel', style: 'cancel', onPress: () => resetSwipe() },
      { text: 'Delete', style: 'destructive', onPress: onDelete },
    ]);
  }, [onDelete]);

  const resetSwipe = () => {
    Animated.spring(pan, {
      toValue: 0,
      useNativeDriver: true,
    }).start(() => setSwiped(false));
  };

  const toggleSwipe = () => {
    if (swiped) {
      resetSwipe();
    } else {
      Animated.spring(pan, {
        toValue: -80,
        useNativeDriver: true,
      }).start(() => setSwiped(true));
    }
  };

  return (
    <View style={{ overflow: 'hidden' }}>
      {/* Delete button behind the card */}
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.error,
          borderRadius: 14,
        }}
      >
        <TouchableOpacity
          onPress={handleDelete}
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%' }}
          accessibilityRole="button"
          accessibilityLabel="Delete note"
        >
          <Ionicons name="trash-outline" size={22} color="#fff" />
          <Text style={{ color: '#fff', fontSize: 11, fontWeight: '600', marginTop: 2 }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card that slides left */}
      <Animated.View style={{ transform: [{ translateX: pan }] }}>
        <TouchableOpacity activeOpacity={0.85} onLongPress={toggleSwipe} delayLongPress={300}>
          {children}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface NotesListProps {
  /** Called when the user taps a note to edit it. */
  onEdit: (note: Note) => void;
  /** Incremented externally to trigger a refresh (e.g. after save). */
  refreshKey?: number;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function NotesList({ onEdit, refreshKey }: NotesListProps) {
  const { theme } = useTheme();
  const s = makeStyles(theme);

  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  // -- Fetch / search --------------------------------------------------------

  const load = useCallback(async (q: string) => {
    try {
      const result = q.trim() ? await searchNotes(q) : await getAllNotes('updatedAt');
      setNotes(result);
    } catch {
      setNotes([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    load(query);
  }, [query, refreshKey, load]);

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
  }, []);

  // -- Delete ----------------------------------------------------------------

  const handleDelete = useCallback(
    async (id: string) => {
      await deleteNote(id);
      setNotes((prev) => prev.filter((n) => n.id !== id));
    },
    [],
  );

  // -- Date formatting -------------------------------------------------------

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHrs = Math.floor(diffMins / 60);
    if (diffHrs < 24) return `${diffHrs}h ago`;
    const diffDays = Math.floor(diffHrs / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  };

  // -- Render card -----------------------------------------------------------

  const renderNote = useCallback(
    ({ item }: { item: Note }) => {
      const preview =
        item.content.length > 100
          ? item.content.slice(0, 100).trimEnd() + '...'
          : item.content;

      return (
        <SwipeRow onDelete={() => handleDelete(item.id)} theme={theme}>
          <TouchableOpacity
            style={s.card}
            activeOpacity={0.7}
            onPress={() => onEdit(item)}
            accessibilityRole="button"
            accessibilityLabel={`Edit note: ${item.title}`}
          >
            {/* Title + date row */}
            <View style={s.cardTop}>
              <Text style={s.cardTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={s.cardDate}>{formatDate(item.updatedAt)}</Text>
            </View>

            {/* Preview */}
            <Text style={s.cardPreview} numberOfLines={2}>
              {preview}
            </Text>

            {/* Reference badges */}
            {(item.textRef || item.poemRef) && (
              <View style={s.refRow}>
                {item.textRef && (
                  <View style={[s.refBadge, { backgroundColor: theme.primary + '14' }]}>
                    <Ionicons name="book-outline" size={12} color={theme.primary} />
                    <Text style={[s.refBadgeText, { color: theme.primary }]}>{item.textRef}</Text>
                  </View>
                )}
                {item.poemRef && (
                  <View style={[s.refBadge, { backgroundColor: '#8b5cf6' + '14' }]}>
                    <Ionicons name="flower-outline" size={12} color="#8b5cf6" />
                    <Text style={[s.refBadgeText, { color: '#8b5cf6' }]}>{item.poemRef}</Text>
                  </View>
                )}
              </View>
            )}

            {/* Tags */}
            {item.tags.length > 0 && (
              <View style={s.tagRow}>
                {item.tags.map((tag) => {
                  const color = TAG_COLORS[tag] ?? theme.primary;
                  return (
                    <View
                      key={tag}
                      style={[s.tagPill, { backgroundColor: color + '18' }]}
                    >
                      <Text style={[s.tagPillText, { color }]}>{tag}</Text>
                    </View>
                  );
                })}
              </View>
            )}
          </TouchableOpacity>
        </SwipeRow>
      );
    },
    [theme, s, onEdit, handleDelete],
  );

  // -- Empty state -----------------------------------------------------------

  const EmptyView = () => (
    <View style={s.empty}>
      <Ionicons name="document-text-outline" size={48} color={theme.textTertiary} />
      <Text style={s.emptyTitle}>
        {query ? 'No notes found' : 'No notes yet'}
      </Text>
      <Text style={s.emptyDesc}>
        {query
          ? 'Try a different search term.'
          : 'Tap the + button to create your first study note.'}
      </Text>
    </View>
  );

  // -- Main render -----------------------------------------------------------

  return (
    <View style={s.container}>
      <View style={s.searchWrap}>
        <SearchBar onSearch={handleSearch} placeholder="Search notes..." />
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderNote}
        contentContainerStyle={[
          s.listContent,
          notes.length === 0 && s.listEmpty,
        ]}
        ListEmptyComponent={loading ? null : <EmptyView />}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    container: { flex: 1 },
    searchWrap: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 4 },

    listContent: { paddingHorizontal: 20, paddingBottom: 100 },
    listEmpty: { flexGrow: 1 },

    // Card
    card: {
      backgroundColor: t.card,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 16,
      marginTop: 12,
    },
    cardTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
      flex: 1,
      marginRight: 8,
    },
    cardDate: {
      fontSize: 12,
      color: t.textTertiary,
      fontWeight: '500',
    },
    cardPreview: {
      fontSize: 14,
      color: t.textSecondary,
      lineHeight: 20,
      marginBottom: 8,
    },

    // Reference badges
    refRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 8,
    },
    refBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 8,
    },
    refBadgeText: {
      fontSize: 11,
      fontWeight: '600',
    },

    // Tag pills
    tagRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    tagPill: {
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 10,
    },
    tagPillText: {
      fontSize: 11,
      fontWeight: '700',
    },

    // Empty
    empty: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 40,
    },
    emptyTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: t.text,
      marginTop: 12,
    },
    emptyDesc: {
      fontSize: 14,
      color: t.textSecondary,
      textAlign: 'center',
      marginTop: 6,
      lineHeight: 20,
    },
  });
