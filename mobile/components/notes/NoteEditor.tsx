import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../../lib/theme';
import type { Note } from '../../data/notes-types';
import { createNote, updateNote } from '../../lib/notes';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PRESET_TAGS = [
  'poetry',
  'characters',
  'themes',
  'quotes',
  'language',
  'exam-tips',
] as const;

const TAG_COLORS: Record<string, string> = {
  poetry: '#8b5cf6',
  characters: '#ec4899',
  themes: '#f59e0b',
  quotes: '#10b981',
  language: '#3b82f6',
  'exam-tips': '#ef4444',
};

const MAX_CONTENT = 5000;

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface NoteEditorProps {
  /** Pass an existing note to edit, or omit for a new note. */
  note?: Note | null;
  /** Called after a successful save with the resulting note. */
  onSave: (note: Note) => void;
  /** Called when the user cancels editing. */
  onCancel: () => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function NoteEditor({ note, onSave, onCancel }: NoteEditorProps) {
  const { theme } = useTheme();
  const s = makeStyles(theme);

  const [title, setTitle] = useState(note?.title ?? '');
  const [content, setContent] = useState(note?.content ?? '');
  const [tags, setTags] = useState<string[]>(note?.tags ?? []);
  const [textRef, setTextRef] = useState(note?.textRef ?? '');
  const [poemRef, setPoemRef] = useState(note?.poemRef ?? '');
  const [saving, setSaving] = useState(false);

  const wordCount = useMemo(() => {
    const trimmed = content.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }, [content]);

  const charCount = content.length;

  // -- Tag toggling ----------------------------------------------------------

  const toggleTag = useCallback((tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }, []);

  // -- Save ------------------------------------------------------------------

  const handleSave = useCallback(async () => {
    if (!title.trim()) {
      Alert.alert('Missing title', 'Please give your note a title.');
      return;
    }
    if (!content.trim()) {
      Alert.alert('Missing content', 'Please add some content to your note.');
      return;
    }

    Keyboard.dismiss();
    setSaving(true);

    try {
      let saved: Note;
      if (note) {
        saved = await updateNote(note.id, {
          title,
          content,
          tags,
          textRef: textRef.trim() || null,
          poemRef: poemRef.trim() || null,
        });
      } else {
        saved = await createNote(title, content, tags, textRef.trim() || undefined);
        // poemRef is set via update if needed on a fresh note
        if (poemRef.trim()) {
          saved = await updateNote(saved.id, { poemRef: poemRef.trim() });
        }
      }
      onSave(saved);
    } catch (err: any) {
      Alert.alert('Save failed', err?.message ?? 'Something went wrong.');
    } finally {
      setSaving(false);
    }
  }, [title, content, tags, textRef, poemRef, note, onSave]);

  // -- Render ----------------------------------------------------------------

  return (
    <KeyboardAvoidingView
      style={s.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
    >
      {/* Header bar */}
      <View style={s.header}>
        <TouchableOpacity
          onPress={onCancel}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityRole="button"
          accessibilityLabel="Cancel"
        >
          <Text style={s.headerBtn}>Cancel</Text>
        </TouchableOpacity>

        <Text style={s.headerTitle} numberOfLines={1}>
          {note ? 'Edit Note' : 'New Note'}
        </Text>

        <TouchableOpacity
          onPress={handleSave}
          disabled={saving}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityRole="button"
          accessibilityLabel="Save note"
        >
          <Text style={[s.headerBtn, s.saveBtn, saving && s.saveBtnDisabled]}>
            {saving ? 'Saving...' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={s.scroll}
        contentContainerStyle={s.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Title input */}
        <TextInput
          style={s.titleInput}
          value={title}
          onChangeText={setTitle}
          placeholder="Note title"
          placeholderTextColor={theme.textTertiary}
          maxLength={120}
          returnKeyType="next"
          autoFocus={!note}
          accessibilityLabel="Note title"
        />

        {/* Content input */}
        <TextInput
          style={s.contentInput}
          value={content}
          onChangeText={setContent}
          placeholder="Start writing..."
          placeholderTextColor={theme.textTertiary}
          multiline
          textAlignVertical="top"
          maxLength={MAX_CONTENT}
          accessibilityLabel="Note content"
        />

        {/* Tags */}
        <Text style={s.sectionLabel}>Tags</Text>
        <View style={s.tagRow}>
          {PRESET_TAGS.map((tag) => {
            const active = tags.includes(tag);
            const color = TAG_COLORS[tag] ?? theme.primary;
            return (
              <TouchableOpacity
                key={tag}
                style={[
                  s.tagChip,
                  {
                    backgroundColor: active ? color + '20' : theme.backgroundSecondary,
                    borderColor: active ? color : theme.border,
                  },
                ]}
                onPress={() => toggleTag(tag)}
                accessibilityRole="button"
                accessibilityLabel={`${active ? 'Remove' : 'Add'} tag ${tag}`}
                accessibilityState={{ selected: active }}
              >
                <Text
                  style={[
                    s.tagText,
                    { color: active ? color : theme.textSecondary },
                  ]}
                >
                  {tag}
                </Text>
                {active && (
                  <Ionicons
                    name="close-circle"
                    size={14}
                    color={color}
                    style={{ marginLeft: 4 }}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Reference badges */}
        <Text style={s.sectionLabel}>References (optional)</Text>
        <View style={s.refRow}>
          <View style={s.refInputWrap}>
            <Ionicons name="book-outline" size={16} color={theme.textTertiary} />
            <TextInput
              style={s.refInput}
              value={textRef}
              onChangeText={setTextRef}
              placeholder="Text (e.g. Macbeth)"
              placeholderTextColor={theme.textTertiary}
              accessibilityLabel="Text reference"
            />
          </View>
          <View style={s.refInputWrap}>
            <Ionicons name="flower-outline" size={16} color={theme.textTertiary} />
            <TextInput
              style={s.refInput}
              value={poemRef}
              onChangeText={setPoemRef}
              placeholder="Poem (e.g. Ozymandias)"
              placeholderTextColor={theme.textTertiary}
              accessibilityLabel="Poem reference"
            />
          </View>
        </View>
      </ScrollView>

      {/* Word count footer */}
      <View style={s.footer}>
        <Text style={s.footerText}>
          {wordCount} {wordCount === 1 ? 'word' : 'words'}
        </Text>
        <Text style={s.footerText}>
          {charCount} / {MAX_CONTENT}
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    flex: { flex: 1, backgroundColor: t.background },

    // Header
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: t.border,
      backgroundColor: t.background,
    },
    headerTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
      flex: 1,
      textAlign: 'center',
    },
    headerBtn: {
      fontSize: 16,
      fontWeight: '600',
      color: t.primary,
      minWidth: 60,
    },
    saveBtn: {
      textAlign: 'right',
      fontWeight: '700',
    },
    saveBtnDisabled: {
      opacity: 0.5,
    },

    // Scroll body
    scroll: { flex: 1 },
    scrollContent: { padding: 20, paddingBottom: 40 },

    // Title
    titleInput: {
      fontSize: 24,
      fontWeight: '800',
      color: t.text,
      paddingVertical: 8,
      marginBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: t.border,
    },

    // Content
    contentInput: {
      fontSize: 16,
      color: t.text,
      lineHeight: 24,
      minHeight: 180,
      paddingVertical: 8,
      marginBottom: 20,
    },

    // Tags
    sectionLabel: {
      fontSize: 13,
      fontWeight: '700',
      color: t.textTertiary,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      marginBottom: 8,
    },
    tagRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 20,
    },
    tagChip: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      borderWidth: 1,
    },
    tagText: {
      fontSize: 13,
      fontWeight: '600',
    },

    // References
    refRow: { gap: 10, marginBottom: 20 },
    refInputWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: t.backgroundSecondary,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: t.border,
      paddingHorizontal: 12,
      height: 42,
    },
    refInput: {
      flex: 1,
      fontSize: 14,
      color: t.text,
      paddingVertical: 0,
    },

    // Footer
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: t.border,
      backgroundColor: t.background,
    },
    footerText: {
      fontSize: 12,
      color: t.textTertiary,
      fontWeight: '500',
    },
  });
