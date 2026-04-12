// ─── Edexcel GCSE English Literature Mark Scheme ────────────────────────────
// Paper 1: Shakespeare and Post-1914 Literature — 1 hour 45 minutes, 80 marks.
// Paper 2: 19th Century Novel and Poetry Anthology — 2 hours 15 minutes, 80 marks.
// Based on the Pearson Edexcel 1ET0 specification. Descriptors are summarised
// from publicly-available Edexcel generic mark scheme grids.
//
// Source: https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from "./types"

// ─── Assessment Objectives ─────────────────────────────────────────────────
// Edexcel Literature uses AO1–AO4. Band descriptors use 6 levels for the main
// essay-type AOs, mirroring Edexcel's published Level 1 (Simple) through
// Level 6 (Convincing) grids.

// AO1 — used across multiple questions with different mark allocations
const ao1Base: Omit<AssessmentObjective, "maxMarks" | "weighting"> = {
  id: "AO1",
  label: "AO1 — Read, understand and respond",
  description:
    "Read, understand and respond to texts. Students should be able to: maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.",
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 2,
      label: "Simple",
      descriptor:
        "Simple comments that show basic awareness of the text. Limited textual reference with little relevance to the task.",
      indicators: [
        "Retells or paraphrases rather than responds to the question",
        "References are general or narrative-based",
        "Little sense of a personal response",
      ],
    },
    {
      band: "Level 2",
      minMarks: 3,
      maxMarks: 4,
      label: "Supported",
      descriptor:
        "Supported comments with some relevant textual reference. Begins to shape a response around the task.",
      indicators: [
        "Makes some relevant points about the text",
        "Some quotations used to support ideas",
        "Response begins to address the question",
      ],
    },
    {
      band: "Level 3",
      minMarks: 5,
      maxMarks: 7,
      label: "Explained",
      descriptor:
        "Explained response with clear understanding. Effective use of textual references to support a structured argument.",
      indicators: [
        "Clear and relevant points developed with explanation",
        "Quotations are well-chosen and embedded",
        "A coherent line of argument is maintained",
      ],
    },
    {
      band: "Level 4",
      minMarks: 8,
      maxMarks: 10,
      label: "Thoughtful",
      descriptor:
        "Thoughtful, developed response demonstrating a secure understanding. Apt textual references integrated into interpretation.",
      indicators: [
        "Sustained interpretation across the response",
        "References are precise and serve the argument",
        "Personal response is informed and engaged",
      ],
    },
    {
      band: "Level 5",
      minMarks: 11,
      maxMarks: 13,
      label: "Exploratory",
      descriptor:
        "Exploratory, critical response with an assured personal interpretation. Judicious use of precise textual references.",
      indicators: [
        "Alternative interpretations explored with confidence",
        "Evidence is judiciously selected and precisely deployed",
        "Critical argument is sustained and compelling",
      ],
    },
    {
      band: "Level 6",
      minMarks: 14,
      maxMarks: 16,
      label: "Convincing",
      descriptor:
        "Convincing, critical analysis demonstrating independent thought. A sophisticated personal response supported throughout by precise, apt references.",
      indicators: [
        "Original and perceptive reading of the text",
        "Analysis is deeply rooted in textual evidence",
        "Response is cohesive, fluent and convincing throughout",
      ],
    },
  ],
}

