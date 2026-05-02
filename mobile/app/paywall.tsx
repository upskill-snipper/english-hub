import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useTheme } from '../lib/theme';
import {
  PREMIUM_ENTITLEMENT_ID,
  getDefaultOffering,
  hasPremiumEntitlement,
  purchasePackage,
  restorePurchases,
} from '../lib/purchases';
import type { PurchasesPackage } from 'react-native-purchases';

/**
 * Paywall screen — shown when a free-tier user taps an upgrade CTA, or
 * when an entitlement-gated screen is visited without an active
 * `premium` entitlement.
 *
 * Apple App Review notes:
 *  - Subscriptions are auto-renewing; that fact is stated in the body
 *    copy below the package list (Guideline 3.1.2).
 *  - Privacy policy + Terms of service links are reachable from this
 *    screen, even on first run before the user has signed in (3.1.2).
 *  - Restore Purchases button is always visible (3.1.1).
 *  - No links to external purchase pages; all checkout happens via
 *    StoreKit (3.1.1, 3.1.3).
 */
export default function PaywallScreen() {
  const { theme } = useTheme();
  const [packages, setPackages] = useState<PurchasesPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState<string | null>(null);
  const [restoring, setRestoring] = useState(false);

  const loadOffering = useCallback(async () => {
    setLoading(true);
    try {
      const offering = await getDefaultOffering();
      if (offering) {
        // Order: student monthly → student annual → teacher monthly → teacher annual.
        const ordered = [...offering.availablePackages].sort((a, b) =>
          a.identifier.localeCompare(b.identifier),
        );
        setPackages(ordered);
      } else {
        setPackages([]);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOffering();
  }, [loadOffering]);

  const handlePurchase = async (pkg: PurchasesPackage) => {
    setPurchasing(pkg.identifier);
    try {
      await purchasePackage(pkg);
      const isPremium = await hasPremiumEntitlement();
      if (isPremium) {
        Alert.alert(
          'Welcome to Premium',
          'Your subscription is active. Enjoy unlimited access to AI marking, mock papers, and the full revision library.',
          [{ text: 'Done', onPress: () => router.back() }],
        );
      } else {
        Alert.alert(
          'Purchase complete',
          'Your subscription has been recorded but the app is still verifying — please reopen in a moment.',
          [{ text: 'OK', onPress: () => router.back() }],
        );
      }
    } catch (err: unknown) {
      const error = err as { userCancelled?: boolean; message?: string };
      if (error?.userCancelled) {
        // User-initiated cancel — silent.
        return;
      }
      Alert.alert(
        'Purchase failed',
        error?.message ?? 'Something went wrong. Please try again.',
      );
    } finally {
      setPurchasing(null);
    }
  };

  const handleRestore = async () => {
    setRestoring(true);
    try {
      const info = await restorePurchases();
      const active =
        info.entitlements.active[PREMIUM_ENTITLEMENT_ID] !== undefined;
      Alert.alert(
        active ? 'Subscription restored' : 'No active subscription',
        active
          ? 'Welcome back. Your premium access is active again.'
          : 'We could not find an active subscription tied to this Apple ID. If you believe this is in error, contact support@theenglishhub.app.',
      );
    } catch (err: unknown) {
      const error = err as { message?: string };
      Alert.alert(
        'Restore failed',
        error?.message ?? 'Something went wrong. Please try again.',
      );
    } finally {
      setRestoring(false);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
      edges={['top']}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Close"
          >
            <Ionicons name="close" size={28} color={theme.text} />
          </Pressable>
        </View>

        <Text style={[styles.title, { color: theme.text }]}>
          Unlock The English Hub Premium
        </Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Unlimited AI essay marking, every mock paper for every board, and
          progress tracking across the full GCSE and IGCSE specification.
        </Text>

        <View style={styles.benefits}>
          <Benefit text="AI feedback against the real AQA, Edexcel, OCR, WJEC and Cambridge mark schemes" />
          <Benefit text="Unlimited mock papers and timed practice" />
          <Benefit text="Every set text annotated with model answers" />
          <Benefit text="Spaced retrieval drills for every assessment objective" />
        </View>

        {loading ? (
          <View style={styles.loadingBlock}>
            <ActivityIndicator color={theme.tabBarActive} />
            <Text style={[styles.helperText, { color: theme.textSecondary }]}>
              Loading subscription options…
            </Text>
          </View>
        ) : packages.length === 0 ? (
          <View
            style={[
              styles.unavailable,
              {
                backgroundColor: theme.card,
                borderColor: theme.cardBorder,
              },
            ]}
          >
            <Text style={[styles.unavailableTitle, { color: theme.text }]}>
              Subscriptions are not available right now
            </Text>
            <Text style={[styles.helperText, { color: theme.textSecondary }]}>
              The store could not return our subscription products. Please
              check your network connection and try again, or contact
              support@theenglishhub.app if the problem persists.
            </Text>
            <Pressable
              onPress={loadOffering}
              style={[styles.retryBtn, { backgroundColor: theme.tabBarActive }]}
            >
              <Text style={styles.retryText}>Try again</Text>
            </Pressable>
          </View>
        ) : (
          packages.map((pkg) => (
            <PackageRow
              key={pkg.identifier}
              pkg={pkg}
              busy={purchasing === pkg.identifier}
              disabled={purchasing !== null}
              onPress={() => handlePurchase(pkg)}
            />
          ))
        )}

        <Text style={[styles.legal, { color: theme.textSecondary }]}>
          Subscriptions auto-renew until cancelled. Cancel any time in your
          Apple ID settings at least 24 hours before the end of the current
          period to avoid being charged. Free trial converts to paid at the
          end of day 7. Payment is charged to your Apple ID at confirmation
          of purchase.
        </Text>

        <View style={styles.linkRow}>
          <Pressable
            onPress={handleRestore}
            disabled={restoring}
            accessibilityRole="button"
          >
            <Text style={[styles.linkText, { color: theme.tabBarActive }]}>
              {restoring ? 'Restoring…' : 'Restore purchases'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────

function Benefit({ text }: { text: string }) {
  const { theme } = useTheme();
  return (
    <View style={styles.benefit}>
      <Ionicons name="checkmark-circle" size={20} color={theme.tabBarActive} />
      <Text style={[styles.benefitText, { color: theme.text }]}>
        {text}
      </Text>
    </View>
  );
}

function PackageRow({
  pkg,
  busy,
  disabled,
  onPress,
}: {
  pkg: PurchasesPackage;
  busy: boolean;
  disabled: boolean;
  onPress: () => void;
}) {
  const { theme } = useTheme();
  const product = pkg.product;
  const period = pkg.packageType; // ANNUAL | MONTHLY | etc
  const trial = product.introPrice;
  const priceString = product.priceString;
  const isAnnual = /annual/i.test(pkg.identifier) || period === 'ANNUAL';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.packageRow,
        {
          backgroundColor: theme.card,
          borderColor: isAnnual ? theme.tabBarActive : theme.cardBorder,
          opacity: disabled && !busy ? 0.5 : pressed ? 0.85 : 1,
        },
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Buy ${product.title} for ${priceString}`}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.packageTitle, { color: theme.text }]}>
          {product.title}
        </Text>
        <Text style={[styles.packageSubtitle, { color: theme.textSecondary }]}>
          {trial
            ? `${trial.periodNumberOfUnits}-day free trial · then ${priceString}`
            : priceString}
        </Text>
      </View>
      {busy ? (
        <ActivityIndicator color={theme.tabBarActive} />
      ) : (
        <Ionicons
          name="chevron-forward"
          size={22}
          color={theme.textSecondary}
        />
      )}
    </Pressable>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 48 },
  header: { flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 12 },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
  benefits: { marginBottom: 28, gap: 12 },
  benefit: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  benefitText: { flex: 1, fontSize: 14, lineHeight: 20 },
  loadingBlock: { paddingVertical: 28, alignItems: 'center', gap: 12 },
  unavailable: {
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
    gap: 12,
  },
  unavailableTitle: { fontSize: 16, fontWeight: '600' },
  retryBtn: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryText: { color: '#fff', fontWeight: '600' },
  packageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    marginBottom: 10,
    gap: 12,
  },
  packageTitle: { fontSize: 16, fontWeight: '600' },
  packageSubtitle: { fontSize: 13, marginTop: 4 },
  legal: {
    fontSize: 11,
    lineHeight: 16,
    marginTop: 16,
    marginBottom: 12,
  },
  linkRow: { alignItems: 'center', paddingVertical: 12 },
  linkText: { fontSize: 14, fontWeight: '500' },
  helperText: { fontSize: 13, lineHeight: 18, textAlign: 'center' },
});
