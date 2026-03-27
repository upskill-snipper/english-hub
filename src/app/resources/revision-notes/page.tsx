"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── Types ──────────────────────────────────────────────────── */

type Category = "shakespeare" | "nineteenth" | "modern" | "poetry";

type TextCard = {
  title: string;
  slug: string;
  author: string;
  category: Category;
  boards: string[];
  themes: string[];
  colour: string;
  icon: string;
  type: "play" | "novel" | "novella" | "allegory" | "anthology";
};

/* ─── Text data ──────────────────────────────────────────────── */

const TEXTS: TextCard[] = [
  // Shakespeare
  {
    title: "Macbeth",
    slug: "macbeth",
    author: "William Shakespeare",
    category: "shakespeare",
    boards: ["AQA", "Edexcel", "CAIE", "OCR"],
    themes: ["Ambition", "Power", "Guilt", "Supernatural"],
    colour: "from-red-900 to-red-700",
    icon: "crown",
    type: "play",
  },
  {
    title: "Romeo and Juliet",
    slug: "romeo-and-juliet",
    author: "William Shakespeare",
    category: "shakespeare",
    boards: ["AQA", "Edexcel", "CAIE", "OCR"],
    themes: ["Love", "Fate", "Conflict", "Family"],
    colour: "from-rose-700 to-rose-500",
    icon: "heart",
    type: "play",
  },
  {
    title: "The Tempest",
    slug: "the-tempest",
    author: "William Shakespeare",
    category: "shakespeare",
    boards: ["AQA", "Edexcel", "CAIE", "OCR"],
    themes: ["Power", "Colonialism", "Forgiveness", "Magic"],
    colour: "from-blue-800 to-blue-600",
    icon: "storm",
    type: "play",
  },
  {
    title: "Much Ado About Nothing",
    slug: "much-ado-about-nothing",
    author: "William Shakespeare",
    category: "shakespeare",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Deception", "Love", "Honour", "Gender"],
    colour: "from-amber-700 to-amber-500",
    icon: "masks",
    type: "play",
  },
  {
    title: "The Merchant of Venice",
    slug: "merchant-of-venice",
    author: "William Shakespeare",
    category: "shakespeare",
    boards: ["AQA", "Edexcel", "CAIE", "OCR"],
    themes: ["Justice", "Mercy", "Prejudice", "Appearance vs Reality"],
    colour: "from-amber-800 to-amber-600",
    icon: "scales",
    type: "play",
  },
  {
    title: "Othello",
    slug: "othello",
    author: "William Shakespeare",
    category: "shakespeare",
    boards: ["AQA", "Edexcel", "CAIE", "OCR"],
    themes: ["Jealousy", "Race", "Manipulation", "Honour"],
    colour: "from-emerald-900 to-emerald-700",
    icon: "masks",
    type: "play",
  },

  // 19th Century Novels
  {
    title: "A Christmas Carol",
    slug: "christmas-carol",
    author: "Charles Dickens",
    category: "nineteenth",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Redemption", "Poverty", "Social Responsibility", "Christmas"],
    colour: "from-emerald-800 to-emerald-600",
    icon: "candle",
    type: "novella",
  },
  {
    title: "Jekyll and Hyde",
    slug: "jekyll-and-hyde",
    author: "Robert Louis Stevenson",
    category: "nineteenth",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Duality", "Repression", "Science", "Secrecy"],
    colour: "from-violet-900 to-violet-700",
    icon: "potion",
    type: "novella",
  },
  {
    title: "Frankenstein",
    slug: "frankenstein",
    author: "Mary Shelley",
    category: "nineteenth",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Creation", "Responsibility", "Isolation", "Ambition"],
    colour: "from-slate-800 to-slate-600",
    icon: "bolt",
    type: "novel",
  },
  {
    title: "Great Expectations",
    slug: "great-expectations",
    author: "Charles Dickens",
    category: "nineteenth",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Class", "Ambition", "Identity", "Loyalty"],
    colour: "from-yellow-800 to-yellow-600",
    icon: "star",
    type: "novel",
  },
  {
    title: "Jane Eyre",
    slug: "jane-eyre",
    author: "Charlotte Bront\u00EB",
    category: "nineteenth",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Independence", "Class", "Gender", "Love"],
    colour: "from-purple-900 to-purple-700",
    icon: "quill",
    type: "novel",
  },
  {
    title: "Pride and Prejudice",
    slug: "pride-and-prejudice",
    author: "Jane Austen",
    category: "nineteenth",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Love", "Class", "Pride", "Marriage"],
    colour: "from-pink-800 to-pink-600",
    icon: "quill",
    type: "novel",
  },
  {
    title: "The Sign of the Four",
    slug: "sign-of-four",
    author: "Arthur Conan Doyle",
    category: "nineteenth",
    boards: ["Edexcel"],
    themes: ["Justice", "Empire", "Reason vs Emotion", "Wealth"],
    colour: "from-cyan-800 to-cyan-600",
    icon: "magnifier",
    type: "novel",
  },
  {
    title: "Silas Marner",
    slug: "silas-marner",
    author: "George Eliot",
    category: "nineteenth",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Community", "Redemption", "Class", "Isolation"],
    colour: "from-stone-700 to-stone-500",
    icon: "candle",
    type: "novel",
  },

  // Modern Texts
  {
    title: "An Inspector Calls",
    slug: "inspector-calls",
    author: "J.B. Priestley",
    category: "modern",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Responsibility", "Class", "Gender", "Morality"],
    colour: "from-amber-800 to-amber-600",
    icon: "magnifier",
    type: "play",
  },
  {
    title: "Lord of the Flies",
    slug: "lord-of-the-flies",
    author: "William Golding",
    category: "modern",
    boards: ["AQA", "Edexcel", "CAIE", "OCR"],
    themes: ["Civilisation vs Savagery", "Power", "Fear", "Innocence"],
    colour: "from-orange-800 to-orange-600",
    icon: "fire",
    type: "novel",
  },
  {
    title: "Animal Farm",
    slug: "animal-farm",
    author: "George Orwell",
    category: "modern",
    boards: ["AQA", "Edexcel", "CAIE", "OCR"],
    themes: ["Power", "Corruption", "Revolution", "Propaganda"],
    colour: "from-red-800 to-red-600",
    icon: "flag",
    type: "allegory",
  },
  {
    title: "Blood Brothers",
    slug: "blood-brothers",
    author: "Willy Russell",
    category: "modern",
    boards: ["AQA", "Edexcel"],
    themes: ["Class", "Nature vs Nurture", "Superstition", "Friendship"],
    colour: "from-indigo-800 to-indigo-600",
    icon: "twins",
    type: "play",
  },
  {
    title: "Never Let Me Go",
    slug: "never-let-me-go",
    author: "Kazuo Ishiguro",
    category: "modern",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Identity", "Mortality", "Ethics", "Memory"],
    colour: "from-teal-800 to-teal-600",
    icon: "dna",
    type: "novel",
  },
  {
    title: "The Woman in Black",
    slug: "woman-in-black",
    author: "Susan Hill",
    category: "modern",
    boards: ["Edexcel"],
    themes: ["Fear", "Isolation", "Revenge", "Supernatural"],
    colour: "from-gray-900 to-gray-700",
    icon: "ghost",
    type: "novel",
  },
  {
    title: "The Crucible",
    slug: "the-crucible",
    author: "Arthur Miller",
    category: "modern",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Hysteria", "Reputation", "Power", "Integrity"],
    colour: "from-red-900 to-red-700",
    icon: "fire",
    type: "play",
  },
  {
    title: "A View from the Bridge",
    slug: "view-from-the-bridge",
    author: "Arthur Miller",
    category: "modern",
    boards: ["AQA", "Edexcel", "OCR"],
    themes: ["Justice", "Immigration", "Masculinity", "Betrayal"],
    colour: "from-slate-700 to-slate-500",
    icon: "scales",
    type: "play",
  },

  // Poetry Anthologies
  {
    title: "Power and Conflict Poetry",
    slug: "power-and-conflict",
    author: "AQA Anthology",
    category: "poetry",
    boards: ["AQA"],
    themes: ["War", "Power", "Identity", "Nature"],
    colour: "from-stone-800 to-stone-600",
    icon: "scroll",
    type: "anthology",
  },
  {
    title: "Love and Relationships Poetry",
    slug: "love-and-relationships",
    author: "AQA Anthology",
    category: "poetry",
    boards: ["AQA"],
    themes: ["Love", "Memory", "Family", "Distance"],
    colour: "from-fuchsia-800 to-fuchsia-600",
    icon: "feather",
    type: "anthology",
  },
];

