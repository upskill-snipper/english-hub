// ---------------------------------------------------------------------------
// QuizResults — end-of-quiz summary screen
// ---------------------------------------------------------------------------

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, ColorTokens } from '../lib/theme';
import type { QuizState } from '../lib/quiz-engine';
import { shareQuizResult } from '../lib/share';
import ShareButton from './ShareButton';
import {
  getPercentage,
  getElapsedSeconds,
  getEmojiForScore,
  getMessageForScore,
} from '../lib/quiz-engine';
import {
  getDailyChallenges,
  markChallengeComplete,
  updateChallengeProgress,
} from '../lib/daily-challenges';

interface QuizResultsProps {
  state: QuizState;
  topic?: string;
  onTryAgain: () => void;
  onBackToDashboard: () => void;
}

export default function QuizResults({ state, topic, onTryAgain, onBackToDashboard }: QuizResultsProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const percentage = getPercentage(state);
  const elapsed = getElapsedSeconds(state);
  const emoji = getEmojiForScore(percentage);
  const message = getMessageForScore(percentage);

  // -- Update daily challenges on quiz completion --
  React.useEffect(() => {
    (async () => {
      try {
        const challenges = await getDailyChallenges();
        for (const ch of challenges) {
          if (ch.completed) continue;

          if (ch.type === 'quiz_count') {
            // Progress by number of questions answered
            const answered = state.questions.length;
            const newProgress = Math.min(ch.progress + answered, ch.condition.target);
            await updateChallengeProgress(ch.id, newProgress);
          } else if (ch.type === 'quiz_score' && percentage >= ch.condition.target) {
            await markChallengeComplete(ch.id);
          } else if (ch.type === 'quiz_perfect' && percentage === 100) {
            await markChallengeComplete(ch.id);
          }
        }
      } catch {
        // Silently ignore -- challenge tracking is non-critical
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const timeString = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Big emoji */}
      <Text style={styles.emoji}>{emoji}</Text>

      {/* Score */}
      <Text style={styles.scoreText}>
        {state.score} / {state.questions.length}
      </Text>
      <Text style={styles.percentText}>{percentage}%</Text>
      <Text style={styles.message}>{message}</Text>

      {/* Stats row */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Ionicons name="time-outline" size={22} color={theme.primary} />
          <Text style={styles.statValue}>{timeString}</Text>
          <Text style={styles.statLabel}>Time</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="checkmark-circle-outline" size={22} color={theme.success} />
          <Text style={styles.statValue}>{state.score}</Text>
          <Text style={styles.statLabel}>Correct</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="close-circle-outline" size={22} color={theme.error} />
          <Text style={styles.statValue}>{state.questions.length - state.score}</Text>
          <Text style={styles.statLabel}>Wrong</Text>
        </View>
      </View>

      {/* Answer breakdown */}
      <Text style={styles.breakdownTitle}>Your Answers</Text>
      {state.questions.map((q, idx) => {
        const userAnswer = state.answers[idx];
        const isCorrect = userAnswer === q.correctIndex;
        return (
          <View key={q.id} style={styles.breakdownCard}>
            <View style={styles.breakdownHeader}>
              <View
                style={[
                  styles.breakdownBadge,
                  { backgroundColor: isCorrect ? theme.success + '22' : theme.error + '22' },
                ]}
              >
                <Ionicons
                  name={isCorrect ? 'checkmark' : 'close'}
                  size={14}
                  color={isCorrect ? theme.success : theme.error}
                />
              </View>
              <Text style={styles.breakdownQuestion} numberOfLines={2}>
                {q.text}
              </Text>
            </View>
            {!isCorrect && (
              <Text style={styles.breakdownCorrectAnswer}>
                Correct: {q.options[q.correctIndex]}
              </Text>
            )}
          </View>
        );
      })}

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.primaryButton} onPress={onTryAgain} activeOpacity={0.8}>
          <Ionicons name="refresh" size={20} color="#ffffff" />
          <Text style={styles.primaryButtonText}>Try Again</Text>
        </TouchableOpacity>
        <ShareButton
          onPress={() =>
            shareQuizResult(
              state.score,
              state.questions.length,
              topic ?? 'English',
              percentage,
            )
          }
          size={20}
          color={theme.primary}
        />
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={onBackToDashboard}
          activeOpacity={0.8}
        >
          <Ionicons name="home-outline" size={20} color={theme.primary} />
          <Text style={[styles.secondaryButtonText, { color: theme.primary }]}>
            Back to Dashboard
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

function makeStyles(theme: ColorTokens) {
  return StyleSheet.create({
    scroll: {
      flex: 1,
    },
    container: {
      paddingHorizontal: 20,
      paddingTop: 32,
      paddingBottom: 48,
      alignItems: 'center',
    },
    emoji: {
      fontSize: 64,
      marginBottom: 8,
    },
    scoreText: {
      fontSize: 40,
      fontWeight: '800',
      color: theme.text,
    },
    percentText: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.primary,
      marginTop: 4,
    },
    message: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.textSecondary,
      textAlign: 'center',
      marginTop: 8,
      marginBottom: 24,
    },
    statsRow: {
      flexDirection: 'row',
      gap: 12,
      marginBottom: 32,
      width: '100%',
    },
    statCard: {
      flex: 1,
      backgroundColor: theme.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.cardBorder,
      paddingVertical: 16,
      alignItems: 'center',
      gap: 4,
    },
    statValue: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    statLabel: {
      fontSize: 12,
      color: theme.textSecondary,
      fontWeight: '500',
    },
    breakdownTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
      alignSelf: 'flex-start',
      marginBottom: 12,
    },
    breakdownCard: {
      width: '100%',
      backgroundColor: theme.card,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.cardBorder,
      padding: 12,
      marginBottom: 8,
    },
    breakdownHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    breakdownBadge: {
      width: 26,
      height: 26,
      borderRadius: 13,
      alignItems: 'center',
      justifyContent: 'center',
    },
    breakdownQuestion: {
      flex: 1,
      fontSize: 14,
      color: theme.text,
      fontWeight: '500',
    },
    breakdownCorrectAnswer: {
      marginTop: 6,
      marginLeft: 36,
      fontSize: 13,
      color: theme.success,
      fontWeight: '500',
    },
    buttonGroup: {
      width: '100%',
      marginTop: 24,
      gap: 12,
    },
    primaryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      backgroundColor: theme.primary,
      paddingVertical: 16,
      borderRadius: 16,
    },
    primaryButtonText: {
      color: '#ffffff',
      fontSize: 17,
      fontWeight: '700',
    },
    secondaryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      backgroundColor: theme.backgroundSecondary,
      paddingVertical: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.cardBorder,
    },
    secondaryButtonText: {
      fontSize: 17,
      fontWeight: '700',
    },
  });
}
