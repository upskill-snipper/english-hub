// ─── Content Filter Engine ──────────────────────────────────────────────
// Filters AI-generated essay feedback for compliance and cultural
// sensitivity. Supports global rules and Qatar-specific handling.

import {
  PROHIBITED_PATTERNS,
  QATAR_SENSITIVE_PATTERNS,
  REPLACEMENT_MAP,
  CONTENT_WARNINGS,
  ESCALATION_TRIGGERS,
  type FilterRule,
  type ContentWarning,
} from "./content-filter-rules";

// ─── Types ──────────────────────────────────────────────────────────────

export type UserCountry = "UK" | "QA" | "OTHER";

export interface FilterWarning {
  category: string;
  description: string;
  severity: "info" | "warning" | "critical";
}

export interface FilterResult {
  /** The filtered (safe) text */
  filteredText: string;
  /** Any warnings generated during filtering */
  warnings: FilterWarning[];
  /** Whether any content was flagged at all */
  flagged: boolean;
  /** Whether human review is required */
  escalationRequired: boolean;
  /** Content warnings for the literary text, if applicable */
  contentWarnings?: string[];
  /** Categories of content that were modified */
  modifiedCategories: string[];
}

// ─── Literary Context Detection ─────────────────────────────────────────
// Detects whether flagged content appears within a literary analysis
// context, which warrants more lenient treatment.

const LITERARY_CONTEXT_MARKERS = [
  /\b(?:the\s+(?:author|poet|playwright|writer|narrator|character|protagonist|antagonist))\b/i,
  /\b(?:in\s+the\s+(?:text|novel|poem|play|extract|passage|story))\b/i,
  /\b(?:shakespeare|dickens|orwell|shelley|stevenson|golding|priestley|conan\s+doyle|austen|wells)\b/i,
  /\b(?:literary|thematic|metaphor(?:ical)?|symbol(?:ic|ism)?|allegory|motif|imagery|foreshadow(?:ing)?)\b/i,
  /\b(?:the\s+reader|audience|dramatic\s+irony|pathetic\s+fallacy|personification)\b/i,
  /\b(?:stanza|soliloquy|monologue|act\s+\d|scene\s+\d|chapter\s+\d)\b/i,
  /\b(?:exam\s+(?:question|response|answer|technique)|mark\s+scheme|assessment\s+objective|AO[1-4])\b/i,
];

/**
 * Checks whether a piece of text is in a literary analysis context
 * by looking for nearby literary markers.
 */
function isLiteraryContext(text: string, matchIndex: number): boolean {
  // Check a window of ~200 characters around the match
  const windowStart = Math.max(0, matchIndex - 200);
  const windowEnd = Math.min(text.length, matchIndex + 200);
  const window = text.slice(windowStart, windowEnd);

  return LITERARY_CONTEXT_MARKERS.some((marker) => marker.test(window));
}

// ─── Academic Framing ───────────────────────────────────────────────────

/**
 * Wraps a sensitive phrase in academic framing language for Qatar context.
 */
function applyAcademicFraming(
  text: string,
  category: string,
  matchedText: string
): string {
  const framings: Record<string, (matched: string) => string> = {
    "graphic-violence": (m) =>
      `the theme of violence (${m}) as explored in the text`,
    "substance-glorification": (m) =>
      `the literary portrayal of ${m.toLowerCase()}`,
    "relationship-sensitivity": (m) =>
      `the theme of ${m.toLowerCase()} as presented in the text`,
    "lgbtq-sensitivity": (m) =>
      `the literary exploration of ${m.toLowerCase()}`,
    "religious-sensitivity": (m) =>
      `the text's treatment of ${m.toLowerCase()}`,
  };

  const framer = framings[category];
  if (framer) {
    return text.replace(matchedText, framer(matchedText));
  }
  return text;
}

// ─── Core Filter Functions ──────────────────────────────────────────────

/**
 * Apply prohibited-content filters (global, all users).
 */
function applyProhibitedFilters(
  text: string,
  warnings: FilterWarning[],
  modifiedCategories: Set<string>
): { text: string; escalationRequired: boolean } {
  let result = text;
  let escalationRequired = false;

  for (const rule of PROHIBITED_PATTERNS) {
    const matches = result.match(rule.pattern);
    if (!matches) continue;

    for (const match of matches) {
      const matchIndex = result.indexOf(match);

      // Allow literary analysis context for certain categories
      if (
        rule.category === "graphic-violence" &&
        isLiteraryContext(result, matchIndex)
      ) {
        // In literary context, reframe rather than block
        result = applyAcademicFraming(result, rule.category, match);
        warnings.push({
          category: rule.category,
          description: `Literary violence reference reframed: "${match}"`,
          severity: "info",
        });
        modifiedCategories.add(rule.category);
        continue;
      }

      if (rule.severity === "escalate") {
        escalationRequired = true;
        warnings.push({
          category: rule.category,
          description: rule.description,
          severity: "critical",
        });
        modifiedCategories.add(rule.category);
        continue;
      }

      // Apply replacement if available, otherwise redact
      const replacements = REPLACEMENT_MAP[rule.category];
      if (replacements) {
        for (const rep of replacements) {
          result = result.replace(rep.find, rep.replace);
        }
      } else {
        result = result.replace(rule.pattern, "[content removed]");
      }

      warnings.push({
        category: rule.category,
        description: rule.description,
        severity: "warning",
      });
      modifiedCategories.add(rule.category);
    }
  }

  return { text: result, escalationRequired };
}

