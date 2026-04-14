import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../../lib/theme';
import { setItem } from '../../lib/storage';

// ---------------------------------------------------------------------------
// Option data
// ---------------------------------------------------------------------------

const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'Cambridge'] as const;
const YEAR_GROUPS = ['Year 10', 'Year 11', 'Resitting'] as const;
const GOAL_STEPS = [15, 30, 45, 60] as const;
const TARGET_GRADES = [4, 5, 6, 7, 8, 9] as const;

type ExamBoard = (typeof EXAM_BOARDS)[number];
type YearGroup = (typeof YEAR_GROUPS)[number];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface ProfileSetupProps {
  onComplete: () => void;
}

export default function ProfileSetup({ onComplete }: ProfileSetupProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const [name, setName] = useState('');
  const [board, setBoard] = useState<ExamBoard | null>(null);
  const [yearGroup, setYearGroup] = useState<YearGroup | null>(null);
  const [goalMinutes, setGoalMinutes] = useState(30);
  const [targetGrade, setTargetGrade] = useState(6);

  const canSubmit = name.trim().length > 0 && board !== null && yearGroup !== null;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    await Promise.all([
      setItem('userName', name.trim()),
      setItem('userBoard', board),
      setItem('yearGroup', yearGroup),
      setItem('studyGoalMinutes', goalMinutes),
      setItem('targetGrade', targetGrade),
      setItem('onboardingComplete', true),
    ]);
    onComplete();
  };

  // ---------------------------------------------------------------------------
  // Render helpers
  // ---------------------------------------------------------------------------

  const renderChips = <T extends string>(
    options: readonly T[],
    selected: T | null,
    onSelect: (v: T) => void,
  ) => (
    <View style={styles.chipRow}>
      {options.map((opt) => {
        const active = opt === selected;
        return (
          <TouchableOpacity
            key={opt}
            style={[styles.chip, active && styles.chipActive]}
            onPress={() => onSelect(opt)}
            activeOpacity={0.7}
          >
            <Text style={[styles.chipText, active && styles.chipTextActive]}>{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.heading}>Set up your profile</Text>
        <Text style={styles.subheading}>
          We'll use this to personalise your revision experience.
        </Text>

        {/* Name */}
        <Text style={styles.label}>What's your name?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={theme.textTertiary}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          returnKeyType="done"
        />

        {/* Exam board */}
        <Text style={styles.label}>Exam board</Text>
        {renderChips(EXAM_BOARDS, board, setBoard)}

        {/* Year group */}
        <Text style={styles.label}>Year group</Text>
        {renderChips(YEAR_GROUPS, yearGroup, setYearGroup)}

        {/* Daily goal slider */}
        <Text style={styles.label}>Daily study goal</Text>
        <View style={styles.sliderRow}>
          <Ionicons name="time-outline" size={20} color={theme.textSecondary} />
          <Text style={styles.sliderValue}>{goalMinutes} min / day</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={GOAL_STEPS.length - 1}
          step={1}
          value={GOAL_STEPS.indexOf(goalMinutes as (typeof GOAL_STEPS)[number])}
          onValueChange={(v) => setGoalMinutes(GOAL_STEPS[v])}
          minimumTrackTintColor={theme.primary}
          maximumTrackTintColor={theme.border}
          thumbTintColor={theme.primary}
        />
        <View style={styles.sliderLabels}>
          {GOAL_STEPS.map((g) => (
            <Text key={g} style={styles.sliderLabelText}>
              {g}m
            </Text>
          ))}
        </View>

        {/* Target grade */}
        <Text style={styles.label}>Target grade</Text>
        <View style={styles.chipRow}>
          {TARGET_GRADES.map((g) => {
            const active = g === targetGrade;
            return (
              <TouchableOpacity
                key={g}
                style={[styles.gradeChip, active && styles.chipActive]}
                onPress={() => setTargetGrade(g)}
                activeOpacity={0.7}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{g}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Submit */}
        <TouchableOpacity
          style={[styles.button, !canSubmit && styles.buttonDisabled]}
          onPress={handleSubmit}
          activeOpacity={0.8}
          disabled={!canSubmit}
        >
          <Text style={styles.buttonText}>Let's go!</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    flex: {
      flex: 1,
      backgroundColor: t.background,
    },
    scrollContent: {
      padding: 24,
      paddingTop: 64,
      paddingBottom: 48,
    },
    heading: {
      fontSize: 28,
      fontWeight: '800',
      color: t.text,
      marginBottom: 8,
    },
    subheading: {
      fontSize: 16,
      color: t.textSecondary,
      marginBottom: 32,
      lineHeight: 22,
    },
    label: {
      fontSize: 15,
      fontWeight: '700',
      color: t.text,
      marginBottom: 10,
      marginTop: 20,
    },
    input: {
      backgroundColor: t.backgroundSecondary,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: t.border,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 16,
      color: t.text,
    },
    chipRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    chip: {
      paddingHorizontal: 18,
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: t.backgroundSecondary,
      borderWidth: 1,
      borderColor: t.border,
    },
    chipActive: {
      backgroundColor: t.primary,
      borderColor: t.primary,
    },
    chipText: {
      fontSize: 15,
      fontWeight: '600',
      color: t.text,
    },
    chipTextActive: {
      color: '#ffffff',
    },
    gradeChip: {
      width: 48,
      height: 48,
      borderRadius: 12,
      backgroundColor: t.backgroundSecondary,
      borderWidth: 1,
      borderColor: t.border,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sliderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4,
    },
    sliderValue: {
      fontSize: 16,
      fontWeight: '700',
      color: t.primary,
    },
    slider: {
      width: '100%',
      height: 40,
    },
    sliderLabels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 4,
    },
    sliderLabelText: {
      fontSize: 12,
      color: t.textTertiary,
    },
    button: {
      marginTop: 36,
      backgroundColor: t.primary,
      borderRadius: 14,
      paddingVertical: 16,
      alignItems: 'center',
    },
    buttonDisabled: {
      opacity: 0.4,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#ffffff',
    },
  });
