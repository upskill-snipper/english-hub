import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useTheme, type ColorTokens } from '../lib/theme';
import type { ExamDate } from '../data/exam-dates';
import { getDaysUntilExam, getMotivationalMessage } from '../lib/exam-countdown';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface ExamCountdownProps {
  exam: ExamDate;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatExamDate(isoDate: string): string {
  const d = new Date(isoDate);
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Pick an accent colour based on how far away the exam is.
 *  >60 days  -> green  (success)
 *  30-60     -> amber  (warning)
 *  <30       -> red    (error)
 */
function accentForDays(days: number, theme: ColorTokens) {
  if (days > 60) return theme.success;
  if (days >= 30) return theme.warning;
  return theme.error;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ExamCountdown({ exam }: ExamCountdownProps) {
  const { theme } = useTheme();
  const days = getDaysUntilExam(exam.date);
  const accent = accentForDays(days, theme);
  const message = getMotivationalMessage(days);
  const s = makeStyles(theme, accent);

  return (
    <View style={s.card}>
      {/* Top row: days badge + exam info */}
      <View style={s.topRow}>
        <View style={s.daysBadge}>
          <Text style={s.daysNumber}>{days}</Text>
          <Text style={s.daysLabel}>days</Text>
        </View>

        <View style={s.examInfo}>
          <Text style={s.examName} numberOfLines={2}>
            {exam.label}
          </Text>
          <View style={s.dateRow}>
            <Ionicons name="calendar-outline" size={14} color={theme.textSecondary} />
            <Text style={s.dateText}>{formatExamDate(exam.date)}</Text>
          </View>
        </View>
      </View>

      {/* Motivational message */}
      <View style={s.messageRow}>
        <Ionicons name="sparkles" size={16} color={accent} />
        <Text style={s.messageText}>{message}</Text>
      </View>

      {/* View all link */}
      <TouchableOpacity
        style={s.linkRow}
        activeOpacity={0.6}
        onPress={() => router.push('/profile')}
      >
        <Text style={s.linkText}>View all exams</Text>
        <Ionicons name="chevron-forward" size={14} color={theme.primary} />
      </TouchableOpacity>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens, accent: string) =>
  StyleSheet.create({
    card: {
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 16,
      gap: 14,
    },

    // Top row
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 14,
    },
    daysBadge: {
      width: 72,
      height: 72,
      borderRadius: 16,
      backgroundColor: accent + '18',
      alignItems: 'center',
      justifyContent: 'center',
    },
    daysNumber: {
      fontSize: 28,
      fontWeight: '800',
      color: accent,
      lineHeight: 32,
    },
    daysLabel: {
      fontSize: 12,
      fontWeight: '600',
      color: accent,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },

    // Exam info
    examInfo: {
      flex: 1,
      gap: 4,
    },
    examName: {
      fontSize: 17,
      fontWeight: '700',
      color: t.text,
    },
    dateRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginTop: 2,
    },
    dateText: {
      fontSize: 14,
      color: t.textSecondary,
      fontWeight: '500',
    },

    // Motivational message
    messageRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: accent + '10',
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
    },
    messageText: {
      flex: 1,
      fontSize: 14,
      color: t.text,
      fontWeight: '500',
      lineHeight: 20,
    },

    // View all link
    linkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
    },
    linkText: {
      fontSize: 14,
      fontWeight: '600',
      color: t.primary,
    },
  });
