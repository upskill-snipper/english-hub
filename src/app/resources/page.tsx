"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Platform Stats ─────────────────────────────────────────── */

const STATS = [
  { value: "150+", label: "Pages of Content" },
  { value: "22+", label: "Study Guides" },
  { value: "50+", label: "Practice Questions" },
  { value: "143", label: "Glossary Terms" },
  { value: "5", label: "Exam Boards" },
  { value: "19", label: "Resource Categories" },
];

/* ─── "Start Here" pathways ──────────────────────────────────── */

const PATHWAYS = [
  {
    need: "Revising a text",
    description: "Concise, exam-focused notes for quick reference and last-minute revision across every topic.",
    destination: "Revision Notes",
    href: "/resources/revision-notes",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    color: "bg-blue-50 text-[#1A5276] border-[#2E86C1]/30",
    featured: true,
  },
  {
    need: "Practising questions",
    description: "Exam-style questions with mark scheme breakdowns, model answers, and timing tips.",
    destination: "Practice Questions",
    href: "/resources/practice",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-700 border-emerald-300/50",
    featured: true,
  },
  {
    need: "Preparing for exams",
    description: "Complete exam breakdowns: paper structure, mark allocation, timing strategies, and common pitfalls.",
    destination: "Exam Guide",
    href: "/resources/exam-guide",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    color: "bg-rose-50 text-rose-700 border-rose-300/50",
    featured: true,
  },
  {
    need: "Improving writing",
    description: "Creative, persuasive, and analytical writing masterclasses with model examples.",
    destination: "Writing Skills",
    href: "/resources/writing-skills",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-700 border-amber-300/50",
    featured: false,
  },
  {
    need: "Learning techniques",
    description: "Master language and structural techniques with real examples and effects.",
    destination: "Techniques Toolkit",
    href: "/resources/techniques",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-700 border-purple-300/50",
    featured: false,
  },
  {
    need: "Analysing poetry",
    description: "Poem-by-poem guides for every anthology cluster with comparative links.",
    destination: "Poetry Hub",
    href: "/resources/poetry",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: "bg-indigo-50 text-indigo-700 border-indigo-300/50",
    featured: false,
  },
];

/* ─── Exam Boards ────────────────────────────────────────────── */

const EXAM_BOARDS = [
  {
    slug: "aqa",
    name: "AQA",
    description:
      "The most popular GCSE English exam board in England. Two papers for Language (8700) and two papers plus a Shakespeare/poetry component for Literature (8702).",
    specs: ["Language 8700", "Literature 8702"],
    color: "border-[#2E86C1]",
    bgColor: "bg-[#2E86C1]/5",
    students: "60%+ of UK students",
  },
  {
    slug: "edexcel",
    name: "Edexcel (Pearson)",
    description:
      "Widely used across the UK. Edexcel GCSE English Language (1EN0) and Literature (1ET0) with a focus on 19th-century and modern texts.",
    specs: ["Language 1EN0", "Literature 1ET0"],
    color: "border-[#27AE60]",
    bgColor: "bg-[#27AE60]/5",
    students: "Popular choice",
  },
  {
    slug: "caie",
    name: "Cambridge IGCSE",
    description:
      "The international standard. Cambridge IGCSE English as a First Language (0500) and Literature in English (0475), used worldwide.",
    specs: ["First Language 0500", "Literature 0475"],
    color: "border-[#E74C3C]",
    bgColor: "bg-[#E74C3C]/5",
    students: "International standard",
  },
  {
    slug: "ocr",
    name: "OCR",
    description:
      "Oxford, Cambridge and RSA exam board. OCR GCSE English Language (J351) and Literature (J352) with distinctive anthology choices.",
    specs: ["Language J351", "Literature J352"],
    color: "border-[#8E44AD]",
    bgColor: "bg-[#8E44AD]/5",
    students: "Growing popularity",
  },
  {
    slug: "wjec",
    name: "WJEC Eduqas",
    description:
      "The Welsh exam board also widely used in England. WJEC Eduqas GCSE English Language (C700) and Literature (C720) with a strong focus on unseen texts.",
    specs: ["Language C700", "Literature C720"],
    color: "border-[#D35400]",
    bgColor: "bg-[#D35400]/5",
    students: "Wales & England",
  },
];

/* ─── All 19 Resource Categories (organised by group) ────────── */

