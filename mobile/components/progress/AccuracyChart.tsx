import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, type ColorTokens } from '../../lib/theme';
import type { TimeSeries } from '../../data/analytics-types';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface AccuracyChartProps {
  series: TimeSeries;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BAR_MAX_HEIGHT = 120;
const BAR_WIDTH = 28;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function AccuracyChart({ series }: AccuracyChartProps) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const maxValue = 100; // accuracy is always 0-100

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Accuracy</Text>
        <Text style={styles.average}>Avg {series.average}%</Text>
      </View>

      <View style={styles.chartRow}>
        {series.data.map((point, i) => {
          const barHeight = Math.max(
            (point.value / maxValue) * BAR_MAX_HEIGHT,
            2,
          );
          const isEmpty = point.value === 0;

          return (
            <View key={i} style={styles.barColumn}>
              {/* Percentage label */}
              <Text style={[styles.barValue, isEmpty && styles.barValueEmpty]}>
                {isEmpty ? '--' : `${point.value}%`}
              </Text>

              {/* Bar container */}
              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.bar,
                    {
                      height: barHeight,
                      backgroundColor: isEmpty
                        ? theme.border
                        : point.value >= 80
                          ? theme.success
                          : point.value >= 60
                            ? theme.warning
                            : theme.error,
                    },
                  ]}
                />
              </View>

              {/* Day label */}
              <Text style={styles.barLabel}>{point.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    card: {
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 16,
      gap: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: t.text,
    },
    average: {
      fontSize: 14,
      fontWeight: '600',
      color: t.textSecondary,
    },
    chartRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    barColumn: {
      alignItems: 'center',
      flex: 1,
      gap: 6,
    },
    barValue: {
      fontSize: 11,
      fontWeight: '600',
      color: t.text,
    },
    barValueEmpty: {
      color: t.textTertiary,
    },
    barTrack: {
      height: BAR_MAX_HEIGHT,
      width: BAR_WIDTH,
      borderRadius: 6,
      backgroundColor: t.backgroundSecondary,
      justifyContent: 'flex-end',
      overflow: 'hidden',
    },
    bar: {
      width: '100%',
      borderRadius: 6,
    },
    barLabel: {
      fontSize: 12,
      fontWeight: '500',
      color: t.textSecondary,
    },
  });
