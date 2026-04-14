import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useTheme, type ColorTokens } from '../lib/theme';
import { getItem, setItem } from '../lib/storage';
import { getNextExam } from '../lib/exam-countdown';
import type { ExamDate } from '../data/exam-dates';
import ExamCountdown from '../components/ExamCountdown';
import StreakDisplay from '../components/StreakDisplay';
import CalendarHeatmap from '../components/CalendarHeatmap';
import QuickActionGrid from '../components/QuickActionGrid';
import DailyGoalCard from '../components/DailyGoalCard';
import SkeletonCard from '../components/SkeletonCard';
import DailyChallengeCard from '../components/DailyChallengeCard';
import {
  getDailyChallenges,
  getChallengeStreak,
  getStreakMultiplier,
  type DailyChallenge,
} from '../lib/daily-challenges';
import { recordStudyMinutes } from '../lib/study-calendar';
import {
  getUnlockedAchievements,
  getLevelForXP,
} from '../lib/achievements';
import type { UnlockedAchievement } from '../lib/achievements';
import XPBar from '../components/achievements/XPBar';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface StreakData {
  count: number;
  lastDate: string; // ISO date string (YYYY-MM-DD)
}

interface DailyGoalData {
  minutesDone: number;
  minutesGoal: number;
  date: string; // ISO date string
}

interface LastTopic {
  title: string;
  route: string;
  date: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

// ---------------------------------------------------------------------------
// Screen
// ---------------------------------------------------------------------------

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const [streak, setStreak] = useState<StreakData>({ count: 0, lastDate: '' });
  const [dailyGoal, setDailyGoal] = useState<DailyGoalData>({
    minutesDone: 0,
    minutesGoal: 30,
    date: todayISO(),
  });
  const [lastTopic, setLastTopic] = useState<LastTopic | null>(null);
  const [challenges, setChallenges] = useState<DailyChallenge[]>([]);
  const [streakMultiplier, setStreakMultiplier] = useState(1);
  const [userName, setUserName] = useState<string | null>(null);
  const [userBoard, setUserBoard] = useState<string | null>(null);
  const [nextExam, setNextExam] = useState<ExamDate | null>(null);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [latestBadge, setLatestBadge] = useState<UnlockedAchievement | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  // -- Load data from AsyncStorage -------------------------------------------

