import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Lightweight AsyncStorage wrapper for saved / offline content.
 *
 * Storage layout:
 *   eh_cache:index        -> JSON string[] of ids
 *   eh_cache:item:<id>    -> JSON CachedItem (or legacy CachedPoem)
 *   eh_cache:seeded       -> "1" once mock seed has run
 */

const INDEX_KEY = 'eh_cache:index';
const ITEM_PREFIX = 'eh_cache:item:';
const SEEDED_KEY = 'eh_cache:seeded';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CachedItemType = 'poem' | 'flashcard' | 'note' | 'quiz';

/**
 * Generic cached item — the unified shape for all saved content types.
 */
export interface CachedItem {
  id: string;
  type: CachedItemType;
  title: string;
  /** Main body / content of the item */
  content: string;
  /** ISO 8601 timestamp */
  savedAt: string;
  /** Arbitrary extra data keyed by type (e.g. author for poems, deck for flashcards) */
  metadata: Record<string, unknown>;
}

/**
 * Legacy poem shape — kept for backwards compatibility.
 * Existing callers that use CachedPoem continue to work; internally poems
 * are stored as CachedItem and converted on the fly.
 */
export interface CachedPoem {
  id: string;
  title: string;
  author: string;
  body: string;
  /** ISO 8601 timestamp */
  savedAt: string;
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

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

/** Normalise a legacy CachedPoem record into CachedItem. */
function legacyToItem(raw: Record<string, unknown>): CachedItem {
  // Already in new shape?
  if (typeof raw.type === 'string' && typeof raw.content === 'string') {
    return raw as unknown as CachedItem;
  }
  // Convert legacy poem
  return {
    id: raw.id as string,
    type: 'poem',
    title: raw.title as string,
    content: raw.body as string,
    savedAt: raw.savedAt as string,
    metadata: { author: raw.author ?? 'Unknown' },
  };
}

/** Convert CachedItem back to legacy CachedPoem shape. */
function itemToPoem(item: CachedItem): CachedPoem {
  return {
    id: item.id,
    title: item.title,
    author: (item.metadata.author as string) ?? 'Unknown',
    body: item.content,
    savedAt: item.savedAt,
  };
}

// ---------------------------------------------------------------------------
// Generic CRUD — CachedItem
// ---------------------------------------------------------------------------

/** Retrieve all cached items, most-recently-saved first. */
export async function getCachedItems(): Promise<CachedItem[]> {
  const ids = await readIndex();
  if (ids.length === 0) return [];
  const entries = await AsyncStorage.multiGet(ids.map((id) => ITEM_PREFIX + id));
  const items: CachedItem[] = [];
  for (const [, value] of entries) {
    if (!value) continue;
    try {
      items.push(legacyToItem(JSON.parse(value)));
    } catch {
      /* skip malformed entry */
    }
  }
  return items.sort((a, b) => b.savedAt.localeCompare(a.savedAt));
}

/** Retrieve a single cached item by id. */
export async function getCachedItem(id: string): Promise<CachedItem | null> {
  const raw = await AsyncStorage.getItem(ITEM_PREFIX + id);
  if (!raw) return null;
  try {
    return legacyToItem(JSON.parse(raw));
  } catch {
    return null;
  }
}

/** Save (upsert) a cached item. */
export async function saveCachedItem(item: Omit<CachedItem, 'savedAt'>): Promise<void> {
  const full: CachedItem = { ...item, savedAt: new Date().toISOString() };
  await AsyncStorage.setItem(ITEM_PREFIX + item.id, JSON.stringify(full));
  const ids = await readIndex();
  if (!ids.includes(item.id)) {
    ids.push(item.id);
    await writeIndex(ids);
  }
}

/** Remove a single cached item. */
export async function removeCachedItem(id: string): Promise<void> {
  await AsyncStorage.removeItem(ITEM_PREFIX + id);
  const ids = (await readIndex()).filter((x) => x !== id);
  await writeIndex(ids);
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

/**
 * Search cached items by matching `query` against title and content
 * (case-insensitive substring match).
 */
export async function searchCachedItems(query: string): Promise<CachedItem[]> {
  if (!query.trim()) return getCachedItems();
  const items = await getCachedItems();
  const lower = query.toLowerCase();
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(lower) ||
      item.content.toLowerCase().includes(lower),
  );
}

// ---------------------------------------------------------------------------
// Bulk operations
// ---------------------------------------------------------------------------

/** Remove all items of a given type. */
export async function clearByType(type: CachedItemType): Promise<void> {
  const items = await getCachedItems();
  const toRemove = items.filter((i) => i.type === type);
  if (toRemove.length === 0) return;
  await AsyncStorage.multiRemove(toRemove.map((i) => ITEM_PREFIX + i.id));
  const remaining = items.filter((i) => i.type !== type).map((i) => i.id);
  await writeIndex(remaining);
}

/** Remove every cached item and reset the seed flag. */
export async function clearCache(): Promise<void> {
  const ids = await readIndex();
  if (ids.length > 0) {
    await AsyncStorage.multiRemove(ids.map((id) => ITEM_PREFIX + id));
  }
  await AsyncStorage.removeItem(INDEX_KEY);
  await AsyncStorage.removeItem(SEEDED_KEY);
}

// ---------------------------------------------------------------------------
// Legacy CachedPoem API — preserved for backwards compatibility
// ---------------------------------------------------------------------------

export async function getCachedPoems(): Promise<CachedPoem[]> {
  const items = await getCachedItems();
  return items.filter((i) => i.type === 'poem').map(itemToPoem);
}

export async function getCachedPoem(id: string): Promise<CachedPoem | null> {
  const item = await getCachedItem(id);
  if (!item || item.type !== 'poem') return null;
  return itemToPoem(item);
}

export async function savePoem(poem: Omit<CachedPoem, 'savedAt'>): Promise<void> {
  await saveCachedItem({
    id: poem.id,
    type: 'poem',
    title: poem.title,
    content: poem.body,
    metadata: { author: poem.author },
  });
}

export async function removePoem(id: string): Promise<void> {
  await removeCachedItem(id);
}

// ---------------------------------------------------------------------------
// Mock seed
// ---------------------------------------------------------------------------

/**
 * Seeds a small set of mock content the first time the app launches so the
 * Saved tab is navigable in development. Safe to call repeatedly.
 */
export async function seedMockPoems(): Promise<void> {
  const seeded = await AsyncStorage.getItem(SEEDED_KEY);
  if (seeded === '1') return;

  const samples: Array<Omit<CachedItem, 'savedAt'>> = [
    {
      id: 'sample-poem-1',
      type: 'poem',
      title: 'The Road Not Taken',
      content:
        'Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth.',
      metadata: { author: 'Robert Frost' },
    },
    {
      id: 'sample-poem-2',
      type: 'poem',
      title: 'Daffodils',
      content:
        'I wandered lonely as a cloud\nThat floats on high o\'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils.',
      metadata: { author: 'William Wordsworth' },
    },
    {
      id: 'sample-flash-1',
      type: 'flashcard',
      title: 'Literary Devices Set',
      content: 'Metaphor: A figure of speech that directly compares two unlike things without using "like" or "as".',
      metadata: { deck: 'English Literature', cardCount: 12 },
    },
    {
      id: 'sample-note-1',
      type: 'note',
      title: 'Essay Structure Notes',
      content: 'Introduction, body paragraphs (topic sentence, evidence, analysis), conclusion. Remember to use transition words between paragraphs.',
      metadata: {},
    },
    {
      id: 'sample-quiz-1',
      type: 'quiz',
      title: 'Poetry Terms Quiz',
      content: '10 questions covering alliteration, assonance, enjambment, metre, and rhyme scheme.',
      metadata: { questionCount: 10, bestScore: 8 },
    },
  ];

  for (const sample of samples) {
    await saveCachedItem(sample);
  }
  await AsyncStorage.setItem(SEEDED_KEY, '1');
}
