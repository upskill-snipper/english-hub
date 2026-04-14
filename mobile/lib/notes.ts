import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Note, NoteCreate, NoteUpdate, NoteSortBy } from '../data/notes-types';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const STORAGE_KEY = 'eh_notes';
const MAX_NOTES = 500;
const MAX_CONTENT_LENGTH = 5000;

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

async function readAll(): Promise<Note[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAll(notes: Note[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function generateId(): string {
  return `note_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function validate(title: string, content: string): void {
  if (!title.trim()) {
    throw new Error('Note title cannot be empty.');
  }
  if (!content.trim()) {
    throw new Error('Note content cannot be empty.');
  }
  if (content.length > MAX_CONTENT_LENGTH) {
    throw new Error(
      `Note content exceeds the ${MAX_CONTENT_LENGTH}-character limit (got ${content.length}).`,
    );
  }
}

// ---------------------------------------------------------------------------
// CRUD
// ---------------------------------------------------------------------------

/**
 * Create a new study note.
 *
 * @throws if title/content is empty, content exceeds 5 000 chars, or the
 *         500-note cap has been reached.
 */
export async function createNote(
  title: string,
  content: string,
  tags?: string[],
  textRef?: string,
): Promise<Note> {
  validate(title, content);
  const notes = await readAll();

  if (notes.length >= MAX_NOTES) {
    throw new Error(`Cannot create note — the ${MAX_NOTES}-note limit has been reached.`);
  }

  const now = new Date().toISOString();
  const note: Note = {
    id: generateId(),
    title: title.trim(),
    content,
    tags: tags ?? [],
    textRef,
    createdAt: now,
    updatedAt: now,
  };

  notes.unshift(note);
  await writeAll(notes);
  return note;
}

/** Retrieve a single note by id. Returns `null` when not found. */
export async function getNote(id: string): Promise<Note | null> {
  const notes = await readAll();
  return notes.find((n) => n.id === id) ?? null;
}

/**
 * Update fields on an existing note.
 *
 * @throws if the note does not exist or validation fails.
 */
export async function updateNote(id: string, updates: NoteUpdate): Promise<Note> {
  const notes = await readAll();
  const idx = notes.findIndex((n) => n.id === id);
  if (idx === -1) throw new Error(`Note "${id}" not found.`);

  const existing = notes[idx];
  const newTitle = updates.title !== undefined ? updates.title : existing.title;
  const newContent = updates.content !== undefined ? updates.content : existing.content;
  validate(newTitle, newContent);

  const updated: Note = {
    ...existing,
    title: newTitle.trim(),
    content: newContent,
    tags: updates.tags !== undefined ? updates.tags : existing.tags,
    textRef: updates.textRef === null ? undefined : (updates.textRef ?? existing.textRef),
    poemRef: updates.poemRef === null ? undefined : (updates.poemRef ?? existing.poemRef),
    updatedAt: new Date().toISOString(),
  };

  notes[idx] = updated;
  await writeAll(notes);
  return updated;
}

/**
 * Delete a note by id.
 *
 * @returns `true` if the note was found and removed, `false` otherwise.
 */
export async function deleteNote(id: string): Promise<boolean> {
  const notes = await readAll();
  const before = notes.length;
  const filtered = notes.filter((n) => n.id !== id);
  if (filtered.length === before) return false;
  await writeAll(filtered);
  return true;
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

/**
 * Case-insensitive substring search across title, content, and tags.
 * Returns results sorted by `updatedAt` descending.
 */
export async function searchNotes(query: string): Promise<Note[]> {
  if (!query.trim()) return getAllNotes('updatedAt');
  const notes = await readAll();
  const lower = query.toLowerCase();
  return notes
    .filter(
      (n) =>
        n.title.toLowerCase().includes(lower) ||
        n.content.toLowerCase().includes(lower) ||
        n.tags.some((t) => t.toLowerCase().includes(lower)),
    )
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

// ---------------------------------------------------------------------------
// List helpers
// ---------------------------------------------------------------------------

/** Return all notes sorted by the given field (default: `updatedAt` desc). */
export async function getAllNotes(sortBy: NoteSortBy = 'updatedAt'): Promise<Note[]> {
  const notes = await readAll();

  switch (sortBy) {
    case 'title':
      return notes.sort((a, b) => a.title.localeCompare(b.title));
    case 'createdAt':
      return notes.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    case 'updatedAt':
    default:
      return notes.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }
}

/** Return all notes that contain a specific tag (case-insensitive). */
export async function getNotesByTag(tag: string): Promise<Note[]> {
  const notes = await readAll();
  const lower = tag.toLowerCase();
  return notes
    .filter((n) => n.tags.some((t) => t.toLowerCase() === lower))
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

/**
 * Compile selected (or all) notes into a single Markdown study guide string.
 *
 * Each note becomes a section with its title, tags, and content.
 * Optionally pass an array of note ids to include only those notes.
 */
export async function compileStudyGuide(noteIds?: string[]): Promise<string> {
  let notes = await readAll();

  if (noteIds && noteIds.length > 0) {
    const idSet = new Set(noteIds);
    notes = notes.filter((n) => idSet.has(n.id));
  }

  // Sort alphabetically by title for a clean study-guide ordering
  notes.sort((a, b) => a.title.localeCompare(b.title));

  if (notes.length === 0) return '# Study Guide\n\nNo notes to compile.';

  const sections = notes.map((n) => {
    const tagLine = n.tags.length > 0 ? `**Tags:** ${n.tags.join(', ')}\n\n` : '';
    const refLine =
      n.textRef || n.poemRef
        ? `**Ref:** ${[n.textRef, n.poemRef].filter(Boolean).join(' / ')}\n\n`
        : '';
    return `## ${n.title}\n\n${tagLine}${refLine}${n.content}`;
  });

  return `# Study Guide\n\n${sections.join('\n\n---\n\n')}`;
}