interface ResourceCategory {
  title: string;
  description: string;
  href: string;
  count: string;
  icon: React.ReactNode;
  boards: string[];
}

const RESOURCE_GROUPS: {
  groupLabel: string;
  groupDescription: string;
  groupIcon: React.ReactNode;
  categories: ResourceCategory[];
}[] = [
  {
    groupLabel: "Core Subjects",
    groupDescription: "Jump straight into your subject",
    groupIcon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    categories: [
      {
        title: "English Language",
        description: "Full coverage of reading and writing papers across all exam boards.",
        href: "/resources/english-language",
        count: "40+ pages",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
        ),
      },
      {
        title: "English Literature",
        description: "Set text guides, essay skills, and poetry analysis for every board.",
        href: "/resources/english-literature",
        count: "35+ pages",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
        ),
      },
    ],
  },
  {
    groupLabel: "Study & Revision",
    groupDescription: "Everything you need to learn and retain the material",
    groupIcon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    categories: [
      {
        title: "Revision Notes",
        description: "Concise, exam-focused notes for quick reference and last-minute prep.",
        href: "/resources/revision-notes",
        count: "20+ topics",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
        ),
      },
      {
        title: "Practice Questions",
        description: "Exam-style questions with model answers and mark scheme breakdowns.",
        href: "/resources/practice",
        count: "50+ questions",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        ),
      },
      {
        title: "Model Answers",
        description: "Full-mark annotated model answers showing exactly how to achieve top grades.",
        href: "/resources/model-answers",
        count: "30+ answers",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        ),
      },
      {
        title: "Vocabulary",
        description: "Essential vocabulary lists and exercises to boost your expression.",
        href: "/resources/vocabulary",
        count: "500+ words",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3" />
          </svg>
        ),
      },
      {
        title: "Glossary",
        description: "Definitions of key literary and linguistic terms with examples.",
        href: "/resources/glossary",
        count: "143 terms",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        ),
      },
    ],
  },
  {
    groupLabel: "Skills & Techniques",
    groupDescription: "Build the core skills examiners are looking for",
    groupIcon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
    categories: [
      {
        title: "Writing Skills",
        description: "Creative, persuasive, and analytical writing masterclasses.",
        href: "/resources/writing-skills",
        count: "15+ guides",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        ),
      },
      {
        title: "Techniques",
        description: "Language, structural, and poetic techniques with real examples.",
        href: "/resources/techniques",
        count: "80+ techniques",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
          </svg>
        ),
      },
      {
        title: "Comparison Skills",
        description: "How to compare texts, poems, and extracts effectively in essays.",
        href: "/resources/comparison",
        count: "10+ guides",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        ),
      },
      {
        title: "Spoken Language",
        description: "Presentation skills and spoken language endorsement guidance.",
        href: "/resources/spoken-language",
        count: "5+ guides",
        boards: ["AQA", "Edexcel", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
        ),
      },
    ],
  },
  {
    groupLabel: "Texts & Poetry",
    groupDescription: "Deep analysis of set texts, poems, themes, and contexts",
    groupIcon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    categories: [
      {
        title: "Poetry",
        description: "Poem-by-poem guides for every anthology cluster with comparison links.",
        href: "/resources/poetry",
        count: "30+ poems",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        ),
      },
      {
        title: "Context",
        description: "Historical, social, and literary context for every set text.",
        href: "/resources/context",
        count: "15+ texts",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        ),
      },
      {
        title: "Themes",
        description: "Thematic analysis across set texts with cross-text comparison points.",
        href: "/resources/themes",
        count: "25+ themes",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
        ),
      },
    ],
  },
  {
    groupLabel: "Exams & Progress",
    groupDescription: "Exam preparation, strategy, and tracking your improvement",
    groupIcon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    categories: [
      {
        title: "Exam Guides",
        description: "Complete breakdowns of every paper: structure, marks, and timing.",
        href: "/resources/exam-guide",
        count: "8+ guides",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
          </svg>
        ),
      },
      {
        title: "Exam Technique",
        description: "Timing strategies, mark allocation, and common pitfalls to avoid.",
        href: "/resources/exam-technique",
        count: "12+ tips",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        title: "Grade Targets",
        description: "Understand what examiners want at each grade boundary with examples.",
        href: "/resources/grade-targets",
        count: "Grade 4-9",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-7.54 0" />
          </svg>
        ),
      },
      {
        title: "Study Tools",
        description: "Flashcards, timelines, mind maps, and interactive revision aids.",
        href: "/resources/study-tools",
        count: "10+ tools",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.645 3.258a.75.75 0 01-1.084-.853l1.57-5.927a.75.75 0 00-.255-.72L.942 6.822a.75.75 0 01.443-1.34l6.066-.29a.75.75 0 00.636-.434L10.68.74a.75.75 0 011.388 0l2.593 5.018a.75.75 0 00.636.434l6.066.29a.75.75 0 01.443 1.34l-4.558 3.907a.75.75 0 00-.255.72l1.57 5.927a.75.75 0 01-1.084.853l-5.645-3.258a.75.75 0 00-.76 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    groupLabel: "For Teachers",
    groupDescription: "Lesson plans, worksheets, and assessment tools",
    groupIcon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    categories: [
      {
        title: "Teaching Resources",
        description: "Lesson plans, worksheets, PowerPoints, and differentiated activities.",
        href: "/resources/teaching",
        count: "20+ resources",
        boards: ["AQA", "Edexcel", "CAIE", "OCR"],
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
          </svg>
        ),
      },
    ],
  },
];

