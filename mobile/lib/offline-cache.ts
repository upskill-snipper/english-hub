import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Lightweight AsyncStorage wrapper for saved / offline content.
 *
 * Storage layout:
 *   eh_cache:index        -> JSON string[] of ids
 *   eh_cache:item:<id>    -> JSON CachedPoem
 *   eh_cache:seeded       -> "1" once mock seed has run
 */

const INDEX_KEY = 'eh_cache:index';
const ITEM_PREFIX = 'eh_cache:item:';
const SEEDED_KEY = 'eh_cache:seeded';

export interface CachedPoem {
  id: string;
  title: string;
  author: string;
  body: string;
  /** ISO 8601 timestamp */
  savedAt: string;
}

async function readIndex(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(INDEX_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

async function writeIndex(ids: string[]): Promise<void> {
  await AsyncStorage.setItem(INDEX_KEY, JSON.stringify(ids));
}

export async function getCachedPoems(): Promise<CachedPoem[]> {
  const ids = await readIndex();
  if (ids.length === 0) return [];
  const entries = await AsyncStorage.multiGet(ids.map((id) => ITEM_PREFIX + id));
  const poems: CachedPoem[] = [];
  for (const [, value] of entries) {
    if (!value) continue;
    try {
      poems.push(JSON.parse(value) as CachedPoem);
    } catch {
      /* skip malformed entry */
    }
  }
  // Most-recently-saved first
  return poems.sort((a, b) => b.savedAt.localeCompare(a.savedAt));
}

export async function getCachedPoem(id: string): Promise<CachedPoem | null> {
  const raw = await AsyncStorage.getItem(ITEM_PREFIX + id);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as CachedPoem;
  } catch {
    return null;
  }
}

export async function savePoem(poem: Omit<CachedPoem, 'savedAt'>): Promise<void> {
  const full: CachedPoem = { ...poem, savedAt: new Date().toISOString() };
  await AsyncStorage.setItem(ITEM_PREFIX + poem.id, JSON.stringify(full));
  const ids = await readIndex();
  if (!ids.includes(poem.id)) {
    ids.push(poem.id);
    await writeIndex(ids);
  }
}

export async function removePoem(id: string): Promise<void> {
  await AsyncStorage.removeItem(ITEM_PREFIX + id);
  const ids = (await readIndex()).filter((x) => x !== id);
  await writeIndex(ids);
}

export async function clearCache(): Promise<void> {
  const ids = await readIndex();
  if (ids.length > 0) {
    await AsyncStorage.multiRemove(ids.map((id) => ITEM_PREFIX + id));
  }
  await AsyncStorage.removeItem(INDEX_KEY);
  await AsyncStorage.removeItem(SEEDED_KEY);
}

/**
 * Seeds a small set of mock poems the first time the app launches so the
 * Saved tab is navigable in development. Safe to call repeatedly.
 */
export async function seedMockPoems(): Promise<void> {
  const seeded = await AsyncStorage.getItem(SEEDED_KEY);
  if (seeded === '1') return;

  const samples: Array<Omit<CachedPoem, 'savedAt'>> = [
    {
      id: 'sample-1',
      title: 'Sample Poem One',
      author: 'Unknown',
      body: 'This is a placeholder poem used to demonstrate the offline reader. Replace with real cached content from the web app.',
    },
    {
      id: 'sample-2',
      title: 'Sample Poem Two',
      author: 'Unknown',
      body: 'Another placeholder poem. The Saved tab reads from AsyncStorage so content stays available without a network connection.',
    },
  ];

  for (const sample of samples) {
    await savePoem(sample);
  }
  await AsyncStorage.setItem(SEEDED_KEY, '1');
}
