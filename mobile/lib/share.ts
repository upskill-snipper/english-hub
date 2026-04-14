// ---------------------------------------------------------------------------
// Share helpers — quiz results, achievements, daily quotes
// ---------------------------------------------------------------------------

import { Share, Platform } from 'react-native';

// ---------------------------------------------------------------------------
// Share quiz result
// ---------------------------------------------------------------------------

export async function shareQuizResult(
  score: number,
  total: number,
  topic: string,
  percentage: number,
): Promise<void> {
  const message = `I scored ${score}/${total} (${percentage}%) on ${topic} in The English Hub! 📚`;

  await Share.share(
    Platform.OS === 'ios' ? { message } : { message, title: 'My Quiz Result' },
  );
}

// ---------------------------------------------------------------------------
// Share achievement
// ---------------------------------------------------------------------------

export async function shareAchievement(title: string): Promise<void> {
  const message = `I just unlocked "${title}" in The English Hub! 🏆`;

  await Share.share(
    Platform.OS === 'ios' ? { message } : { message, title: 'Achievement Unlocked' },
  );
}

// ---------------------------------------------------------------------------
// Share daily quote
// ---------------------------------------------------------------------------

export async function shareDailyQuote(
  quote: string,
  author: string,
  work: string,
): Promise<void> {
  const message = `"${quote}"\n— ${author}, ${work}\n\nShared from The English Hub 📖`;

  await Share.share(
    Platform.OS === 'ios' ? { message } : { message, title: 'Daily Quote' },
  );
}
