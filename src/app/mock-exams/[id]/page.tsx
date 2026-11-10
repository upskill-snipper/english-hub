'use client'

import { useState, useEffect, useCallback, useMemo, use } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Award,
  FileText,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Hash,
  Timer,
  Send,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Target,
  Sparkles,
  BookOpen,
  Eye,
  PenLine,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { saveMarkingDraft } from '@/lib/marking/draft-store'
import { resolveHandoffQuestion, resolveHandoffTarget } from '@/lib/marking/mock-handoff'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import {
  persistMockAttempt,
  type MockAttemptQuestion,
  type PersistOutcome,
} from '@/lib/mock-exams/persist-attempt'
import { useRouter } from 'next/navigation'
import { useT } from '@/lib/i18n/use-t'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'

// ─── Types ──────────────────────────────────────────────────────────────────

interface GradeBoundary {
  grade: number
  minMarks: number
}

interface ExamQuestion {
  number: number
  label: string
  marks: number
  type: string
  prompt: string
  sourceText?: string
  isMultipleChoice?: boolean
  options?: string[]
  /**
   * Indices into `options` that are correct. Multiple choice is the only
   * question type the app can genuinely mark, and only when this is present.
   */
  correctOptions?: number[]
  markScheme?: string[]
  modelAnswer?: string
}

interface ExamPaperData {
  id: string
  paperName: string
  paperType: 'language' | 'literature'
  paperNumber: 1 | 2
  examBoard: string
  timeAllowed: string
  timeMinutes: number
  totalMarks: number
  questions: ExamQuestion[]
  gradeBoundaries: GradeBoundary[]
  sectionA?: string
  sectionB?: string
}

type ExamPhase = 'intro' | 'exam' | 'results'

// ─── Grade Boundaries ───────────────────────────────────────────────────────

const AQA_LANG_P1_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 68 },
  { grade: 8, minMarks: 61 },
  { grade: 7, minMarks: 54 },
  { grade: 6, minMarks: 46 },
  { grade: 5, minMarks: 38 },
  { grade: 4, minMarks: 30 },
  { grade: 3, minMarks: 22 },
  { grade: 2, minMarks: 14 },
  { grade: 1, minMarks: 7 },
]

const AQA_LANG_P2_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 67 },
  { grade: 8, minMarks: 60 },
  { grade: 7, minMarks: 52 },
  { grade: 6, minMarks: 44 },
  { grade: 5, minMarks: 36 },
  { grade: 4, minMarks: 28 },
  { grade: 3, minMarks: 21 },
  { grade: 2, minMarks: 14 },
  { grade: 1, minMarks: 7 },
]

const AQA_LIT_P1_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 56 },
  { grade: 8, minMarks: 50 },
  { grade: 7, minMarks: 44 },
  { grade: 6, minMarks: 37 },
  { grade: 5, minMarks: 30 },
  { grade: 4, minMarks: 24 },
  { grade: 3, minMarks: 18 },
  { grade: 2, minMarks: 12 },
  { grade: 1, minMarks: 6 },
]

const AQA_LIT_P2_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 79 },
  { grade: 8, minMarks: 71 },
  { grade: 7, minMarks: 62 },
  { grade: 6, minMarks: 53 },
  { grade: 5, minMarks: 44 },
  { grade: 4, minMarks: 35 },
  { grade: 3, minMarks: 26 },
  { grade: 2, minMarks: 17 },
  { grade: 1, minMarks: 9 },
]

// ─── Exam Paper Data ────────────────────────────────────────────────────────

