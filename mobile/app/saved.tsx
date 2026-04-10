import { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { getCachedPoems, seedMockPoems, type CachedPoem } from '../lib/offline-cache';

/**
 * Saved tab — offline-friendly reader backed by AsyncStorage.
 *
 * Data comes from lib/offline-cache.ts. In a real build, the web app posts
 * "save" messages via the WebView bridge and this screen reads the resulting
 * AsyncStorage entries. For now we seed a small set of mock poems on first run
 * so the UI is navigable without a backend.
 */
export default function SavedScreen() {
  const [poems, setPoems] = useState<CachedPoem[]>([]);
  const [selected, setSelected] = useState<CachedPoem | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadPoems = useCallback(async () => {
    await seedMockPoems();
    const cached = await getCachedPoems();
    setPoems(cached);
  }, []);

  useEffect(() => {
    loadPoems();
  }, [loadPoems]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadPoems();
    setRefreshing(false);
  }, [loadPoems]);

  if (selected) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <Stack.Screen options={{ title: selected.title }} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSelected(null)}>
            <Text style={styles.backLink}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {selected.title}
          </Text>
          <View style={{ width: 48 }} />
        </View>
        <ScrollView contentContainerStyle={styles.readerContent}>
          <Text style={styles.poemTitle}>{selected.title}</Text>
          <Text style={styles.poemAuthor}>by {selected.author}</Text>
          <Text style={styles.poemBody}>{selected.body}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>
      <FlatList
        data={poems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <Text style={styles.subtitle}>
            Saved content is available without an internet connection.
          </Text>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No saved content yet. Save poems and notes from the web app to read them offline.
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.poemCard}
            onPress={() => setSelected(item)}
          >
            <Text style={styles.poemCardTitle}>{item.title}</Text>
            <Text style={styles.poemCardAuthor}>{item.author}</Text>
            <Text style={styles.poemCardPreview} numberOfLines={2}>
              {item.body}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    backgroundColor: '#ffffff',
  },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#111827', flex: 1, textAlign: 'center' },
  backLink: { color: '#1e40af', fontSize: 16, fontWeight: '500', width: 48 },
  subtitle: { color: '#6b7280', marginBottom: 16, fontSize: 14 },
  listContent: { padding: 16 },
  emptyText: { textAlign: 'center', color: '#9ca3af', marginTop: 40, paddingHorizontal: 24 },
  poemCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  poemCardTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  poemCardAuthor: { fontSize: 14, color: '#6b7280', marginBottom: 8 },
  poemCardPreview: { fontSize: 14, color: '#4b5563' },
  readerContent: { padding: 24 },
  poemTitle: { fontSize: 26, fontWeight: '700', color: '#111827', marginBottom: 4 },
  poemAuthor: { fontSize: 16, color: '#6b7280', marginBottom: 24, fontStyle: 'italic' },
  poemBody: { fontSize: 17, lineHeight: 28, color: '#1f2937' },
});
