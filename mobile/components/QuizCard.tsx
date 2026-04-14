// ---------------------------------------------------------------------------
// QuizCard — shows a single question with four tappable answer cards
// ---------------------------------------------------------------------------

import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ColorTokens } from '../lib/theme';
import type { QuizQuestion } from '../data/quiz-questions';

interface QuizCardProps {
  question: QuizQuestion;
  /** Index the user selected, or null if not yet answered */
  selectedIndex: number | null;
  /** Called when the user taps an option */
  onSelect: (index: number) => void;
  /** 1-based question number */
  questionNumber: number;
  totalQuestions: number;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'] as const;

export default function QuizCard({
  question,
  selectedIndex,
  onSelect,
  questionNumber,
  totalQuestions,
}: QuizCardProps) {
  const { theme } = useTheme();
  const answered = selectedIndex !== null;
  const styles = makeStyles(theme);

  const getOptionStyle = useCallback(
    (idx: number) => {
      if (!answered) return styles.option;
      if (idx === question.correctIndex) return [styles.option, styles.optionCorrect];
      if (idx === selectedIndex) return [styles.option, styles.optionWrong];
      return [styles.option, styles.optionDimmed];
    },
    [answered, question.correctIndex, selectedIndex, styles],
  );

  const getOptionTextStyle = useCallback(
    (idx: number) => {
      if (!answered) return styles.optionText;
      if (idx === question.correctIndex) return [styles.optionText, styles.optionTextHighlight];
      if (idx === selectedIndex) return [styles.optionText, styles.optionTextHighlight];
      return [styles.optionText, styles.optionTextDimmed];
    },
    [answered, question.correctIndex, selectedIndex, styles],
  );

  const difficultyColor =
    question.difficulty === 'easy'
      ? theme.success
      : question.difficulty === 'medium'
        ? theme.warning
        : theme.error;

  return (
    <View style={styles.container}>
      {/* Topic & difficulty chip */}
      <View style={styles.chipRow}>
        <View style={[styles.chip, { backgroundColor: theme.backgroundSecondary }]}>
          <Text style={[styles.chipText, { color: theme.textSecondary }]}>{question.topic}</Text>
        </View>
        <View style={[styles.chip, { backgroundColor: difficultyColor + '22' }]}>
          <Text style={[styles.chipText, { color: difficultyColor }]}>
            {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
          </Text>
        </View>
      </View>

      {/* Question */}
      <Text style={styles.questionText}>{question.text}</Text>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {question.options.map((option, idx) => (
          <TouchableOpacity
            key={idx}
            style={getOptionStyle(idx)}
            activeOpacity={answered ? 1 : 0.7}
            onPress={() => {
              if (!answered) onSelect(idx);
            }}
            accessibilityRole="button"
            accessibilityLabel={`Option ${OPTION_LABELS[idx]}: ${option}${
              answered && idx === question.correctIndex ? ', correct answer' : ''
            }${answered && idx === selectedIndex && idx !== question.correctIndex ? ', incorrect' : ''}`}
            accessibilityState={{ disabled: answered, selected: idx === selectedIndex }}
            accessibilityHint={answered ? undefined : 'Double tap to select this answer'}
          >
            <View style={styles.optionInner}>
              <View
                style={[
                  styles.optionLabel,
                  answered && idx === question.correctIndex && styles.optionLabelCorrect,
                  answered && idx === selectedIndex && idx !== question.correctIndex && styles.optionLabelWrong,
                ]}
              >
                <Text
                  style={[
                    styles.optionLabelText,
                    answered && (idx === question.correctIndex || idx === selectedIndex) && styles.optionLabelTextActive,
                  ]}
                >
                  {OPTION_LABELS[idx]}
                </Text>
              </View>
              <Text style={getOptionTextStyle(idx)} numberOfLines={3}>
                {option}
              </Text>
              {answered && idx === question.correctIndex && (
                <Ionicons name="checkmark-circle" size={22} color="#059669" style={styles.feedbackIcon} />
              )}
              {answered && idx === selectedIndex && idx !== question.correctIndex && (
                <Ionicons name="close-circle" size={22} color="#dc2626" style={styles.feedbackIcon} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

function makeStyles(theme: ColorTokens) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 8,
    },
    chipRow: {
      flexDirection: 'row',
      gap: 8,
      marginBottom: 16,
    },
    chip: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 12,
    },
    chipText: {
      fontSize: 12,
      fontWeight: '600',
    },
    questionText: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
      lineHeight: 28,
      marginBottom: 24,
    },
    optionsContainer: {
      gap: 12,
    },
    option: {
      backgroundColor: theme.card,
      borderWidth: 2,
      borderColor: theme.cardBorder,
      borderRadius: 16,
      paddingVertical: 16,
      paddingHorizontal: 16,
      minHeight: 44, // WCAG minimum touch-target size
    },
    optionCorrect: {
      borderColor: '#059669',
      backgroundColor: '#05966910',
    },
    optionWrong: {
      borderColor: '#dc2626',
      backgroundColor: '#dc262610',
    },
    optionDimmed: {
      opacity: 0.4,
    },
    optionInner: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionLabel: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.backgroundSecondary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    optionLabelCorrect: {
      backgroundColor: '#059669',
    },
    optionLabelWrong: {
      backgroundColor: '#dc2626',
    },
    optionLabelText: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.textSecondary,
    },
    optionLabelTextActive: {
      color: '#ffffff',
    },
    optionText: {
      flex: 1,
      fontSize: 16,
      color: theme.text,
      lineHeight: 22,
    },
    optionTextHighlight: {
      fontWeight: '600',
    },
    optionTextDimmed: {
      color: theme.textTertiary,
    },
    feedbackIcon: {
      marginLeft: 8,
    },
  });
}
