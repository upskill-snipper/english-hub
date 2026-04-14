import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';
import { useTheme, type ThemeMode, type ColorTokens } from '../lib/theme';
import { getItem, setItem, type StorageKey } from '../lib/storage';
import { setAuthToken } from '../lib/auth';
import StudyStatsCard, { type StudyStats } from '../components/StudyStatsCard';
import CalendarHeatmap from '../components/CalendarHeatmap';
import ReminderPicker from '../components/ReminderPicker';
import AccessibilitySettings from '../components/AccessibilitySettings';
import { ALL_EXAM_DATES, type ExamDate } from '../data/exam-dates';
import { getDaysUntilExam } from '../lib/exam-countdown';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BOARDS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
type Board = (typeof BOARDS)[number];

const BOARD_COLORS: Record<Board, string> = {
  A1: '#10b981',
  A2: '#34d399',
  B1: '#3b82f6',
  B2: '#6366f1',
  C1: '#8b5cf6',
  C2: '#a855f7',
};

const PRIVACY_URL = 'https://theenglishhub.app/privacy';
const TERMS_URL = 'https://theenglishhub.app/terms';
const HELP_URL = 'https://theenglishhub.app/help';

// ---------------------------------------------------------------------------
// Main Screen
// ---------------------------------------------------------------------------

