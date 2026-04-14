import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Dimensions,
  type LayoutChangeEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, type ColorTokens } from '../lib/theme';
import {
  getCalendarData,
  getCurrentStreak,
  getLongestStreak,
  getWeekTotal,
  type CalendarDayEntry,
} from '../lib/study-calendar';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CELL_SIZE = 14;
const CELL_GAP = 3;
const CELL_STEP = CELL_SIZE + CELL_GAP;
const ROWS = 7; // days in a week (Mon = 0 .. Sun = 6)
const TOTAL_DAYS = 364; // 52 full weeks
const COLS = 52;

const MONTH_LABELS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

// Green intensity shades per theme
const GREENS = {
  light: {
    empty: '#ebedf0',
    low: '#9be9a8',
    medium: '#40c463',
    high: '#30a14e',
    intense: '#216e39',
  },
  dark: {
    empty: '#161b22',
    low: '#0e4429',
    medium: '#006d32',
    high: '#26a641',
    intense: '#39d353',
  },
} as const;

// ---------------------------------------------------------------------------
// Utility
// ---------------------------------------------------------------------------

function intensityColor(
  minutes: number,
  isDark: boolean,
): string {
  const palette = isDark ? GREENS.dark : GREENS.light;
  if (minutes === 0) return palette.empty;
  if (minutes <= 15) return palette.low;
  if (minutes <= 30) return palette.medium;
  if (minutes <= 60) return palette.high;
  return palette.intense;
}

