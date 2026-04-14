import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme, type ColorTokens } from '../lib/theme';
import type { Note } from '../data/notes-types';
import NotesList from '../components/notes/NotesList';
import NoteEditor from '../components/notes/NoteEditor';

// ---------------------------------------------------------------------------
// View state
// ---------------------------------------------------------------------------

type ViewState =
  | { screen: 'list' }
  | { screen: 'editor'; note?: Note };

// ---------------------------------------------------------------------------
// Notes hub screen
// ---------------------------------------------------------------------------

export default function NotesScreen() {
  const { theme } = useTheme();
  const s = makeStyles(theme);
  const router = useRouter();

  const [view, setView] = useState<ViewState>({ screen: 'list' });
  const [refreshKey, setRefreshKey] = useState(0);

  // -- Navigation helpers ----------------------------------------------------

  const openNew = useCallback(() => {
    setView({ screen: 'editor' });
  }, []);

  const openEdit = useCallback((note: Note) => {
    setView({ screen: 'editor', note });
  }, []);

  const goBack = useCallback(() => {
    setView({ screen: 'list' });
  }, []);

  const handleSave = useCallback((_note: Note) => {
    setRefreshKey((k) => k + 1);
    setView({ screen: 'list' });
  }, []);

  // -- Editor ----------------------------------------------------------------

  if (view.screen === 'editor') {
    return (
      <SafeAreaView style={s.flex} edges={['top']}>
        <NoteEditor
          note={view.note}
          onSave={handleSave}
          onCancel={goBack}
        />
      </SafeAreaView>
    );
  }

  // -- List view -------------------------------------------------------------

  return (
    <SafeAreaView style={s.flex} edges={['top']}>
      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="arrow-back" size={24} color={theme.primary} />
        </TouchableOpacity>
      </View>

      <NotesList onEdit={openEdit} refreshKey={refreshKey} />

      {/* FAB */}
      <TouchableOpacity
        style={[s.fab, { backgroundColor: theme.primary }]}
        onPress={openNew}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel="Create new note"
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    flex: { flex: 1, backgroundColor: t.background },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 12,
    },
    fab: {
      position: 'absolute',
      right: 20,
      bottom: 28,
      width: 56,
      height: 56,
      borderRadius: 28,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 6,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
    },
  });
