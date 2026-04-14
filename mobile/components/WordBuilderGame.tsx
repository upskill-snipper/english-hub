import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../lib/theme';
import { VOCAB_ITEMS, type VocabItem } from '../data/game-data';

// ---------------------------------------------------------------------------
// Utility helpers
// ---------------------------------------------------------------------------

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandom<T>(array: readonly T[], n: number): T[] {
  return shuffle([...array]).slice(0, n);
}

// Map VocabItem to the shape expected by the game UI
type DeviceQuestion = { answer: string; definition: string; category: string };

const literaryDevices: DeviceQuestion[] = VOCAB_ITEMS.map((v) => ({
  answer: v.term,
  definition: v.definition,
  category: v.difficulty,
}));

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const QUESTIONS_PER_ROUND = 15;
const OPTIONS_COUNT = 4;
const STREAK_BONUS_THRESHOLD = 3; // bonus kicks in after 3 consecutive correct

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Build an array of option labels for a question (correct + 3 distractors). */
function buildOptions(correct: DeviceQuestion, allDevices: DeviceQuestion[]): string[] {
  const distractors = allDevices
    .filter((d) => d.answer !== correct.answer)
    .map((d) => d.answer);
  const picked = pickRandom(distractors, OPTIONS_COUNT - 1);
  return shuffle([correct.answer, ...picked]);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function WordBuilderGame({ onBack }: { onBack: () => void }) {
  const { theme } = useTheme();

  // ---- Game state ----
  const [questions] = useState<DeviceQuestion[]>(() =>
    pickRandom(literaryDevices, QUESTIONS_PER_ROUND),
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [finished, setFinished] = useState(false);

  // Per-question UI state
  const [options, setOptions] = useState<string[]>(() =>
    buildOptions(questions[0], literaryDevices),
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  // Animations
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const streakPulse = useRef(new Animated.Value(1)).current;

  // ---- When question changes, rebuild options ----
  useEffect(() => {
    if (currentIdx < questions.length) {
      setOptions(buildOptions(questions[currentIdx], literaryDevices));
      setSelected(null);
      setRevealed(false);
      // fade in
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [currentIdx, questions, fadeAnim]);

  // ---- Streak pulse ----
  const pulseStreak = () => {
    scaleAnim.setValue(1);
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.25, duration: 150, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();
  };

  // ---- Select an option ----
  const handleSelect = useCallback(
    (option: string) => {
      if (revealed) return;
      const correct = questions[currentIdx].answer;
      const isCorrect = option === correct;

      setSelected(option);
      setRevealed(true);

      if (isCorrect) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        const newStreak = streak + 1;
        setStreak(newStreak);
        if (newStreak > bestStreak) setBestStreak(newStreak);

        // Score: 10 base + streak bonus
        const bonus = newStreak >= STREAK_BONUS_THRESHOLD ? (newStreak - STREAK_BONUS_THRESHOLD + 1) * 5 : 0;
        setScore((s) => s + 10 + bonus);

        if (newStreak >= STREAK_BONUS_THRESHOLD) pulseStreak();
      } else {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
        setStreak(0);
      }

      // Auto-advance after delay
      setTimeout(() => {
        if (currentIdx + 1 >= QUESTIONS_PER_ROUND) {
          setFinished(true);
        } else {
          setCurrentIdx((i) => i + 1);
        }
      }, 1200);
    },
    [revealed, questions, currentIdx, streak, bestStreak],
  );

  // ---- Option color logic ----
  const optionStyle = (option: string) => {
    if (!revealed) {
      return {
        bg: theme.card,
        border: theme.cardBorder,
        text: theme.text,
      };
    }
    const correct = questions[currentIdx].answer;
    if (option === correct) {
      return {
        bg: theme.success + '20',
        border: theme.success,
        text: theme.success,
      };
    }
    if (option === selected) {
      return {
        bg: theme.error + '20',
        border: theme.error,
        text: theme.error,
      };
    }
    return {
      bg: theme.card,
      border: theme.cardBorder,
      text: theme.textTertiary,
    };
  };

  // ---- Progress bar ----
  const progress = currentIdx / QUESTIONS_PER_ROUND;

  // ---- Finished screen ----
  if (finished) {
    const maxPossible = QUESTIONS_PER_ROUND * 10 + 50; // rough max with streak bonuses
    const pct = Math.min(100, Math.round((score / (QUESTIONS_PER_ROUND * 10)) * 100));
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.finishedCard}>
          <Ionicons
            name={pct >= 70 ? 'sparkles' : 'bulb'}
            size={64}
            color={pct >= 70 ? '#f59e0b' : theme.primary}
          />
          <Text style={[styles.finishedTitle, { color: theme.text }]}>Well Done!</Text>
          <Text style={[styles.finishedStat, { color: theme.textSecondary }]}>
            Score: {score} points
          </Text>
          <Text style={[styles.finishedStat, { color: theme.textSecondary }]}>
            Best streak: {bestStreak} in a row
          </Text>
          <Text style={[styles.finishedStat, { color: theme.textSecondary }]}>
            Accuracy: {pct}%
          </Text>

          <View style={styles.finishedButtons}>
            <Pressable
              style={[styles.btn, { backgroundColor: theme.primary }]}
              onPress={() => {
                setCurrentIdx(0);
                setScore(0);
                setStreak(0);
                setBestStreak(0);
                setFinished(false);
              }}
            >
              <Ionicons name="refresh" size={18} color="#fff" />
              <Text style={styles.btnText}>Play Again</Text>
            </Pressable>
            <Pressable
              style={[
                styles.btn,
                { backgroundColor: theme.card, borderWidth: 1, borderColor: theme.border },
              ]}
              onPress={onBack}
            >
              <Text style={[styles.btnText, { color: theme.text }]}>Back to Games</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  // ---- Main game UI ----
  const q = questions[currentIdx];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable onPress={onBack} hitSlop={12}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Word Builder</Text>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Text style={[styles.headerStat, { color: theme.primary }]}>
            {score} pts
          </Text>
        </Animated.View>
      </View>

      {/* Progress bar */}
      <View style={[styles.progressBar, { backgroundColor: theme.border }]}>
        <View
          style={[
            styles.progressFill,
            { backgroundColor: theme.primary, width: `${progress * 100}%` },
          ]}
        />
      </View>

      {/* Streak indicator */}
      {streak >= STREAK_BONUS_THRESHOLD && (
        <View style={[styles.streakBanner, { backgroundColor: '#f59e0b' + '20' }]}>
          <Ionicons name="flame" size={18} color="#f59e0b" />
          <Text style={[styles.streakText, { color: '#f59e0b' }]}>
            {streak} streak! +{(streak - STREAK_BONUS_THRESHOLD + 1) * 5} bonus
          </Text>
        </View>
      )}

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Question counter */}
          <Text style={[styles.counter, { color: theme.textTertiary }]}>
            {currentIdx + 1} of {QUESTIONS_PER_ROUND}
          </Text>

          {/* Category badge */}
          <View style={[styles.badge, { backgroundColor: theme.primary + '18' }]}>
            <Text style={[styles.badgeText, { color: theme.primary }]}>
              {q.category.toUpperCase()}
            </Text>
          </View>

          {/* Definition */}
          <View style={[styles.defCard, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
            <Ionicons name="help-circle-outline" size={22} color={theme.primary} />
            <Text style={[styles.defText, { color: theme.text }]}>{q.definition}</Text>
          </View>

          {/* Options */}
          <Text style={[styles.optionLabel, { color: theme.textSecondary }]}>
            What literary device is this?
          </Text>
          {options.map((opt, i) => {
            const os = optionStyle(opt);
            const isCorrectRevealed = revealed && opt === q.answer;
            const isWrongSelected = revealed && opt === selected && opt !== q.answer;
            return (
              <Pressable
                key={`${currentIdx}-${i}`}
                onPress={() => handleSelect(opt)}
                disabled={revealed}
                style={[
                  styles.optionCard,
                  {
                    backgroundColor: os.bg,
                    borderColor: os.border,
                  },
                ]}
              >
                <Text style={[styles.optionText, { color: os.text }]}>{opt}</Text>
                {isCorrectRevealed && (
                  <Ionicons name="checkmark-circle" size={22} color={theme.success} />
                )}
                {isWrongSelected && (
                  <Ionicons name="close-circle" size={22} color={theme.error} />
                )}
              </Pressable>
            );
          })}

          {/* Feedback message */}
          {revealed && (
            <Text
              style={[
                styles.feedback,
                {
                  color: selected === q.answer ? theme.success : theme.error,
                },
              ]}
            >
              {selected === q.answer
                ? streak >= STREAK_BONUS_THRESHOLD
                  ? 'Brilliant! Streak bonus!'
                  : 'Correct!'
                : `It was: ${q.answer}`}
            </Text>
          )}
        </Animated.View>
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
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
  },
  headerTitle: { fontSize: 18, fontWeight: '700', marginLeft: 12, flex: 1 },
  headerStat: { fontSize: 16, fontWeight: '700' },
  progressBar: { height: 3, width: '100%' },
  progressFill: { height: 3, borderRadius: 2 },
  streakBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 6,
  },
  streakText: { fontSize: 13, fontWeight: '700' },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },
  counter: { fontSize: 13, textAlign: 'center', marginBottom: 8 },
  badge: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    marginBottom: 16,
  },
  badgeText: { fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  defCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 24,
  },
  defText: { fontSize: 17, lineHeight: 25, flex: 1 },
  optionLabel: { fontSize: 13, fontWeight: '600', marginBottom: 10 },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    marginBottom: 10,
  },
  optionText: { fontSize: 15, fontWeight: '600' },
  feedback: { fontSize: 15, fontWeight: '700', textAlign: 'center', marginTop: 16 },
  // Finished
  finishedCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 12,
  },
  finishedTitle: { fontSize: 28, fontWeight: '800' },
  finishedStat: { fontSize: 17 },
  finishedButtons: { marginTop: 24, gap: 12, width: '100%' },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 12,
  },
  btnText: { fontSize: 16, fontWeight: '600', color: '#fff' },
});