const EXAM_PAPERS: Record<string, ExamPaperData> = {
  'aqa-lang-p1': {
    // AQA's 2026 questions, set here on 31 October 2026 as
    // src/data/mark-scheme-guides/aqa-lang-paper1.ts describes them (the note
    // above the AQA papers in src/data/mock-exams/base.ts gives the detail).
    // Question 1 was "List four things", the form AQA dropped in 2026; it is
    // now four parts, 1.1 to 1.4, each with one right answer of three. It
    // stays a written answer: this page's own multiple-choice control picks
    // four options from one list, so it cannot set parts, and its letters
    // would not be the parts' A, B and C. Question 3 names one effect,
    // Question 4 asks how far you agree or disagree, Question 5's picture is
    // for ideas only, and the prompts and mark schemes are in this site's own
    // words rather than AQA's rubric. The questions had sent the student to
    // "lines 1 to 5" of a source this page prints as one paragraph; they now
    // quote where each part begins and ends.
    // Checked by a second reader, 31 October 2026: Question 1's parts each have
    // one right answer (B, A, C, B). One fix: Question 2's scheme called the
    // "thin golden line" the only warmth in the room, which the radiator's
    // "little warmth" contradicts; it is now the one touch of colour.
    id: 'aqa-lang-p1',
    paperName: 'English Language Paper 1',
    paperType: 'language',
    paperNumber: 1,
    examBoard: 'AQA',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 80,
    sectionA: 'Reading',
    sectionB: 'Writing',
    gradeBoundaries: AQA_LANG_P1_BOUNDARIES,
    questions: [
      {
        number: 1,
        label: 'Multiple choice, 1.1 to 1.4',
        marks: 4,
        type: 'Retrieval',
        prompt:
          'Read the first three sentences of the source again, from "The morning light crept" to "web of fine cracks."\n\nAnswer the four parts below about these sentences only. For each part, choose one answer: A, B or C. Write your answers as the part number and your letter.\n\n1.1 How does the light come into the room?\nA) Through an open door\nB) Through a small opening in the curtains\nC) Through a crack in the ceiling\n\n1.2 What time of day is it?\nA) Early in the day\nB) Late in the evening\nC) The middle of the night\n\n1.3 What fills the room?\nA) New furniture\nB) Towers of books\nC) Piles of papers and boxes\n\n1.4 What can be seen in the mirror?\nA) The dusty floorboards\nB) A drooping ceiling covered in thin cracks\nC) The curtains and the window',
        sourceText: `The morning light crept through the narrow gap in the curtains, casting a thin golden line across the dusty floorboards. The room was small and cluttered, filled with towers of old newspapers and cardboard boxes that hadn't been opened in years. A cracked mirror hung at an angle on the far wall, reflecting the sagging ceiling with its web of fine cracks. The air was thick with the smell of damp wool and stale tea. In the corner, a radiator ticked and groaned as it struggled to life, offering little warmth against the February chill that had settled into every surface.`,
        markScheme: [
          '1.1 B: the light "crept through the narrow gap in the curtains". C borrows the cracks, which are in the ceiling, not where the light comes in.',
          '1.2 A: it is "The morning light", so it is early in the day.',
          '1.3 C: the room is "filled with towers of old newspapers and cardboard boxes". B borrows the word "towers", but there are no books.',
          '1.4 B: the mirror is "reflecting the sagging ceiling with its web of fine cracks". The floorboards in A are in the room, but not in the mirror.',
          'One mark for each part answered correctly, 4 in all. Give one letter for each part: the question asks for one answer to each.',
        ],
      },
      {
        number: 2,
        label: 'Language analysis',
        marks: 8,
        type: 'Language Analysis',
        prompt:
          'Read the whole source again, from "The morning light crept" to "settled into every surface."\n\nExplain how the writer uses language to describe the room.\n\nYou might write about:\n- particular words and phrases\n- techniques such as imagery\n- the way the sentences are built.',
        sourceText: `The morning light crept through the narrow gap in the curtains, casting a thin golden line across the dusty floorboards. The room was small and cluttered, filled with towers of old newspapers and cardboard boxes that hadn't been opened in years. A cracked mirror hung at an angle on the far wall, reflecting the sagging ceiling with its web of fine cracks. The air was thick with the smell of damp wool and stale tea. In the corner, a radiator ticked and groaned as it struggled to life, offering little warmth against the February chill that had settled into every surface.`,
        markScheme: [
          "Level 4 (7-8 marks): analyses how the writer's choices work and what they suggest, with sharply chosen quotations and precise use of subject terms.",
          'Level 3 (5-6 marks): explains clearly what effect the words have on the reader and why, with a range of well-chosen quotations and techniques named correctly.',
          'Level 2 (3-4 marks): tries to say what some of the language does, with a few suitable quotations and some subject terms.',
          'Level 1 (1-2 marks): says something simple about a word or two, or names a technique without saying what it does.',
          'Points you might make: the light "crept", as if reluctant to come in, and the "thin golden line" is the one touch of colour in the room; "towers of old newspapers" exaggerates the clutter; the "cracked mirror" and the "sagging ceiling with its web of fine cracks" suggest decay; "damp wool and stale tea" appeals to the sense of smell; the radiator "ticked and groaned as it struggled to life", like something old and tired.',
        ],
        modelAnswer:
          'The writer uses personification when describing the light as it "crept" through the curtains, suggesting something secretive or hesitant, as though the morning itself is reluctant to enter this neglected space. The metaphor of "towers" of newspapers creates an image of instability and accumulation, implying the occupant has been overwhelmed by the passage of time. The verb "groaned" applied to the radiator gives it a sense of exhaustion, mirroring the decay of the room itself.',
      },
      {
        number: 3,
        label: 'Structure analysis',
        marks: 8,
        type: 'Structure',
        prompt:
          'This question is about the whole source, which is the opening of a short story. The source is printed with Questions 1 and 2.\n\nHow does the writer structure the source to create a sense of neglect?\n\nStructure means the order and shape of the text. You might write about:\n- what the writer shows you first\n- how the focus moves around the room, and why\n- how the source ends.',
        markScheme: [
          'Level 4 (7-8 marks): analyses how the shape of the whole source builds the sense of neglect, with sharply chosen examples and confident, precise structural terms.',
          "Level 3 (5-6 marks): explains clearly how several of the writer's structural choices create the sense of neglect, with suitable examples and correct terms.",
          'Level 2 (3-4 marks): tries to say what some structural features do, such as a change of focus, with a few examples.',
          'Level 1 (1-2 marks): notices one or two things about the order of the source, often by retelling it.',
          'Every point should link back to the sense of neglect, and the answer should cover the source from its opening to its end.',
          'Points you might make: the opening follows a "thin golden line" of light across "dusty floorboards", so the first thing the light shows is dust; the focus then moves through the clutter to the far wall and up to the "sagging ceiling", as if the eye is searching the room; a shift from sight to smell ("damp wool and stale tea") brings the neglect closer; the ending moves to a corner and a radiator that "struggled to life", and the final words, "settled into every surface", spread the chill through the whole room, so the morning light of the first sentence gives way to cold.',
        ],
      },
      {
        number: 4,
        label: 'Evaluation',
        marks: 20,
        type: 'Evaluation',
        prompt:
          'Read the second half of the source again, from "A cracked mirror" to "settled into every surface." The source is printed with Questions 1 and 2.\n\nA student said: "In this part of the source, the writer makes you feel sorry for whoever lives in this room. It is as though they have been forgotten by the world."\n\nHow far do you agree or disagree with this view? You may agree, disagree, or do some of each.\n\nWrite about how the room, and whoever lives there, come across to you, and the methods the writer uses to create that impression, with evidence from the text for each point you make.',
        markScheme: [
          "Level 4 (16-20 marks): argues a confident, thoughtful case about the view, showing in depth how the writer's methods work on the reader, with sharply chosen evidence throughout.",
          "Level 3 (11-15 marks): makes a sound, well-supported judgement, showing how the writer's methods shape the reader's response, with plenty of relevant evidence.",
          "Level 2 (6-10 marks): starts to weigh up the view, with some comment on the writer's methods and how they affect the reader, backed by a few suitable references.",
          'Level 1 (1-5 marks): gives a basic opinion on the view, with a little about the source and a reference or two.',
          'Agreeing, disagreeing and doing some of both can all score well. For the view: the "cracked mirror" still hangs "at an angle", as if nobody has straightened it; the smell of "damp wool and stale tea" suggests a room no one airs; the radiator offers "little warmth". Against it, or complicating it: we never meet the person, so any sympathy is for someone the reader must imagine, and the tea and a radiator that "struggled to life" suggest that someone is still there and still trying.',
        ],
      },
      {
        number: 5,
        label: 'Creative writing',
        marks: 40,
        type: 'Creative Writing',
        prompt:
          'A local history group is collecting writing by young people about places that time has left behind, for a booklet it will give to visitors at its open day.\n\nChoose ONE of these two tasks.\n\nEither:\nWrite a description of a place that has stood empty for many years. In the exam, a picture is printed here to give you ideas. It would show an old, empty building with plants growing over its walls and in through its broken windows. You do not have to describe exactly what it shows.\n\nOr:\nWrite the opening of a story about a place that everyone has forgotten.\n\nThis task is worth 40 marks: 24 for the content and organisation of your writing, and 16 for its accuracy (sentences, spelling and punctuation).',
        markScheme: [
          'Content and organisation (24 marks):',
          'Level 4 (19-24): grips the reader from start to finish, with a confident, original voice, ambitious and exact vocabulary, and a structure planned for the greatest effect.',
          'Level 3 (13-18): keeps the reader interested throughout, with a tone that suits the task, vocabulary and techniques chosen for effect, and well-linked paragraphs.',
          'Level 2 (7-12): holds the reader in places, with some words chosen deliberately and paragraphs that begin to organise the piece.',
          'Level 1 (1-6): gets a few simple ideas across, with plain vocabulary and little sense of shape.',
          'Writing that does not do what the chosen task asks cannot score more than 12 of these 24 marks. The picture is there for ideas, so listing what it shows earns little, and the story task asks only for an opening.',
          '',
          'Technical accuracy (16 marks):',
          'Level 4 (13-16): every sentence starts and ends in the right place, every kind of punctuation is used with skill, and even adventurous words are spelt correctly.',
          'Level 3 (9-12): sentences nearly always start and end in the right place, most punctuation is used well, and sentence types are varied on purpose.',
          'Level 2 (5-8): sentences usually start and end in the right place, several kinds of punctuation are tried, and some harder words are spelt correctly.',
          'Level 1 (1-4): a few sentences start and end in the right place, and simple words are spelt correctly.',
        ],
      },
    ],
  },

  'aqa-lang-p2': {
    // AQA's 2026 questions, set here on 31 October 2026 as
    // src/data/mark-scheme-guides/aqa-lang-paper2.ts describes them. Question 2
    // asked for "a summary of the differences"; it now asks what you can infer
    // about the differences between the two schools. Two of Question 1's four
    // keyed statements were not in Source A: the head teacher had been "a
    // fixture of the village" for fifteen years, which does not say she had
    // worked at the school that long, and the children were "all sharing"
    // desks, never two to a desk. D and G now say what the source says, H no
    // longer adds "immediately" to a warm greeting, and F, a garden, is now
    // the fields the windows do not look out on; the key is unchanged.
    // Question 3 names its lines, and the prompts and mark schemes are in this
    // site's own words rather than AQA's rubric.
    // Checked by a second reader, 31 October 2026: Question 1's key (B, D, G,
    // H) holds. Fixes:
    //   - the sources were labelled "a 2019 newspaper article" and "a 2022
    //     report"; neither is a real publication (no such text on this site or
    //     the web), so each label now says it was written for this paper;
    //   - Question 2 opened with AQA's stock "Use details from both sources",
    //     and Question 5 kept AQA's "in which you ... on this statement"; both
    //     reworded;
    //   - Question 2's scheme listed details, not inferences; it now says what
    //     each pair suggests;
    //   - Question 4 did not say where the two sources are printed; it does.
    // Still open: AQA's Paper 2 always sets one 19th-century source, and both
    // of these are modern. That needs a new source, not a relabel.
    id: 'aqa-lang-p2',
    paperName: 'English Language Paper 2',
    paperType: 'language',
    paperNumber: 2,
    examBoard: 'AQA',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 80,
    sectionA: 'Reading',
    sectionB: 'Writing',
    gradeBoundaries: AQA_LANG_P2_BOUNDARIES,
    questions: [
      {
        number: 1,
        label: 'Four true statements',
        marks: 4,
        type: 'Retrieval',
        prompt:
          'Read Source A again, from "I arrived at the small village school" to "by the look of them."\n\nWhich four of the statements below are true, according to Source A? Choose four, and no more.',
        isMultipleChoice: true,
        options: [
          'The writer visited the school on a Monday morning.',
          'The school was located in a rural village.',
          'There were approximately thirty children in the classroom.',
          'The head teacher had been a familiar figure in the village for more than ten years.',
          'The children were wearing school uniforms.',
          'The classroom windows looked out over the fields.',
          'The children shared desks that were old and worn.',
          'The staff greeted the writer in a friendly way.',
        ],
        // B, D, G, H per the mark scheme below
        correctOptions: [1, 3, 6, 7],
        sourceText: `Source A: Written for this practice paper, in the style of a newspaper article about education in rural communities. It is not a real published article.\n\nI arrived at the small village school on a Tuesday morning, just as the bell was ringing. The building sat at the edge of the village, its red brick walls softened by years of ivy. Inside, the single classroom held roughly twenty-five children of various ages, all sharing wooden desks that had been worn smooth by generations of use. Large windows flooded the room with pale morning light, looking out over a courtyard rather than the surrounding fields. The head teacher, Mrs Patterson, had been a fixture of the village for fifteen years. She greeted me warmly, as did the two teaching assistants who bustled about organising exercise books. The children wore no uniforms -- just everyday clothes, many hand-me-downs by the look of them.`,
        markScheme: [
          'B: The school was located in a rural village (TRUE): a "small village school" at "the edge of the village", among "the surrounding fields".',
          'D: The head teacher had been a familiar figure in the village for more than ten years (TRUE): she "had been a fixture of the village for fifteen years".',
          'G: The children shared desks that were old and worn (TRUE): they were "all sharing wooden desks that had been worn smooth by generations of use".',
          'H: The staff greeted the writer in a friendly way (TRUE): "She greeted me warmly, as did the two teaching assistants".',
          'The others are false: the visit was on "a Tuesday morning" (A); there were "roughly twenty-five children" (C); "The children wore no uniforms" (E); the windows looked "out over a courtyard rather than the surrounding fields" (F).',
          'One mark for each true statement chosen, up to 4.',
        ],
      },
      {
        number: 2,
        label: 'Inference: the differences',
        marks: 8,
        type: 'Inference',
        prompt:
          'This question is about both sources. Source A is printed with Question 1.\n\nWhat can you infer about the differences between the village school in Source A and the city academy in Source B?\n\nBack up each inference with details from both sources.',
        sourceText: `Source A describes a small rural village school. Source B (below) describes a modern city academy.\n\nSource B: Written for this practice paper, in the style of a report on urban education. It is not a real published report.\n\nThe academy was a glass-and-steel structure that dominated the end of the high street, its entrance framed by digital screens displaying the school motto and latest Ofsted rating. Over twelve hundred students passed through its automatic doors each morning, scanned in by electronic registers. Each child wore an immaculate blazer in the school's signature navy and gold. Classrooms were equipped with interactive whiteboards, individual laptops, and climate control. The corridors hummed with efficiency. Department heads managed teams of specialists; the maths department alone had eleven teachers. There was a sense of relentless forward motion, of targets and data driving every decision.`,
        markScheme: [
          'Level 4 (7-8 marks): makes sharp, thoughtful inferences and weaves precise details from both sources together to bring out the differences.',
          'Level 3 (5-6 marks): draws sound inferences from both sources and links well-chosen details from each to show the differences.',
          'Level 2 (3-4 marks): makes some attempt to work out what details suggest, with some useful references and some differences noted.',
          'Level 1 (1-2 marks): retells what the sources say rather than working anything out, with a simple difference and a detail or two.',
          'An answer that uses one source only scores 3 marks at most, and Level 3 and above need both sources. The marks are for what you infer, not for analysing language.',
          'Differences you might infer: the village school, with "roughly twenty-five children" in "the single classroom", is small enough for everyone to know each other, while the academy, whose "Over twelve hundred students" are "scanned in by electronic registers", seems vast and impersonal; the village school makes do with what is old, desks "worn smooth by generations of use", while a "glass-and-steel structure" with "individual laptops" and "climate control" suggests money to spend; "everyday clothes, many hand-me-downs" suggest families with little to spare, while "an immaculate blazer in the school\'s signature navy and gold" suggests a school that cares how it looks; a head teacher who "greeted me warmly" suggests a personal welcome, while "targets and data driving every decision" suggests pressure to perform.',
        ],
      },
      {
        number: 3,
        label: 'Language analysis',
        marks: 12,
        type: 'Language Analysis',
        prompt:
          'This question is about Source B only, from "The academy was a glass-and-steel structure" to "driving every decision." Source B is printed with Question 2.\n\nHow does the writer use language to describe the academy and what it is like inside?\n\nYou might write about:\n- particular words and phrases\n- techniques such as imagery and lists\n- the way the sentences are built.',
        markScheme: [
          "Level 4 (10-12 marks): looks beneath the surface, analysing how the writer's choices work together, with sharply chosen quotations and confident, precise subject terms.",
          'Level 3 (7-9 marks): for each quotation, says plainly what effect the words have on the reader and why, using several well-chosen quotations and correct terms.',
          'Level 2 (4-6 marks): tries to say what some of the language does, with a few suitable quotations and some terms.',
          'Level 1 (1-3 marks): says something basic about a word or two, or names a technique without saying what it does.',
          'An answer that writes about Source A goes to the bottom of the level it would otherwise reach.',
          'Points you might make: "dominated" makes the building powerful, even overbearing; "scanned in by electronic registers" makes the students sound like goods at a checkout; the list "interactive whiteboards, individual laptops, and climate control" shows how much the school has; "The corridors hummed with efficiency" makes it sound like a machine; "relentless forward motion" and "targets and data driving every decision" suggest pressure that never stops.',
        ],
      },
      {
        number: 4,
        label: 'Comparison of viewpoints',
        marks: 16,
        type: 'Comparison',
        prompt:
          "This question is about both sources, from beginning to end. Source A is printed with Question 1 and Source B with Question 2.\n\nCompare the writers' feelings and perspectives about the schools they describe, and the methods each writer uses to get them across.\n\nYou might:\n- compare what each writer seems to feel about the school, and why\n- compare their methods, such as the details they choose, their words and their tone\n- back up each point with references to both sources.",
        markScheme: [
          "Level 4 (13-16 marks): a thoughtful, sustained comparison, analysing how each writer's methods shape their perspective, with well-chosen detail from both sources.",
          'Level 3 (9-12 marks): compares the perspectives directly and well, explaining how each writer conveys them, with relevant detail from both sources.',
          "Level 2 (5-8 marks): tries to compare the writers' perspectives, with some comment on their methods and some useful detail.",
          "Level 1 (1-4 marks): makes a basic link between the writers' views and spots a method or two, with simple references.",
          'An answer that uses one source only scores 6 marks at most, and Level 3 and above need both sources. Compare how the writers say things, not only what they say.',
        ],
      },
      {
        number: 5,
        label: 'Transactional writing',
        marks: 40,
        type: 'Transactional Writing',
        prompt:
          '"Technology in schools does more harm than good. Students would learn better with books, pens, and face-to-face teaching."\n\nWrite a speech to give at a meeting of your school\'s governors, setting out your own view on this statement.\n\nThis task is worth 40 marks: 24 for the content and organisation of your writing, and 16 for its accuracy (sentences, spelling and punctuation).',
        markScheme: [
          'Content and organisation (24 marks):',
          'Level 4 (19-24): argues with real force and confidence, pitched exactly for the audience, with ambitious, exact vocabulary and a carefully planned structure.',
          'Level 3 (13-18): argues clearly throughout, in a tone that suits a speech to governors, with persuasive methods chosen for effect and well-linked paragraphs.',
          'Level 2 (7-12): puts a view across in places, with some attempt at a suitable tone and paragraphs that begin to organise the argument.',
          'Level 1 (1-6): states a view simply, with little sense of the audience.',
          'Writing that does not respond to the statement in the way the task asks cannot score more than 12 of these 24 marks.',
          '',
          'Technical accuracy (16 marks):',
          'Level 4 (13-16): every sentence starts and ends in the right place, every kind of punctuation is used with skill, and even adventurous words are spelt correctly.',
          'Level 3 (9-12): sentences nearly always start and end in the right place, most punctuation is used well, and sentence types are varied on purpose.',
          'Level 2 (5-8): sentences usually start and end in the right place, several kinds of punctuation are tried, and some harder words are spelt correctly.',
          'Level 1 (1-4): a few sentences start and end in the right place, and simple words are spelt correctly.',
        ],
      },
    ],
  },

  'aqa-lit-p1': {
    id: 'aqa-lit-p1',
    paperName: 'English Literature Paper 1',
    paperType: 'literature',
    paperNumber: 1,
    examBoard: 'AQA',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 64,
    gradeBoundaries: AQA_LIT_P1_BOUNDARIES,
    questions: [
      {
        number: 1,
        label: 'Shakespeare: Macbeth',
        marks: 34,
        type: 'Extract + Essay',
        prompt:
          "Read the following extract from Act 1 Scene 7 of Macbeth and then answer the question that follows.\n\nIn this extract, Macbeth is debating whether to murder King Duncan.\n\n---\n\nMACBETH:\nIf it were done when 'tis done, then 'twere well\nIt were done quickly. If th' assassination\nCould trammel up the consequence, and catch\nWith his surcease success; that but this blow\nMight be the be-all and the end-all here,\nBut here, upon this bank and shoal of time,\nWe'd jump the life to come.\n\n---\n\nStarting with this extract, how does Shakespeare present Macbeth's inner conflict?\n\nWrite about:\n- how Shakespeare presents Macbeth's conflict in this extract\n- how Shakespeare presents Macbeth's conflict in the play as a whole.\n\n[30 marks + 4 marks for AO4 (spelling, punctuation, grammar)]",
        markScheme: [
          'AO1: Read, understand and respond to texts. Maintain a critical style and develop an informed personal response. Use textual references to support and illustrate interpretations.',
          'AO2: Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.',
          'AO3: Show understanding of the relationships between texts and the contexts in which they were written.',
          'AO4: Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
          '',
          "Level 6 (26-30): Critical, exploratory, conceptualised response. Judicious use of precise references. Analysis of writer's methods with subject terminology used judiciously.",
          "Level 5 (21-25): Thoughtful, developed response. Apt references integrated into interpretations. Examination of writer's methods with subject terminology used effectively.",
          "Level 4 (16-20): Clear, sustained response. Effective use of references. Clear understanding of writer's methods with appropriate subject terminology.",
        ],
      },
      {
        number: 2,
        label: '19th-century novel: A Christmas Carol',
        marks: 30,
        type: 'Extract + Essay',
        prompt:
          'Read the following extract from A Christmas Carol by Charles Dickens and then answer the question that follows.\n\nIn this extract, Scrooge is being visited by the Ghost of Christmas Present.\n\n---\n\n"Spirit," said Scrooge, with an interest he had never felt before, "tell me if Tiny Tim will live."\n\n"I see a vacant seat," replied the Ghost, "in the poor chimney-corner, and a crutch without an owner, carefully preserved. If these shadows remain unaltered by the Future, the child will die."\n\n"No, no," said Scrooge. "Oh, no, kind Spirit! say he will be spared."\n\n---\n\nStarting with this extract, how does Dickens present the character of Scrooge as someone who is changing?\n\nWrite about:\n- how Dickens presents Scrooge in this extract\n- how Dickens presents Scrooge\'s transformation in the novel as a whole.\n\n[30 marks]',
        markScheme: [
          'AO1: Read, understand and respond to texts with personal response and textual references.',
          'AO2: Analyse language, form and structure with relevant terminology.',
          'AO3: Show understanding of contexts.',
          '',
          'Level 6 (26-30): Critical, exploratory, conceptualised response.',
          'Level 5 (21-25): Thoughtful, developed response with apt references.',
          'Level 4 (16-20): Clear, sustained response with effective references.',
        ],
      },
    ],
  },

  'aqa-lit-p2': {
    id: 'aqa-lit-p2',
    paperName: 'English Literature Paper 2',
    paperType: 'literature',
    paperNumber: 2,
    examBoard: 'AQA',
    timeAllowed: '2 hours 15 minutes',
    timeMinutes: 135,
    totalMarks: 96,
    gradeBoundaries: AQA_LIT_P2_BOUNDARIES,
    questions: [
      {
        number: 1,
        label: 'Modern text: An Inspector Calls',
        marks: 34,
        type: 'Essay',
        prompt:
          'How does Priestley use the character of Mr Birling to explore ideas about social responsibility?\n\nWrite about:\n- how Priestley presents Mr Birling\n- how Priestley uses Mr Birling to explore ideas about social responsibility.\n\n[30 marks + 4 marks for AO4 (spelling, punctuation, grammar)]',
        markScheme: [
          "Level 6 (26-30): Critical, exploratory, conceptualised response with judicious references. Analysis of writer's methods with terminology used judiciously.",
          'Level 5 (21-25): Thoughtful, developed response with apt references.',
          'Level 4 (16-20): Clear, sustained response with effective use of references.',
        ],
      },
      {
        number: 2,
        label: 'Poetry anthology comparison',
        marks: 30,
        type: 'Comparison',
        prompt:
          'Compare how poets present ideas about power and conflict in "Ozymandias" by Percy Bysshe Shelley and one other poem from the anthology.\n\n[30 marks]',
        markScheme: [
          'Level 6 (26-30): Critical, exploratory comparison. Judicious references. Analysis of methods with terminology used judiciously.',
          'Level 5 (21-25): Thoughtful, developed comparison with apt references.',
          'Level 4 (16-20): Clear comparison with effective references.',
        ],
      },
      {
        number: 3,
        label: 'Unseen poetry',
        marks: 32,
        type: 'Analysis + Comparison',
        prompt:
          'Part A (24 marks):\n\nRead the poem below. In "Storm on the Island" by Seamus Heaney, the speaker describes the experience of a violent storm.\n\nHow does the poet present the power of nature in this poem?\n\n---\n\nPart B (8 marks):\n\nNow read "Wind" by Ted Hughes.\n\nIn both poems, the poets describe the power of nature. What are the similarities and differences between the ways the poets present the power of nature in these two poems?',
        markScheme: [
          'Part A (24 marks):',
          'Level 4 (19-24): Exploratory response with precise references. Detailed analysis of methods.',
          'Level 3 (13-18): Clear understanding with relevant references.',
          '',
          'Part B (8 marks):',
          'Level 4 (7-8): Well-developed comparison with precise references.',
          'Level 3 (5-6): Clear comparison with relevant references.',
        ],
      },
    ],
  },
  // ── Pearson Edexcel IAL Literature (WET01-04) ──────────────────────
  // Each IAL paper is one or two extended essay prompts. Grade boundary
  // numbers 9/8/7/6/5/4 map to A*/A/B/C/D/E respectively - the numeric
  // shape is preserved so the existing grade-label UI works unchanged;
  // the examBoard string ("IAL") signals the letter system to readers.
  'ial-wet01-full': {
    id: 'ial-wet01-full',
    paperName: 'IAL Unit 1 - Poetry and Drama (WET01)',
    paperType: 'literature',
    paperNumber: 1,
    examBoard: 'IAL',
    timeAllowed: '2 hours 15 minutes',
    timeMinutes: 135,
    totalMarks: 60,
    gradeBoundaries: [
      { grade: 9, minMarks: 48 },
      { grade: 8, minMarks: 42 },
      { grade: 7, minMarks: 36 },
      { grade: 6, minMarks: 30 },
      { grade: 5, minMarks: 24 },
      { grade: 4, minMarks: 18 },
    ],
    sectionA: 'Unseen + Anthology Comparison',
    sectionB: 'Drama Essay',
    questions: [
      {
        number: 1,
        label: 'Unseen poem + anthology comparison (AO1/2/4)',
        marks: 30,
        type: 'Comparative Analysis',
        prompt:
          "Compare the ways the poets present loss and longing in the unseen poem and in a named poem from your studied anthology. Focus on the writers' uses of language, form and structure, and make sustained connections between the two poems. Write a fluent, argued response - not two separate readings.",
        markScheme: [
          'AO1 (8): informed personal response + accurate terminology.',
          "AO2 (10): analysis of writers' methods - form, structure, imagery, voice - with precise textual detail.",
          'AO4 (12): sustained comparison. Connections AND differences. Top-band answers identify points of tension, not just surface similarities.',
        ],
      },
      {
        number: 2,
        label: 'Drama text essay (AO1/2/3)',
        marks: 30,
        type: 'Extended Response',
        prompt:
          'Explore how the dramatist presents power and its abuses in your studied drama text. Refer to at least three moments across the play and situate your reading in its social and historical context.',
        markScheme: [
          'AO1 (8): sustained personal response with an explicit thesis.',
          'AO2 (10): analysis of dramatic methods - staging, dialogue, pace, dramatic irony - not just language.',
          'AO3 (12): context woven into argument. Historical, theatrical, biographical context that sharpens interpretation, not a separate paragraph.',
        ],
      },
    ],
  },
  'ial-wet02-full': {
    id: 'ial-wet02-full',
    paperName: 'IAL Unit 2 - Prose (WET02)',
    paperType: 'literature',
    paperNumber: 2,
    examBoard: 'IAL',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 40,
    gradeBoundaries: [
      { grade: 9, minMarks: 32 },
      { grade: 8, minMarks: 28 },
      { grade: 7, minMarks: 24 },
      { grade: 6, minMarks: 20 },
      { grade: 5, minMarks: 16 },
      { grade: 4, minMarks: 12 },
    ],
    sectionA: 'Comparative Prose Essay',
    questions: [
      {
        number: 1,
        label: 'Comparative prose essay - pre-1900 + post-1900 (AO1/2/3/4)',
        marks: 40,
        type: 'Comparative Analysis',
        prompt:
          "Compare how the authors explore the theme of identity in your two studied prose texts. You must pair a pre-1900 and a post-1900 text, and show how each writer's methods shape the reader's response.",
        markScheme: [
          'AO1 (10): coherent argument with a clear line of comparison; accurate terminology.',
          'AO2 (10): analysis of prose methods - narrative voice, structure, pacing, imagery - across both texts.',
          'AO3 (8): historical and social context for BOTH texts. Contrast between periods should sharpen, not just decorate.',
          'AO4 (12): sustained, precise comparison. Top-band answers treat DIFFERENCES as analytical points.',
        ],
      },
    ],
  },
  'ial-wet03-full': {
    id: 'ial-wet03-full',
    paperName: 'IAL Unit 3 - Poetry and Prose, A2 (WET03)',
    paperType: 'literature',
    paperNumber: 1,
    examBoard: 'IAL',
    timeAllowed: '2 hours 15 minutes',
    timeMinutes: 135,
    totalMarks: 60,
    gradeBoundaries: [
      { grade: 9, minMarks: 48 },
      { grade: 8, minMarks: 42 },
      { grade: 7, minMarks: 36 },
      { grade: 6, minMarks: 30 },
      { grade: 5, minMarks: 24 },
      { grade: 4, minMarks: 18 },
    ],
    sectionA: 'Pre-1900 Poetry',
    sectionB: 'Prose with Critical Perspective',
    questions: [
      {
        number: 1,
        label: 'Unseen pre-1900 poem + anthology comparison (AO1/2/3/4)',
        marks: 30,
        type: 'Comparative Analysis',
        prompt:
          "Compare how the poets present the natural world in the unseen pre-1900 poem and in a named poem from the pre-1900 anthology. Consider the writers' uses of form, imagery and voice, and the historical contexts.",
        markScheme: [
          'AO1 (6): sustained personal response, accurate literary vocabulary.',
          'AO2 (8): close reading of form + method + voice. Pre-1900 conventions named.',
          'AO3 (6): historical context - Romantic inheritance, Industrial Revolution, religious doubt.',
          'AO4 (10): comparison as argument. Points of TENSION score higher than shared images.',
        ],
      },
      {
        number: 2,
        label: 'Prose essay with AO5 critical perspective',
        marks: 30,
        type: 'Extended Response',
        prompt:
          '"The novel presents its female characters as trapped by ideology." How far do you agree with this feminist reading of your studied prose text? Refer to specific moments and engage with at least one critical position beyond the one offered in the question.',
        markScheme: [
          'AO1 (5): coherent argument with explicit thesis.',
          'AO2 (8): analysis of prose methods - narrative voice, free indirect discourse, closure.',
          'AO3 (5): context - Victorian gender norms, legal status of women, marriage market.',
          'AO5 (12): explicit engagement with TWO or more critical positions. Student defends their own against them.',
        ],
      },
    ],
  },
  'ial-wet04-full': {
    id: 'ial-wet04-full',
    paperName: 'IAL Unit 4 - Shakespeare + Pre-1900 Drama (WET04)',
    paperType: 'literature',
    paperNumber: 2,
    examBoard: 'IAL',
    timeAllowed: '2 hours 15 minutes',
    timeMinutes: 135,
    totalMarks: 60,
    gradeBoundaries: [
      { grade: 9, minMarks: 48 },
      { grade: 8, minMarks: 42 },
      { grade: 7, minMarks: 36 },
      { grade: 6, minMarks: 30 },
      { grade: 5, minMarks: 24 },
      { grade: 4, minMarks: 18 },
    ],
    sectionA: 'Shakespeare',
    sectionB: 'Pre-1900 Drama',
    questions: [
      {
        number: 1,
        label: 'Shakespeare essay with AO5 (AO1/2/3/5)',
        marks: 30,
        type: 'Extended Response',
        prompt:
          '"Shakespeare\'s tragic protagonist is ultimately destroyed less by external forces than by their own psychological contradictions." How far do you agree? Refer to at least THREE moments across your studied Shakespeare play and engage with at least one critical perspective (e.g. psychoanalytic, feminist, New Historicist).',
        markScheme: [
          'AO1 (5): sustained thesis across the essay; accurate terminology.',
          'AO2 (8): analysis of dramatic methods - soliloquy, staging, dramatic irony, versification. Form, not just language.',
          'AO3 (5): context as argument - Renaissance thought, Elizabethan/Jacobean theatre, religious/political climate.',
          'AO5 (12): explicit use of one or more named critical perspectives. Top-band answers show tension between a surface reading and the critical reading.',
        ],
      },
      {
        number: 2,
        label: 'Pre-1900 drama essay with AO5 (AO1/2/3/5)',
        marks: 30,
        type: 'Extended Response',
        prompt:
          "Discuss how your studied pre-1900 drama text represents power and transgression. You must refer to the play's theatrical methods, its historical context, and at least one critical perspective on the play.",
        markScheme: [
          'AO1 (5): coherent argument, controlled prose.',
          'AO2 (8): drama-specific method analysis - structure, asides, stagecraft, character contrast.',
          'AO3 (5): accurate period-specific context (Restoration theatre, Jacobean revenge tradition, early-modern religious politics).',
          'AO5 (12): engagement with a named critic or critical position. One used well beats three namechecked.',
        ],
      },
    ],
  },
}