const CATEGORIES: { key: Category; label: string; description: string }[] = [
  {
    key: "shakespeare",
    label: "Shakespeare",
    description:
      "Plays studied for the Shakespeare component of GCSE Literature",
  },
  {
    key: "nineteenth",
    label: "19th-Century Novels",
    description: "Novels from the 1800s studied for the prose component",
  },
  {
    key: "modern",
    label: "Modern Texts",
    description:
      "20th-century plays and novels studied for the modern text component",
  },
  {
    key: "poetry",
    label: "Poetry Anthologies",
    description:
      "Set poetry collections studied for the poetry component of GCSE Literature",
  },
];

const BOARDS = ["AQA", "Edexcel", "CAIE", "OCR"] as const;

const TYPE_LABELS: Record<string, { label: string; bg: string; text: string }> =
  {
    play: { label: "Play", bg: "bg-purple-100", text: "text-purple-700" },
    novel: { label: "Novel", bg: "bg-blue-100", text: "text-blue-700" },
    novella: {
      label: "Novella",
      bg: "bg-cyan-100",
      text: "text-cyan-700",
    },
    allegory: {
      label: "Allegory",
      bg: "bg-orange-100",
      text: "text-orange-700",
    },
    anthology: {
      label: "Anthology",
      bg: "bg-emerald-100",
      text: "text-emerald-700",
    },
  };

