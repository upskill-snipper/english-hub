import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme, type ColorTokens } from '../lib/theme';
import { studyCategories, type StudyCategory, type StudyTopic } from '../data/study-topics';
import { flashcards, getFlashcardsByCategory, type Flashcard } from '../data/flashcards';
import TopicCard from '../components/TopicCard';
import FlashcardDeck, { type DeckStats } from '../components/FlashcardDeck';
import SRFlashcardDeck, { type SRSessionStats } from '../components/SRFlashcardDeck';
import {
  getCardsDueToday,
  initializeCards,
} from '../lib/spaced-repetition';
import CelebrationModal from '../components/achievements/CelebrationModal';
import {
  loadUserStats,
  checkAchievements,
  saveUserStats,
} from '../lib/achievements';
import type { Achievement } from '../data/achievements';

// ---------------------------------------------------------------------------
// Board selector placeholder
// ---------------------------------------------------------------------------

const BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC / Eduqas', 'CCEA'] as const;
type Board = (typeof BOARDS)[number];

// ---------------------------------------------------------------------------
// SR constants
// ---------------------------------------------------------------------------

const SR_DECK_NAME = 'all-flashcards';

// ---------------------------------------------------------------------------
// View state machine: browse -> topic -> flashcards -> sr-review
// ---------------------------------------------------------------------------

type ViewState =
  | { screen: 'browse' }
  | { screen: 'topic'; topic: StudyTopic; category: StudyCategory }
  | { screen: 'flashcards'; topic: StudyTopic }
  | { screen: 'sr-review'; dueCards: Flashcard[] };

// ---------------------------------------------------------------------------
// Study screen
// ---------------------------------------------------------------------------

