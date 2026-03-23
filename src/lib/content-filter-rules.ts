// ─── Content Filter Rules ───────────────────────────────────────────────
// Rule definitions for the AI content filtering system.
// These patterns are used to screen AI-generated essay feedback
// for compliance and cultural sensitivity.

// ─── Types ──────────────────────────────────────────────────────────────

export interface FilterRule {
  pattern: RegExp;
  category: string;
  severity: "block" | "replace" | "warn" | "escalate";
  description: string;
}

export interface ContentWarning {
  text: string;
  themes: string[];
}

// ─── Prohibited Patterns ────────────────────────────────────────────────
// Content that is absolutely prohibited in any AI feedback response.
// These trigger immediate replacement or blocking.

export const PROHIBITED_PATTERNS: FilterRule[] = [
  // Profanity and slurs — common English profanity
  {
    pattern:
      /\b(f[u\*]{1,2}c?k(?:ing|ed|er|s)?|sh[i\*]t(?:ty|s)?|bull\s?sh[i\*]t|a[s\*]{2}hole|b[i\*]tch(?:es|ing)?|damn(?:ed)?|crap(?:py)?|bastard|wanker|piss(?:ed)?|bloody\s?hell)\b/gi,
    category: "profanity",
    severity: "block",
    description: "Profanity or offensive language",
  },
  // Slurs and hate speech
  {
    pattern:
      /\b(retard(?:ed)?|spastic|cripple[ds]?|n[i\*]gg(?:er|a)|f[a\*]gg?(?:ot|ots)?|tranny|dyke)\b/gi,
    category: "hate-speech",
    severity: "block",
    description: "Hate speech or slurs",
  },
  // Sexually explicit content
  {
    pattern:
      /\b(orgasm|masturbat(?:e|ion|ing)|erotic(?:a|ally)?|pornograph(?:y|ic)|genitals?|penis|vagina|intercourse|arousal|nude|naked\s*bod(?:y|ies))\b/gi,
    category: "sexual-content",
    severity: "block",
    description: "Sexually explicit content",
  },
  // Graphic violence (not literary analysis)
  {
    pattern:
      /\b(dismember(?:ed|ment)?|decapitat(?:e|ed|ion)|eviscer(?:ate|ated)|disembowel(?:ed)?|gore\s*(?:filled|soaked)|blood\s*(?:bath|soaked)|mutilat(?:e|ed|ion))\b/gi,
    category: "graphic-violence",
    severity: "block",
    description: "Graphic violence descriptions",
  },
  // Demeaning or discouraging tone toward the student
  {
    pattern:
      /\b(you(?:'re|\s+are)\s+(?:stupid|hopeless|terrible|useless|pathetic|incompetent|an?\s+idiot|dumb)|give\s+up|you(?:'ll|\s+will)\s+never|don'?t\s+bother|waste\s+of\s+time)\b/gi,
    category: "discouraging",
    severity: "block",
    description: "Demeaning or discouraging language toward student",
  },
  // Self-harm or suicide references in feedback
  {
    pattern:
      /\b(kill\s+your\s*self|commit\s+suicide|self[- ]?harm|cut\s+your\s*self|end\s+(?:your|it\s+all))\b/gi,
    category: "self-harm",
    severity: "escalate",
    description: "Self-harm or suicide references",
  },
];

// ─── Qatar-Sensitive Patterns ───────────────────────────────────────────
// Patterns that need careful handling for users in Qatar.
// These don't block content outright but trigger reframing or warnings.

export const QATAR_SENSITIVE_PATTERNS: FilterRule[] = [
  // Religious insensitivity
  {
    pattern:
      /\b(islam(?:ic)?\s+(?:is|promotes?|causes?|leads?\s+to)|anti[- ]?muslim|islamophob(?:ia|ic)|(?:prophet|muhammad)\s+(?:was\s+(?:wrong|violent|false))|infidels?|jihad(?:ist)?|radical\s+islam)\b/gi,
    category: "religious-sensitivity",
    severity: "escalate",
    description: "Content that may be religiously insensitive",
  },
  // Criticism of Gulf states or rulers
  {
    pattern:
      /\b(emir\s+(?:is|was)\s+(?:wrong|corrupt|bad)|qatar(?:i)?\s+(?:regime|dictatorship|oppression)|gulf\s+states?\s+(?:oppress|exploit))\b/gi,
    category: "political-sensitivity",
    severity: "escalate",
    description: "Politically sensitive commentary about Gulf states",
  },
  // Alcohol and substance references in non-academic context
  {
    pattern:
      /\b(get(?:ting)?\s+drunk|binge\s+drink(?:ing)?|wasted|hammered|stoned|high\s+on\s+(?:drugs|weed|marijuana)|drug\s+use\s+is\s+(?:fun|cool|normal|fine))\b/gi,
    category: "substance-glorification",
    severity: "replace",
    description: "Casual glorification of alcohol or substance use",
  },
  // Relationships and sexuality — casual/explicit references
  {
    pattern:
      /\b(hook(?:ing)?\s*up|one[- ]night[- ]stand|sexual\s+(?:partner|encounter|experience)|sleeping\s+(?:with|around|together)|affair|adultery|fornication|premarital\s+(?:sex|relations))\b/gi,
    category: "relationship-sensitivity",
    severity: "replace",
    description: "Casual references to sexual relationships",
  },
  // LGBTQ+ content — not blocked, but flagged for careful academic framing
  {
    pattern:
      /\b(homosexual(?:ity)?|gay\s+(?:relationship|marriage|rights)|lesbian|bisexual|transgender|queer\s+(?:theory|identity|rights)|same[- ]sex\s+(?:marriage|relationship|union))\b/gi,
    category: "lgbtq-sensitivity",
    severity: "warn",
    description:
      "LGBTQ+ references — ensure academic framing in Qatar context",
  },
];

// ─── Replacement Map ────────────────────────────────────────────────────
// Safe alternatives for flagged content. Keys are categories,
// values contain replacement strategies.

export const REPLACEMENT_MAP: Record<
  string,
  { find: RegExp; replace: string }[]
> = {
  "substance-glorification": [
    {
      find: /\b(get(?:ting)?\s+drunk|binge\s+drink(?:ing)?|wasted|hammered)\b/gi,
      replace: "excessive drinking",
    },
    {
      find: /\b(stoned|high\s+on\s+(?:drugs|weed|marijuana))\b/gi,
      replace: "substance misuse",
    },
    {
      find: /\bdrug\s+use\s+is\s+(?:fun|cool|normal|fine)\b/gi,
      replace: "the text portrays substance use",
    },
  ],
  "relationship-sensitivity": [
    {
      find: /\b(hook(?:ing)?\s*up|one[- ]night[- ]stand|sleeping\s+(?:with|around|together))\b/gi,
      replace: "a romantic encounter",
    },
    {
      find: /\b(sexual\s+(?:partner|encounter|experience))\b/gi,
      replace: "intimate relationship",
    },
    {
      find: /\baffair\b/gi,
      replace: "extramarital relationship",
    },
    {
      find: /\b(adultery|fornication|premarital\s+(?:sex|relations))\b/gi,
      replace: "relationships outside marriage",
    },
  ],
  profanity: [
    {
      find: /\b(f[u\*]{1,2}c?k(?:ing|ed|er|s)?)\b/gi,
      replace: "[expletive]",
    },
    {
      find: /\b(sh[i\*]t(?:ty|s)?|bull\s?sh[i\*]t)\b/gi,
      replace: "[expletive]",
    },
    {
      find: /\b(a[s\*]{2}hole|b[i\*]tch(?:es|ing)?|bastard|wanker)\b/gi,
      replace: "[expletive]",
    },
  ],
  "graphic-violence": [
    {
      find: /\b(dismember(?:ed|ment)?|decapitat(?:e|ed|ion)|eviscer(?:ate|ated)|disembowel(?:ed)?)\b/gi,
      replace: "extreme violence",
    },
    {
      find: /\b(gore\s*(?:filled|soaked)|blood\s*(?:bath|soaked))\b/gi,
      replace: "graphic imagery",
    },
    {
      find: /\bmutilat(?:e|ed|ion)\b/gi,
      replace: "bodily harm",
    },
  ],
};

// ─── Content Warnings for GCSE Texts ────────────────────────────────────
// Maps well-known GCSE literature texts to their sensitive themes,
// so feedback can include appropriate content warnings.

export const CONTENT_WARNINGS: Record<string, ContentWarning> = {
  macbeth: {
    text: "Macbeth",
    themes: [
      "violence",
      "murder",
      "supernatural elements",
      "mental illness",
      "suicide",
    ],
  },
  "romeo and juliet": {
    text: "Romeo and Juliet",
    themes: [
      "suicide",
      "violence",
      "underage marriage",
      "family conflict",
      "death",
    ],
  },
  "an inspector calls": {
    text: "An Inspector Calls",
    themes: [
      "suicide",
      "exploitation",
      "class inequality",
      "pregnancy outside marriage",
    ],
  },
  "a christmas carol": {
    text: "A Christmas Carol",
    themes: ["poverty", "child death", "social inequality"],
  },
  "lord of the flies": {
    text: "Lord of the Flies",
    themes: [
      "violence",
      "death",
      "savagery",
      "loss of innocence",
      "mob mentality",
    ],
  },
  "jekyll and hyde": {
    text: "The Strange Case of Dr Jekyll and Mr Hyde",
    themes: [
      "violence",
      "substance abuse",
      "duality of human nature",
      "murder",
    ],
  },
  "animal farm": {
    text: "Animal Farm",
    themes: [
      "political oppression",
      "violence",
      "propaganda",
      "death",
      "totalitarianism",
    ],
  },
  "the sign of four": {
    text: "The Sign of the Four",
    themes: [
      "substance abuse",
      "violence",
      "colonialism",
      "murder",
      "racial stereotypes",
    ],
  },
  frankenstein: {
    text: "Frankenstein",
    themes: [
      "death",
      "murder",
      "playing God",
      "abandonment",
      "execution",
      "mental anguish",
    ],
  },
  "great expectations": {
    text: "Great Expectations",
    themes: [
      "class inequality",
      "child abuse",
      "criminality",
      "death",
      "violence",
    ],
  },
  "pride and prejudice": {
    text: "Pride and Prejudice",
    themes: ["class inequality", "elopement", "social pressure"],
  },
  "the war of the worlds": {
    text: "The War of the Worlds",
    themes: [
      "mass death",
      "invasion",
      "violence",
      "colonialism parallels",
      "societal collapse",
    ],
  },
  // Poetry anthologies
  "power and conflict": {
    text: "Power and Conflict Poetry Anthology",
    themes: [
      "war",
      "violence",
      "death",
      "PTSD",
      "political power",
      "colonialism",
    ],
  },
  "love and relationships": {
    text: "Love and Relationships Poetry Anthology",
    themes: [
      "romantic relationships",
      "family conflict",
      "loss",
      "desire",
      "identity",
    ],
  },
};

// ─── Escalation Triggers ────────────────────────────────────────────────
// Patterns that require human review. When these are detected,
// the response is still delivered but flagged for staff review.

export const ESCALATION_TRIGGERS: FilterRule[] = [
  // AI appearing to give personal advice beyond academic scope
  {
    pattern:
      /\b(you\s+should\s+(?:leave|break\s+up|run\s+away|stop\s+eating|lose\s+weight|take\s+(?:drugs|medication))|i\s+(?:recommend|suggest)\s+(?:therapy|counselling|medication))\b/gi,
    category: "personal-advice",
    severity: "escalate",
    description: "AI giving personal advice beyond academic scope",
  },
  // AI claiming to be a teacher or examiner
  {
    pattern:
      /\b(as\s+your\s+(?:teacher|examiner|tutor|instructor)|i\s+(?:am|'m)\s+(?:a|your)\s+(?:teacher|examiner|qualified|certified))\b/gi,
    category: "false-authority",
    severity: "escalate",
    description: "AI claiming to be a teacher or examiner",
  },
  // Contradicting exam board guidance
  {
    pattern:
      /\b(the\s+exam\s+board\s+(?:is\s+wrong|doesn'?t\s+know|made\s+a\s+mistake)|ignore\s+(?:the\s+)?(?:mark\s+scheme|exam\s+(?:board|criteria)))\b/gi,
    category: "contradicting-authority",
    severity: "escalate",
    description: "AI contradicting exam board guidance",
  },
  // Mentions of specific students or real people (potential data leak)
  {
    pattern:
      /\b(your\s+(?:classmate|friend)\s+\w+\s+(?:said|wrote|told)|(?:mr|mrs|ms|miss|dr)\.\s+[A-Z][a-z]+\s+(?:said|told|thinks))\b/gi,
    category: "data-leak",
    severity: "escalate",
    description: "Potential reference to real individuals",
  },
];