/* ─── Most Popular Resources ─────────────────────────────────── */

const POPULAR_RESOURCES = [
  {
    title: "AQA Paper 1: Creative Reading & Writing",
    subject: "English Language",
    board: "AQA",
    href: "/resources/english-language/aqa/paper-1",
    tag: "Most popular",
    description: "Complete walkthrough of Question 1-5 with model answers, timing tips, and examiner commentary.",
  },
  {
    title: "An Inspector Calls Study Guide",
    subject: "English Literature",
    board: "AQA",
    href: "/resources/english-literature/aqa",
    tag: "Trending",
    description: "Characters, themes, context, and Grade 9 essay plans for Priestley's classic.",
  },
  {
    title: "Language Techniques Toolkit",
    subject: "English Language",
    board: "All boards",
    href: "/resources/techniques",
    tag: "Essential",
    description: "80+ techniques with definitions, examples, and analysis of their effects.",
  },
  {
    title: "Macbeth: Complete Revision Guide",
    subject: "English Literature",
    board: "AQA",
    href: "/resources/english-literature/aqa",
    tag: "Top rated",
    description: "Act-by-act summary, key quotes, character analysis, and theme exploration.",
  },
  {
    title: "AQA Paper 2: Writers' Viewpoints",
    subject: "English Language",
    board: "AQA",
    href: "/resources/english-language/aqa/paper-2",
    tag: "Popular",
    description: "Non-fiction reading and transactional writing with comparison techniques.",
  },
  {
    title: "Power & Conflict Poetry Anthology",
    subject: "English Literature",
    board: "AQA",
    href: "/resources/poetry",
    tag: "Essential",
    description: "All 15 poems analysed with comparison grids and essay plans.",
  },
];

/* ─── Icons ──────────────────────────────────────────────────── */

