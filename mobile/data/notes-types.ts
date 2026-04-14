// ---------------------------------------------------------------------------
// Note types for The English Hub note-taking engine
// ---------------------------------------------------------------------------

/** A persisted study note. */
export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  /** Optional reference to a set text (e.g. "Macbeth", "An Inspector Calls") */
  textRef?: string;
  /** Optional reference to a poem (e.g. "Ozymandias", "Remains") */
  poemRef?: string;
  /** ISO 8601 timestamp */
  createdAt: string;
  /** ISO 8601 timestamp */
  updatedAt: string;
}

/** Payload for creating a new note (id and timestamps are generated). */
export interface NoteCreate {
  title: string;
  content: string;
  tags?: string[];
  textRef?: string;
  poemRef?: string;
}

/** Payload for updating an existing note (all fields optional). */
export interface NoteUpdate {
  title?: string;
  content?: string;
  tags?: string[];
  textRef?: string | null;
  poemRef?: string | null;
}

/** Sort field used when listing notes. */
export type NoteSortBy = 'updatedAt' | 'createdAt' | 'title';