const ao2Base: Omit<AssessmentObjective, "maxMarks" | "weighting"> = {
  id: "AO2",
  label: "AO2 — Analyse language, form and structure",
  description:
    "Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.",
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 2,
      label: "Simple awareness",
      descriptor:
        "Simple awareness of language, form or structure. Limited use of subject terminology, often inaccurate.",
      indicators: [
        "Identifies obvious features (e.g. simile) without discussing effect",
        "Subject terminology is limited or misapplied",
      ],
    },
    {
      band: "Level 2",
      minMarks: 3,
      maxMarks: 4,
      label: "Identification with comment",
      descriptor:
        "Identifies language and/or structural features with some comment on their effect. Some relevant subject terminology.",
      indicators: [
        "Names methods and makes simple comments on effect",
        "Some accurate subject terminology used",
      ],
    },
    {
      band: "Level 3",
      minMarks: 5,
      maxMarks: 7,
      label: "Clear explanation",
      descriptor:
        "Clear explanation of how the writer uses language and/or structure to create effects. Appropriate and accurate subject terminology.",
      indicators: [
        "Explains how methods create meaning and effects",
        "Accurate subject terminology used consistently",
        "Considers the writer as a deliberate craftsperson",
      ],
    },
    {
      band: "Level 4",
      minMarks: 8,
      maxMarks: 10,
      label: "Examination",
      descriptor:
        "Examination of the writer's methods with detailed consideration of their effects. Subject terminology used effectively to support analysis.",
      indicators: [
        "Considers layered effects of language and structure",
        "Terminology is embedded and supports the argument",
        "Explores form and structure alongside language",
      ],
    },
    {
      band: "Level 5",
      minMarks: 11,
      maxMarks: 13,
      label: "Exploration",
      descriptor:
        "Exploration of how language, form and structure work together to create complex meanings. Subject terminology used judiciously.",
      indicators: [
        "Analyses subtle and implicit effects",
        "Terminology is a precise analytical tool",
        "Considers why choices were made, not just what they are",
      ],
    },
    {
      band: "Level 6",
      minMarks: 14,
      maxMarks: 16,
      label: "Analysis",
      descriptor:
        "Perceptive analysis of how the writer's methods combine to create sophisticated meanings and effects on the reader. Precise and judicious use of subject terminology.",
      indicators: [
        "Perceptive, layered analysis of craft and reader response",
        "Terminology enhances rather than decorates the argument",
        "Considers the whole text as a crafted artefact",
      ],
    },
  ],
}

const ao3Base: Omit<AssessmentObjective, "maxMarks" | "weighting"> = {
  id: "AO3",
  label: "AO3 — Context",
  description:
    "Show understanding of the relationships between texts and the contexts in which they were written.",
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 2,
      label: "Simple awareness",
      descriptor:
        "Simple awareness of contextual factors. Context is mentioned as isolated facts with no link to the text.",
      indicators: [
        "Bolt-on contextual facts with no integration",
        "No link between context and meaning",
      ],
    },
    {
      band: "Level 2",
      minMarks: 3,
      maxMarks: 4,
      label: "Some understanding",
      descriptor:
        "Some understanding of context with some links made between context and the text/task.",
      indicators: [
        "Some relevant contextual points linked to the text",
        "Context begins to inform interpretation",
      ],
    },
    {
      band: "Level 3",
      minMarks: 5,
      maxMarks: 7,
      label: "Clear understanding",
      descriptor:
        "Clear understanding of contextual factors shown through specific links between context and the text/task.",
      indicators: [
        "Context is used to support points about theme or character",
        "Understanding of ideas and attitudes of the period",
      ],
    },
    {
      band: "Level 4",
      minMarks: 8,
      maxMarks: 10,
      label: "Developed understanding",
      descriptor:
        "Developed understanding of context integrated into the interpretation. Specific and detailed links between context, text and task.",
      indicators: [
        "Context is woven into the argument throughout",
        "Understands how context shapes the writer's purpose and choices",
      ],
    },
    {
      band: "Level 5",
      minMarks: 11,
      maxMarks: 13,
      label: "Exploration",
      descriptor:
        "Exploration of contextual factors with detailed and specific links showing how context shapes meaning.",
      indicators: [
        "Context deepens interpretation throughout",
        "Considers multiple contextual perspectives",
        "Moves beyond biographical context to social and literary context",
      ],
    },
    {
      band: "Level 6",
      minMarks: 14,
      maxMarks: 16,
      label: "Convincing exploration",
      descriptor:
        "Convincing exploration of context fully integrated into a sophisticated interpretation. Context is used to illuminate the writer's intentions and the text's reception.",
      indicators: [
        "Context is seamlessly integrated as a critical lens",
        "Considers how context shapes meaning at multiple levels",
        "Sophisticated understanding of literary and social contexts",
      ],
    },
  ],
}

