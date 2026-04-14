import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';
import type { Flashcard } from '../data/flashcards';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;
const SWIPE_OUT_DURATION = 250;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FlashcardDeckProps {
  cards: Flashcard[];
  onComplete: (stats: DeckStats) => void;
  onClose: () => void;
}

export interface DeckStats {
  total: number;
  gotIt: number;
  reviewAgain: number;
}

// ---------------------------------------------------------------------------
// Single card (tap to flip)
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
// FlashcardDeck
// ---------------------------------------------------------------------------

export default function FlashcardDeck({ cards, onComplete, onClose }: FlashcardDeckProps) {
  const { theme } = useTheme();

  // Shuffled deck
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
  const [gotIt, setGotIt] = useState(0);
  const [reviewAgain, setReviewAgain] = useState(0);
  const [finished, setFinished] = useState(false);

  // Swipe animation
  const position = useRef(new Animated.ValueXY()).current;

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-8deg', '0deg', '8deg'],
    extrapolate: 'clamp',
  });

  const rightLabelOpacity = position.x.interpolate({
    inputRange: [0, SWIPE_THRESHOLD],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const leftLabelOpacity = position.x.interpolate({
    inputRange: [-SWIPE_THRESHOLD, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const advanceCard = useCallback(
    (direction: 'right' | 'left') => {
      if (direction === 'right') {
        setGotIt((g) => g + 1);
      } else {
        setReviewAgain((r) => r + 1);
      }

      const nextIndex = currentIndex + 1;
      if (nextIndex >= deck.length) {
        setFinished(true);
        onComplete({
          total: deck.length,
          gotIt: gotIt + (direction === 'right' ? 1 : 0),
          reviewAgain: reviewAgain + (direction === 'left' ? 1 : 0),
        });
      } else {
        setCurrentIndex(nextIndex);
        setFlipped(false);
      }
    },
    [currentIndex, deck.length, gotIt, reviewAgain, onComplete],
  );

  const swipeOut = useCallback(
    (direction: 'right' | 'left') => {
      const toX = direction === 'right' ? SCREEN_WIDTH + 100 : -SCREEN_WIDTH - 100;
      Animated.timing(position, {
        toValue: { x: toX, y: 0 },
        duration: SWIPE_OUT_DURATION,
        useNativeDriver: false,
      }).start(() => {
        position.setValue({ x: 0, y: 0 });
        advanceCard(direction);
      });
    },
    [position, advanceCard],
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (_, gesture) =>
          Math.abs(gesture.dx) > 10 && Math.abs(gesture.dx) > Math.abs(gesture.dy),
        onPanResponderMove: (_, gesture) => {
          position.setValue({ x: gesture.dx, y: 0 });
        },
        onPanResponderRelease: (_, gesture) => {
          if (gesture.dx > SWIPE_THRESHOLD) {
            swipeOut('right');
          } else if (gesture.dx < -SWIPE_THRESHOLD) {
            swipeOut('left');
          } else {
            Animated.spring(position, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: false,
              friction: 5,
            }).start();
          }
        },
      }),
    [position, swipeOut],
  );

  // ---------------------------------------------------------------------------
  // End screen
  // ---------------------------------------------------------------------------

  if (finished) {
    const total = deck.length;
    const pctGotIt = Math.round((gotIt / total) * 100);
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Close button */}
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Ionicons name="close" size={28} color={theme.text} />
        </TouchableOpacity>

        <View style={styles.endScreen}>
          <Ionicons
            name={pctGotIt >= 70 ? 'trophy' : 'ribbon'}
            size={64}
            color={pctGotIt >= 70 ? '#d97706' : theme.primary}
          />
          <Text style={[styles.endTitle, { color: theme.text }]}>Deck Complete!</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBlock}>
              <Text style={[styles.statNumber, { color: theme.success }]}>{gotIt}</Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Got it</Text>
            </View>
            <View style={styles.statBlock}>
              <Text style={[styles.statNumber, { color: theme.error }]}>{reviewAgain}</Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Review again</Text>
            </View>
            <View style={styles.statBlock}>
              <Text style={[styles.statNumber, { color: theme.primary }]}>{pctGotIt}%</Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Score</Text>
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
  // Active deck
  // ---------------------------------------------------------------------------

  const card = deck[currentIndex];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onClose}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          accessibilityRole="button"
          accessibilityLabel="Close flashcard deck"
        >
          <Ionicons name="close" size={26} color={theme.text} />
        </TouchableOpacity>
        <Text
          style={[styles.counter, { color: theme.textSecondary }]}
          accessibilityLabel={`Card ${currentIndex + 1} of ${deck.length}`}
        >
          {currentIndex + 1} / {deck.length}
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
        {/* Swipe labels */}
        <Animated.View style={[styles.swipeLabel, styles.swipeLabelRight, { opacity: rightLabelOpacity }]}>
          <Ionicons name="checkmark-circle" size={32} color={theme.success} />
          <Text style={[styles.swipeLabelText, { color: theme.success }]}>Got it</Text>
        </Animated.View>
        <Animated.View style={[styles.swipeLabel, styles.swipeLabelLeft, { opacity: leftLabelOpacity }]}>
          <Ionicons name="refresh-circle" size={32} color={theme.error} />
          <Text style={[styles.swipeLabelText, { color: theme.error }]}>Review</Text>
        </Animated.View>

        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.cardOuter,
            {
              transform: [{ translateX: position.x }, { rotate }],
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => setFlipped((f) => !f)}
            accessibilityRole="button"
            accessibilityLabel={
              flipped
                ? `Answer: ${card.back}. Tap to see question.`
                : `Question: ${card.front}. Tap to reveal answer.`
            }
            accessibilityHint="Double tap to flip the card"
          >
            <CardFace
              text={flipped ? card.back : card.front}
              isFront={!flipped}
              theme={theme}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Button row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: theme.error + '18', borderColor: theme.error }]}
          onPress={() => swipeOut('left')}
          accessibilityRole="button"
          accessibilityLabel="Review again"
          accessibilityHint="Mark this card for review and move to the next card"
        >
          <Ionicons name="close" size={24} color={theme.error} />
          <Text style={[styles.actionBtnText, { color: theme.error }]}>Review</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: theme.success + '18', borderColor: theme.success }]}
          onPress={() => swipeOut('right')}
          accessibilityRole="button"
          accessibilityLabel="Got it"
          accessibilityHint="Mark this card as learned and move to the next card"
        >
          <Ionicons name="checkmark" size={24} color={theme.success} />
          <Text style={[styles.actionBtnText, { color: theme.success }]}>Got it</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 15,
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
    minHeight: 320,
    borderRadius: 18,
    borderWidth: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    // shadow
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
  swipeLabel: {
    position: 'absolute',
    top: '40%',
    zIndex: 5,
    alignItems: 'center',
  },
  swipeLabelRight: {
    right: 30,
  },
  swipeLabelLeft: {
    left: 30,
  },
  swipeLabelText: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 32,
    paddingTop: 12,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    borderWidth: 1.5,
    minHeight: 44, // WCAG minimum touch-target size
  },
  actionBtnText: {
    fontSize: 15,
    fontWeight: '700',
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
