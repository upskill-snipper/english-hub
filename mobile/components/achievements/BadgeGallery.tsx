// ---------------------------------------------------------------------------
// BadgeGallery -- grid of BadgeCards with category filter tabs
// ---------------------------------------------------------------------------

import React, { useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme, ColorTokens } from '../../lib/theme';
import { ACHIEVEMENTS, AchievementCategory } from '../../data/achievements';
import type { UnlockedAchievement } from '../../lib/achievements';
import BadgeCard from './BadgeCard';

// ---------------------------------------------------------------------------
// Tab definitions
// ---------------------------------------------------------------------------

type TabKey = 'all' | AchievementCategory;

const TABS: { key: TabKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'quiz', label: 'Quiz' },
  { key: 'streak', label: 'Streak' },
  { key: 'study', label: 'Study' },
  { key: 'flashcard', label: 'Flashcard' },
  { key: 'special', label: 'Special' },
];

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface BadgeGalleryProps {
  unlockedAchievements: UnlockedAchievement[];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function BadgeGallery({ unlockedAchievements }: BadgeGalleryProps) {
  const { theme, isDark } = useTheme();
  const styles = makeStyles(theme, isDark);
  const [activeTab, setActiveTab] = useState<TabKey>('all');

  const unlockedMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const u of unlockedAchievements) {
      map.set(u.id, u.unlockedAt);
    }
    return map;
  }, [unlockedAchievements]);

  const filtered = useMemo(
    () =>
      activeTab === 'all'
        ? ACHIEVEMENTS
        : ACHIEVEMENTS.filter((a) => a.category === activeTab),
    [activeTab],
  );

  const unlockedCount = unlockedAchievements.length;
  const totalCount = ACHIEVEMENTS.length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Achievements</Text>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>
            {unlockedCount}/{totalCount}
          </Text>
        </View>
      </View>

      {/* Tabs */}
      <FlatList
        horizontal
        data={TABS}
        keyExtractor={(t) => t.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
        renderItem={({ item: tab }) => {
          const active = tab.key === activeTab;
          return (
            <TouchableOpacity
              style={[styles.tab, active && styles.tabActive]}
              onPress={() => setActiveTab(tab.key)}
              activeOpacity={0.7}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* Badge grid */}
      <FlatList
        data={filtered}
        keyExtractor={(a) => a.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const unlockedAt = unlockedMap.get(item.id);
          return (
            <BadgeCard
              achievement={item}
              unlocked={!!unlockedAt}
              unlockedAt={unlockedAt}
            />
          );
        }}
      />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

function makeStyles(theme: ColorTokens, isDark: boolean) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    // -- Header --
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      marginBottom: 12,
    },

    heading: {
      fontSize: 22,
      fontWeight: '800',
      color: theme.text,
    },

    countBadge: {
      backgroundColor: isDark ? 'rgba(59,130,246,0.15)' : 'rgba(30,64,175,0.08)',
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 12,
    },

    countText: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.primary,
    },

    // -- Tabs --
    tabsContainer: {
      paddingHorizontal: 12,
      paddingBottom: 14,
      gap: 8,
    },

    tab: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: isDark ? 'rgba(100,116,139,0.15)' : 'rgba(0,0,0,0.05)',
    },

    tabActive: {
      backgroundColor: theme.primary,
    },

    tabText: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.textSecondary,
    },

    tabTextActive: {
      color: '#ffffff',
    },

    // -- Grid --
    grid: {
      paddingHorizontal: 12,
      paddingBottom: 24,
    },

    row: {
      gap: 12,
      marginBottom: 12,
    },
  });
}