export default function ProfileScreen() {
  const { theme, mode, isDark, setMode } = useTheme();
  const s = makeStyles(theme);

  // User info
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Board
  const [board, setBoard] = useState<Board>('B1');
  const [showBoardPicker, setShowBoardPicker] = useState(false);

  // Stats
  const [stats, setStats] = useState<StudyStats>({
    totalMinutes: 0,
    streakDays: 0,
    quizzesCompleted: 0,
    flashcardsReviewed: 0,
  });

  // Load persisted data
  useEffect(() => {
    (async () => {
      const [storedBoard, streak, quizResults, progress, name, email] = await Promise.all([
        getItem<Board>('board'),
        getItem<{ days: number }>('streak'),
        getItem<{ completed: number }>('quizResults'),
        getItem<{ totalMinutes: number; flashcardsReviewed: number }>('studyProgress'),
        SecureStore.getItemAsync('eh_user_name').catch(() => null),
        SecureStore.getItemAsync('eh_user_email').catch(() => null),
      ]);

      if (storedBoard && BOARDS.includes(storedBoard)) setBoard(storedBoard);
      setUserName(name);
      setUserEmail(email);
      setStats({
        totalMinutes: progress?.totalMinutes ?? 0,
        streakDays: streak?.days ?? 0,
        quizzesCompleted: quizResults?.completed ?? 0,
        flashcardsReviewed: progress?.flashcardsReviewed ?? 0,
      });
    })();
  }, []);

  // Board selection
  const selectBoard = useCallback(
    async (b: Board) => {
      setBoard(b);
      setShowBoardPicker(false);
      await setItem('board', b);
    },
    [],
  );

  // Theme cycling
  const nextThemeMode = (): ThemeMode => {
    if (mode === 'light') return 'dark';
    if (mode === 'dark') return 'system';
    return 'light';
  };

  const themeModeLabel = (m: ThemeMode): string => {
    if (m === 'light') return 'Light';
    if (m === 'dark') return 'Dark';
    return 'System';
  };

  const themeModeIcon = (m: ThemeMode): keyof typeof Ionicons.glyphMap => {
    if (m === 'light') return 'sunny-outline';
    if (m === 'dark') return 'moon-outline';
    return 'phone-portrait-outline';
  };

  // Sign out
  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          await setAuthToken(null);
          router.replace('/');
        },
      },
    ]);
  };

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <SafeAreaView style={s.safeArea} edges={['top']}>
      <ScrollView
        style={s.scroll}
        contentContainerStyle={s.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ---- Profile Header ---- */}
        <View style={s.header}>
          <View style={s.avatarCircle}>
            <Text style={s.avatarText}>
              {userName ? userName.charAt(0).toUpperCase() : '?'}
            </Text>
          </View>
          <View style={s.headerInfo}>
            <Text style={s.headerName} numberOfLines={1}>
              {userName ?? 'English Hub User'}
            </Text>
            {userEmail ? (
              <Text style={s.headerEmail} numberOfLines={1}>
                {userEmail}
              </Text>
            ) : null}
            <View style={[s.boardBadge, { backgroundColor: BOARD_COLORS[board] + '20' }]}>
              <Text style={[s.boardBadgeText, { color: BOARD_COLORS[board] }]}>
                {board} Level
              </Text>
            </View>
          </View>
        </View>

        {/* ---- Study Stats ---- */}
        <StudyStatsCard stats={stats} />

        {/* ---- Calendar Heatmap ---- */}
        <CalendarHeatmap />

        {/* ---- Exam Dates ---- */}
        <ExamDatesCard exams={ALL_EXAM_DATES} theme={theme} s={s} />

        {/* ---- Your Board ---- */}
        <View style={s.card}>
          <View style={s.cardHeaderRow}>
            <View style={s.cardHeaderLeft}>
              <Ionicons name="school-outline" size={20} color={theme.primary} />
              <Text style={s.cardTitle}>Your Board</Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowBoardPicker(!showBoardPicker)}
              style={s.changeButton}
              activeOpacity={0.7}
            >
              <Text style={s.changeButtonText}>{showBoardPicker ? 'Done' : 'Change'}</Text>
            </TouchableOpacity>
          </View>

          <View style={s.currentBoardRow}>
            <View
              style={[s.boardDot, { backgroundColor: BOARD_COLORS[board] }]}
            />
            <Text style={s.currentBoardText}>{board} - CEFR Level</Text>
          </View>

          {showBoardPicker && (
            <View style={s.boardGrid}>
              {BOARDS.map((b) => {
                const isActive = b === board;
                return (
                  <TouchableOpacity
                    key={b}
                    style={[
                      s.boardChip,
                      {
                        backgroundColor: isActive
                          ? BOARD_COLORS[b]
                          : theme.backgroundSecondary,
                        borderColor: isActive ? BOARD_COLORS[b] : theme.border,
                      },
                    ]}
                    activeOpacity={0.7}
                    onPress={() => selectBoard(b)}
                  >
                    <Text
                      style={[
                        s.boardChipText,
                        { color: isActive ? '#ffffff' : theme.text },
                      ]}
                    >
                      {b}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>

        {/* ---- Study Reminders ---- */}
        <ReminderPicker />

        {/* ---- Accessibility ---- */}
        <AccessibilitySettings />

        {/* ---- Appearance ---- */}
        <View style={s.card}>
          <View style={s.cardHeaderRow}>
            <View style={s.cardHeaderLeft}>
              <Ionicons name={themeModeIcon(mode)} size={20} color={theme.primary} />
              <Text style={s.cardTitle}>Appearance</Text>
            </View>
          </View>
          <TouchableOpacity
            style={s.themeRow}
            activeOpacity={0.7}
            onPress={() => setMode(nextThemeMode())}
          >
            <Text style={s.themeLabel}>Theme</Text>
            <View style={s.themeValueRow}>
              <Text style={s.themeValue}>{themeModeLabel(mode)}</Text>
              <Ionicons name="chevron-forward" size={16} color={theme.textTertiary} />
            </View>
          </TouchableOpacity>
        </View>

        {/* ---- App Section ---- */}
        <View style={s.card}>
          <Text style={s.sectionLabel}>App</Text>

          <LinkRow
            icon="shield-checkmark-outline"
            label="Privacy Policy"
            theme={theme}
            onPress={() => Linking.openURL(PRIVACY_URL)}
          />
          <LinkRow
            icon="document-text-outline"
            label="Terms of Service"
            theme={theme}
            onPress={() => Linking.openURL(TERMS_URL)}
          />
          <LinkRow
            icon="help-circle-outline"
            label="Help & Support"
            theme={theme}
            onPress={() => Linking.openURL(HELP_URL)}
            isLast
          />
        </View>

        {/* ---- Sign Out ---- */}
        <TouchableOpacity style={s.signOutButton} activeOpacity={0.7} onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={20} color={theme.error} />
          <Text style={[s.signOutText, { color: theme.error }]}>Sign Out</Text>
        </TouchableOpacity>

        <View style={s.footer} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Exam dates card
// ---------------------------------------------------------------------------

function ExamDatesCard({
  exams,
  theme,
  s,
}: {
  exams: ExamDate[];
  theme: ColorTokens;
  s: ReturnType<typeof makeStyles>;
}) {
  const upcoming = exams
    .filter((e) => getDaysUntilExam(e.date) >= 0)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (upcoming.length === 0) return null;

  return (
    <View style={s.card}>
      <View style={s.cardHeaderRow}>
        <View style={s.cardHeaderLeft}>
          <Ionicons name="calendar-outline" size={20} color={theme.primary} />
          <Text style={s.cardTitle}>Exam Dates</Text>
        </View>
      </View>

      <View style={{ marginTop: 12, gap: 10 }}>
        {upcoming.map((exam) => {
          const days = getDaysUntilExam(exam.date);
          const accent =
            days > 60
              ? theme.success
              : days >= 30
                ? theme.warning
                : theme.error;
          const dateStr = new Date(exam.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          });

          return (
            <View
              key={exam.paper}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: theme.border,
                gap: 12,
              }}
            >
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: accent + '18',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: '800', color: accent }}>
                  {days}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontSize: 15, fontWeight: '600', color: theme.text }}
                  numberOfLines={1}
                >
                  {exam.label}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: theme.textSecondary,
                    marginTop: 2,
                  }}
                >
                  {dateStr} -- {days} day{days !== 1 ? 's' : ''} to go
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                  borderRadius: 6,
                  backgroundColor: accent + '18',
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: '700', color: accent }}>
                  {exam.board.toUpperCase()}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Link row helper
// ---------------------------------------------------------------------------

function LinkRow({
  icon,
  label,
  theme,
  onPress,
  isLast = false,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  theme: ColorTokens;
  onPress: () => void;
  isLast?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 14,
          borderBottomWidth: isLast ? 0 : StyleSheet.hairlineWidth,
          borderBottomColor: theme.border,
        },
      ]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Ionicons name={icon} size={20} color={theme.textSecondary} style={{ marginRight: 12 }} />
      <Text style={{ flex: 1, fontSize: 15, color: theme.text }}>{label}</Text>
      <Ionicons name="chevron-forward" size={16} color={theme.textTertiary} />
    </TouchableOpacity>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: t.background,
    },
    scroll: {
      flex: 1,
    },
    scrollContent: {
      padding: 20,
      gap: 16,
    },

    // Header
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      marginBottom: 4,
    },
    avatarCircle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: t.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      fontSize: 24,
      fontWeight: '700',
      color: '#ffffff',
    },
    headerInfo: {
      flex: 1,
      gap: 2,
    },
    headerName: {
      fontSize: 20,
      fontWeight: '700',
      color: t.text,
    },
    headerEmail: {
      fontSize: 14,
      color: t.textSecondary,
    },
    boardBadge: {
      alignSelf: 'flex-start',
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 8,
      marginTop: 4,
    },
    boardBadgeText: {
      fontSize: 13,
      fontWeight: '700',
    },

    // Cards
    card: {
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 20,
    },
    cardHeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    cardHeaderLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
    },

    // Board
    changeButton: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
      backgroundColor: t.primary + '15',
    },
    changeButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: t.primary,
    },
    currentBoardRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
    },
    boardDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
    },
    currentBoardText: {
      fontSize: 15,
      fontWeight: '600',
      color: t.text,
    },
    boardGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 14,
    },
    boardChip: {
      paddingHorizontal: 18,
      paddingVertical: 10,
      borderRadius: 10,
      borderWidth: 1,
    },
    boardChipText: {
      fontSize: 15,
      fontWeight: '700',
    },

    // Appearance
    themeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 14,
    },
    themeLabel: {
      fontSize: 15,
      color: t.text,
    },
    themeValueRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    themeValue: {
      fontSize: 15,
      color: t.textSecondary,
    },

    // App section
    sectionLabel: {
      fontSize: 13,
      fontWeight: '600',
      color: t.textTertiary,
      textTransform: 'uppercase',
      letterSpacing: 0.6,
      marginBottom: 6,
    },

    // Sign out
    signOutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      paddingVertical: 14,
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
    },
    signOutText: {
      fontSize: 16,
      fontWeight: '600',
    },

    footer: {
      height: 32,
    },
  });
