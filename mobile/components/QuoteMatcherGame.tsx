import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import { QUOTE_MATCHES, type QuoteMatch } from '../data/game-data';

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

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ROUNDS = 10;
const PAIRS_PER_ROUND = 4;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface MatchState {
  pairs: QuoteMatch[];
  quotes: string[];
  sources: string[];
  matched: Set<number>; // indices into `pairs`
  selectedQuote: number | null; // index in quotes[]
  wrongSource: number | null; // flash index in sources[]
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function QuoteMatcherGame({ onBack }: { onBack: () => void }) {
  const { theme } = useTheme();

  // ---- Game-level state ----
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ---- Round-level state ----
  const [state, setState] = useState<MatchState>(() => buildRound());

  // ---- Animations ----
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const glowAnims = useRef<Animated.Value[]>(
    Array.from({ length: PAIRS_PER_ROUND }, () => new Animated.Value(0)),
  ).current;

  // ---- Timer ----
  useEffect(() => {
    timerRef.current = setInterval(() => setTotalTime((t) => t + 1), 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // ---- Build a round ----
  function buildRound(): MatchState {
    const pairs = pickRandom(QUOTE_MATCHES, PAIRS_PER_ROUND);
    return {
      pairs,
      quotes: shuffle(pairs.map((p) => p.quote)),
      sources: shuffle(pairs.map((p) => p.source)),
      matched: new Set(),
      selectedQuote: null,
      wrongSource: null,
    };
  }

  // ---- Advance round ----
  const nextRound = useCallback(() => {
    if (round >= ROUNDS) {
      setFinished(true);
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    setRound((r) => r + 1);
    // Reset glow anims
    glowAnims.forEach((a) => a.setValue(0));
    setState(buildRound());
  }, [round, glowAnims]);

  // ---- Glow animation ----
  const playGlow = (pairIdx: number) => {
    Animated.sequence([
      Animated.timing(glowAnims[pairIdx], {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(glowAnims[pairIdx], {
        toValue: 0.4,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  // ---- Shake animation ----
  const playShake = () => {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 8, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -8, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  // ---- Tap handlers ----
  const tapQuote = (idx: number) => {
    // Don't allow selecting already-matched quotes
    const quote = state.quotes[idx];
    const pairIdx = state.pairs.findIndex((p) => p.quote === quote);
    if (state.matched.has(pairIdx)) return;

    Haptics.selectionAsync().catch(() => {});
    setState((s) => ({ ...s, selectedQuote: idx, wrongSource: null }));
  };

  const tapSource = (idx: number) => {
    if (state.selectedQuote === null) return;

    const selectedQuoteText = state.quotes[state.selectedQuote];
    const tappedSource = state.sources[idx];

    // Find the pair for the selected quote
    const pairIdx = state.pairs.findIndex((p) => p.quote === selectedQuoteText);
    const isCorrect = state.pairs[pairIdx].source === tappedSource;

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      const newMatched = new Set(state.matched);
      newMatched.add(pairIdx);
      setScore((s) => s + 1);
      playGlow(pairIdx);

      setState((s) => ({
        ...s,
        matched: newMatched,
        selectedQuote: null,
        wrongSource: null,
      }));

      // All matched? advance
      if (newMatched.size === PAIRS_PER_ROUND) {
        setTimeout(nextRound, 800);
      }
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      playShake();
      setState((s) => ({ ...s, wrongSource: idx }));
      setTimeout(() => setState((s) => ({ ...s, wrongSource: null })), 600);
    }
  };

  // ---- Format time ----
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  // ---- Determine if a quote/source is part of a matched pair ----
  const isQuoteMatched = (quoteIdx: number) => {
    const q = state.quotes[quoteIdx];
    const pi = state.pairs.findIndex((p) => p.quote === q);
    return state.matched.has(pi);
  };
  const isSourceMatched = (sourceIdx: number) => {
    const s = state.sources[sourceIdx];
    const pi = state.pairs.findIndex((p) => p.source === s);
    return state.matched.has(pi);
  };

  // ---- Finished screen ----
  if (finished) {
    const pct = Math.round((score / (ROUNDS * PAIRS_PER_ROUND)) * 100);
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.finishedCard}>
          <Ionicons
            name={pct >= 70 ? 'trophy' : 'ribbon'}
            size={64}
            color={pct >= 70 ? '#f59e0b' : theme.primary}
          />
          <Text style={[styles.finishedTitle, { color: theme.text }]}>Game Over!</Text>
          <Text style={[styles.finishedStat, { color: theme.textSecondary }]}>
            Score: {score}/{ROUNDS * PAIRS_PER_ROUND}  ({pct}%)
          </Text>
          <Text style={[styles.finishedStat, { color: theme.textSecondary }]}>
            Time: {formatTime(totalTime)}
          </Text>

          <View style={styles.finishedButtons}>
            <Pressable
              style={[styles.btn, { backgroundColor: theme.primary }]}
              onPress={() => {
                setRound(1);
                setScore(0);
                setTotalTime(0);
                setFinished(false);
                glowAnims.forEach((a) => a.setValue(0));
                setState(buildRound());
                timerRef.current = setInterval(() => setTotalTime((t) => t + 1), 1000);
              }}
            >
              <Ionicons name="refresh" size={18} color="#fff" />
              <Text style={styles.btnText}>Play Again</Text>
            </Pressable>
            <Pressable
              style={[styles.btn, { backgroundColor: theme.card, borderWidth: 1, borderColor: theme.border }]}
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
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable onPress={onBack} hitSlop={12}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Quote Matcher</Text>
        <View style={styles.headerRight}>
          <Text style={[styles.headerStat, { color: theme.primary }]}>
            {formatTime(totalTime)}
          </Text>
        </View>
      </View>

      {/* Progress */}
      <View style={styles.progressRow}>
        <Text style={[styles.roundLabel, { color: theme.textSecondary }]}>
          Round {round}/{ROUNDS}
        </Text>
        <Text style={[styles.scoreLabel, { color: theme.success }]}>
          Score: {score}
        </Text>
      </View>

      <Text style={[styles.instruction, { color: theme.textTertiary }]}>
        Tap a quote, then tap its source to match
      </Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
          {/* Quotes */}
          <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>QUOTES</Text>
          {state.quotes.map((q, i) => {
            const matched = isQuoteMatched(i);
            const selected = state.selectedQuote === i;
            return (
              <Pressable
                key={`q-${i}`}
                onPress={() => tapQuote(i)}
                style={[
                  styles.card,
                  {
                    backgroundColor: matched
                      ? theme.success + '18'
                      : selected
                        ? theme.primary + '22'
                        : theme.card,
                    borderColor: matched
                      ? theme.success
                      : selected
                        ? theme.primary
                        : theme.cardBorder,
                    opacity: matched ? 0.6 : 1,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.cardText,
                    {
                      color: matched ? theme.success : theme.text,
                      fontStyle: 'italic',
                    },
                  ]}
                >
                  "{q}"
                </Text>
                {matched && (
                  <Ionicons name="checkmark-circle" size={20} color={theme.success} />
                )}
              </Pressable>
            );
          })}

          {/* Sources */}
          <Text style={[styles.sectionLabel, { color: theme.textSecondary, marginTop: 20 }]}>
            SOURCES
          </Text>
          {state.sources.map((s, i) => {
            const matched = isSourceMatched(i);
            const isWrong = state.wrongSource === i;
            return (
              <Pressable
                key={`s-${i}`}
                onPress={() => tapSource(i)}
                style={[
                  styles.card,
                  {
                    backgroundColor: matched
                      ? theme.success + '18'
                      : isWrong
                        ? theme.error + '22'
                        : theme.card,
                    borderColor: matched
                      ? theme.success
                      : isWrong
                        ? theme.error
                        : theme.cardBorder,
                    opacity: matched ? 0.6 : 1,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.cardText,
                    { color: matched ? theme.success : isWrong ? theme.error : theme.text },
                  ]}
                >
                  {s}
                </Text>
                {matched && (
                  <Ionicons name="checkmark-circle" size={20} color={theme.success} />
                )}
              </Pressable>
            );
          })}
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
  headerRight: { flexDirection: 'row', gap: 12 },
  headerStat: { fontSize: 15, fontWeight: '600' },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  roundLabel: { fontSize: 14, fontWeight: '600' },
  scoreLabel: { fontSize: 14, fontWeight: '700' },
  instruction: { fontSize: 13, textAlign: 'center', marginTop: 4, marginBottom: 8 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 40 },
  sectionLabel: { fontSize: 12, fontWeight: '700', letterSpacing: 1, marginBottom: 8 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    marginBottom: 8,
  },
  cardText: { fontSize: 14, flex: 1, lineHeight: 20 },
  // Finished screen
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