const ao4Comparison: Omit<AssessmentObjective, "maxMarks" | "weighting"> = {
  id: "AO4",
  label: "AO4 — Comparison",
  description:
    "Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. (In Literature, AO4 is assessed as the ability to compare texts and ideas across poems.)",
  bands: [
    {
      band: "Level 1",
      minMarks: 1,
      maxMarks: 2,
      label: "Simple",
      descriptor:
        "Simple, undeveloped comparison. Writes about texts separately with little or no linking.",
      indicators: [
        "No explicit comparative language used",
        "Discusses texts in isolation",
      ],
    },
    {
      band: "Level 2",
      minMarks: 3,
      maxMarks: 4,
      label: "Some comparison",
      descriptor:
        "Some comparison attempted with some relevant cross-reference between texts.",
      indicators: [
        "Uses some comparative connectives",
        "Begins to identify similarities or differences",
      ],
    },
    {
      band: "Level 3",
      minMarks: 5,
      maxMarks: 7,
      label: "Clear comparison",
      descriptor:
        "Clear and structured comparison with relevant cross-references. Identifies similarities and differences in ideas and methods.",
      indicators: [
        "Sustained comparative structure throughout",
        "Both texts treated with equal attention",
      ],
    },
    {
      band: "Level 4",
      minMarks: 8,
      maxMarks: 10,
      label: "Developed comparison",
      descriptor:
        "Developed and detailed comparison with well-chosen cross-references. Explores how writers' methods differ and similarities in approach.",
      indicators: [
        "Compares methods as well as ideas",
        "Cross-references are precise and illuminating",
      ],
    },
    {
      band: "Level 5",
      minMarks: 11,
      maxMarks: 13,
      label: "Exploratory comparison",
      descriptor:
        "Exploratory comparison that probes connections and differences in depth. Comparative analysis of methods is integrated and assured.",
      indicators: [
        "Comparison drives the argument rather than being added on",
        "Considers why writers make different choices",
      ],
    },
    {
      band: "Level 6",
      minMarks: 14,
      maxMarks: 16,
      label: "Convincing comparison",
      descriptor:
        "Convincing, analytical comparison fully integrated into a coherent response. Precise, discriminating comparison of ideas, themes and methods.",
      indicators: [
        "Comparison is fluent and enhances every point made",
        "Insightful analysis of how different contexts shape different approaches",
      ],
    },
  ],
}

// ─── Paper 1: Shakespeare and Post-1914 Literature ─────────────────────────

