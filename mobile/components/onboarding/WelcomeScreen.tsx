import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  type ViewToken,
  type ListRenderItemInfo,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../../lib/theme';

// ---------------------------------------------------------------------------
// Panel data
// ---------------------------------------------------------------------------

interface Panel {
  key: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
}

const panels: Panel[] = [
  {
    key: 'welcome',
    icon: 'book',
    title: 'Welcome to The English Hub',
    subtitle: 'Your personal GCSE English revision app',
  },
  {
    key: 'learn',
    icon: 'bulb',
    title: 'Learn your way',
    subtitle: 'Quizzes, flashcards, games, and smart review',
  },
  {
    key: 'progress',
    icon: 'trophy',
    title: 'Track your progress',
    subtitle: 'Daily streaks, achievements, and exam countdown',
  },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const flatListRef = useRef<FlatList<Panel>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastPanel = activeIndex === panels.length - 1;

  // Track visible panel
  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
    [],
  );

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  // Advance to next panel or finish
  const handleNext = () => {
    if (isLastPanel) {
      onComplete();
    } else {
      flatListRef.current?.scrollToIndex({ index: activeIndex + 1, animated: true });
    }
  };

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  const renderItem = ({ item }: ListRenderItemInfo<Panel>) => (
    <View style={styles.slide}>
      <View style={styles.iconCircle}>
        <Ionicons name={item.icon} size={56} color={theme.primary} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Skip button */}
      {!isLastPanel && (
        <TouchableOpacity style={styles.skipButton} onPress={onComplete} activeOpacity={0.7}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      {/* Swipeable panels */}
      <FlatList
        ref={flatListRef}
        data={panels}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: SCREEN_WIDTH,
          offset: SCREEN_WIDTH * index,
          index,
        })}
      />

      {/* Dot indicators */}
      <View style={styles.dotsRow}>
        {panels.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === activeIndex ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>

      {/* Bottom action */}
      <TouchableOpacity style={styles.button} onPress={handleNext} activeOpacity={0.8}>
        <Text style={styles.buttonText}>{isLastPanel ? 'Get Started' : 'Next'}</Text>
      </TouchableOpacity>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.background,
      paddingBottom: 48,
    },
    skipButton: {
      position: 'absolute',
      top: 56,
      right: 24,
      zIndex: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    skipText: {
      fontSize: 16,
      fontWeight: '600',
      color: t.textSecondary,
    },
    slide: {
      width: SCREEN_WIDTH,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 40,
    },
    iconCircle: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: t.backgroundSecondary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
    },
    title: {
      fontSize: 26,
      fontWeight: '800',
      color: t.text,
      textAlign: 'center',
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 17,
      color: t.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
    },
    dotsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      marginBottom: 32,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
    },
    dotActive: {
      backgroundColor: t.primary,
      width: 24,
    },
    dotInactive: {
      backgroundColor: t.border,
    },
    button: {
      marginHorizontal: 24,
      backgroundColor: t.primary,
      borderRadius: 14,
      paddingVertical: 16,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#ffffff',
    },
  });
