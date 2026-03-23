import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Language Resources",
  description:
    "GCSE and IGCSE English Language revision resources. Study guides, practice questions, and revision notes for AQA, Edexcel, Cambridge IGCSE, OCR, and WJEC exam boards.",
};

export default function EnglishLanguageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
