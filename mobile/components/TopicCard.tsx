import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';
import type { StudyTopic } from '../data/study-topics';

// ---------------------------------------------------------------------------
// Progress ring (lightweight SVG-free circle)
// ---------------------------------------------------------------------------

function ProgressRing({
  size,
  progress,
  color,
  trackColor,
}: {
  size: number;
  progress: number;
  color: string;
  trackColor: string;
}) {
  // We draw two half-circles using overflow:hidden + rotation to simulate a ring
  // For simplicity at small sizes, use a filled arc approach with borders
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {/* Track */}
      <View
        style={{
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: trackColor,
        }}
      />
      {/* Fill -- right half */}
      {pct > 0 && (
        <View
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: strokeWidth,
            borderColor: 'transparent',
            borderTopColor: color,
            borderRightColor: pct > 25 ? color : 'transparent',
            borderBottomColor: pct > 50 ? color : 'transparent',
            borderLeftColor: pct > 75 ? color : 'transparent',
            transform: [{ rotate: '-45deg' }],
          }}
        />
      )}
      {/* Center label */}
      <Text style={{ fontSize: size * 0.28, fontWeight: '700', color }}>{pct}%</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// TopicCard
// ---------------------------------------------------------------------------

interface TopicCardProps {
  topic: StudyTopic;
  accentColor: string;
  onPress: (topic: StudyTopic) => void;
}

export default function TopicCard({ topic, accentColor, onPress }: TopicCardProps) {
  const { theme } = useTheme();
  const s = makeStyles(theme);

  return (
    <TouchableOpacity
      style={s.card}
      activeOpacity={0.7}
      onPress={() => onPress(topic)}
    >
      {/* Icon + progress row */}
      <View style={s.topRow}>
        <View style={[s.iconCircle, { backgroundColor: accentColor + '18' }]}>
          <Ionicons name={topic.icon as any} size={22} color={accentColor} />
        </View>
        <ProgressRing
          size={38}
          progress={topic.progress}
          color={accentColor}
          trackColor={theme.border}
        />
      </View>

      {/* Title */}
      <Text style={s.title} numberOfLines={1}>
        {topic.title}
      </Text>

      {/* Description */}
      <Text style={s.description} numberOfLines={2}>
        {topic.description}
      </Text>
    </TouchableOpacity>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const CARD_WIDTH = 180;

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    card: {
      width: CARD_WIDTH,
      backgroundColor: t.card,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 14,
      marginRight: 12,
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    iconCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 15,
      fontWeight: '700',
      color: t.text,
      marginBottom: 4,
    },
    description: {
      fontSize: 12,
      color: t.textSecondary,
      lineHeight: 16,
    },
  });