export default function StudyScreen() {
  const { theme } = useTheme();
  const s = makeStyles(theme);
  const router = useRouter();

  const [board, setBoard] = useState<Board | null>(null);
  const [showBoardPicker, setShowBoardPicker] = useState(false);
  const [view, setView] = useState<ViewState>({ screen: 'browse' });
  const [celebrationVisible, setCelebrationVisible] = useState(false);
  const [celebrationAchievement, setCelebrationAchievement] = useState<Achievement | null>(null);

  // -- Navigation helpers ---------------------------------------------------

  const goToBrowse = useCallback(() => setView({ screen: 'browse' }), []);

  const goToTopic = useCallback((topic: StudyTopic, category: StudyCategory) => {
    setView({ screen: 'topic', topic, category });
  }, []);

  const goToFlashcards = useCallback((topic: StudyTopic) => {
    setView({ screen: 'flashcards', topic });
  }, []);

  // "View full guide" is the founder's #1 broken-link complaint. Two issues
  // were stacked: (1) tapping the button used `Linking.openURL` so the user
  // bounced out of the app into Safari (jarring + breaks signed-in state),
  // (2) the URLs in `data/study-topics.ts` weren't always real website
  // routes, so even Safari hit a 404. Route through the in-app Hub WebView
  // instead — it shares the WebView's auth cookies, stays inside the app,
  // and the path-stripping helper in `learn.tsx` rejects malformed URLs.
  const openWebUrl = useCallback(
    (url: string) => {
      // Strip the origin if present and pass only the path to the Hub tab.
      const path = url.replace(/^https?:\/\/[^/]+/, '') || '/revision';
      router.push({ pathname: '/learn', params: { path } } as never);
    },
    [router],
  );

  // -- Smart Review (SR) state -----------------------------------------------

  const [srDueCount, setSrDueCount] = useState<number>(0);
  const [srInitialized, setSrInitialized] = useState(false);

  // Initialize SR state for all flashcards on mount, then count due cards
  useEffect(() => {
    let cancelled = false;
    (async () => {
      // Ensure every flashcard has an SR state entry
      const allIds = flashcards.map((c) => c.id);
      await initializeCards(SR_DECK_NAME, allIds);
      if (cancelled) return;
      setSrInitialized(true);

      const dueIds = await getCardsDueToday(SR_DECK_NAME);
      if (!cancelled) setSrDueCount(dueIds.length);
    })();
    return () => { cancelled = true; };
  }, []);

  // Refresh due count when returning to browse
  useEffect(() => {
    if (view.screen !== 'browse' || !srInitialized) return;
    let cancelled = false;
    (async () => {
      const dueIds = await getCardsDueToday(SR_DECK_NAME);
      if (!cancelled) setSrDueCount(dueIds.length);
    })();
    return () => { cancelled = true; };
  }, [view.screen, srInitialized]);

  const goToSmartReview = useCallback(async () => {
    const dueIds = await getCardsDueToday(SR_DECK_NAME);
    if (dueIds.length === 0) return;
    // Map due IDs back to full Flashcard objects
    const idSet = new Set(dueIds);
    const dueCards = flashcards.filter((c) => idSet.has(c.id));
    setView({ screen: 'sr-review', dueCards });
  }, []);

  // -- SR review deck ---------------------------------------------------------

  if (view.screen === 'sr-review') {
    return (
      <SafeAreaView style={s.flex} edges={['top']}>
        <SRFlashcardDeck
          cards={view.dueCards}
          deckName={SR_DECK_NAME}
          onComplete={(_stats: SRSessionStats) => {}}
          onClose={goToBrowse}
        />
      </SafeAreaView>
    );
  }

  // -- Flashcard deck -------------------------------------------------------

  if (view.screen === 'flashcards' && view.topic.flashcardCategory) {
    const cards = getFlashcardsByCategory(view.topic.flashcardCategory);
    return (
      <SafeAreaView style={s.flex} edges={['top']}>
        <FlashcardDeck
          cards={cards}
          onComplete={async (stats: DeckStats) => {
            const userStats = await loadUserStats();
            userStats.flashcardsReviewed += stats.total;
            userStats.hasCompletedDeck = true;
            await saveUserStats(userStats);
            const unlocked = await checkAchievements(userStats);
            if (unlocked.length > 0) {
              setCelebrationAchievement(unlocked[0]);
              setCelebrationVisible(true);
            }
          }}
          onClose={goToBrowse}
        />
        <CelebrationModal
          visible={celebrationVisible}
          achievement={celebrationAchievement}
          onDismiss={() => setCelebrationVisible(false)}
        />
      </SafeAreaView>
    );
  }

  // -- Topic detail ---------------------------------------------------------

  if (view.screen === 'topic') {
    const { topic, category } = view;
    return (
      <SafeAreaView style={s.flex} edges={['top']}>
        <ScrollView style={s.scrollContainer} contentContainerStyle={s.topicContent}>
          {/* Back button */}
          <TouchableOpacity style={s.backRow} onPress={goToBrowse}>
            <Ionicons name="arrow-back" size={22} color={theme.primary} />
            <Text style={[s.backText, { color: theme.primary }]}>Study</Text>
          </TouchableOpacity>

          {/* Icon + title */}
          <View style={[s.topicHeader, { borderColor: theme.cardBorder }]}>
            <View style={[s.topicIcon, { backgroundColor: category.color + '18' }]}>
              <Ionicons name={topic.icon as any} size={32} color={category.color} />
            </View>
            <Text style={s.topicTitle}>{topic.title}</Text>
            <Text style={s.topicDesc}>{topic.description}</Text>
          </View>

          {/* Summary */}
          <View style={s.summaryBox}>
            <Text style={s.summaryLabel}>Overview</Text>
            <Text style={s.summaryText}>{topic.summary}</Text>
          </View>

          {/* Action buttons */}
          <View style={s.actionButtons}>
            {topic.flashcardCategory && (
              <TouchableOpacity
                style={[s.primaryBtn, { backgroundColor: theme.primary }]}
                onPress={() => goToFlashcards(topic)}
              >
                <Ionicons name="albums-outline" size={20} color="#fff" />
                <Text style={s.primaryBtnText}>Start Flashcards</Text>
              </TouchableOpacity>
            )}

            {topic.hasQuiz && (
              <TouchableOpacity
                style={[s.secondaryBtn, { borderColor: theme.primary }]}
                onPress={() => router.push('/quiz' as never)}
              >
                <Ionicons name="help-circle-outline" size={20} color={theme.primary} />
                <Text style={[s.secondaryBtnText, { color: theme.primary }]}>Take Quiz</Text>
              </TouchableOpacity>
            )}

            {topic.webUrl && (
              <TouchableOpacity
                style={[s.outlineBtn, { borderColor: theme.border }]}
                onPress={() => openWebUrl(topic.webUrl!)}
              >
                <Ionicons name="open-outline" size={18} color={theme.textSecondary} />
                <Text style={[s.outlineBtnText, { color: theme.textSecondary }]}>
                  View full guide
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // -- Browse screen (categories + horizontal topic scrolls) ----------------

  return (
    <SafeAreaView style={s.flex} edges={['top']}>
      <ScrollView style={s.scrollContainer} contentContainerStyle={s.browseContent}>
        {/* Screen title */}
        <Text style={s.screenTitle}>Study</Text>

        {/* Board selector */}
        <TouchableOpacity
          style={s.boardSelector}
          onPress={() => setShowBoardPicker((b) => !b)}
        >
          <Ionicons name="school-outline" size={18} color={theme.primary} />
          <Text style={[s.boardLabel, { color: theme.primary }]}>
            {board ?? 'Select your exam board'}
          </Text>
          <Ionicons
            name={showBoardPicker ? 'chevron-up' : 'chevron-down'}
            size={16}
            color={theme.primary}
          />
        </TouchableOpacity>

        {showBoardPicker && (
          <View style={s.boardList}>
            {BOARDS.map((b) => (
              <TouchableOpacity
                key={b}
                style={[
                  s.boardOption,
                  board === b && { backgroundColor: theme.primary + '14' },
                ]}
                onPress={() => {
                  setBoard(b);
                  setShowBoardPicker(false);
                }}
              >
                <Text
                  style={[
                    s.boardOptionText,
                    { color: board === b ? theme.primary : theme.text },
                  ]}
                >
                  {b}
                </Text>
                {board === b && (
                  <Ionicons name="checkmark" size={18} color={theme.primary} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* My Notes card */}
        <TouchableOpacity
          style={s.notesCard}
          activeOpacity={0.7}
          onPress={() => router.push('/notes')}
          accessibilityRole="button"
          accessibilityLabel="Open My Notes"
        >
          <View style={[s.notesIconWrap, { backgroundColor: theme.primary + '14' }]}>
            <Ionicons name="document-text-outline" size={22} color={theme.primary} />
          </View>
          <View style={s.notesTextWrap}>
            <Text style={s.notesTitle}>My Notes</Text>
            <Text style={s.notesDesc}>Create and review your study notes</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.textTertiary} />
        </TouchableOpacity>

        {/* Smart Review */}
        {srDueCount > 0 && (
          <TouchableOpacity
            style={s.smartReviewCard}
            activeOpacity={0.7}
            onPress={goToSmartReview}
            accessibilityRole="button"
            accessibilityLabel={`Smart Review. ${srDueCount} cards due today. Tap to start.`}
          >
            <View style={[s.smartReviewIconWrap, { backgroundColor: theme.success + '18' }]}>
              <Ionicons name="sparkles" size={22} color={theme.success} />
            </View>
            <View style={s.smartReviewTextWrap}>
              <Text style={s.smartReviewTitle}>Smart Review</Text>
              <Text style={s.smartReviewDesc}>Spaced repetition for long-term memory</Text>
            </View>
            <View style={[s.smartReviewBadge, { backgroundColor: theme.success }]}>
              <Text style={s.smartReviewBadgeText}>{srDueCount}</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* Category sections */}
        {studyCategories.map((category) => (
          <View key={category.id} style={s.categorySection}>
            {/* Category header */}
            <View style={s.categoryHeader}>
              <View style={[s.categoryIconWrap, { backgroundColor: category.color + '18' }]}>
                <Ionicons name={category.icon as any} size={20} color={category.color} />
              </View>
              <Text style={s.categoryTitle}>{category.title}</Text>
            </View>

            {/* Horizontal scroll of topic cards */}
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={category.topics}
              keyExtractor={(item) => item.id}
              contentContainerStyle={s.topicScroll}
              renderItem={({ item }) => (
                <TopicCard
                  topic={item}
                  accentColor={category.color}
                  onPress={(t) => goToTopic(t, category)}
                />
              )}
            />
          </View>
        ))}

        {/* Bottom spacer for tab bar */}
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    flex: { flex: 1, backgroundColor: t.background },
    scrollContainer: { flex: 1, backgroundColor: t.background },

    // -- Browse --------------------------------------------------------------
    browseContent: { paddingBottom: 16 },
    screenTitle: {
      fontSize: 28,
      fontWeight: '800',
      color: t.text,
      paddingHorizontal: 20,
      paddingTop: 16,
      paddingBottom: 4,
    },

    // Board selector
    boardSelector: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginHorizontal: 20,
      marginTop: 8,
      marginBottom: 4,
      paddingVertical: 10,
      paddingHorizontal: 14,
      backgroundColor: t.primary + '0C',
      borderRadius: 10,
    },
    boardLabel: {
      flex: 1,
      fontSize: 14,
      fontWeight: '600',
    },
    boardList: {
      marginHorizontal: 20,
      marginBottom: 8,
      backgroundColor: t.card,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: t.cardBorder,
      overflow: 'hidden',
    },
    boardOption: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    boardOptionText: {
      fontSize: 15,
      fontWeight: '500',
    },

    // My Notes card
    notesCard: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 16,
      padding: 14,
      backgroundColor: t.card,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: t.cardBorder,
      gap: 12,
    },
    notesIconWrap: {
      width: 42,
      height: 42,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    notesTextWrap: {
      flex: 1,
    },
    notesTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
    },
    notesDesc: {
      fontSize: 13,
      color: t.textSecondary,
      marginTop: 1,
    },

    // Smart Review card
    smartReviewCard: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 12,
      padding: 14,
      backgroundColor: t.card,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: t.success + '30',
      gap: 12,
    },
    smartReviewIconWrap: {
      width: 42,
      height: 42,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    smartReviewTextWrap: {
      flex: 1,
    },
    smartReviewTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
    },
    smartReviewDesc: {
      fontSize: 13,
      color: t.textSecondary,
      marginTop: 1,
    },
    smartReviewBadge: {
      minWidth: 28,
      height: 28,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
    },
    smartReviewBadgeText: {
      color: '#fff',
      fontSize: 13,
      fontWeight: '800',
    },

    // Category sections
    categorySection: {
      marginTop: 20,
    },
    categoryHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingHorizontal: 20,
      marginBottom: 12,
    },
    categoryIconWrap: {
      width: 34,
      height: 34,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: t.text,
    },
    topicScroll: {
      paddingHorizontal: 20,
    },

    // -- Topic detail --------------------------------------------------------
    topicContent: { paddingBottom: 40 },
    backRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 8,
    },
    backText: {
      fontSize: 16,
      fontWeight: '600',
    },
    topicHeader: {
      alignItems: 'center',
      paddingVertical: 24,
      marginHorizontal: 20,
      borderBottomWidth: 1,
      marginBottom: 20,
    },
    topicIcon: {
      width: 64,
      height: 64,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14,
    },
    topicTitle: {
      fontSize: 24,
      fontWeight: '800',
      color: t.text,
      textAlign: 'center',
      marginBottom: 6,
    },
    topicDesc: {
      fontSize: 14,
      color: t.textSecondary,
      textAlign: 'center',
    },
    summaryBox: {
      marginHorizontal: 20,
      marginBottom: 24,
    },
    summaryLabel: {
      fontSize: 13,
      fontWeight: '700',
      color: t.textTertiary,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      marginBottom: 8,
    },
    summaryText: {
      fontSize: 15,
      color: t.text,
      lineHeight: 22,
    },
    actionButtons: {
      paddingHorizontal: 20,
      gap: 12,
    },
    primaryBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      paddingVertical: 14,
      borderRadius: 12,
    },
    primaryBtnText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '700',
    },
    secondaryBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      paddingVertical: 14,
      borderRadius: 12,
      borderWidth: 1.5,
    },
    secondaryBtnText: {
      fontSize: 16,
      fontWeight: '700',
    },
    outlineBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      paddingVertical: 12,
      borderRadius: 10,
      borderWidth: 1,
    },
    outlineBtnText: {
      fontSize: 14,
      fontWeight: '600',
    },
  });