  const loadData = useCallback(async () => {
    const [storedStreak, storedGoal, storedTopic, storedName, storedBoard, storedGoalMinutes] =
      await Promise.all([
        getItem<StreakData>('streak'),
        getItem<DailyGoalData>('dailyGoal'),
        getItem<LastTopic>('lastTopic'),
        getItem<string>('userName'),
        getItem<string>('userBoard'),
        getItem<number>('studyGoalMinutes'),
      ]);

    setUserName(storedName);
    setUserBoard(storedBoard);

    const today = todayISO();

    // Streak: reset if more than 1 day gap
    if (storedStreak) {
      const last = storedStreak.lastDate;
      const diffDays = Math.floor(
        (new Date(today).getTime() - new Date(last).getTime()) / 86400000,
      );
      if (diffDays > 1) {
        // Streak broken
        const reset: StreakData = { count: 0, lastDate: '' };
        setStreak(reset);
        await setItem('streak', reset);
      } else {
        setStreak(storedStreak);
      }
    }

    // Daily goal: reset minutes if it is a new day
    if (storedGoal) {
      if (storedGoal.date !== today) {
        const fresh: DailyGoalData = {
          minutesDone: 0,
          minutesGoal: storedGoalMinutes ?? storedGoal.minutesGoal,
          date: today,
        };
        setDailyGoal(fresh);
        await setItem('dailyGoal', fresh);
      } else {
        setDailyGoal(storedGoal);
      }
    } else if (storedGoalMinutes) {
      const fresh: DailyGoalData = {
        minutesDone: 0,
        minutesGoal: storedGoalMinutes,
        date: today,
      };
      setDailyGoal(fresh);
      await setItem('dailyGoal', fresh);
    }

    if (storedTopic) {
      setLastTopic(storedTopic);
    }

    // Daily challenges
    const [dailyChallenges, challengeStreak] = await Promise.all([
      getDailyChallenges(),
      getChallengeStreak(),
    ]);
    setChallenges(dailyChallenges);
    setStreakMultiplier(getStreakMultiplier(challengeStreak.current));

    // Next exam countdown
    setNextExam(getNextExam());

    // Achievement XP + latest badge
    const [unlockedList, storedXP, lastSeenBadgeDate] = await Promise.all([
      getUnlockedAchievements(),
      getItem<number>('xp', 0),
      getItem<string>('lastSeenBadgeDate'),
    ]);
    const currentXP = storedXP ?? 0;
    setXp(currentXP);
    setLevel(getLevelForXP(currentXP));

    // Show the newest badge if it was unlocked after the last time we checked
    if (unlockedList.length > 0) {
      const sorted = [...unlockedList].sort(
        (a, b) => new Date(b.unlockedAt).getTime() - new Date(a.unlockedAt).getTime(),
      );
      const newest = sorted[0];
      if (!lastSeenBadgeDate || new Date(newest.unlockedAt) > new Date(lastSeenBadgeDate)) {
        setLatestBadge(newest);
        await setItem('lastSeenBadgeDate', newest.unlockedAt);
      } else {
        setLatestBadge(null);
      }
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [loadData]);

  // -- Quick actions ---------------------------------------------------------

  const quickActions = [
    {
      label: 'Quick Quiz',
      icon: 'help-circle' as const,
      color: '#8b5cf6',
      onPress: () => router.push('/study'),
    },
    {
      label: 'Flashcards',
      icon: 'copy' as const,
      color: '#3b82f6',
      onPress: () => router.push('/study'),
    },
    {
      label: "Today's Poem",
      icon: 'book' as const,
      color: '#ec4899',
      onPress: () => router.push('/study'),
    },
    {
      label: 'Focus Timer',
      icon: 'timer' as const,
      color: '#f59e0b',
      onPress: () => router.push('/timer'),
    },
    {
      label: 'Revision Notes',
      icon: 'document-text' as const,
      color: '#10b981',
      onPress: () => router.push('/saved'),
    },
  ];

  // -- Render ----------------------------------------------------------------

  if (loading) {
    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.content}>
          {/* Greeting skeleton */}
          <View style={styles.greetingRow}>
            <View style={{ gap: 8 }}>
              <SkeletonCard width={180} height={28} borderRadius={8} />
              <SkeletonCard width={120} height={16} borderRadius={6} />
            </View>
            <SkeletonCard width={44} height={44} borderRadius={22} />
          </View>

          {/* Exam countdown skeleton */}
          <SkeletonCard width="100%" height={160} borderRadius={16} />

          {/* Streak skeleton */}
          <SkeletonCard width="100%" height={80} borderRadius={16} />

          {/* Calendar heatmap skeleton */}
          <SkeletonCard width="100%" height={200} borderRadius={16} />

          {/* Daily goal skeleton */}
          <SkeletonCard width="100%" height={100} borderRadius={16} />

          {/* Daily challenges skeleton */}
          <SkeletonCard width="100%" height={180} borderRadius={16} />

          {/* Quick actions skeleton */}
          <View style={{ gap: 10 }}>
            <SkeletonCard width={80} height={20} borderRadius={6} />
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <SkeletonCard width={76} height={76} borderRadius={16} />
              <SkeletonCard width={76} height={76} borderRadius={16} />
              <SkeletonCard width={76} height={76} borderRadius={16} />
              <SkeletonCard width={76} height={76} borderRadius={16} />
            </View>
          </View>

          {/* Continue card skeleton */}
          <SkeletonCard width="100%" height={76} borderRadius={16} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Greeting */}
        <View style={styles.greetingRow}>
          <View>
            <Text style={styles.greeting}>
              {userName ? `Hey ${userName}!` : getGreeting()}
            </Text>
            <Text style={styles.subtitle}>Ready to study?</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push('/profile')}
            activeOpacity={0.7}
          >
            <View style={styles.avatar}>
              <Ionicons name="person" size={22} color={theme.primary} />
            </View>
          </TouchableOpacity>
        </View>

        {/* XP Bar */}
        <XPBar currentXP={xp} level={level} />

        {/* View Achievements link */}
        <TouchableOpacity
          style={styles.achievementsLink}
          activeOpacity={0.7}
          onPress={() => router.push('/achievements')}
        >
          <Ionicons name="trophy-outline" size={18} color={theme.primary} />
          <Text style={styles.achievementsLinkText}>View Achievements</Text>
          <Ionicons name="chevron-forward" size={16} color={theme.textTertiary} />
        </TouchableOpacity>