function SearchIcon({ className = "h-5 w-5 text-gray-400" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-[#2E86C1]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
    </svg>
  );
}

/* ─── Tag colour helper ──────────────────────────────────────── */

function tagColor(tag: string) {
  switch (tag) {
    case "Most popular":
      return "bg-[#2E86C1]/10 text-[#2E86C1]";
    case "Trending":
      return "bg-amber-100 text-amber-700";
    case "Essential":
      return "bg-emerald-100 text-emerald-700";
    case "Top rated":
      return "bg-purple-100 text-purple-700";
    case "Popular":
      return "bg-rose-100 text-rose-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

/* ─── Page Component ─────────────────────────────────────────── */

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);

  /* Flatten all categories for search filtering */
  const allCategories = useMemo(
    () => RESOURCE_GROUPS.flatMap((g) => g.categories),
    [],
  );

  /* Filter categories by search and board */
  const filteredGroups = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return RESOURCE_GROUPS.map((group) => ({
      ...group,
      categories: group.categories.filter((cat) => {
        const matchesSearch =
          !query ||
          cat.title.toLowerCase().includes(query) ||
          cat.description.toLowerCase().includes(query);
        const matchesBoard =
          !selectedBoard || cat.boards.includes(selectedBoard);
        return matchesSearch && matchesBoard;
      }),
    })).filter((group) => group.categories.length > 0);
  }, [searchQuery, selectedBoard]);

  /* Filter popular resources by board */
  const filteredPopular = useMemo(() => {
    if (!selectedBoard) return POPULAR_RESOURCES;
    return POPULAR_RESOURCES.filter(
      (r) => r.board === selectedBoard || r.board === "All boards",
    );
  }, [selectedBoard]);

  const boardFilters = [
    { slug: null, label: "All Boards" },
    { slug: "AQA", label: "AQA" },
    { slug: "Edexcel", label: "Edexcel" },
    { slug: "CAIE", label: "Cambridge" },
    { slug: "OCR", label: "OCR" },
    { slug: "WJEC", label: "WJEC" },
  ];

  return (
    <>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A5276] via-[#1A5276]/95 to-[#2E86C1]/80 px-4 py-16 text-white sm:py-20 lg:py-24">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#2E86C1]/30 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Free GCSE &amp; IGCSE English Resources
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Ace English
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Comprehensive revision resources for GCSE and IGCSE English Language
            and Literature. Study guides, practice questions, model answers, and
            more -- tailored to your exam board.
          </p>

          {/* Search bar */}
          <div className="relative mx-auto mt-8 max-w-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <SearchIcon />
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources, topics, or techniques..."
              className="w-full rounded-xl border-0 bg-white/95 py-3.5 pl-11 pr-4 text-sm text-gray-900 shadow-lg placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E86C1]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Quick subject links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/resources/revision-notes"
              className="rounded-lg bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Revision Notes
            </Link>
            <Link
              href="/resources/practice"
              className="rounded-lg bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Practice Questions
            </Link>
            <Link
              href="/resources/exam-guide"
              className="rounded-lg bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Exam Guide
            </Link>
            <Link
              href="/resources/english-language"
              className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              English Language
            </Link>
            <Link
              href="/resources/english-literature"
              className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              English Literature
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/10 px-4 py-3.5 text-center backdrop-blur-sm"
              >
                <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-white/70 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          START HERE -- Pathway Selector
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Not Sure Where to Start?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              These three resources are where most students begin. Pick one and
              you will be revising in under a minute.
            </p>
          </div>

          {/* Featured 3 starting points */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PATHWAYS.filter((p) => p.featured).map((pathway) => (
              <Link
                key={pathway.href}
                href={pathway.href}
                className={`group relative flex flex-col items-center rounded-2xl border-2 ${pathway.color} bg-white p-8 text-center shadow-sm transition hover:shadow-lg hover:-translate-y-0.5`}
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2E86C1] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  Start Here
                </span>
                <div className={`rounded-xl p-3 ${pathway.color}`}>
                  {pathway.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                  {pathway.destination}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {pathway.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2E86C1]">
                  Get started <ArrowRight />
                </span>
              </Link>
            ))}
          </div>

          {/* Additional pathways */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PATHWAYS.filter((p) => !p.featured).map((pathway) => (
              <Link
                key={pathway.href}
                href={pathway.href}
                className={`group flex items-start gap-4 rounded-xl border ${pathway.color} bg-white p-5 shadow-sm transition hover:shadow-md`}
              >
                <div className={`mt-0.5 shrink-0 rounded-lg p-2 ${pathway.color}`}>
                  {pathway.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    I need help...
                  </p>
                  <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                    {pathway.need}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {pathway.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#2E86C1]">
                    Go to {pathway.destination} <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EXAM BOARD QUICK-SELECT
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Choose Your Exam Board
          </h2>
          <p className="mt-2 text-gray-600">
            Select your exam board to see tailored revision materials, mark
            schemes, and exam tips. All resources below will filter accordingly.
          </p>

          {/* Filter pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {boardFilters.map((board) => (
              <button
                key={board.label}
                onClick={() => setSelectedBoard(board.slug)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E86C1] ${
                  selectedBoard === board.slug
                    ? "bg-[#1A5276] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-[#2E86C1]/10 hover:text-[#2E86C1]"
                }`}
              >
                {board.label}
              </button>
            ))}
          </div>

          {/* Board detail cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {EXAM_BOARDS.map((board) => {
              const isActive =
                selectedBoard === board.name.split(" ")[0] ||
                (board.slug === "caie" && selectedBoard === "CAIE");
              return (
                <Link
                  key={board.slug}
                  href={`/resources/english-language/${board.slug}`}
                  className={`group flex flex-col rounded-xl border-2 ${board.color} ${
                    isActive ? board.bgColor : "bg-white"
                  } p-6 shadow-sm transition hover:shadow-md`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                      {board.name}
                    </h3>
                    {isActive && (
                      <span className="rounded-full bg-[#2E86C1] px-2 py-0.5 text-[10px] font-bold text-white">
                        SELECTED
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {board.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#2E86C1]">
                    {board.students}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {board.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2E86C1] group-hover:text-[#1A5276] transition-colors">
                    View resources <ArrowRight />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Quick links to exam board hubs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-gray-500">Jump to board hub:</span>
            {[
              { label: "AQA", href: "/resources/english-language/aqa" },
              { label: "Edexcel", href: "/resources/english-language/edexcel" },
              { label: "CAIE", href: "/resources/english-language/caie" },
              { label: "OCR", href: "/resources/english-language/ocr" },
              { label: "WJEC", href: "/resources/english-language/wjec" },
            ].map((board) => (
              <Link
                key={board.label}
                href={board.href}
                className="rounded-full border border-[#2E86C1]/30 bg-[#2E86C1]/5 px-4 py-1.5 text-sm font-semibold text-[#1A5276] transition hover:bg-[#2E86C1]/15 hover:border-[#2E86C1]/50"
              >
                {board.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MOST POPULAR RESOURCES
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Most Popular Resources
              </h2>
              <p className="mt-2 text-gray-600">
                Our most-used revision materials, chosen by thousands of
                students.
              </p>
            </div>
            <Link
              href="/resources/practice"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E86C1] hover:text-[#1A5276] transition-colors"
            >
              View all practice questions <ArrowRight />
            </Link>
          </div>

          {filteredPopular.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPopular.map((item) => (
                <Link
                  key={item.href + item.title}
                  href={item.href}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#2E86C1]/40"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${tagColor(
                        item.tag,
                      )}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-xs text-gray-400">{item.board}</span>
                  </div>
                  <h3 className="mt-3 text-base font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.subject}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2E86C1] group-hover:text-[#1A5276] transition-colors">
                    Start revising <ArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
              <p className="text-gray-500">
                No popular resources match the selected board. Try selecting
                &quot;All Boards&quot; above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ALL 19 RESOURCE CATEGORIES -- Organised Grid
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Browse All Resources
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              {allCategories.length} resource categories organised into logical
              groups. Use the search bar or board filter above to narrow your
              results.
            </p>
          </div>

          {searchQuery && filteredGroups.length === 0 && (
            <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
              <SearchIcon className="mx-auto h-10 w-10 text-gray-300" />
              <h3 className="mt-4 text-lg font-semibold text-gray-700">
                No results for &quot;{searchQuery}&quot;
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try a different search term or{" "}
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#2E86C1] hover:underline"
                >
                  clear the search
                </button>
                .
              </p>
            </div>
          )}

          <div className="mt-10 space-y-12">
            {filteredGroups.map((group) => (
              <div key={group.groupLabel}>
                {/* Group header */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                  <span className="text-[#1A5276]">{group.groupIcon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {group.groupLabel}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {group.groupDescription}
                    </p>
                  </div>
                </div>

                {/* Category cards */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-[#2E86C1]/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[#2E86C1]">{cat.icon}</span>
                        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-500">
                          {cat.count}
                        </span>
                      </div>
                      <h4 className="mt-3 text-base font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                        {cat.title}
                      </h4>
                      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-500">
                        {cat.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2E86C1] group-hover:text-[#1A5276] transition-colors">
                        Explore <ArrowRight />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AI FEEDBACK PROMOTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            {/* Left: copy */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                <SparklesIcon />
                AI-Powered
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Get Instant AI Feedback on Your Writing
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Paste your essay or creative writing and receive detailed,
                examiner-style feedback in seconds. Our AI understands mark
                schemes for AQA, Edexcel, Cambridge, and OCR -- so you get
                advice that actually matches what examiners look for.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Grade prediction based on real mark scheme criteria",
                  "Paragraph-by-paragraph annotation with improvement tips",
                  "Technique identification and vocabulary suggestions",
                  "Works for Language Paper 1, Paper 2, and Literature essays",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/90">
                    <CheckIcon />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/feedback"
                  className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#1A5276] shadow-lg transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Try AI Feedback Free
                </Link>
                <Link
                  href="/feedback"
                  className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  See Example Feedback
                </Link>
              </div>
            </div>

            {/* Right: visual mock */}
            <div className="w-full max-w-sm shrink-0 lg:w-96">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-3 w-3/4 rounded bg-white/20" />
                  <div className="h-3 w-full rounded bg-white/15" />
                  <div className="h-3 w-5/6 rounded bg-white/20" />
                  <div className="mt-4 rounded-lg bg-white/15 p-3">
                    <div className="flex items-center gap-2">
                      <SparklesIcon />
                      <span className="text-sm font-semibold text-white">
                        AI Feedback
                      </span>
                    </div>
                    <div className="mt-2 space-y-1.5">
                      <div className="h-2.5 w-full rounded bg-white/20" />
                      <div className="h-2.5 w-4/5 rounded bg-white/15" />
                      <div className="h-2.5 w-3/4 rounded bg-white/20" />
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="rounded bg-emerald-500/30 px-2 py-0.5 text-xs font-bold text-emerald-300">
                        Grade 7
                      </span>
                      <span className="text-xs text-white/60">
                        Strong analysis, room for improvement in structure
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TEACHER RESOURCES CALLOUT
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:flex">
            {/* Left panel */}
            <div className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/90 p-8 text-white lg:w-2/5 lg:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                </svg>
                For Educators
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Teacher Resources
              </h2>
              <p className="mt-4 leading-relaxed text-white/85">
                Save hours of planning with our ready-made lesson plans,
                differentiated worksheets, PowerPoint presentations, and
                assessment tools. All aligned to current GCSE and IGCSE
                specifications.
              </p>
              <Link
                href="/resources/teaching"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-[#1A5276] shadow transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Teaching Resources <ArrowRight />
              </Link>
            </div>

            {/* Right panel - features */}
            <div className="p-8 lg:w-3/5 lg:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Lesson Plans",
                    description:
                      "Ready-made, editable lesson plans for Language and Literature with differentiated activities.",
                    count: "10+ plans",
                  },
                  {
                    title: "Worksheets",
                    description:
                      "Printable worksheets covering key skills, techniques, and exam practice.",
                    count: "15+ sheets",
                  },
                  {
                    title: "Assessment Tools",
                    description:
                      "Mark schemes, assessment grids, and student tracking templates.",
                    count: "5+ tools",
                  },
                  {
                    title: "Presentations",
                    description:
                      "PowerPoint and Google Slides presentations ready to use in class.",
                    count: "Coming soon",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <span className="rounded-full bg-[#2E86C1]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#2E86C1]">
                        {feature.count}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          QUICK LINKS / FINAL CTA
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Ready to Start Revising?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Pick your subject below or use the search bar at the top of the page
            to find exactly what you need.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/resources/english-language"
              className="rounded-xl bg-[#1A5276] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#1A5276]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E86C1]"
            >
              English Language Resources
            </Link>
            <Link
              href="/resources/english-literature"
              className="rounded-xl bg-[#2E86C1] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#2E86C1]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276]"
            >
              English Literature Resources
            </Link>
            <Link
              href="/feedback"
              className="rounded-xl border-2 border-[#1A5276] bg-white px-8 py-3.5 text-sm font-bold text-[#1A5276] transition hover:bg-[#1A5276]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E86C1]"
            >
              Try AI Feedback
            </Link>
          </div>

          {/* Quick-link chips */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {[
              { label: "Revision Notes", href: "/resources/revision-notes" },
              { label: "Practice Questions", href: "/resources/practice" },
              { label: "Model Answers", href: "/resources/model-answers" },
              { label: "Writing Skills", href: "/resources/writing-skills" },
              { label: "Techniques", href: "/resources/techniques" },
              { label: "Poetry", href: "/resources/poetry" },
              { label: "Exam Technique", href: "/resources/exam-technique" },
              { label: "Glossary", href: "/resources/glossary" },
              { label: "Grade Targets", href: "/resources/grade-targets" },
              { label: "Context", href: "/resources/context" },
              { label: "Themes", href: "/resources/themes" },
              { label: "Comparison", href: "/resources/comparison" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-600 transition hover:border-[#2E86C1]/40 hover:bg-[#2E86C1]/5 hover:text-[#2E86C1]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
