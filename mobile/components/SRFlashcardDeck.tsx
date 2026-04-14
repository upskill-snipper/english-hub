import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';
import type { Flashcard } from '../data/flashcards';
import { ReviewRating, type SRCardState } from '../data/sr-card-state';
import { reviewCard } from '../lib/spaced-repetition';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SRFlashcardDeckProps {
  /** Cards due for review today. */
  cards: Flashcard[];
  /** Deck name used as the SR storage key. */
  deckName: string;
  /** Called when all cards have been reviewed. */
  onComplete: (stats: SRSessionStats) => void;
  /** Called when the user closes the deck. */
  onClose: () => void;
}

export interface SRSessionStats {
  total: number;
  mastered: number;   // interval > 21 days after review
  learning: number;   // interval <= 21 days after review
  again: number;      // rated Again
}

// ---------------------------------------------------------------------------
// Rating button config
// ---------------------------------------------------------------------------

type RatingOption = {
  rating: ReviewRating;
  label: string;
  icon: string;
  colorKey: 'error' | 'warning' | 'primary' | 'success';
};

const RATING_OPTIONS: RatingOption[] = [
  { rating: ReviewRating.Again, label: 'Again', icon: 'refresh', colorKey: 'error' },
  { rating: ReviewRating.Hard, label: 'Hard', icon: 'flame-outline', colorKey: 'warning' },
  { rating: ReviewRating.Good, label: 'Good', icon: 'thumbs-up-outline', colorKey: 'primary' },
  { rating: ReviewRating.Easy, label: 'Easy', icon: 'flash-outline', colorKey: 'success' },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Format an interval in days to a human-readable hint. */
function formatInterval(days: number): string {
  if (days < 1) return '<1d';
  if (days === 1) return '1d';
  if (days < 7) return `${days}d`;
  if (days < 30) {
    const weeks = Math.round(days / 7);
    return weeks === 1 ? '1w' : `${weeks}w`;
  }
  const months = Math.round(days / 30);
  return months === 1 ? '1mo' : `${months}mo`;
}

/**
 * Estimate the next interval for each rating so we can show hints
 * before the user taps. This is a lightweight mirror of the SR algorithm.
 */
function estimateIntervals(card: { easeFactor: number; interval: number; repetitions: number }): Record<ReviewRating, number> {
  const ef = card.easeFactor;
  const base =
    card.repetitions === 0 ? 1 :
    card.repetitions === 1 ? 6 :
    card.interval;

  return {
    [ReviewRating.Again]: 1,
    [ReviewRating.Hard]: Math.max(1, Math.round(base * 1.2)),
    [ReviewRating.Good]: Math.max(1, Math.round(base * ef)),
    [ReviewRating.Easy]: Math.max(1, Math.round(base * ef * 1.3)),
  };
}

// ---------------------------------------------------------------------------
// Card Face
// ---------------------------------------------------------------------------

function CardFace({
  text,
  isFront,
  theme,
}: {
  text: string;
  isFront: boolean;
  theme: ColorTokens;
}) {
  return (
    <View style={[styles.cardInner, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
      {isFront && (
        <Ionicons
          name="help-circle-outline"
          size={20}
          color={theme.textTertiary}
          style={{ position: 'absolute', top: 14, right: 14 }}
        />
      )}
      {!isFront && (
        <Ionicons
          name="bulb-outline"
          size={20}
          color={theme.warning}
          style={{ position: 'absolute', top: 14, right: 14 }}
        />
      )}
      <Text
        style={[
          styles.cardText,
          {
            color: theme.text,
            fontSize: isFront ? 18 : 15,
            fontWeight: isFront ? '700' : '500',
          },
        ]}
      >
        {text}
      </Text>
      {isFront && (
        <Text style={[styles.tapHint, { color: theme.textTertiary }]}>Tap to flip</Text>
      )}
    </View>
  );
}

// ---------------------------------------------------------------------------
// SRFlashcardDeck
// ---------------------------------------------------------------------------

export default function SRFlashcardDeck({
  cards,
  deckName,
  onComplete,
  onClose,
}: SRFlashcardDeckProps) {
  const { theme } = useTheme();

  // Shuffle cards once
  const deck = useMemo(() => {
    const copy = [...cards];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [cards]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [finished, setFinished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track session stats
  const [mastered, setMastered] = useState(0);
  const [learning, setLearning] = useState(0);
  const [again, setAgain] = useState(0);

  // Per-card SR state for interval estimation (loaded on mount)
  const [cardStates, setCardStates] = useState<Record<string, { easeFactor: number; interval: number; repetitions: number }>>({});

  // Flip animation
  const flipAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const ratingFadeAnim = useRef(new Animated.Value(0)).current;

  // Animate flip
  const doFlip = useCallback(() => {
    setFlipped(true);
    Animated.spring(flipAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 8,
      tension: 60,
    }).start();
    // Fade in rating buttons
    Animated.timing(ratingFadeAnim, {
      toValue: 1,
      duration: 300,
      delay: 150,
      useNativeDriver: true,
    }).start();
  }, [flipAnim, ratingFadeAnim]);

  // Reset animations for next card
  const resetAnims = useCallback(() => {
    flipAnim.setValue(0);
    slideAnim.setValue(0);
    ratingFadeAnim.setValue(0);
  }, [flipAnim, slideAnim, ratingFadeAnim]);

  // Handle rating
  const handleRating = useCallback(
    async (rating: ReviewRating) => {
      if (isSubmitting) return;
      setIsSubmitting(true);

      const card = deck[currentIndex];

      // Animate card sliding out
      Animated.timing(slideAnim, {
        toValue: -SCREEN_WIDTH - 100,
        duration: 250,
        useNativeDriver: true,
      }).start(async () => {
        try {
          const updated: SRCardState = await reviewCard(deckName, card.id, rating);

          // Track stats
          if (rating === ReviewRating.Again) {
            setAgain((a) => a + 1);
          } else if (updated.interval > 21) {
            setMastered((m) => m + 1);
          } else {
            setLearning((l) => l + 1);
          }

          const nextIndex = currentIndex + 1;
          if (nextIndex >= deck.length) {
            setFinished(true);
            onComplete({
              total: deck.length,
              mastered: mastered + (rating !== ReviewRating.Again && updated.interval > 21 ? 1 : 0),
              learning: learning + (rating !== ReviewRating.Again && updated.interval <= 21 ? 1 : 0),
              again: again + (rating === ReviewRating.Again ? 1 : 0),
            });
          } else {
            resetAnims();
            setCurrentIndex(nextIndex);
            setFlipped(false);
          }
        } catch {
          // If SR write fails, still advance
          const nextIndex = currentIndex + 1;
          if (nextIndex >= deck.length) {
            setFinished(true);
          } else {
            resetAnims();
            setCurrentIndex(nextIndex);
            setFlipped(false);
          }
        } finally {
          setIsSubmitting(false);
        }
      });
    },
    [
      isSubmitting, deck, currentIndex, deckName,
      slideAnim, resetAnims, mastered, learning, again,
      onComplete,
    ],
  );

  // Get current card's estimated intervals
  const currentCard = deck[currentIndex];
  const estimates = useMemo(() => {
    const state = cardStates[currentCard?.id] ?? {
      easeFactor: 2.5,
      interval: 0,
      repetitions: 0,
    };
    return estimateIntervals(state);
  }, [cardStates, currentCard]);

  // Card flip interpolation
  const frontScale = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.95, 1],
  });

  // ---------------------------------------------------------------------------
  // End screen
  // ---------------------------------------------------------------------------

  if (finished) {
    const total = deck.length;
    const pctMastered = total > 0 ? Math.round((mastered / total) * 100) : 0;
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Ionicons name="close" size={28} color={theme.text} />
        </TouchableOpacity>

        <View style={styles.endScreen}>
          <Ionicons
            name={pctMastered >= 50 ? 'trophy' : 'ribbon'}
            size={64}
            color={pctMastered >= 50 ? '#d97706' : theme.primary}
          />
          <Text style={[styles.endTitle, { color: theme.text }]}>Review Complete!</Text>
          <Text style={[styles.endSubtitle, { color: theme.textSecondary }]}>
            {total} {total === 1 ? 'card' : 'cards'} reviewed
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.statBlock}>
              <Text style={[styles.statNumber, { color: theme.success }]}>{mastered}</Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Mastered</Text>
            </View>
            <View style={styles.statBlock}>
              <Text style={[styles.statNumber, { color: theme.primary }]}>{learning}</Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Learning</Text>
            </View>
            <View style={styles.statBlock}>
              <Text style={[styles.statNumber, { color: theme.error }]}>{again}</Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Again</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.endBtn, { backgroundColor: theme.primary }]}
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Done"
          >
            <Text style={styles.endBtnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // ---------------------------------------------------------------------------
  // Active review
  // ---------------------------------------------------------------------------

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onClose}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          accessibilityRole="button"
          accessibilityLabel="Close review"
        >
          <Ionicons name="close" size={26} color={theme.text} />
        </TouchableOpacity>
        <Text
          style={[styles.counter, { color: theme.textSecondary }]}
          accessibilityLabel={`Card ${currentIndex + 1} of ${deck.length} due today`}
        >
          Card {currentIndex + 1} of {deck.length} due today
        </Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Progress bar */}
      <View style={[styles.progressTrack, { backgroundColor: theme.border }]}>
        <View
          style={[
            styles.progressFill,
            {
              backgroundColor: theme.primary,
              width: `${((currentIndex + 1) / deck.length) * 100}%`,
            },
          ]}
        />
      </View>

      {/* Card */}
      <View style={styles.cardArea}>
        <Animated.View
          style={[
            styles.cardOuter,
            {
              transform: [
                { translateX: slideAnim },
                { scale: frontScale },
              ],
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => {
              if (!flipped) doFlip();
            }}
            disabled={flipped}
            accessibilityRole="button"
            accessibilityLabel={
              flipped
                ? `Answer: ${currentCard.back}. Choose a rating below.`
                : `Question: ${currentCard.front}. Tap to reveal answer.`
            }
          >
            <CardFace
              text={flipped ? currentCard.back : currentCard.front}
              isFront={!flipped}
              theme={theme}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Rating buttons — shown after flip */}
      {flipped ? (
        <Animated.View style={[styles.ratingRow, { opacity: ratingFadeAnim }]}>
          {RATING_OPTIONS.map((opt) => {
            const color = theme[opt.colorKey];
            const intervalHint = formatInterval(estimates[opt.rating]);
            return (
              <TouchableOpacity
                key={opt.rating}
                style={[
                  styles.ratingBtn,
                  { backgroundColor: color + '14', borderColor: color + '40' },
                ]}
                onPress={() => handleRating(opt.rating)}
                disabled={isSubmitting}
                accessibilityRole="button"
                accessibilityLabel={`${opt.label}, next review in ${intervalHint}`}
              >
                <Ionicons name={opt.icon as any} size={20} color={color} />
                <Text style={[styles.ratingLabel, { color }]}>{opt.label}</Text>
                <Text style={[styles.ratingHint, { color: color + 'AA' }]}>{intervalHint}</Text>
              </TouchableOpacity>
            );
          })}
        </Animated.View>
      ) : (
        <View style={styles.ratingPlaceholder}>
          <Text style={[styles.flipPrompt, { color: theme.textTertiary }]}>
            Tap the card to reveal the answer
          </Text>
        </View>
      )}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
    padding: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  counter: {
    fontSize: 14,
    fontWeight: '600',
  },
  progressTrack: {
    height: 4,
    borderRadius: 2,
    marginHorizontal: 20,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  cardArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  cardOuter: {
    width: '100%',
  },
  cardInner: {
    width: '100%',
    minHeight: 300,
    borderRadius: 18,
    borderWidth: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  cardText: {
    textAlign: 'center',
    lineHeight: 24,
  },
  tapHint: {
    position: 'absolute',
    bottom: 16,
    fontSize: 12,
    fontWeight: '500',
  },
  // Rating row
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingBottom: 32,
    paddingTop: 12,
  },
  ratingBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    minWidth: 72,
    minHeight: 44,
  },
  ratingLabel: {
    fontSize: 13,
    fontWeight: '700',
  },
  ratingHint: {
    fontSize: 11,
    fontWeight: '600',
  },
  ratingPlaceholder: {
    paddingBottom: 32,
    paddingTop: 12,
    alignItems: 'center',
    minHeight: 90,
    justifyContent: 'center',
  },
  flipPrompt: {
    fontSize: 14,
    fontWeight: '500',
  },
  // End screen
  endScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  endTitle: {
    fontSize: 26,
    fontWeight: '800',
    marginTop: 16,
    marginBottom: 6,
  },
  endSubtitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 28,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 28,
    marginBottom: 36,
  },
  statBlock: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '800',
  },
  statLabel: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 2,
  },
  endBtn: {
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
  },
  endBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
