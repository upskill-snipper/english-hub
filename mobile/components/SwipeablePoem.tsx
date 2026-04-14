import React, { useCallback, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PoemLine {
  text: string;
  annotation?: string;
}

export interface PoemData {
  id: string;
  title: string;
  author: string;
  lines: PoemLine[];
}

interface SwipeablePoemProps {
  poems: PoemData[];
  initialIndex?: number;
  onSave?: (poem: PoemData) => void;
  onClose?: () => void;
  /** Set of poem IDs that are already saved */
  savedIds?: Set<string>;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

export default function SwipeablePoem({
  poems,
  initialIndex = 0,
  onSave,
  onClose,
  savedIds,
}: SwipeablePoemProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const [index, setIndex] = useState(initialIndex);
  const [showAnnotations, setShowAnnotations] = useState(false);

  const translateX = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const poem = poems[index];
  const isSaved = savedIds?.has(poem.id) ?? false;

  // -----------------------------------------------------------------------
  // Animate content swap
  // -----------------------------------------------------------------------

  const animateTo = useCallback(
    (nextIndex: number) => {
      const direction = nextIndex > index ? -1 : 1;

      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 120,
        useNativeDriver: true,
      }).start(() => {
        setIndex(nextIndex);
        setShowAnnotations(false);
        translateX.setValue(direction * -60);
        fadeAnim.setValue(0);

        Animated.parallel([
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            tension: 80,
            friction: 12,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start();
      });
    },
    [index, fadeAnim, translateX],
  );

  // -----------------------------------------------------------------------
  // Pan responder for swipe gesture
  // -----------------------------------------------------------------------

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 10 && Math.abs(gesture.dx) > Math.abs(gesture.dy),
      onPanResponderMove: (_, gesture) => {
        translateX.setValue(gesture.dx);
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx < -SWIPE_THRESHOLD && index < poems.length - 1) {
          animateTo(index + 1);
        } else if (gesture.dx > SWIPE_THRESHOLD && index > 0) {
          animateTo(index - 1);
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            tension: 100,
            friction: 10,
          }).start();
        }
      },
    }),
  ).current;

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {onClose ? (
          <TouchableOpacity onPress={onClose} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Ionicons name="close" size={26} color={theme.text} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 26 }} />
        )}

        <Text style={styles.pageIndicator}>
          {index + 1} / {poems.length}
        </Text>

        <TouchableOpacity
          onPress={() => onSave?.(poem)}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Ionicons
            name={isSaved ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color={isSaved ? theme.primary : theme.text}
          />
        </TouchableOpacity>
      </View>

      {/* Poem content */}
      <Animated.View
        style={[
          styles.poemWrapper,
          {
            opacity: fadeAnim,
            transform: [{ translateX }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>{poem.title}</Text>
          <Text style={styles.author}>by {poem.author}</Text>

          <View style={styles.linesContainer}>
            {poem.lines.map((line, i) => (
              <View key={i} style={styles.lineBlock}>
                <Text style={styles.lineText}>{line.text}</Text>
                {showAnnotations && line.annotation && (
                  <Text style={styles.annotation}>{line.annotation}</Text>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </Animated.View>

      {/* Bottom bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.navButton, index === 0 && styles.navButtonDisabled]}
          onPress={() => index > 0 && animateTo(index - 1)}
          disabled={index === 0}
        >
          <Ionicons
            name="chevron-back"
            size={22}
            color={index === 0 ? theme.textTertiary : theme.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.annotateButton}
          onPress={() => setShowAnnotations((v) => !v)}
        >
          <Ionicons
            name={showAnnotations ? 'chatbubble' : 'chatbubble-outline'}
            size={18}
            color={showAnnotations ? theme.primary : theme.textSecondary}
          />
          <Text
            style={[
              styles.annotateLabel,
              showAnnotations && { color: theme.primary },
            ]}
          >
            {showAnnotations ? 'Hide Notes' : 'Show Notes'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, index === poems.length - 1 && styles.navButtonDisabled]}
          onPress={() => index < poems.length - 1 && animateTo(index + 1)}
          disabled={index === poems.length - 1}
        >
          <Ionicons
            name="chevron-forward"
            size={22}
            color={index === poems.length - 1 ? theme.textTertiary : theme.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Swipe hint dots */}
      <View style={styles.dotsRow}>
        {poems.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === index && styles.dotActive,
              i === index && { backgroundColor: theme.primary },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 8,
    },
    pageIndicator: {
      fontSize: 14,
      fontWeight: '600',
      color: t.textSecondary,
    },
    poemWrapper: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 28,
      paddingTop: 24,
      paddingBottom: 40,
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: t.text,
      fontFamily: 'Georgia',
      marginBottom: 6,
    },
    author: {
      fontSize: 16,
      color: t.textSecondary,
      fontStyle: 'italic',
      marginBottom: 32,
    },
    linesContainer: {
      gap: 4,
    },
    lineBlock: {
      marginBottom: 8,
    },
    lineText: {
      fontSize: 19,
      lineHeight: 32,
      color: t.text,
      fontFamily: 'Georgia',
    },
    annotation: {
      fontSize: 13,
      lineHeight: 19,
      color: t.primary,
      fontStyle: 'italic',
      marginTop: 4,
      paddingLeft: 12,
      borderLeftWidth: 2,
      borderLeftColor: t.primary,
    },
    bottomBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderTopWidth: 1,
      borderTopColor: t.border,
    },
    navButton: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: t.backgroundSecondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    navButtonDisabled: {
      opacity: 0.4,
    },
    annotateButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 20,
      backgroundColor: t.backgroundSecondary,
    },
    annotateLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: t.textSecondary,
    },
    dotsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 6,
      paddingBottom: 16,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: t.border,
    },
    dotActive: {
      width: 18,
      borderRadius: 3,
    },
  });