/* ─── Icons ──────────────────────────────────────────────────── */

function Icon({ name }: { name: string }) {
  const cls = "h-8 w-8";
  const props = {
    className: cls,
    fill: "none" as const,
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
  };

  switch (name) {
    case "crown":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75l3-3 4.5 4.5 4.5-7.5 4.5 4.5 3-3V5.25L18 8.25l-4.5-4.5-4.5 7.5-4.5-4.5L2.25 9v9.75z"
          />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      );
    case "storm":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      );
    case "masks":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      );
    case "candle":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>
      );
    case "potion":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      );
    case "star":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      );
    case "quill":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      );
    case "magnifier":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      );
    case "fire":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
        </svg>
      );
    case "flag":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
          />
        </svg>
      );
    case "twins":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      );
    case "dna":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l-.94.94a1.5 1.5 0 000 2.12l.94.94m0-4l4.24 4.24m10.56-4.24l.94.94a1.5 1.5 0 010 2.12l-.94.94m0-4l-4.24 4.24M5 18.5l4.24-4.24m5.52 0L19.8 18.5"
          />
        </svg>
      );
    case "scroll":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5"
          />
        </svg>
      );
    case "feather":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      );
    case "scales":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
          />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      );
  }
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function RevisionNotesHub() {
  const [search, setSearch] = useState("");
  const [activeBoard, setActiveBoard] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = TEXTS;

    if (activeBoard) {
      result = result.filter((t) => t.boards.includes(activeBoard));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.author.toLowerCase().includes(q) ||
          t.themes.some((th) => th.toLowerCase().includes(q)) ||
          t.boards.some((b) => b.toLowerCase().includes(q))
      );
    }

    return result;
  }, [search, activeBoard]);

  const categoriesWithTexts = CATEGORIES.map((cat) => ({
    ...cat,
    texts: filtered.filter((t) => t.category === cat.key),
  })).filter((cat) => cat.texts.length > 0);

  return (
    <>
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Revision Notes
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Comprehensive, exam-focused revision guides for every major GCSE
          English Literature set text. Each guide includes plot summaries,
          character analysis, key quotations with analysis, thematic
          exploration, historical context, and exam board-specific advice.
        </p>
      </div>

      {/* Search and filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative max-w-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <svg
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search texts, authors, or themes..."
            className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-md placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Exam board filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Filter by exam board:
          </span>
          <button
            onClick={() => setActiveBoard(null)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              activeBoard === null
                ? "bg-primary text-white"
                : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
            }`}
          >
            All Boards
          </button>
          {BOARDS.map((board) => (
            <button
              key={board}
              onClick={() =>
                setActiveBoard(activeBoard === board ? null : board)
              }
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                activeBoard === board
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {board}
            </button>
          ))}
        </div>
      </div>

      {/* No results */}
      {categoriesWithTexts.length === 0 && (
        <div className="rounded-xl border border-border bg-card py-16 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-semibold text-foreground">
            No texts found
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try adjusting your search or clearing the exam board filter.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveBoard(null);
            }}
            className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Text categories */}
      {categoriesWithTexts.map((cat) => (
        <section key={cat.key} className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">{cat.label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cat.texts.map((text) => {
              const typeInfo = TYPE_LABELS[text.type];
              return (
                <Link
                  key={text.slug}
                  href={
                    text.category === "poetry"
                      ? `/resources/poetry/${text.slug}`
                      : `/resources/revision-notes/${text.slug}`
                  }
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-lg hover:border-primary/40"
                >
                  {/* Gradient header */}
                  <div
                    className={`bg-gradient-to-br ${text.colour} px-5 py-5 text-white`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold leading-tight">
                          {text.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/80">
                          {text.author}
                        </p>
                      </div>
                      <div className="opacity-70">
                        <Icon name={text.icon} />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    {/* Type badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${typeInfo.bg} ${typeInfo.text}`}
                      >
                        {typeInfo.label}
                      </span>
                    </div>

                    {/* Themes */}
                    <div className="flex flex-wrap gap-1.5">
                      {text.themes.map((theme) => (
                        <span
                          key={theme}
                          className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>

                    {/* Boards */}
                    <div className="mt-4 flex items-center gap-1.5">
                      {text.boards.map((board) => (
                        <span
                          key={board}
                          className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            activeBoard === board
                              ? "bg-primary text-white"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {board}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                        View revision notes
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      {/* Study tip box */}
      <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-bold text-foreground">
          How to use these revision notes
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Do not just read passively.</strong> Test yourself on
              quotes and themes after each section.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Link quotes to themes.</strong> Every quotation should
              connect to at least two themes for maximum marks.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Learn context actively.</strong> Do not just memorise
              facts -- explain how context shapes the writer&apos;s choices.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong>Practise timed essays.</strong> Use the essay planning
              templates in each guide to structure your responses.
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
