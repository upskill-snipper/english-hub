import type { Metadata } from "next";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: {
    template: "%s | Writing Skills | The English Hub",
    default: "Writing Skills Masterclass | The English Hub",
  },
  description:
    "Master creative, persuasive, and analytical writing plus grammar & punctuation for GCSE English. Board-agnostic guides for AQA, Edexcel, OCR, and Cambridge IGCSE.",
};

/* ─── Layout ─────────────────────────────────────────────────── */

export default function WritingSkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
