import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, router } from 'expo-router';
import { Swipeable } from 'react-native-gesture-handler';
import { useTheme, type ColorTokens } from '../lib/theme';
import {
  getCachedItems,
  removeCachedItem,
  saveCachedItem,
  seedMockPoems,
  type CachedItem,
  type CachedItemType,
} from '../lib/offline-cache';
import SavedItemCard from '../components/SavedItemCard';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';

// ---------------------------------------------------------------------------
// Tab definitions
// ---------------------------------------------------------------------------

type TabKey = 'all' | CachedItemType;

const TABS: { key: TabKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'poem', label: 'Poems' },
  { key: 'flashcard', label: 'Flashcards' },
  { key: 'note', label: 'Notes' },
  { key: 'quiz', label: 'Quizzes' },
];

// ---------------------------------------------------------------------------
// Main screen
// ---------------------------------------------------------------------------

export default function SavedScreen() {
  const { theme } = useTheme();
  const s = styles(theme);

  // ---- state ----
  const [items, setItems] = useState<CachedItem[]>([]);
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [selected, setSelected] = useState<CachedItem | null>(null);
  const [undoItem, setUndoItem] = useState<CachedItem | null>(null);
  const undoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const swipeableRefs = useRef<Map<string, Swipeable>>(new Map());

  // ---- data loading ----
  const loadItems = useCallback(async () => {
    await seedMockPoems();
    const cached = await getCachedItems();
    setItems(cached);
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadItems();
    setRefreshing(false);
  }, [loadItems]);

  // ---- filtering ----
  const filteredItems = useMemo(() => {
    let result = items;
    if (activeTab !== 'all') {
      result = result.filter((i) => i.type === activeTab);
    }
    if (searchQuery.trim()) {
      const lower = searchQuery.toLowerCase();
      result = result.filter(
        (i) =>
          i.title.toLowerCase().includes(lower) ||
          i.content.toLowerCase().includes(lower),
      );
    }
    return result;
  }, [items, activeTab, searchQuery]);

  // ---- search handler (stable ref for SearchBar) ----
  const handleSearch = useCallback((q: string) => setSearchQuery(q), []);

  // ---- delete + undo ----
  const handleDelete = useCallback(
    async (item: CachedItem) => {
      // Close any open swipeable
      swipeableRefs.current.get(item.id)?.close();

      // Optimistic remove from local state
      setItems((prev) => prev.filter((i) => i.id !== item.id));
      await removeCachedItem(item.id);

      // Set up undo
      if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
      setUndoItem(item);
      undoTimerRef.current = setTimeout(() => setUndoItem(null), 4000);
    },
    [],
  );

  const handleUndo = useCallback(async () => {
    if (!undoItem) return;
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    await saveCachedItem({
      id: undoItem.id,
      type: undoItem.type,
      title: undoItem.title,
      content: undoItem.content,
      metadata: undoItem.metadata,
    });
    setUndoItem(null);
    await loadItems();
  }, [undoItem, loadItems]);

  // ---- detail view ----
  if (selected) {
    return (
      <SafeAreaView style={s.container} edges={['top']}>
        <Stack.Screen options={{ title: selected.title }} />
        <View style={s.header}>
          <TouchableOpacity onPress={() => setSelected(null)}>
            <Text style={s.backLink}>Back</Text>
          </TouchableOpacity>
          <Text style={s.headerTitle} numberOfLines={1}>
            {selected.title}
          </Text>
          <View style={{ width: 48 }} />
        </View>
        <ScrollView contentContainerStyle={s.readerContent}>
          <Text style={s.detailTitle}>{selected.title}</Text>
          {typeof selected.metadata.author === 'string' && (
            <Text style={s.detailAuthor}>by {selected.metadata.author}</Text>
          )}
          <Text style={s.detailBody}>{selected.content}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ---- swipe-left delete action ----
  const renderRightActions = (
    _progress: Animated.AnimatedInterpolation<number>,
    _dragX: Animated.AnimatedInterpolation<number>,
    item: CachedItem,
  ) => (
    <TouchableOpacity
      style={s.deleteAction}
      onPress={() => handleDelete(item)}
    >
      <Text style={s.deleteActionText}>Delete</Text>
    </TouchableOpacity>
  );

  // ---- list screen ----
  return (
    <SafeAreaView style={s.container} edges={['top']}>
      <Stack.Screen options={{ title: 'Saved' }} />

      {/* Header */}
      <View style={s.header}>
        <Text style={s.headerTitle}>Saved</Text>
      </View>

      {/* Search */}
      <View style={s.searchContainer}>
        <SearchBar onSearch={handleSearch} />
      </View>

      {/* Category tabs */}
      <View style={s.tabBarWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={s.tabBar}
        >
          {TABS.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <TouchableOpacity
                key={tab.key}
                style={[s.tab, isActive && s.tabActive]}
                onPress={() => setActiveTab(tab.key)}
              >
                <Text style={[s.tabLabel, isActive && s.tabLabelActive]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Items list */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={s.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.primary}
          />
        }
        ListEmptyComponent={
          <EmptyState
            icon={'\uD83D\uDD16'}
            title="Nothing saved yet"
            message="Explore Study to save poems, flashcards, notes, and quizzes for offline access."
            ctaLabel="Go to Study"
            onCTA={() => router.push('/study')}
          />
        }
        renderItem={({ item }) => (
          <Swipeable
            ref={(ref) => {
              if (ref) swipeableRefs.current.set(item.id, ref);
            }}
            renderRightActions={(progress, dragX) =>
              renderRightActions(progress, dragX, item)
            }
            overshootRight={false}
          >
            <SavedItemCard item={item} onPress={setSelected} />
          </Swipeable>
        )}
      />

      {/* Undo toast */}
      {undoItem && (
        <View style={s.toast}>
          <Text style={s.toastText}>Deleted "{undoItem.title}"</Text>
          <TouchableOpacity onPress={handleUndo}>
            <Text style={s.toastUndo}>UNDO</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = (t: ColorTokens) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.backgroundSecondary,
    },

    // Header
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: t.background,
      borderBottomWidth: 1,
      borderBottomColor: t.border,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: t.text,
      flex: 1,
      textAlign: 'center',
    },
    backLink: {
      color: t.primary,
      fontSize: 16,
      fontWeight: '500',
      width: 48,
    },

    // Search
    searchContainer: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      backgroundColor: t.background,
    },

    // Tabs
    tabBarWrapper: {
      backgroundColor: t.background,
      borderBottomWidth: 1,
      borderBottomColor: t.border,
    },
    tabBar: {
      flexDirection: 'row',
      paddingHorizontal: 12,
      paddingBottom: 10,
      gap: 8,
    },
    tab: {
      paddingHorizontal: 16,
      paddingVertical: 7,
      borderRadius: 20,
      backgroundColor: t.backgroundSecondary,
      borderWidth: 1,
      borderColor: t.border,
    },
    tabActive: {
      backgroundColor: t.primary,
      borderColor: t.primary,
    },
    tabLabel: {
      fontSize: 13,
      fontWeight: '600',
      color: t.textSecondary,
    },
    tabLabelActive: {
      color: '#ffffff',
    },

    // List
    listContent: {
      padding: 16,
      paddingBottom: 80,
    },

    // Swipe delete action
    deleteAction: {
      backgroundColor: t.error,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingHorizontal: 24,
      borderRadius: 14,
      marginBottom: 10,
      marginLeft: 8,
    },
    deleteActionText: {
      color: '#ffffff',
      fontWeight: '700',
      fontSize: 14,
    },

    // Undo toast
    toast: {
      position: 'absolute',
      bottom: 24,
      left: 16,
      right: 16,
      backgroundColor: t.text,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 14,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    toastText: {
      color: t.background,
      fontSize: 14,
      flex: 1,
      marginRight: 12,
    },
    toastUndo: {
      color: t.warning,
      fontWeight: '700',
      fontSize: 14,
    },

    // Detail / reader view
    readerContent: { padding: 24 },
    detailTitle: {
      fontSize: 26,
      fontWeight: '700',
      color: t.text,
      marginBottom: 4,
    },
    detailAuthor: {
      fontSize: 16,
      color: t.textSecondary,
      marginBottom: 24,
      fontStyle: 'italic',
    },
    detailBody: {
      fontSize: 17,
      lineHeight: 28,
      color: t.text,
    },
  });