function formatMinutes(m: number): string {
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  return r > 0 ? `${h}h ${r}m` : `${h}h`;
}

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CalendarHeatmap() {
  const { theme, isDark } = useTheme();
  const styles = makeStyles(theme, isDark);

  const scrollRef = useRef<ScrollView>(null);

  const [entries, setEntries] = useState<CalendarDayEntry[]>([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [weekTotal, setWeekTotal] = useState(0);
  const [tooltip, setTooltip] = useState<{ date: string; minutes: number } | null>(null);

  // -----------------------------------------------------------------------
  // Load data
  // -----------------------------------------------------------------------

  const loadData = useCallback(async () => {
    const [cal, cur, lon, wk] = await Promise.all([
      getCalendarData(TOTAL_DAYS),
      getCurrentStreak(),
      getLongestStreak(),
      getWeekTotal(),
    ]);
    setEntries(cal);
    setCurrentStreak(cur);
    setLongestStreak(lon);
    setWeekTotal(wk);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // -----------------------------------------------------------------------
  // Build the grid: column-first (each column is a week, top-to-bottom is
  // Mon..Sun).  We pad the front so the last day in `entries` falls on
  // today's weekday.
  // -----------------------------------------------------------------------

  const { grid, monthLabels } = useMemo(() => {
    if (entries.length === 0)
      return { grid: [] as CalendarDayEntry[][], monthLabels: [] as { label: string; col: number }[] };

    // Determine weekday offset so the final column ends on today.
    const today = new Date();
    // JS getDay(): 0=Sun. Convert to Mon=0..Sun=6
    const todayDow = (today.getDay() + 6) % 7;

    // We want exactly 52 columns. Trim entries from the front so the last
    // entry aligns with todayDow.
    const totalCells = COLS * ROWS;
    // Entries we actually place: last `totalCells - (ROWS - 1 - todayDow)` entries
    const trailingEmpty = ROWS - 1 - todayDow;
    const usable = totalCells - trailingEmpty;
    const trimmedEntries = entries.slice(-usable);

    const columns: CalendarDayEntry[][] = [];
    const labels: { label: string; col: number }[] = [];
    const seenMonths = new Set<string>();

    let idx = 0;
    for (let col = 0; col < COLS; col++) {
      const week: CalendarDayEntry[] = [];
      const rowCount = col === COLS - 1 ? todayDow + 1 : ROWS;
      for (let row = 0; row < ROWS; row++) {
        if (col === COLS - 1 && row > todayDow) {
          // Cells after today in the final column — leave empty placeholder
          week.push({ date: '', minutes: -1 });
        } else if (idx < trimmedEntries.length) {
          const entry = trimmedEntries[idx];
          week.push(entry);

          // Month label: place on the first Monday of each month
          if (row === 0 && entry.date) {
            const month = entry.date.slice(5, 7);
            const key = entry.date.slice(0, 7);
            if (!seenMonths.has(key)) {
              const dayOfMonth = parseInt(entry.date.slice(8, 10), 10);
              if (dayOfMonth <= 7) {
                seenMonths.add(key);
                labels.push({ label: MONTH_LABELS[parseInt(month, 10) - 1], col });
              }
            }
          }
          idx++;
        } else {
          week.push({ date: '', minutes: -1 });
        }
      }
      columns.push(week);
    }

    return { grid: columns, monthLabels: labels };
  }, [entries]);

  // Today's ISO string for border highlighting
  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);

  // Scroll to the right (most recent) on first layout
  const handleLayout = useCallback(
    (_e: LayoutChangeEvent) => {
      setTimeout(() => {
        scrollRef.current?.scrollToEnd({ animated: false });
      }, 50);
    },
    [],
  );

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Ionicons name="calendar-outline" size={20} color={theme.text} />
        <Text style={styles.title}>Study Activity</Text>
      </View>

      {/* Tooltip */}
      {tooltip && (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>
            {tooltip.minutes > 0
              ? `${formatMinutes(tooltip.minutes)} on ${formatDate(tooltip.date)}`
              : `No activity on ${formatDate(tooltip.date)}`}
          </Text>
        </View>
      )}

      {/* Month labels */}
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onLayout={handleLayout}
        contentContainerStyle={styles.scrollContent}
      >
        <View>
          {/* Month label row */}
          <View style={styles.monthRow}>
            {monthLabels.map((ml) => (
              <Text
                key={`${ml.label}-${ml.col}`}
                style={[
                  styles.monthLabel,
                  { left: ml.col * CELL_STEP },
                ]}
              >
                {ml.label}
              </Text>
            ))}
          </View>

          {/* Grid */}
          <View style={styles.gridContainer}>
            {grid.map((week, colIdx) => (
              <View key={colIdx} style={styles.column}>
                {week.map((entry, rowIdx) => {
                  if (entry.minutes < 0) {
                    // Empty placeholder after today
                    return <View key={rowIdx} style={styles.cellEmpty} />;
                  }
                  const isToday = entry.date === todayISO;
                  return (
                    <Pressable
                      key={rowIdx}
                      onPress={() =>
                        setTooltip(
                          tooltip?.date === entry.date ? null : entry,
                        )
                      }
                      style={[
                        styles.cell,
                        {
                          backgroundColor: intensityColor(entry.minutes, isDark),
                        },
                        isToday && styles.cellToday,
                      ]}
                    />
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Legend */}
      <View style={styles.legendRow}>
        <Text style={styles.legendLabel}>Less</Text>
        {[
          isDark ? GREENS.dark.empty : GREENS.light.empty,
          isDark ? GREENS.dark.low : GREENS.light.low,
          isDark ? GREENS.dark.medium : GREENS.light.medium,
          isDark ? GREENS.dark.high : GREENS.light.high,
          isDark ? GREENS.dark.intense : GREENS.light.intense,
        ].map((c, i) => (
          <View key={i} style={[styles.legendCell, { backgroundColor: c }]} />
        ))}
        <Text style={styles.legendLabel}>More</Text>
      </View>

      {/* Summary stats */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Ionicons name="flame" size={16} color="#f97316" />
          <Text style={styles.statText}>
            Current: <Text style={styles.statBold}>{currentStreak} days</Text>
          </Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="trophy-outline" size={16} color={theme.warning} />
          <Text style={styles.statText}>
            Longest: <Text style={styles.statBold}>{longestStreak}</Text>
          </Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="time-outline" size={16} color={theme.primary} />
          <Text style={styles.statText}>
            This week: <Text style={styles.statBold}>{formatMinutes(weekTotal)}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens, isDark: boolean) =>
  StyleSheet.create({
    card: {
      backgroundColor: t.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.cardBorder,
      padding: 16,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    title: {
      fontSize: 16,
      fontWeight: '700',
      color: t.text,
    },
    tooltip: {
      backgroundColor: isDark ? '#334155' : '#1f2937',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 6,
      alignSelf: 'center',
      marginBottom: 8,
    },
    tooltipText: {
      color: '#f1f5f9',
      fontSize: 13,
      fontWeight: '600',
    },
    scrollContent: {
      paddingRight: 8,
    },
    monthRow: {
      height: 18,
      position: 'relative',
      marginBottom: 4,
    },
    monthLabel: {
      position: 'absolute',
      fontSize: 11,
      color: t.textSecondary,
      top: 0,
    },
    gridContainer: {
      flexDirection: 'row',
      gap: CELL_GAP,
    },
    column: {
      gap: CELL_GAP,
    },
    cell: {
      width: CELL_SIZE,
      height: CELL_SIZE,
      borderRadius: 3,
    },
    cellEmpty: {
      width: CELL_SIZE,
      height: CELL_SIZE,
      borderRadius: 3,
      backgroundColor: 'transparent',
    },
    cellToday: {
      borderWidth: 2,
      borderColor: isDark ? '#f1f5f9' : '#1f2937',
    },
    legendRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 4,
      marginTop: 12,
    },
    legendCell: {
      width: 12,
      height: 12,
      borderRadius: 2,
    },
    legendLabel: {
      fontSize: 11,
      color: t.textSecondary,
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingTop: 12,
      borderTopWidth: 1,
      borderTopColor: t.border,
    },
    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    statText: {
      fontSize: 12,
      color: t.textSecondary,
    },
    statBold: {
      fontWeight: '700',
      color: t.text,
    },
  });
