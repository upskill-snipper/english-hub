import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../lib/theme';
import QuoteMatcherGame from '../components/QuoteMatcherGame';
import WordBuilderGame from '../components/WordBuilderGame';

// ---------------------------------------------------------------------------
// Game catalogue
// ---------------------------------------------------------------------------

interface GameEntry {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string; // accent colour for the card
  tag: string;
}

const GAMES: GameEntry[] = [
  {
    id: 'quote-matcher',
    title: 'Quote Matcher',
    subtitle: 'Match famous quotes to their source text or author',
    icon: 'chatbubble-ellipses-outline',
    color: '#8b5cf6',
    tag: '10 rounds',
  },
  {
    id: 'word-builder',
    title: 'Word Builder',
    subtitle: 'Identify literary devices from their definitions',
    icon: 'construct-outline',
    color: '#f59e0b',
    tag: '15 questions',
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function StudyGamesHub() {
  const { theme } = useTheme();
  const [activeGame, setActiveGame] = useState<string | null>(null);

  // ---- Render active game ----
  if (activeGame === 'quote-matcher') {
    return <QuoteMatcherGame onBack={() => setActiveGame(null)} />;
  }
  if (activeGame === 'word-builder') {
    return <WordBuilderGame onBack={() => setActiveGame(null)} />;
  }

  // ---- Hub listing ----
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Ionicons name="game-controller-outline" size={26} color={theme.primary} />
        <Text style={[styles.headerTitle, { color: theme.text }]}>Study Games</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.intro, { color: theme.textSecondary }]}>
          Sharpen your English skills with quick, fun games. All content works offline and is
          aligned with GCSE & IGCSE syllabuses.
        </Text>

        {GAMES.map((g) => (
          <Pressable
            key={g.id}
            onPress={() => setActiveGame(g.id)}
            style={({ pressed }) => [
              styles.gameCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.cardBorder,
                transform: [{ scale: pressed ? 0.97 : 1 }],
              },
            ]}
          >
            {/* Accent strip */}
            <View style={[styles.accent, { backgroundColor: g.color }]} />

            <View style={styles.cardBody}>
              <View style={[styles.iconCircle, { backgroundColor: g.color + '18' }]}>
                <Ionicons name={g.icon} size={28} color={g.color} />
              </View>

              <View style={styles.cardText}>
                <Text style={[styles.cardTitle, { color: theme.text }]}>{g.title}</Text>
                <Text style={[styles.cardSub, { color: theme.textSecondary }]}>
                  {g.subtitle}
                </Text>
              </View>

              <View style={styles.cardRight}>
                <View style={[styles.tag, { backgroundColor: g.color + '18' }]}>
                  <Text style={[styles.tagText, { color: g.color }]}>{g.tag}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={theme.textTertiary} />
              </View>
            </View>
          </Pressable>
        ))}

        {/* Coming soon teaser */}
        <View
          style={[
            styles.gameCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.cardBorder,
              opacity: 0.5,
            },
          ]}
        >
          <View style={[styles.accent, { backgroundColor: theme.textTertiary }]} />
          <View style={styles.cardBody}>
            <View style={[styles.iconCircle, { backgroundColor: theme.textTertiary + '18' }]}>
              <Ionicons name="sparkles-outline" size={28} color={theme.textTertiary} />
            </View>
            <View style={styles.cardText}>
              <Text style={[styles.cardTitle, { color: theme.textTertiary }]}>
                More coming soon...
              </Text>
              <Text style={[styles.cardSub, { color: theme.textTertiary }]}>
                Timeline Dash, Spelling Bee, and more
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 14,
    borderBottomWidth: 0.5,
  },
  headerTitle: { fontSize: 22, fontWeight: '800' },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },
  intro: { fontSize: 14, lineHeight: 21, marginBottom: 20 },

  // Game card
  gameCard: {
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 14,
    overflow: 'hidden',
  },
  accent: { height: 4, width: '100%' },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 12,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: 3 },
  cardSub: { fontSize: 13, lineHeight: 18 },
  cardRight: { alignItems: 'flex-end', gap: 6 },
  tag: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  tagText: { fontSize: 11, fontWeight: '700' },
});
