// ---------------------------------------------------------------------------
// Achievements Screen — full badge gallery + XP bar
// ---------------------------------------------------------------------------

import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useTheme, type ColorTokens } from '../lib/theme';
import { getUnlockedAchievements, getLevelForXP } from '../lib/achievements';
import type { UnlockedAchievement } from '../lib/achievements';
import { getItem } from '../lib/storage';
import BadgeGallery from '../components/achievements/BadgeGallery';
import XPBar from '../components/achievements/XPBar';

export default function AchievementsScreen() {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const [unlocked, setUnlocked] = useState<UnlockedAchievement[]>([]);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  const loadData = useCallback(async () => {
    const [unlockedList, storedXP] = await Promise.all([
      getUnlockedAchievements(),
      getItem<number>('xp', 0),
    ]);
    const currentXP = storedXP ?? 0;
    setUnlocked(unlockedList);
    setXp(currentXP);
    setLevel(getLevelForXP(currentXP));
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Achievements</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* XP Bar */}
      <View style={styles.xpContainer}>
        <XPBar currentXP={xp} level={level} />
      </View>

      {/* Badge gallery */}
      <BadgeGallery unlockedAchievements={unlocked} />
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
    header: {
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
    headerTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    xpContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
  });
}