export const edexcelLitPaper1: MarkScheme = {
  id: "edexcel-lit-paper1",
  board: "Edexcel",
  subject: "English Literature",
  paper: "Paper 1",
  title: "Shakespeare and Post-1914 Literature",
  totalMarks: 80,
  durationMinutes: 105,
  version: "1ET0/01",
  sourceUrl:
    "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html",
  questions: [
    {
      id: "Section A",
      questionType: "Shakespeare extract + essay",
      taskDescription:
        "Answer one question on a studied Shakespeare play. The question has two parts: (a) explore how Shakespeare presents a theme, character or idea in an extract (20 marks); (b) explore how Shakespeare presents the same theme, character or idea in the play as a whole (20 marks).",
      totalMarks: 40,
      assessmentObjectives: [
        { ...ao1Base, maxMarks: 12, weighting: 12 / 40 },
        { ...ao2Base, maxMarks: 12, weighting: 12 / 40 },
        {
          ...ao3Base,
          maxMarks: 8,
          weighting: 8 / 40,
          bands: ao3Base.bands.filter((b) => b.maxMarks <= 8).length > 0
            ? ao3Base.bands.map((b) => ({
                ...b,
                minMarks: Math.max(1, Math.round(b.minMarks * (8 / 16))),
                maxMarks: Math.round(b.maxMarks * (8 / 16)),
              })).filter((b) => b.maxMarks > 0)
            : [
                {
                  band: "Level 1",
                  minMarks: 1,
                  maxMarks: 1,
                  label: "Simple awareness",
                  descriptor: "Simple awareness of contextual factors. Context mentioned as isolated facts.",
                  indicators: ["Bolt-on contextual facts", "No link between context and meaning"],
                },
                {
                  band: "Level 2",
                  minMarks: 2,
                  maxMarks: 3,
                  label: "Some understanding",
                  descriptor: "Some understanding of context with some links to the text.",
                  indicators: ["Some relevant contextual points linked to the text"],
                },
                {
                  band: "Level 3",
                  minMarks: 4,
                  maxMarks: 5,
                  label: "Clear understanding",
                  descriptor: "Clear understanding of contextual factors with specific links to the text/task.",
                  indicators: ["Context supports points about theme or character"],
                },
                {
                  band: "Level 4",
                  minMarks: 6,
                  maxMarks: 6,
                  label: "Developed understanding",
                  descriptor: "Developed understanding with context integrated into interpretation.",
                  indicators: ["Context woven into the argument throughout"],
                },
                {
                  band: "Level 5",
                  minMarks: 7,
                  maxMarks: 7,
                  label: "Exploration",
                  descriptor: "Exploration of contextual factors with detailed links showing how context shapes meaning.",
                  indicators: ["Context deepens interpretation throughout"],
                },
                {
                  band: "Level 6",
                  minMarks: 8,
                  maxMarks: 8,
                  label: "Convincing exploration",
                  descriptor: "Convincing exploration of context fully integrated into a sophisticated interpretation.",
                  indicators: ["Context seamlessly integrated as a critical lens"],
                },
              ],
        },
        {
          id: "AO4",
          label: "AO4 — Spelling, punctuation and grammar",
          description:
            "Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.",
          maxMarks: 8,
          weighting: 8 / 40,
          bands: [
            {
              band: "Threshold",
              minMarks: 1,
              maxMarks: 2,
              label: "Threshold",
              descriptor:
                "Reasonable accuracy in spelling, punctuation and grammar. Errors do not hinder meaning.",
              indicators: [
                "Generally clear writing with some minor errors",
              ],
            },
            {
              band: "Intermediate",
              minMarks: 3,
              maxMarks: 5,
              label: "Intermediate",
              descriptor:
                "Considerable accuracy in spelling, punctuation and grammar. Good range of vocabulary and sentence structures.",
              indicators: [
                "Mostly accurate with varied sentence structures",
              ],
            },
            {
              band: "High",
              minMarks: 6,
              maxMarks: 8,
              label: "High",
              descriptor:
                "Consistently accurate spelling, punctuation and grammar. Wide range of vocabulary and sentence structures used to achieve effective control of meaning.",
              indicators: [
                "Consistently accurate and ambitious in expression",
                "Precise vocabulary used with control",
              ],
            },
          ],
        },
      ],
      examinerNotes:
        "Part (a) is worth 20 marks and focuses on the extract. Part (b) is worth 20 marks and requires whole-text knowledge. AO4 (SPaG) is assessed across the whole response.",
    },
    {
      id: "Section B",
      questionType: "Post-1914 literature essay",
      taskDescription:
        "Answer one essay question on a studied post-1914 text (e.g. An Inspector Calls, Lord of the Flies, Animal Farm). Explore how a theme, character or idea is presented.",
      totalMarks: 40,
      assessmentObjectives: [
        { ...ao1Base, maxMarks: 16, weighting: 16 / 40 },
        { ...ao2Base, maxMarks: 16, weighting: 16 / 40 },
        {
          ...ao3Base,
          maxMarks: 8,
          weighting: 8 / 40,
          bands: [
            {
              band: "Level 1",
              minMarks: 1,
              maxMarks: 1,
              label: "Simple awareness",
              descriptor: "Simple awareness of contextual factors. Context mentioned as isolated facts.",
              indicators: ["Bolt-on contextual facts", "No link between context and meaning"],
            },
            {
              band: "Level 2",
              minMarks: 2,
              maxMarks: 3,
              label: "Some understanding",
              descriptor: "Some understanding of context with some links to the text.",
              indicators: ["Some relevant contextual points linked to the text"],
            },
            {
              band: "Level 3",
              minMarks: 4,
              maxMarks: 5,
              label: "Clear understanding",
              descriptor: "Clear understanding of contextual factors with specific links to the text/task.",
              indicators: ["Context supports points about theme or character"],
            },
            {
              band: "Level 4",
              minMarks: 6,
              maxMarks: 6,
              label: "Developed understanding",
              descriptor: "Developed understanding with context integrated into interpretation.",
              indicators: ["Context woven into the argument throughout"],
            },
            {
              band: "Level 5",
              minMarks: 7,
              maxMarks: 7,
              label: "Exploration",
              descriptor: "Exploration of contextual factors with detailed links showing how context shapes meaning.",
              indicators: ["Context deepens interpretation throughout"],
            },
            {
              band: "Level 6",
              minMarks: 8,
              maxMarks: 8,
              label: "Convincing exploration",
              descriptor: "Convincing exploration of context fully integrated into a sophisticated interpretation.",
              indicators: ["Context seamlessly integrated as a critical lens"],
            },
          ],
        },
      ],
      examinerNotes:
        "No extract is provided for Section B. Students must use their knowledge of the whole text. AO4 is not assessed in Section B.",
    },
  ],
}

// ─── Paper 2: 19th Century Novel and Poetry Anthology ──────────────────────

