import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { getItem, setItem } from '../../lib/storage';
import TutorialOverlay, { type TutorialStep } from './TutorialOverlay';

// ---------------------------------------------------------------------------
// Context types
// ---------------------------------------------------------------------------

interface TutorialContextValue {
  /** Show a tutorial by id. No-op if the user has already seen it. */
  showTutorial: (id: string, steps: TutorialStep[]) => void;
  /** Check whether a tutorial has been completed before. */
  hasSeenTutorial: (id: string) => boolean;
}

const TutorialContext = createContext<TutorialContextValue | undefined>(undefined);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function TutorialProvider({ children }: { children: React.ReactNode }) {
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  // Active tutorial state
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeSteps, setActiveSteps] = useState<TutorialStep[]>([]);

  // Hydrate from AsyncStorage on mount
  useEffect(() => {
    (async () => {
      const stored = await getItem<string[]>('tutorialsSeen', []);
      if (stored && Array.isArray(stored)) {
        setSeen(new Set(stored));
      }
      setLoaded(true);
    })();
  }, []);

  // Persist helper
  const markSeen = useCallback(
    (id: string) => {
      setSeen((prev) => {
        const next = new Set(prev);
        next.add(id);
        setItem('tutorialsSeen', Array.from(next));
        return next;
      });
    },
    [],
  );

  const hasSeenTutorial = useCallback(
    (id: string) => seen.has(id),
    [seen],
  );

  const showTutorial = useCallback(
    (id: string, steps: TutorialStep[]) => {
      if (seen.has(id) || activeId !== null) return;
      setActiveId(id);
      setActiveSteps(steps);
    },
    [seen, activeId],
  );

  const handleComplete = useCallback(() => {
    if (activeId) {
      markSeen(activeId);
    }
    setActiveId(null);
    setActiveSteps([]);
  }, [activeId, markSeen]);

  const value = useMemo<TutorialContextValue>(
    () => ({ showTutorial, hasSeenTutorial }),
    [showTutorial, hasSeenTutorial],
  );

  // Don't render until persisted state is loaded
  if (!loaded) return null;

  return (
    <TutorialContext.Provider value={value}>
      {children}
      {activeId && activeSteps.length > 0 && (
        <TutorialOverlay steps={activeSteps} onComplete={handleComplete} />
      )}
    </TutorialContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useTutorial(): TutorialContextValue {
  const ctx = useContext(TutorialContext);
  if (!ctx) {
    throw new Error('useTutorial must be used within a TutorialProvider');
  }
  return ctx;
}
