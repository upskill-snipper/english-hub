import { useEffect, useRef, useState } from 'react';
import * as Network from 'expo-network';

export interface NetworkStatus {
  isConnected: boolean;
  isWifi: boolean;
}

/**
 * Hook that tracks whether the device is online and on Wi-Fi.
 * Polls every 30 seconds using expo-network (already in package.json).
 */
export function useNetworkStatus(): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>({
    isConnected: true, // optimistic default
    isWifi: false,
  });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    async function check() {
      try {
        const state = await Network.getNetworkStateAsync();
        setStatus({
          isConnected: state.isConnected ?? false,
          isWifi: state.type === Network.NetworkStateType.WIFI,
        });
      } catch {
        // If the check itself fails, assume offline
        setStatus({ isConnected: false, isWifi: false });
      }
    }

    // Check immediately on mount
    check();

    // Then poll every 30 seconds
    intervalRef.current = setInterval(check, 30_000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return status;
}