export const edexcelLitPaper2: MarkScheme = {
  id: "edexcel-lit-paper2",
  board: "Edexcel",
  subject: "English Literature",
  paper: "Paper 2",
  title: "19th Century Novel and Poetry Anthology",
  totalMarks: 80,
  durationMinutes: 135,
  version: "1ET0/02",
  sourceUrl:
    "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html",
  questions: [
    {
      id: "Section A",
      questionType: "19th-century novel extract + essay",
      taskDescription:
        "Answer one question on a studied 19th-century novel (e.g. A Christmas Carol, Jekyll and Hyde, Frankenstein, Great Expectations). The question has two parts: (a) explore how a theme, character or idea is presented in an extract; (b) explore the same across the novel as a whole.",
      totalMarks: 40,
      assessmentObjectives: [
        { ...ao1Base, maxMarks: 16, weighting: 16 / 40 },
        { ...ao2Base, maxMarks: 16, weighting: 16 / 40 },
        {
          ...ao3Base,
          maxMarks: 8,
          weighting: 8 / 40,
          bands: [
            {
              band: "Level 1",
              minMarks: 1,
              maxMarks: 1,
              label: "Simple awareness",
              descriptor: "Simple awareness of contextual factors. Context mentioned as isolated facts.",
              indicators: ["Bolt-on contextual facts", "No link between context and meaning"],
            },
            {
              band: "Level 2",
              minMarks: 2,
              maxMarks: 3,
              label: "Some understanding",
              descriptor: "Some understanding of context with some links to the text.",
              indicators: ["Some relevant contextual points linked to the text"],
            },
            {
              band: "Level 3",
              minMarks: 4,
              maxMarks: 5,
              label: "Clear understanding",
              descriptor: "Clear understanding of contextual factors with specific links to the text/task.",
              indicators: ["Context supports points about theme or character"],
            },
            {
              band: "Level 4",
              minMarks: 6,
              maxMarks: 6,
              label: "Developed understanding",
              descriptor: "Developed understanding with context integrated into interpretation.",
              indicators: ["Context woven into the argument throughout"],
            },
            {
              band: "Level 5",
              minMarks: 7,
              maxMarks: 7,
              label: "Exploration",
              descriptor: "Exploration of contextual factors with detailed links showing how context shapes meaning.",
              indicators: ["Context deepens interpretation throughout"],
            },
            {
              band: "Level 6",
              minMarks: 8,
              maxMarks: 8,
              label: "Convincing exploration",
              descriptor: "Convincing exploration of context fully integrated into a sophisticated interpretation.",
              indicators: ["Context seamlessly integrated as a critical lens"],
            },
          ],
        },
      ],
      examinerNotes:
        "Part (a) focuses on the extract. Part (b) requires whole-text knowledge. AO4 is not assessed in Paper 2.",
    },
    {
      id: "Section B",
      questionType: "Poetry anthology comparison",
      taskDescription:
        "Compare how a theme is presented in one named poem from the Pearson Edexcel poetry anthology and one other poem of the student's choice from the same collection.",
      totalMarks: 40,
      assessmentObjectives: [
        { ...ao1Base, maxMarks: 10, weighting: 10 / 40 },
        { ...ao2Base, maxMarks: 10, weighting: 10 / 40 },
        {
          ...ao3Base,
          maxMarks: 4,
          weighting: 4 / 40,
          bands: [
            {
              band: "Level 1",
              minMarks: 1,
              maxMarks: 1,
              label: "Simple awareness",
              descriptor: "Simple awareness of contextual factors.",
              indicators: ["Bolt-on context with no integration"],
            },
            {
              band: "Level 2",
              minMarks: 2,
              maxMarks: 2,
              label: "Some understanding",
              descriptor: "Some understanding of context linked to the poems.",
              indicators: ["Some relevant contextual points"],
            },
            {
              band: "Level 3",
              minMarks: 3,
              maxMarks: 3,
              label: "Clear understanding",
              descriptor: "Clear understanding of context with specific links to interpretation.",
              indicators: ["Context informs the reading of the poems"],
            },
            {
              band: "Level 4",
              minMarks: 4,
              maxMarks: 4,
              label: "Exploration",
              descriptor: "Exploration of context integrated into a nuanced interpretation.",
              indicators: ["Context seamlessly shapes interpretation"],
            },
          ],
        },
        {
          ...ao4Comparison,
          maxMarks: 16,
          weighting: 16 / 40,
        },
      ],
      examinerNotes:
        "Students must compare two poems. The named poem is printed on the paper; the second poem is chosen by the student from the same cluster. AO4 (comparison) carries significant weight.",
    },
  ],
}