/**
 * Apply Qatar-specific sensitivity filters.
 */
function applyQatarFilters(
  text: string,
  warnings: FilterWarning[],
  modifiedCategories: Set<string>
): { text: string; escalationRequired: boolean } {
  let result = text;
  let escalationRequired = false;

  for (const rule of QATAR_SENSITIVE_PATTERNS) {
    const matches = result.match(rule.pattern);
    if (!matches) continue;

    for (const match of matches) {
      const matchIndex = result.indexOf(match);
      const inLiteraryContext = isLiteraryContext(result, matchIndex);

      switch (rule.severity) {
        case "escalate":
          escalationRequired = true;
          warnings.push({
            category: rule.category,
            description: rule.description,
            severity: "critical",
          });
          modifiedCategories.add(rule.category);
          break;

        case "replace": {
          if (inLiteraryContext) {
            // In literary context, use academic framing instead of replacing
            result = applyAcademicFraming(result, rule.category, match);
            warnings.push({
              category: rule.category,
              description: `Reframed for academic context: "${match}"`,
              severity: "info",
            });
          } else {
            // Apply replacements from the map
            const replacements = REPLACEMENT_MAP[rule.category];
            if (replacements) {
              for (const rep of replacements) {
                result = result.replace(rep.find, rep.replace);
              }
            }
            warnings.push({
              category: rule.category,
              description: `Content adjusted for cultural sensitivity: "${rule.description}"`,
              severity: "warning",
            });
          }
          modifiedCategories.add(rule.category);
          break;
        }

        case "warn":
          warnings.push({
            category: rule.category,
            description: inLiteraryContext
              ? `Literary reference noted: ${rule.description}`
              : rule.description,
            severity: inLiteraryContext ? "info" : "warning",
          });
          modifiedCategories.add(rule.category);
          break;
      }
    }
  }

  return { text: result, escalationRequired };
}

/**
 * Check for escalation triggers across all users.
 */
function checkEscalationTriggers(
  text: string,
  warnings: FilterWarning[],
  modifiedCategories: Set<string>
): boolean {
  let escalationRequired = false;

  for (const rule of ESCALATION_TRIGGERS) {
    if (rule.pattern.test(text)) {
      escalationRequired = true;
      warnings.push({
        category: rule.category,
        description: rule.description,
        severity: "critical",
      });
      modifiedCategories.add(rule.category);
    }
  }

  return escalationRequired;
}

/**
 * Detect content warnings for known GCSE texts mentioned in the essay
 * topic or feedback.
 */
function detectContentWarnings(
  text: string,
  topic?: string
): string[] | undefined {
  const searchText = `${topic ?? ""} ${text}`.toLowerCase();
  const allWarnings: string[] = [];

  for (const [key, warning] of Object.entries(CONTENT_WARNINGS)) {
    if (searchText.includes(key)) {
      allWarnings.push(
        `${warning.text} contains themes of: ${warning.themes.join(", ")}`
      );
    }
  }

  return allWarnings.length > 0 ? allWarnings : undefined;
}

// ─── Main Export ────────────────────────────────────────────────────────

/**
 * Filters AI-generated feedback text for compliance and cultural
 * sensitivity.
 *
 * @param text     - The raw AI-generated feedback text
 * @param userCountry - The user's country code ("UK", "QA", "OTHER")
 * @param topic    - Optional essay topic, used for content-warning detection
 * @returns FilterResult with filtered text, warnings, and flags
 */
export function filterAIResponse(
  text: string,
  userCountry: UserCountry,
  topic?: string
): FilterResult {
  const warnings: FilterWarning[] = [];
  const modifiedCategories = new Set<string>();
  let escalationRequired = false;

  // 1. Apply global prohibited-content filters
  const prohibited = applyProhibitedFilters(text, warnings, modifiedCategories);
  let filteredText = prohibited.text;
  if (prohibited.escalationRequired) escalationRequired = true;

  // 2. Apply Qatar-specific filters when applicable
  if (userCountry === "QA") {
    const qatar = applyQatarFilters(filteredText, warnings, modifiedCategories);
    filteredText = qatar.text;
    if (qatar.escalationRequired) escalationRequired = true;
  }

  // 3. Check escalation triggers (all users)
  if (checkEscalationTriggers(filteredText, warnings, modifiedCategories)) {
    escalationRequired = true;
  }

  // 4. Detect content warnings for known texts
  const contentWarnings = detectContentWarnings(filteredText, topic);

  return {
    filteredText,
    warnings,
    flagged: warnings.length > 0,
    escalationRequired,
    contentWarnings,
    modifiedCategories: Array.from(modifiedCategories),
  };
}
