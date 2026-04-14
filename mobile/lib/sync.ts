import { getItem, setItem } from './storage';
import { getAuthToken } from './auth';

const API_BASE = 'https://theenglishhub.app';

/** Shape of a queued progress update. Keep it flexible so callers can send
 *  whatever the web API expects. */
export interface ProgressUpdate {
  /** ISO 8601 timestamp when the event happened on-device */
  timestamp: string;
  /** Arbitrary payload — lesson completions, quiz scores, etc. */
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Queue management (AsyncStorage-backed)
// ---------------------------------------------------------------------------

async function readQueue(): Promise<ProgressUpdate[]> {
  const queue = await getItem<ProgressUpdate[]>('syncQueue');
  return Array.isArray(queue) ? queue : [];
}

async function writeQueue(queue: ProgressUpdate[]): Promise<void> {
  await setItem('syncQueue', queue);
}

/**
 * Add a progress update to the offline queue.
 * Call this whenever the user completes a lesson / quiz / etc. and you are not
 * sure whether the device is online.
 */
export async function queueProgressUpdate(
  data: Omit<ProgressUpdate, 'timestamp'>,
): Promise<void> {
  const entry: ProgressUpdate = { ...data, timestamp: new Date().toISOString() };
  const queue = await readQueue();
  queue.push(entry);
  await writeQueue(queue);
}

// ---------------------------------------------------------------------------
// Sync helpers
// ---------------------------------------------------------------------------

/**
 * POST the given updates to the web API.  Returns `true` on success.
 */
async function postProgress(updates: ProgressUpdate[]): Promise<boolean> {
  const token = await getAuthToken();
  if (!token) return false;

  try {
    const res = await fetch(`${API_BASE}/api/progress/sync`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ updates }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Flush every queued update to the server, then clear the queue.
 * Designed to be called when the device comes back online.
 */
export async function processQueue(): Promise<void> {
  const queue = await readQueue();
  if (queue.length === 0) return;

  const ok = await postProgress(queue);
  if (ok) {
    await writeQueue([]);
    await setItem('lastSyncTime', new Date().toISOString());
  }
  // If it failed we leave the queue intact so it retries next time.
}

/**
 * Immediately push any pending progress to the API (combines queue flush
 * with the call itself). Convenience wrapper for "sync now" buttons or
 * network-reconnect handlers.
 */
export async function syncProgress(): Promise<void> {
  await processQueue();
}

/**
 * Return the ISO timestamp of the last successful sync, or `null` if the app
 * has never synced.
 */
export async function getLastSyncTime(): Promise<string | null> {
  return getItem<string>('lastSyncTime');
}
