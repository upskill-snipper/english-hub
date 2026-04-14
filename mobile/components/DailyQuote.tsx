import React, { useCallback, useEffect, useRef } from 'react';
import {
  Animated,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';
import { getQuoteOfTheDay, DAILY_QUOTES, type DailyQuote as LiteraryQuote } from '../data/daily-quotes';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface DailyQuoteProps {
  /** Override the date used to pick the quote (defaults to today) */
  date?: Date;
  /** Called when the user taps "Save" */
  onSave?: (quote: LiteraryQuote) => void;
  /** Whether the current quote is already saved */
  isSaved?: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function DailyQuote({ date, onSave, isSaved = false }: DailyQuoteProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const quote = date
    ? (() => {
        const dayOfYear = Math.floor(
          (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
        );
        return DAILY_QUOTES[dayOfYear % DAILY_QUOTES.length];
      })()
    : getQuoteOfTheDay();

  // Entrance animation
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 60,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  // -----------------------------------------------------------------------
  // Handlers
  // -----------------------------------------------------------------------

  const handleShare = useCallback(async () => {
    try {
      await Share.share({
        message: `"${quote.text}"\n\n- ${quote.author}, ${quote.work}\n\nShared from The English Hub`,
      });
    } catch {
      // User cancelled or error — silently ignore
    }
  }, [quote]);

  const handleSave = useCallback(() => {
    onSave?.(quote);
  }, [onSave, quote]);

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  return (
    <Animated.View
      style={[
        styles.card,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {/* Decorative quotation mark */}
      <Text style={styles.decorQuote}>{'\u201C'}</Text>

      <Text style={styles.quoteText}>{quote.text}</Text>

      <View style={styles.attribution}>
        <Text style={styles.authorText}>{quote.author}</Text>
        <Text style={styles.workText}>{quote.work}</Text>
      </View>

      <View style={styles.topicBadge}>
        <Text style={styles.topicText}>{quote.topic}</Text>
      </View>

      {/* Action row */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleShare}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="share-outline" size={20} color={theme.textSecondary} />
          <Text style={styles.actionLabel}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleSave}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons
            name={isSaved ? 'bookmark' : 'bookmark-outline'}
            size={20}
            color={isSaved ? theme.primary : theme.textSecondary}
          />
          <Text style={[styles.actionLabel, isSaved && { color: theme.primary }]}>
            {isSaved ? 'Saved' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    card: {
      backgroundColor: t.card,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 24,
      position: 'relative',
      overflow: 'hidden',
    },
    decorQuote: {
      position: 'absolute',
      top: -8,
      left: 12,
      fontSize: 80,
      fontFamily: 'Georgia',
      color: t.primary,
      opacity: 0.1,
    },
    quoteText: {
      fontSize: 20,
      lineHeight: 30,
      fontFamily: 'Georgia',
      fontStyle: 'italic',
      color: t.text,
      marginBottom: 16,
      marginTop: 8,
    },
    attribution: {
      marginBottom: 12,
    },
    authorText: {
      fontSize: 15,
      fontWeight: '700',
      color: t.text,
    },
    workText: {
      fontSize: 14,
      color: t.textSecondary,
      fontStyle: 'italic',
      marginTop: 2,
    },
    topicBadge: {
      alignSelf: 'flex-start',
      backgroundColor: t.backgroundSecondary,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 12,
      marginBottom: 16,
    },
    topicText: {
      fontSize: 12,
      fontWeight: '600',
      color: t.primary,
    },
    actions: {
      flexDirection: 'row',
      gap: 24,
      borderTopWidth: 1,
      borderTopColor: t.border,
      paddingTop: 14,
    },
    actionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    actionLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: t.textSecondary,
    },
  });
