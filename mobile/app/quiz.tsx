// ---------------------------------------------------------------------------
// Quiz Screen — native quiz engine accessed from the dashboard
// ---------------------------------------------------------------------------

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme, ColorTokens } from '../lib/theme';
import {
  QuizState,
  createQuiz,
  answerQuestion,
  nextQuestion,
  getPercentage,
  getElapsedSeconds,
} from '../lib/quiz-engine';
import { topics, Topic } from '../data/quiz-questions';
import QuizCard from '../components/QuizCard';
import QuizResults from '../components/QuizResults';
import CelebrationModal from '../components/achievements/CelebrationModal';
import {
  loadUserStats,
  checkAchievements,
  saveUserStats,
} from '../lib/achievements';
import type { Achievement } from '../data/achievements';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type Screen = 'menu' | 'playing' | 'results';

const QUESTION_COUNTS = [5, 10, 15, 20] as const;

const TOPIC_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  Poetry: 'flower-outline',
  Characters: 'people-outline',
  'Literary Devices': 'color-palette-outline',
  'Context & Themes': 'book-outline',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function QuizScreen() {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  // --- State ---------------------------------------------------------------
  const [screen, setScreen] = useState<Screen>('menu');
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | undefined>(undefined);
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Achievement celebration
  const [celebrationVisible, setCelebrationVisible] = useState(false);
  const [celebrationAchievement, setCelebrationAchievement] = useState<Achievement | null>(null);

  // Animation for card transitions
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  // --- Handlers ------------------------------------------------------------

  const startQuiz = useCallback(() => {
    const state = createQuiz({ count: questionCount, topic: selectedTopic });
    setQuizState(state);
    setSelectedAnswer(null);
    setScreen('playing');
    fadeAnim.setValue(1);
    slideAnim.setValue(0);
  }, [questionCount, selectedTopic, fadeAnim, slideAnim]);

  const handleSelectAnswer = useCallback(
    (index: number) => {
      if (!quizState || selectedAnswer !== null) return;

      setSelectedAnswer(index);

      const isCorrect = index === quizState.questions[quizState.currentIndex].correctIndex;
      Haptics.notificationAsync(
        isCorrect
          ? Haptics.NotificationFeedbackType.Success
          : Haptics.NotificationFeedbackType.Error,
      ).catch(() => {});

      const updated = answerQuestion(quizState, index);
      setQuizState(updated);

      // Auto-advance after 1 second
      setTimeout(() => {
        if (updated.isComplete) {
          setScreen('results');
        } else {
          // Animate card transition
          Animated.parallel([
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 150,
              useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
              toValue: -30,
              duration: 150,
              useNativeDriver: true,
            }),
          ]).start(() => {
            const next = nextQuestion(updated);
            setQuizState(next);
            setSelectedAnswer(null);
            slideAnim.setValue(30);
            fadeAnim.setValue(0);
            Animated.parallel([
              Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
              }),
              Animated.timing(slideAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
              }),
            ]).start();
          });
        }
      }, 1000);
    },
    [quizState, selectedAnswer, fadeAnim, slideAnim],
  );

  // Check achievements when quiz finishes
  useEffect(() => {
    if (screen !== 'results' || !quizState) return;

    (async () => {
      const stats = await loadUserStats();

      // Update stats based on quiz results
      stats.quizzesCompleted += 1;

      const pct = getPercentage(quizState);
      if (pct === 100) stats.hasPerfectScore = true;

      const elapsedSec = getElapsedSeconds(quizState);
      const elapsedMin = elapsedSec / 60;
      if (stats.fastestQuizMinutes === null || elapsedMin < stats.fastestQuizMinutes) {
        stats.fastestQuizMinutes = elapsedMin;
      }

      await saveUserStats(stats);
      const unlocked = await checkAchievements(stats);
      if (unlocked.length > 0) {
        setCelebrationAchievement(unlocked[0]);
        setCelebrationVisible(true);
      }
    })();
  }, [screen]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTryAgain = useCallback(() => {
    startQuiz();
  }, [startQuiz]);

  const handleBackToDashboard = useCallback(() => {
    router.back();
  }, []);

  // --- Render: Menu --------------------------------------------------------

  if (screen === 'menu') {
    return (
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.menuHeader}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={styles.menuTitle}>English Quiz</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.menuContent}>
          {/* Hero section */}
          <View style={styles.heroSection}>
            <Text style={styles.heroEmoji}>{'\u{1F3AF}'}</Text>
            <Text style={styles.heroTitle}>Test Your Knowledge</Text>
            <Text style={styles.heroSubtitle}>
              GCSE & IGCSE English Literature{'\n'}and Language questions
            </Text>
          </View>

          {/* Topic selector */}
          <Text style={styles.sectionLabel}>TOPIC</Text>
          <View style={styles.topicGrid}>
            <TouchableOpacity
              style={[
                styles.topicChip,
                !selectedTopic && styles.topicChipActive,
              ]}
              onPress={() => setSelectedTopic(undefined)}
              activeOpacity={0.7}
            >
              <Ionicons
                name="shuffle-outline"
                size={18}
                color={!selectedTopic ? '#ffffff' : theme.textSecondary}
              />
              <Text
                style={[
                  styles.topicChipText,
                  !selectedTopic && styles.topicChipTextActive,
                ]}
              >
                All Topics
              </Text>
            </TouchableOpacity>
            {topics.map((t) => (
              <TouchableOpacity
                key={t}
                style={[
                  styles.topicChip,
                  selectedTopic === t && styles.topicChipActive,
                ]}
                onPress={() => setSelectedTopic(t)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={TOPIC_ICONS[t] || 'help-outline'}
                  size={18}
                  color={selectedTopic === t ? '#ffffff' : theme.textSecondary}
                />
                <Text
                  style={[
                    styles.topicChipText,
                    selectedTopic === t && styles.topicChipTextActive,
                  ]}
                >
                  {t}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Question count */}
          <Text style={styles.sectionLabel}>QUESTIONS</Text>
          <View style={styles.countRow}>
            {QUESTION_COUNTS.map((n) => (
              <TouchableOpacity
                key={n}
                style={[
                  styles.countChip,
                  questionCount === n && styles.countChipActive,
                ]}
                onPress={() => setQuestionCount(n)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.countChipText,
                    questionCount === n && styles.countChipTextActive,
                  ]}
                >
                  {n}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Start button */}
          <TouchableOpacity style={styles.startButton} onPress={startQuiz} activeOpacity={0.8}>
            <Ionicons name="play" size={22} color="#ffffff" />
            <Text style={styles.startButtonText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // --- Render: Results -----------------------------------------------------

  if (screen === 'results' && quizState) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <QuizResults
          state={quizState}
          topic={selectedTopic}
          onTryAgain={handleTryAgain}
          onBackToDashboard={handleBackToDashboard}
        />
        <CelebrationModal
          visible={celebrationVisible}
          achievement={celebrationAchievement}
          onDismiss={() => setCelebrationVisible(false)}
        />
      </SafeAreaView>
    );
  }

  // --- Render: Playing -----------------------------------------------------

  if (!quizState) return null;

  const currentQ = quizState.questions[quizState.currentIndex];
  const progress = (quizState.currentIndex + 1) / quizState.questions.length;

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => setScreen('menu')}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Ionicons name="close" size={24} color={theme.text} />
        </TouchableOpacity>

        {/* Progress bar */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
        </View>

        {/* Score */}
        <View style={styles.scoreContainer}>
          <Ionicons name="star" size={16} color={theme.warning} />
          <Text style={styles.scoreText}>{quizState.score}</Text>
        </View>
      </View>

      {/* Question counter */}
      <View style={styles.counterRow}>
        <Text style={styles.counterText}>
          Question {quizState.currentIndex + 1} of {quizState.questions.length}
        </Text>
      </View>

      {/* Animated question card */}
      <Animated.View
        style={[
          styles.cardWrapper,
          {
            opacity: fadeAnim,
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <QuizCard
          question={currentQ}
          selectedIndex={selectedAnswer}
          onSelect={handleSelectAnswer}
          questionNumber={quizState.currentIndex + 1}
          totalQuestions={quizState.questions.length}
        />
      </Animated.View>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

function makeStyles(theme: ColorTokens) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.background,
    },

    // --- Menu ---
    menuHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.backgroundSecondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    menuContent: {
      flex: 1,
      paddingHorizontal: 20,
    },
    heroSection: {
      alignItems: 'center',
      paddingVertical: 24,
    },
    heroEmoji: {
      fontSize: 48,
      marginBottom: 8,
    },
    heroTitle: {
      fontSize: 26,
      fontWeight: '800',
      color: theme.text,
      marginBottom: 4,
    },
    heroSubtitle: {
      fontSize: 15,
      color: theme.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
    },
    sectionLabel: {
      fontSize: 12,
      fontWeight: '700',
      color: theme.textTertiary,
      letterSpacing: 1,
      marginBottom: 10,
      marginTop: 16,
    },
    topicGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    topicChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 12,
      backgroundColor: theme.card,
      borderWidth: 1,
      borderColor: theme.cardBorder,
    },
    topicChipActive: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },
    topicChipText: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    topicChipTextActive: {
      color: '#ffffff',
    },
    countRow: {
      flexDirection: 'row',
      gap: 10,
    },
    countChip: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 12,
      borderRadius: 12,
      backgroundColor: theme.card,
      borderWidth: 1,
      borderColor: theme.cardBorder,
    },
    countChipActive: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },
    countChipText: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.textSecondary,
    },
    countChipTextActive: {
      color: '#ffffff',
    },
    startButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      backgroundColor: theme.primary,
      paddingVertical: 18,
      borderRadius: 16,
      marginTop: 32,
      ...Platform.select({
        ios: {
          shadowColor: theme.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        },
        android: {
          elevation: 6,
        },
      }),
    },
    startButtonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: '800',
    },

    // --- Playing ---
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 10,
      gap: 12,
    },
    progressBarContainer: {
      flex: 1,
      height: 8,
      backgroundColor: theme.backgroundSecondary,
      borderRadius: 4,
      overflow: 'hidden',
    },
    progressBarFill: {
      height: '100%',
      backgroundColor: theme.primary,
      borderRadius: 4,
    },
    scoreContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      backgroundColor: theme.backgroundSecondary,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 12,
    },
    scoreText: {
      fontSize: 15,
      fontWeight: '700',
      color: theme.text,
    },
    counterRow: {
      paddingHorizontal: 20,
      paddingBottom: 4,
    },
    counterText: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    cardWrapper: {
      flex: 1,
    },
  });
}
