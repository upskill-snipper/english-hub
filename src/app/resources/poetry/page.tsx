import type { Metadata } from "next";
import Link from "next/link";
import { PoetryHubClient } from "./PoetryHubClient";

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/poetry' },
  title: "Poetry Made Clear - GCSE English Literature Revision",
  description:
    "Comprehensive GCSE poetry revision. AQA Power and Conflict, Love and Relationships, Edexcel anthology analysis, poetry techniques, unseen poetry guides, and comparison skills.",
};

export default function PoetryHubPage() {
  return (
    <>
      <PoetryHubClient />
    </>
  );
}