// ─── Timer Hook ─────────────────────────────────────────────────────────────

function useExamTimer(durationMinutes: number, isRunning: boolean) {
  const [secondsRemaining, setSecondsRemaining] = useState(durationMinutes * 60)

  useEffect(() => {
    if (!isRunning || secondsRemaining <= 0) return

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, secondsRemaining])

  const reset = useCallback(() => {
    setSecondsRemaining(durationMinutes * 60)
  }, [durationMinutes])

  const hours = Math.floor(secondsRemaining / 3600)
  const minutes = Math.floor((secondsRemaining % 3600) / 60)
  const seconds = secondsRemaining % 60

  const totalSeconds = durationMinutes * 60
  const progress = totalSeconds > 0 ? ((totalSeconds - secondsRemaining) / totalSeconds) * 100 : 0

  const isLow = secondsRemaining <= 300 // 5 minutes
  const isExpired = secondsRemaining <= 0

  return {
    hours,
    minutes,
    seconds,
    secondsRemaining,
    progress,
    isLow,
    isExpired,
    reset,
    formatted: `${hours > 0 ? `${hours}:` : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
  }
}

// ─── Multiple-choice marking ────────────────────────────────────────────────
// The only genuinely markable question type. One mark per correctly selected
// option; wrong selections earn nothing. Written answers are never scored by
// the app - they are self-marked against the mark scheme on the results view.

function markMultipleChoice(question: ExamQuestion, selections: number[]): number | null {
  if (!question.isMultipleChoice || !question.correctOptions) return null
  const correct = new Set(question.correctOptions)
  const earned = selections.filter((s) => correct.has(s)).length
  return Math.min(earned, question.marks)
}

// ─── Intro Phase ────────────────────────────────────────────────────────────

function ExamIntro({ paper, onStart }: { paper: ExamPaperData; onStart: () => void }) {
  const t = useT()
  const isLanguage = paper.paperType === 'language'

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      <Button variant="ghost" size="sm" className="mb-6" render={<Link href="/mock-exams" />}>
        <ArrowLeft className="h-4 w-4 me-1.5" />
        {t('mock.back_to_mocks')}
      </Button>

      <Card className="overflow-hidden">
        <div
          className={cn(
            'h-2',
            isLanguage
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
              : 'bg-gradient-to-r from-teal-800 to-clay-500',
          )}
        />

        <CardHeader>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
              {paper.examBoard}
            </Badge>
            <Badge
              variant="outline"
              className={cn(
                'text-xs',
                isLanguage
                  ? 'border-cyan-600/30 text-cyan-700'
                  : 'border-pink-600/30 text-pink-700',
              )}
            >
              {isLanguage ? t('mock.language') : t('mock.literature')}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {t('mock.paper')} {paper.paperNumber}
            </Badge>
          </div>

          <CardTitle className="text-2xl sm:text-3xl">{paper.paperName}</CardTitle>
          <CardDescription className="text-base mt-2">
            {paper.examBoard} {t('mock.gcse_english')}{' '}
            {isLanguage ? t('mock.language') : t('mock.literature')} - {t('mock.paper')}{' '}
            {paper.paperNumber}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Exam details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-3">
              <Timer className="h-4 w-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{t('mock.duration')}</p>
                <p className="text-sm font-semibold">{paper.timeAllowed}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-3">
              <Award className="h-4 w-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{t('mock.total_marks')}</p>
                <p className="text-sm font-semibold">{paper.totalMarks}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-3">
              <Hash className="h-4 w-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{t('mock.questions')}</p>
                <p className="text-sm font-semibold">{paper.questions.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-3">
              <GraduationCap className="h-4 w-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{t('mock.grade')}</p>
                <p className="text-sm font-semibold">{t('mock.grade_scale_1_9')}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Questions overview */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              {t('mock.question_overview')}
            </h3>
            <div className="space-y-2">
              {paper.questions.map((q) => (
                <div key={q.number} className="flex items-center gap-3 text-sm">
                  <span className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/10 text-primary text-xs font-bold shrink-0">
                    {q.number}
                  </span>
                  <span className="text-foreground/80 flex-1 min-w-0">{q.label}</span>
                  <Badge variant="outline" className="text-xs shrink-0">
                    {q.marks}{' '}
                    {q.marks === 1 ? t('marking.mark_singular') : t('marking.mark_plural')}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Instructions */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <h3 className="font-semibold text-amber-700 mb-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {t('mock.exam_conditions')}
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>- {t('mock.cond_timer_start')}</li>
              <li>- {t('mock.cond_nav_questions')}</li>
              <li>- {t('mock.cond_autosave')}</li>
              <li>- {t('mock.cond_pause')}</li>
              <li>- {t('mock.cond_submit_finish')}</li>
            </ul>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center flex-wrap gap-3">
          <Button variant="secondary" render={<Link href="/mock-exams" />}>
            <ArrowLeft className="h-4 w-4 me-1.5" />
            {t('action.back')}
          </Button>
          <Button size="lg" className="shadow-lg shadow-primary/20" onClick={onStart}>
            <Play className="h-4 w-4 me-1.5" />
            {t('mock.start_exam')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// ─── Question View ──────────────────────────────────────────────────────────

function QuestionView({
  question,
  answer,
  selectedOptions,
  onAnswerChange,
  onOptionToggle,
  questionIndex,
  totalQuestions,
}: {
  question: ExamQuestion
  answer: string
  selectedOptions: number[]
  onAnswerChange: (value: string) => void
  onOptionToggle: (optionIndex: number) => void
  questionIndex: number
  totalQuestions: number
}) {
  const t = useT()
  return (
    <div className="space-y-6">
      {/* Question header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge className="bg-primary/15 text-primary border-primary/30 text-xs">
              {t('mock.question')} {question.number}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {question.type}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {question.marks}{' '}
              {question.marks === 1 ? t('marking.mark_singular') : t('marking.mark_plural')}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('mock.question')} {questionIndex + 1} {t('mock.of')} {totalQuestions}
          </p>
        </div>
      </div>

      {/* Source text if present */}
      {question.sourceText && (
        <Card className="border-border/40 bg-muted/20">
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-semibold text-foreground">{t('marking.source_text')}</h4>
            </div>
            <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap font-serif">
              {question.sourceText}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Question prompt */}
      <div className="rounded-xl border border-border/40 bg-card p-5">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10 text-primary text-sm font-bold shrink-0 mt-0.5">
            {question.number}
          </div>
          <div className="flex-1">
            <p className="text-foreground leading-relaxed whitespace-pre-wrap">{question.prompt}</p>
          </div>
        </div>
      </div>

      {/* Answer input */}
      {question.isMultipleChoice && question.options ? (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            {t('mock.select_four_statements')}
          </h4>
          <div className="space-y-2">
            {question.options.map((option, i) => {
              const isSelected = selectedOptions.includes(i)
              const isDisabled = !isSelected && selectedOptions.length >= 4

              return (
                <button
                  key={i}
                  onClick={() => !isDisabled && onOptionToggle(i)}
                  disabled={isDisabled}
                  className={cn(
                    'w-full text-start p-3 rounded-lg border text-sm transition-all',
                    isSelected
                      ? 'border-primary bg-primary/10 text-foreground'
                      : isDisabled
                        ? 'border-border/20 bg-muted/20 text-muted-foreground-subtle cursor-not-allowed'
                        : 'border-border/40 bg-card hover:border-border text-foreground/80 cursor-pointer',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'h-5 w-5 rounded border-2 flex items-center justify-center shrink-0',
                        isSelected
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-muted-foreground/30',
                      )}
                    >
                      {isSelected && <CheckCircle2 className="h-3 w-3" />}
                    </div>
                    <span>
                      {String.fromCharCode(65 + i)}. {option}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {selectedOptions.length}/4 {t('mock.selected')}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <PenLine className="h-4 w-4 text-primary" />
              {t('marking.your_answer')}
            </h4>
            <span className="text-xs text-muted-foreground">
              {answer.split(/\s+/).filter(Boolean).length} {t('marking.words_plural')}
            </span>
          </div>
          <Textarea
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder={
              question.marks <= 8 ? t('marking.placeholder') : t('marking.essay_placeholder')
            }
            className={cn(
              'min-h-[200px] leading-relaxed resize-y',
              question.marks >= 20 && 'min-h-[350px]',
              question.marks >= 30 && 'min-h-[450px]',
            )}
          />
          {question.marks >= 20 && (
            <p className="text-xs text-muted-foreground">
              {t('mock.extended_writing_prefix')} {question.marks}{' '}
              {t('mock.extended_writing_suffix')}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Exam Phase ─────────────────────────────────────────────────────────────

function ExamView({
  paper,
  onSubmit,
  onQuit,
}: {
  paper: ExamPaperData
  onSubmit: (
    answers: string[],
    mcSelections: Record<number, number[]>,
    elapsedSeconds: number,
  ) => void
  onQuit: () => void
}) {
  const t = useT()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>(() => paper.questions.map(() => ''))
  const [mcSelections, setMcSelections] = useState<Record<number, number[]>>(() => ({}))
  const [isPaused, setIsPaused] = useState(false)
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)

  const timer = useExamTimer(paper.timeMinutes, !isPaused)
  const question = paper.questions[currentQuestion]

  const handleAnswerChange = useCallback(
    (value: string) => {
      setAnswers((prev) => {
        const next = [...prev]
        next[currentQuestion] = value
        return next
      })
    },
    [currentQuestion],
  )

  const handleOptionToggle = useCallback(
    (optionIndex: number) => {
      setMcSelections((prev) => {
        const current = prev[currentQuestion] ?? []
        if (current.includes(optionIndex)) {
          return {
            ...prev,
            [currentQuestion]: current.filter((i) => i !== optionIndex),
          }
        }
        if (current.length >= 4) return prev
        return { ...prev, [currentQuestion]: [...current, optionIndex] }
      })
    },
    [currentQuestion],
  )

  const answeredCount = useMemo(() => {
    return paper.questions.filter((q, i) => {
      if (q.isMultipleChoice) {
        return (mcSelections[i]?.length ?? 0) > 0
      }
      return answers[i].trim().length > 0
    }).length
  }, [answers, mcSelections, paper.questions])

  const handleSubmit = useCallback(() => {
    onSubmit(answers, mcSelections, paper.timeMinutes * 60 - timer.secondsRemaining)
  }, [answers, mcSelections, onSubmit, paper.timeMinutes, timer.secondsRemaining])

  // Auto-submit when time expires
  useEffect(() => {
    if (timer.isExpired) {
      handleSubmit()
    }
  }, [timer.isExpired, handleSubmit])

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar with timer */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <h1 className="text-sm font-semibold text-foreground truncate hidden sm:block">
              {paper.paperName}
            </h1>
            <Badge variant="outline" className="text-xs shrink-0">
              Q{currentQuestion + 1}/{paper.questions.length}
            </Badge>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-sm font-bold',
                timer.isLow
                  ? 'border-red-500/30 bg-red-500/10 text-red-400 animate-pulse'
                  : 'border-border bg-muted/50 text-foreground',
              )}
            >
              <Clock className="h-4 w-4" />
              {timer.formatted}
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsPaused(!isPaused)}>
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onQuit}>
              {t('mock.quit')}
            </Button>
            <Button size="sm" onClick={() => setShowConfirmSubmit(true)}>
              <Send className="h-4 w-4 me-1.5" />
              {t('action.submit')}
            </Button>
          </div>
        </div>

        {/* Progress bar */}
        <Progress value={timer.progress} className="h-1 rounded-none" />
      </div>

      {/* Paused overlay */}
      {isPaused && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex items-center justify-center">
          <Card className="max-w-sm w-full mx-4">
            <CardContent className="pt-6 text-center">
              <Pause className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">{t('mock.exam_paused')}</h2>
              <p className="text-sm text-muted-foreground mb-6">{t('mock.paused_body')}</p>
              <Button onClick={() => setIsPaused(false)}>
                <Play className="h-4 w-4 me-1.5" />
                {t('mock.resume_exam')}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Submit confirmation overlay */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <Send className="h-10 w-10 text-primary mx-auto mb-3" />
                <h2 className="text-xl font-bold text-foreground mb-2">
                  {t('mock.submit_exam_q')}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t('mock.you_answered_prefix')} {answeredCount} {t('mock.of')}{' '}
                  {paper.questions.length} {t('mock.questions_lc')}. {t('mock.time_remaining')}:{' '}
                  {timer.formatted}.
                </p>
                {answeredCount < paper.questions.length && (
                  <p className="text-sm text-amber-600 mt-2 flex items-center justify-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {t('mock.unanswered_warning')}
                  </p>
                )}
              </div>
              <div className="flex gap-3 justify-center">
                <Button variant="secondary" onClick={() => setShowConfirmSubmit(false)}>
                  {t('mock.continue_writing')}
                </Button>
                <Button onClick={handleSubmit}>{t('mock.submit_exam')}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Question navigation pills */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {paper.questions.map((q, i) => {
            const hasAnswer = q.isMultipleChoice
              ? (mcSelections[i]?.length ?? 0) > 0
              : answers[i].trim().length > 0
            const isCurrent = i === currentQuestion

            return (
              <button
                key={i}
                onClick={() => setCurrentQuestion(i)}
                className={cn(
                  'h-8 w-8 rounded-lg text-xs font-bold transition-all border',
                  isCurrent
                    ? 'bg-primary text-primary-foreground border-primary'
                    : hasAnswer
                      ? 'bg-teal-50 text-teal-800 border-teal-200'
                      : 'bg-muted/50 text-muted-foreground border-border/40 hover:border-border',
                )}
              >
                {q.number}
              </button>
            )
          })}
        </div>

        {/* Question content */}
        <QuestionView
          question={question}
          answer={answers[currentQuestion]}
          selectedOptions={mcSelections[currentQuestion] ?? []}
          onAnswerChange={handleAnswerChange}
          onOptionToggle={handleOptionToggle}
          questionIndex={currentQuestion}
          totalQuestions={paper.questions.length}
        />

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/40">
          <Button
            variant="secondary"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
          >
            <ChevronLeft className="h-4 w-4 me-1" />
            {t('mock.previous')}
          </Button>

          <span className="text-sm text-muted-foreground">
            {answeredCount}/{paper.questions.length} {t('mock.answered')}
          </span>

          {currentQuestion < paper.questions.length - 1 ? (
            <Button
              onClick={() =>
                setCurrentQuestion((prev) => Math.min(paper.questions.length - 1, prev + 1))
              }
            >
              {t('action.next')}
              <ChevronRight className="h-4 w-4 ms-1" />
            </Button>
          ) : (
            <Button onClick={() => setShowConfirmSubmit(true)}>
              <Send className="h-4 w-4 me-1.5" />
              {t('mock.submit_exam')}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Results Phase ──────────────────────────────────────────────────────────

function ResultsView({
  paper,
  answers,
  mcSelections,
  elapsedSeconds,
  saveOutcome,
  onRetry,
}: {
  paper: ExamPaperData
  answers: string[]
  mcSelections: Record<number, number[]>
  elapsedSeconds: number
  saveOutcome: PersistOutcome | null
  onRetry: () => void
}) {
  const t = useT()
  const router = useRouter()

  /**
   * Hand one written answer to the marking page (SF-4).
   *
   * Reuses `saveMarkingDraft`, the sessionStorage handoff already built to
   * carry an essay through a sign-in round trip: tab-scoped, consumed on read,
   * because this is a child's schoolwork and the machine may be shared.
   *
   * `handoff.exact` is false when the mark scheme is the nearest available
   * rather than this paper's own, or when the paper names more than one board.
   * That is put in the `title` field, which /marking/submit shows back, rather
   * than being silently pre-selected - a mark against the wrong paper is a
   * number a student may act on.
   *
   * THE QUESTION, FIXED 23 October 2026. Until then the prompt went into
   * `question`, which is the question's id on the mark scheme. The marking form
   * restored it unchecked, showed "Q1" in its dropdown, and saved an essay that
   * marking refused with "Unknown question". The prompt is the question the
   * learner answered, so it goes there; `question` gets the scheme's id when
   * resolveHandoffQuestion is certain of it, and is left for the learner to
   * choose when it is not.
   */
  const onGetMarked = useCallback(
    (question: ExamQuestion, index: number) => {
      const handoff = resolveHandoffTarget({
        examBoard: paper.examBoard,
        paperType: paper.paperType,
        paperNumber: paper.paperNumber,
      })
      saveMarkingDraft({
        board: handoff.board ?? '',
        paper: handoff.schemeId ?? '',
        question: resolveHandoffQuestion(handoff, question) ?? '',
        questionText: question.prompt || question.label,
        title: `${paper.paperName} - Q${question.number}${handoff.note ? ` (${handoff.note})` : ''}`,
        essay: answers[index],
      })
      router.push('/marking/submit')
    },
    [answers, paper, router],
  )

  // Neutral facts only: what the student did, never a mark for written work.
  const totalWords = useMemo(
    () =>
      paper.questions.reduce((sum, q, i) => {
        if (q.isMultipleChoice) return sum
        return sum + answers[i].split(/\s+/).filter(Boolean).length
      }, 0),
    [answers, paper.questions],
  )

  const answeredCount = useMemo(
    () =>
      paper.questions.filter((q, i) =>
        q.isMultipleChoice
          ? (mcSelections[i]?.length ?? 0) > 0
          : answers[i].split(/\s+/).filter(Boolean).length > 0,
      ).length,
    [answers, mcSelections, paper.questions],
  )

  const elapsedMinutes = Math.max(1, Math.round(elapsedSeconds / 60))
  const isLanguage = paper.paperType === 'language'

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      <Card className="overflow-hidden">
        <div
          className={cn(
            'h-2',
            isLanguage
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
              : 'bg-gradient-to-r from-teal-800 to-clay-500',
          )}
        />

        <CardContent className="pt-8 pb-8">
          {/* Hero: paper complete, self-assessment frame - no fabricated grade */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl border-2 border-primary/30 bg-primary/10 mb-4">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-1">{t('mock.results_title')}</h2>
            <p className="text-muted-foreground">{paper.paperName}</p>
          </div>

          {/* SF-4: say so when the attempt did not reach the dashboard.
              A save that fails quietly is this codebase's commonest defect, and
              the student would otherwise find an empty dashboard later with no
              idea why. Only shown when a save was ATTEMPTED and failed, so a
              signed-out visitor is not told something went wrong when nothing
              did. */}
          {saveOutcome?.attempted && !saveOutcome.saved && (
            <p className="mb-8 rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-center text-sm text-muted-foreground">
              {t('mock.not_saved')}
            </p>
          )}

          <Separator className="mb-8" />

          {/* Neutral stats: facts about the attempt, not marks */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 rounded-xl bg-muted/30 border border-border/40">
              <p className="text-2xl font-bold text-foreground">{totalWords}</p>
              <p className="text-xs text-muted-foreground mt-1">{t('mock.words_written')}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/30 border border-border/40">
              <p className="text-2xl font-bold text-foreground">
                {elapsedMinutes} {t('mock.minutes_short')}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{t('mock.time_taken')}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/30 border border-border/40">
              <p className="text-2xl font-bold text-foreground">
                {answeredCount}/{paper.questions.length}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{t('mock.answered')}</p>
            </div>
          </div>

          {/* How to mark this paper - the honest frame */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mb-8">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              {t('mock.self_mark_title')}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('mock.self_mark_body')}
            </p>
          </div>

          {/* Question breakdown */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              {t('mock.your_responses')}
            </h3>
            <div className="space-y-3">
              {paper.questions.map((q, i) => {
                const wordCount = answers[i].split(/\s+/).filter(Boolean).length
                const selections = mcSelections[i] ?? []
                const hasAnswer = q.isMultipleChoice ? selections.length > 0 : wordCount > 0
                const mcMarks = markMultipleChoice(q, selections)

                return (
                  <div
                    key={q.number}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/40"
                  >
                    <div
                      className={cn(
                        'h-6 w-6 rounded-md flex items-center justify-center shrink-0',
                        hasAnswer ? 'bg-teal-50 text-teal-800' : 'bg-red-50 text-red-600',
                      )}
                    >
                      {hasAnswer ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <AlertCircle className="h-3.5 w-3.5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        Q{q.number}: {q.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {q.isMultipleChoice
                          ? mcMarks !== null
                            ? `${mcMarks}/${q.marks} ${t('marking.mark_plural')} - ${t('mock.mc_auto_marked')}`
                            : `${selections.length} ${t('mock.options_selected')}`
                          : hasAnswer
                            ? `${wordCount} ${t('mock.words_written')} - ${t('mock.self_marked_label')}`
                            : t('mock.no_response')}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0">
                      {q.marks}{' '}
                      {q.marks === 1 ? t('marking.mark_singular') : t('marking.mark_plural')}
                    </Badge>
                    {/* SF-4. A finished mock is the moment a student most wants
                        a mark, and until now every link on this view went back
                        to /mock-exams. Written answers only: a multiple-choice
                        question is already marked above, and sending one to an
                        essay marker would waste a trial use on a question that
                        has an objective answer. */}
                    {!q.isMultipleChoice && hasAnswer ? (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="shrink-0"
                        onClick={() => onGetMarked(q, i)}
                      >
                        <Sparkles className="h-3.5 w-3.5 me-1.5" />
                        {t('mock.get_this_marked')}
                      </Button>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Marking guide / model answers section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4 text-primary" />
              {t('mock.marking_guide')}
            </h3>
            <div className="space-y-4">
              {paper.questions.map((q) => (
                <details
                  key={q.number}
                  className="group rounded-lg border border-border/40 overflow-hidden"
                >
                  <summary className="flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/10 text-primary text-xs font-bold shrink-0">
                      {q.number}
                    </span>
                    <span className="text-sm font-medium text-foreground flex-1">
                      Q{q.number}: {q.label} ({q.marks}{' '}
                      {q.marks === 1 ? t('marking.mark_singular') : t('marking.mark_plural')})
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-3 pb-3 pt-0">
                    <Separator className="mb-3" />
                    {q.markScheme && (
                      <div className="space-y-1">
                        {q.markScheme.map((item, idx) =>
                          item === '' ? (
                            <div key={idx} className="h-2" />
                          ) : (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {item}
                            </p>
                          ),
                        )}
                      </div>
                    )}
                    {q.modelAnswer && (
                      <div className="mt-3 p-3 rounded-lg bg-teal-50/50 border border-teal-200">
                        <p className="text-xs font-semibold text-teal-800 mb-1">
                          {t('mock.example_response_grade7')}
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {q.modelAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center flex-wrap">
            <Button variant="secondary" render={<Link href="/mock-exams" />}>
              <ArrowLeft className="h-4 w-4 me-1.5" />
              {t('mock.all_exams')}
            </Button>
            <Button onClick={onRetry}>
              <RotateCcw className="h-4 w-4 me-1.5" />
              {t('mock.retry_paper')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ─── 404 / Not Found ────────────────────────────────────────────────────────

function PaperNotFound() {
  const t = useT()
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
        <AlertCircle className="h-8 w-8 text-red-400" />
      </div>
      <h1 className="text-2xl font-bold text-foreground mb-3">{t('mock.paper_not_found')}</h1>
      <p className="text-muted-foreground mb-8">{t('mock.paper_not_found_body')}</p>
      <Button render={<Link href="/mock-exams" />}>
        <ArrowLeft className="h-4 w-4 me-1.5" />
        {t('mock.view_available_papers')}
      </Button>
    </div>
  )
}

// ─── Main Page Component ────────────────────────────────────────────────────

export default function ExamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const paper = EXAM_PAPERS[id]

  const [phase, setPhase] = useState<ExamPhase>('intro')
  const [submittedAnswers, setSubmittedAnswers] = useState<string[]>([])
  const [submittedMcSelections, setSubmittedMcSelections] = useState<Record<number, number[]>>({})
  const [submittedElapsedSeconds, setSubmittedElapsedSeconds] = useState(0)
  const [saveOutcome, setSaveOutcome] = useState<PersistOutcome | null>(null)
  const user = useAuthStore((s) => s.user)

  if (!paper) {
    return <PaperNotFound />
  }

  const handleStart = () => {
    setPhase('exam')
  }

  const handleSubmit = (
    answers: string[],
    mcSelections: Record<number, number[]>,
    elapsedSeconds: number,
  ) => {
    setSubmittedAnswers(answers)
    setSubmittedMcSelections(mcSelections)
    setSubmittedElapsedSeconds(elapsedSeconds)
    setPhase('results')
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // SF-4: record the attempt where /dashboard/grades can see it. Nothing was
    // persisted before, so a student could sit a whole paper and the dashboard
    // would still say they had done no practice.
    //
    // Deliberately not awaited: the results screen is the reward and must not
    // wait on a network round trip. The outcome is kept so the screen can say
    // if it did not save, rather than swallowing it.
    const questions: MockAttemptQuestion[] = paper.questions.map((q, i) => ({
      number: q.number,
      label: q.label,
      marks: q.marks,
      isMultipleChoice: q.isMultipleChoice,
      earned: markMultipleChoice(q, mcSelections[i] ?? []),
      answer: answers[i] ?? '',
    }))

    void persistMockAttempt(createClient(), user?.id, {
      paperId: paper.id,
      paperName: paper.paperName,
      examBoard: paper.examBoard,
      paperType: paper.paperType,
      paperNumber: paper.paperNumber,
      elapsedSeconds,
      questions,
    }).then(setSaveOutcome)
  }

  const handleRetry = () => {
    setSubmittedAnswers([])
    setSubmittedMcSelections({})
    setPhase('intro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleQuit = () => {
    setPhase('intro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  switch (phase) {
    case 'intro':
      return <ExamIntro paper={paper} onStart={handleStart} />
    case 'exam':
      return <ExamView paper={paper} onSubmit={handleSubmit} onQuit={handleQuit} />
    case 'results':
      return (
        <ResultsView
          paper={paper}
          answers={submittedAnswers}
          mcSelections={submittedMcSelections}
          elapsedSeconds={submittedElapsedSeconds}
          saveOutcome={saveOutcome}
          onRetry={handleRetry}
        />
      )
  }
}
