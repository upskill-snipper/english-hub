// ─── Exam Guide Types ─────────────────────────────────────────────────────────

export interface PaperQuestion {
  question: string;
  marks: number;
  ao: string;
  skill: string;
  time: string;
  advice: string;
}

export interface PaperSection {
  title: string;
  marks: number;
  questions: PaperQuestion[];
}

export interface ExamPaper {
  title: string;
  code: string;
  time: string;
  marks: number;
  weighting: string;
  textType: string;
  sections: PaperSection[];
}

export interface MarkBand {
  level: number;
  descriptor: string;
  ao1: string;
  ao2: string;
  ao3?: string;
}

export interface GradeBoundary {
  year: string;
  max: number;
  grade9: number;
  grade8: number;
  grade7: number;
  grade6: number;
  grade5: number;
  grade4: number;
}

export interface ExaminerTip {
  question: string;
  tips: string[];
}

export interface AssessmentObjective {
  code: string;
  description: string;
  weighting: string;
}

export interface SetTextAnalysis {
  title: string;
  author: string;
  themes: string[];
  context: string;
  characters?: { name: string; description: string }[];
  quotations: { quote: string; analysis: string }[];
  examStrategy: string;
}

export interface PoemAnalysis {
  title: string;
  poet: string;
  era: string;
  themes: string[];
  topComparison: string;
  formAnalysis: string;
  keyQuotation: string;
}

export interface BoardExamGuide {
  boardId: string;
  boardName: string;
  boardColor: string;
  overview: string;
  specCodes: { subject: string; code: string }[];
  languageAOs: AssessmentObjective[];
  literatureAOs: AssessmentObjective[];
  languagePapers: ExamPaper[];
  literaturePapers: ExamPaper[];
  markBands: MarkBand[];
  gradeBoundaries: GradeBoundary[];
  examinerTips: ExaminerTip[];
  keyChanges?: { year: string; change: string }[];
  setTexts?: SetTextAnalysis[];
  poems?: PoemAnalysis[];
  uniqueFeatures: string[];
}

export interface GenericOverview {
  title: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

export interface TerminologyEntry {
  term: string;
  category: 'figurative' | 'sound' | 'structural' | 'sentence' | 'poetry';
  definition: string;
  example?: string;
}

export interface Grade9Strategy {
  title: string;
  sections: {
    heading: string;
    content: string;
    examples?: { label: string; text: string }[];
  }[];
}

export interface ContextPeriod {
  period: string;
  years: string;
  relevantTexts: string;
  keyPoints: string[];
}