        {/* Latest unlocked badge notification */}
        {latestBadge && (
          <TouchableOpacity
            style={styles.badgeNotification}
            activeOpacity={0.7}
            onPress={() => router.push('/achievements')}
          >
            <View style={styles.badgeNotifDot} />
            <Text style={styles.badgeNotifText}>New badge unlocked!</Text>
            <Ionicons name="chevron-forward" size={16} color={theme.primary} />
          </TouchableOpacity>
        )}

        {/* Exam Countdown */}
        {nextExam && <ExamCountdown exam={nextExam} />}

        {/* Streak */}
        <StreakDisplay days={streak.count} />

        {/* Calendar Heatmap */}
        <CalendarHeatmap />

        {/* Daily Goal */}
        <DailyGoalCard
          minutesDone={dailyGoal.minutesDone}
          minutesGoal={dailyGoal.minutesGoal}
        />

        {/* Daily Challenges */}
        {challenges.length > 0 && (
          <DailyChallengeCard
            challenges={challenges}
            streakMultiplier={streakMultiplier}
          />
        )}

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jump in</Text>
          <QuickActionGrid actions={quickActions} />
        </View>

        {/* View Progress */}
        <TouchableOpacity
          style={styles.progressCard}
          activeOpacity={0.7}
          onPress={() => router.push('/progress')}
        >
          <View style={styles.progressIcon}>
            <Ionicons name="stats-chart" size={28} color={theme.primary} />
          </View>
          <View style={styles.progressText}>
            <Text style={styles.progressTitle}>View Progress</Text>
            <Text style={styles.progressSubtitle}>
              Charts, accuracy, and mastery stats
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme.textTertiary}
          />
        </TouchableOpacity>

        {/* Continue where you left off */}
        {lastTopic && (
          <TouchableOpacity
            style={styles.continueCard}
            activeOpacity={0.7}
            onPress={() => router.push(lastTopic.route as never)}
          >
            <View style={styles.continueIcon}>
              <Ionicons name="play-circle" size={32} color={theme.primary} />
            </View>
            <View style={styles.continueText}>
              <Text style={styles.continueLabel}>Continue where you left off</Text>
              <Text style={styles.continueTitle} numberOfLines={1}>
                {lastTopic.title}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.textTertiary} />
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: t.background,
    },
    scroll: {
      flex: 1,
    },
    content: {
      padding: 20,
      gap: 16,
      paddingBottom: 32,
    },

    // Greeting
    greetingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    greeting: {
      fontSize: 26,
      fontWeight: '800',
      color: t.text,
    },
    subtitle: {
      fontSize: 16,
      color: t.textSecondary,
      marginTop: 2,
    },
    avatar: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: t.backgroundSecondary,
      borderWidth: 1,
      borderColor: t.border,
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Section
    section: {
      gap: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: t.text,
    },

    // Continue card
    continueCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 16,
      gap: 12,
    },
    continueIcon: {
      width: 44,
      height: 44,
      borderRadius: 12,
      backgroundColor: t.backgroundSecondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    continueText: {
      flex: 1,
    },
    continueLabel: {
      fontSize: 12,
      color: t.textTertiary,
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    continueTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: t.text,
      marginTop: 2,
    },

    // Progress card
    progressCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 16,
      gap: 12,
    },
    progressIcon: {
      width: 48,
      height: 48,
      borderRadius: 14,
      backgroundColor: t.primaryLight + '20',
      alignItems: 'center',
      justifyContent: 'center',
    },
    progressText: {
      flex: 1,
    },
    progressTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
    },
    progressSubtitle: {
      fontSize: 13,
      color: t.textSecondary,
      marginTop: 2,
    },

    // Achievements link
    achievementsLink: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingVertical: 4,
    },
    achievementsLinkText: {
      flex: 1,
      fontSize: 14,
      fontWeight: '600',
      color: t.primary,
    },

    // Badge notification
    badgeNotification: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: t.primary + '10',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: t.primary + '30',
      paddingHorizontal: 14,
      paddingVertical: 10,
    },
    badgeNotifDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: t.primary,
    },
    badgeNotifText: {
      flex: 1,
      fontSize: 14,
      fontWeight: '600',
      color: t.primary,
    },
  });
