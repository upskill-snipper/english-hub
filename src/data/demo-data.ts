// ── Demo School ──────────────────────────────────────────────────────────────

export const DEMO_SCHOOL = {
  name: "Riverside Academy",
  type: "Secondary School",
  region: "South East England",
  ofstedRating: "Good",
  headteacher: "Dr. Sarah Mitchell",
}

// ── Demo Stats ───────────────────────────────────────────────────────────────

export const DEMO_STATS = {
  totalStudents: 242,
  totalTeachers: 9,
  activeClasses: 9,
  activeThisWeek: 198,
  avgProgressLastTerm: 64,
}

// ── Demo Teachers ────────────────────────────────────────────────────────────

export interface DemoTeacher {
  id: string;
  name: string;
  email: string;
  department: string;
  classCount: number;
  studentCount: number;
  yearsExperience: number;
  cpdNotes: string[];
}

export const DEMO_TEACHERS: DemoTeacher[] = [
  { id: "t1", name: "Ms. Thompson", email: "thompson@riverside.edu", department: "English Literature", classCount: 1, studentCount: 28, yearsExperience: 8, cpdNotes: ["Attend AQA examiner standardisation event", "Lead peer-tutoring pilot for Year 10"] },
  { id: "t2", name: "Mr. Patel", email: "patel@riverside.edu", department: "English Language", classCount: 1, studentCount: 24, yearsExperience: 12, cpdNotes: ["Mentor NQT in department", "Share Year 11 revision strategies at CPD day"] },
  { id: "t3", name: "Mrs. Clarke", email: "clarke@riverside.edu", department: "English Language", classCount: 1, studentCount: 30, yearsExperience: 5, cpdNotes: ["Focus on non-fiction writing pedagogy course", "Observe Mr. Patel's Year 11 lesson on argumentation"] },
  { id: "t4", name: "Mr. Davies", email: "davies@riverside.edu", department: "English Literature", classCount: 1, studentCount: 26, yearsExperience: 15, cpdNotes: ["Develop new Shakespeare engagement resources", "Present at regional English network meeting"] },
  { id: "t5", name: "Ms. Khan", email: "khan@riverside.edu", department: "English Language", classCount: 1, studentCount: 22, yearsExperience: 7, cpdNotes: ["Complete exam-marking accreditation for AQA", "Introduce multimedia writing prompts"] },
  { id: "t6", name: "Mr. Roberts", email: "roberts@riverside.edu", department: "English Literature", classCount: 1, studentCount: 31, yearsExperience: 3, cpdNotes: ["Observation cycle -- focus on behaviour for learning", "Attend KS3 literacy conference"] },
  { id: "t7", name: "Dr. Chen", email: "chen@riverside.edu", department: "English Language", classCount: 1, studentCount: 20, yearsExperience: 10, cpdNotes: ["IGCSE moderation lead for CAIE", "Develop bilingual learner support materials"] },
  { id: "t8", name: "Ms. Williams", email: "williams@riverside.edu", department: "English Literature", classCount: 1, studentCount: 32, yearsExperience: 2, cpdNotes: ["NQT induction programme -- Term 3 review", "Build reading-for-pleasure library for Year 7"] },
  { id: "t9", name: "Mrs. Okafor", email: "okafor@riverside.edu", department: "English Literature", classCount: 1, studentCount: 29, yearsExperience: 6, cpdNotes: ["Explore WJEC assessment objective alignment", "Pilot formative assessment toolkit in Year 9"] },
]

// ── Demo Year Groups ─────────────────────────────────────────────────────────

export interface DemoYearGroup {
  year: number;
  label: string;
  studentCount: number;
  classCount: number;
  avgProgress: number;
}

export const DEMO_YEAR_GROUPS: DemoYearGroup[] = [
  { year: 7, label: "Year 7", studentCount: 32, classCount: 1, avgProgress: 58 },
  { year: 8, label: "Year 8", studentCount: 31, classCount: 1, avgProgress: 62 },
  { year: 9, label: "Year 9", studentCount: 59, classCount: 2, avgProgress: 63 },
  { year: 10, label: "Year 10", studentCount: 74, classCount: 3, avgProgress: 75 },
  { year: 11, label: "Year 11", studentCount: 46, classCount: 2, avgProgress: 79 },
]

// ── Demo Classes ─────────────────────────────────────────────────────────────

export interface DemoClass {
  id: string;
  name: string;
  yearGroup: string;
  examBoard: string;
  teacher: string;
  teacherId: string;
  studentCount: number;
  avgScore: number;
  avgProgress: number;
  completionRate: number;
  assignmentsCompleted: number;
  assignmentsSet: number;
}

export const DEMO_CLASSES: DemoClass[] = [
  { id: "c1", name: "10A English", yearGroup: "Year 10", examBoard: "AQA", teacher: "Ms. Thompson", teacherId: "t1", studentCount: 28, avgScore: 72, avgProgress: 72, completionRate: 68, assignmentsCompleted: 442, assignmentsSet: 650 },
  { id: "c2", name: "11B English", yearGroup: "Year 11", examBoard: "AQA", teacher: "Mr. Patel", teacherId: "t2", studentCount: 24, avgScore: 81, avgProgress: 81, completionRate: 79, assignmentsCompleted: 455, assignmentsSet: 576 },
  { id: "c3", name: "9C English", yearGroup: "Year 9", examBoard: "Edexcel", teacher: "Mrs. Clarke", teacherId: "t3", studentCount: 30, avgScore: 65, avgProgress: 65, completionRate: 58, assignmentsCompleted: 348, assignmentsSet: 600 },
  { id: "c4", name: "10B English Lit", yearGroup: "Year 10", examBoard: "OCR", teacher: "Mr. Davies", teacherId: "t4", studentCount: 26, avgScore: 69, avgProgress: 69, completionRate: 64, assignmentsCompleted: 383, assignmentsSet: 598 },
  { id: "c5", name: "11A English Lang", yearGroup: "Year 11", examBoard: "AQA", teacher: "Ms. Khan", teacherId: "t5", studentCount: 22, avgScore: 77, avgProgress: 77, completionRate: 82, assignmentsCompleted: 396, assignmentsSet: 484 },
  { id: "c6", name: "Year 8 English", yearGroup: "Year 8", examBoard: "KS3", teacher: "Mr. Roberts", teacherId: "t6", studentCount: 31, avgScore: 62, avgProgress: 62, completionRate: 55, assignmentsCompleted: 341, assignmentsSet: 620 },
  { id: "c7", name: "IGCSE Language A", yearGroup: "Year 10", examBoard: "CAIE IGCSE", teacher: "Dr. Chen", teacherId: "t7", studentCount: 20, avgScore: 84, avgProgress: 84, completionRate: 76, assignmentsCompleted: 304, assignmentsSet: 400 },
  { id: "c8", name: "Year 7 English", yearGroup: "Year 7", examBoard: "KS3", teacher: "Ms. Williams", teacherId: "t8", studentCount: 32, avgScore: 58, avgProgress: 58, completionRate: 48, assignmentsCompleted: 307, assignmentsSet: 640 },
  { id: "c9", name: "9A English Lit", yearGroup: "Year 9", examBoard: "WJEC", teacher: "Mrs. Okafor", teacherId: "t9", studentCount: 29, avgScore: 61, avgProgress: 61, completionRate: 52, assignmentsCompleted: 301, assignmentsSet: 580 },
];

// ── Demo Student Details ─────────────────────────────────────────────────────

export interface DemoModuleProgress {
  name: string;
  progress: number;
  score: number;
  status: "Complete" | "In Progress" | "Not Started";
}

export interface DemoMockExam {
  name: string;
  score: number;
  grade: string;
  date: string;
}

export interface DemoEssay {
  title: string;
  score: number;
  feedback: string;
  date: string;
  teacherReviewed: boolean;
}

export interface DemoQuizAttempt {
  name: string;
  score: number;
  maxScore: number;
  date: string;
}

export interface DemoActivity {
  action: string;
  detail: string;
  date: string;
}

export interface DemoStudent {
  id: string;
  name: string;
  email: string;
  yearGroup: string;
  className: string;
  classId: string;
  teacherName: string;
  status: "On Track" | "Needs Support" | "At Risk" | "Excelling";
  overallProgress: number;
  averageScore: number;
  assignmentsCompleted: number;
  assignmentsTotal: number;
  modulesCompleted: number;
  atRisk: boolean;
  lastActive: string;
  riskReason: string;
  recentScores: number[];
  strengths: { name: string; score: number }[];
  weaknesses: { name: string; score: number }[];
  modules: DemoModuleProgress[];
  mockExams: DemoMockExam[];
  essays: DemoEssay[];
  quizAttempts: DemoQuizAttempt[];
  activityTimeline: DemoActivity[];
  recommendations: string[];
}

export const DEMO_STUDENTS: DemoStudent[] = [
  {
    id: "s1",
    name: "Amelia Richardson",
    email: "amelia.r@demo-school.edu",
    yearGroup: "Year 10",
    className: "10A English",
    classId: "c1",
    teacherName: "Ms. Thompson",
    status: "Excelling",
    overallProgress: 92,
    averageScore: 88,
    assignmentsCompleted: 24,
    assignmentsTotal: 26,
    modulesCompleted: 8,
    atRisk: false,
    lastActive: "2 hours ago",
    riskReason: "",
    recentScores: [72, 78, 82, 85, 88, 91, 87, 93],
    strengths: [
      { name: "Essay Structure", score: 95 },
      { name: "Quotation Analysis", score: 92 },
      { name: "Creative Writing", score: 90 },
      { name: "Character Analysis", score: 88 },
    ],
    weaknesses: [
      { name: "Spelling & Grammar", score: 68 },
      { name: "Timed Conditions", score: 72 },
    ],    modules: [
      { name: "Macbeth", progress: 100, score: 91, status: "Complete" },
      { name: "An Inspector Calls", progress: 100, score: 88, status: "Complete" },
      { name: "Poetry Anthology", progress: 85, score: 84, status: "In Progress" },
      { name: "Language Paper 1", progress: 100, score: 90, status: "Complete" },
      { name: "Language Paper 2", progress: 72, score: 82, status: "In Progress" },
      { name: "Creative Writing", progress: 100, score: 93, status: "Complete" },
      { name: "Unseen Poetry", progress: 60, score: 79, status: "In Progress" },
      { name: "A Christmas Carol", progress: 100, score: 87, status: "Complete" },
    ],
    mockExams: [
      { name: "English Lang Paper 1 Mock", score: 88, grade: "7", date: "2026-03-15" },
      { name: "English Lit Paper 1 Mock", score: 91, grade: "8", date: "2026-02-28" },
      { name: "English Lang Paper 2 Mock", score: 82, grade: "7", date: "2026-02-01" },
      { name: "English Lit Paper 2 Mock", score: 85, grade: "7", date: "2026-01-18" },
    ],
    essays: [
      { title: "Macbeth: Ambition as a Destructive Force", score: 92, feedback: "Excellent thesis with strong textual evidence. Consider varying sentence openings.", date: "2026-03-20", teacherReviewed: true },
      { title: "Language P1 Q5: Descriptive Writing", score: 88, feedback: "Vivid sensory language. Work on paragraph transitions.", date: "2026-03-10", teacherReviewed: true },
      { title: "Inspector Calls: Responsibility Essay", score: 85, feedback: "Good contextual understanding. Include more critical perspectives.", date: "2026-02-25", teacherReviewed: true },
      { title: "Poetry Comparison: Power & Conflict", score: 80, feedback: "Solid comparison but needs tighter structure in conclusion.", date: "2026-02-15", teacherReviewed: false },
    ],    quizAttempts: [
      { name: "Macbeth Key Quotes", score: 18, maxScore: 20, date: "2026-03-22" },
      { name: "Language Devices", score: 15, maxScore: 20, date: "2026-03-18" },
      { name: "Inspector Calls Context", score: 17, maxScore: 20, date: "2026-03-12" },
      { name: "Poetry Terminology", score: 14, maxScore: 20, date: "2026-03-05" },
      { name: "Grammar & Punctuation", score: 12, maxScore: 20, date: "2026-02-28" },
    ],
    activityTimeline: [
      { action: "Completed", detail: "Macbeth Act 5 Analysis", date: "2026-03-22" },
      { action: "Submitted", detail: "Language P1 Practice Essay", date: "2026-03-20" },
      { action: "Scored 90%", detail: "Macbeth Key Quotes Quiz", date: "2026-03-18" },
      { action: "Started", detail: "Unseen Poetry Module", date: "2026-03-15" },
      { action: "Reviewed", detail: "Teacher feedback on Inspector Calls Essay", date: "2026-03-12" },
      { action: "Completed", detail: "Language Paper 1 Section A", date: "2026-03-10" },
      { action: "Achieved Grade 8", detail: "English Lit Paper 1 Mock Exam", date: "2026-02-28" },
      { action: "Submitted", detail: "Poetry Comparison Draft", date: "2026-02-25" },
    ],
    recommendations: [
      "Focus on spelling and grammar exercises to close the gap in technical accuracy.",
      "Practise timed essay writing under exam conditions to build speed and confidence.",
      "Continue strong performance in creative writing with more ambitious narrative structures.",
      "Attempt past paper questions for Unseen Poetry to build confidence in this module.",
    ],
  },  {
    id: "s2",
    name: "Oliver Bennett",
    email: "oliver.b@demo-school.edu",
    yearGroup: "Year 10",
    className: "10A English",
    classId: "c1",
    teacherName: "Ms. Thompson",
    status: "On Track",
    overallProgress: 71,
    averageScore: 72,
    assignmentsCompleted: 19,
    assignmentsTotal: 26,
    modulesCompleted: 5,
    atRisk: false,
    lastActive: "1 day ago",
    riskReason: "",
    recentScores: [60, 65, 68, 70, 72, 74, 71, 75],
    strengths: [
      { name: "Reading Comprehension", score: 82 },
      { name: "Vocabulary", score: 78 },
      { name: "Context Knowledge", score: 76 },
    ],
    weaknesses: [
      { name: "Essay Structure", score: 58 },
      { name: "Quotation Integration", score: 55 },
      { name: "Creative Writing", score: 62 },
    ],
    modules: [
      { name: "Macbeth", progress: 100, score: 74, status: "Complete" },
      { name: "An Inspector Calls", progress: 80, score: 70, status: "In Progress" },      { name: "Poetry Anthology", progress: 45, score: 68, status: "In Progress" },
      { name: "Language Paper 1", progress: 100, score: 76, status: "Complete" },
      { name: "Language Paper 2", progress: 55, score: 65, status: "In Progress" },
      { name: "Creative Writing", progress: 100, score: 62, status: "Complete" },
      { name: "Unseen Poetry", progress: 20, score: 0, status: "In Progress" },
      { name: "A Christmas Carol", progress: 0, score: 0, status: "Not Started" },
    ],
    mockExams: [
      { name: "English Lang Paper 1 Mock", score: 72, grade: "5", date: "2026-03-15" },
      { name: "English Lit Paper 1 Mock", score: 68, grade: "5", date: "2026-02-28" },
      { name: "English Lang Paper 2 Mock", score: 70, grade: "5", date: "2026-02-01" },
    ],
    essays: [
      { title: "Macbeth: The Role of the Witches", score: 70, feedback: "Good ideas but paragraphs lack clear topic sentences. Use PEE structure.", date: "2026-03-18", teacherReviewed: true },
      { title: "Language P2 Q5: Argumentative Writing", score: 65, feedback: "Arguments valid but need stronger rhetorical devices.", date: "2026-03-08", teacherReviewed: true },
      { title: "Inspector Calls: Generational Divide", score: 72, feedback: "Improving analysis. Embed quotations rather than bolt them on.", date: "2026-02-20", teacherReviewed: false },
    ],
    quizAttempts: [
      { name: "Macbeth Key Quotes", score: 14, maxScore: 20, date: "2026-03-22" },
      { name: "Language Devices", score: 12, maxScore: 20, date: "2026-03-18" },
      { name: "Inspector Calls Context", score: 15, maxScore: 20, date: "2026-03-12" },
      { name: "Poetry Terminology", score: 10, maxScore: 20, date: "2026-03-05" },
    ],
    activityTimeline: [
      { action: "Submitted", detail: "Macbeth Witches Essay", date: "2026-03-18" },
      { action: "Scored 70%", detail: "Macbeth Key Quotes Quiz", date: "2026-03-15" },
      { action: "Started", detail: "Inspector Calls Act 3 Notes", date: "2026-03-12" },
      { action: "Completed", detail: "Language Paper 2 Reading Section", date: "2026-03-08" },
      { action: "Reviewed", detail: "Teacher feedback on Lang P2 Essay", date: "2026-03-05" },
      { action: "Achieved Grade 5", detail: "English Lang Paper 1 Mock", date: "2026-02-28" },
    ],    recommendations: [
      "Prioritise essay structure: practise PEE/PEEL paragraphs with timed exercises.",
      "Build a personal quotation bank for each text and practise embedding quotes.",
      "Read model answers for Grade 7+ to understand what examiners look for.",
      "Complete the A Christmas Carol module before mock exam season.",
    ],
  },
  {
    id: "s3",
    name: "Fatima Al-Rashid",
    email: "fatima.a@demo-school.edu",
    yearGroup: "Year 10",
    className: "10A English",
    classId: "c1",
    teacherName: "Ms. Thompson",
    status: "Needs Support",
    overallProgress: 48,
    averageScore: 52,
    assignmentsCompleted: 12,
    assignmentsTotal: 26,
    modulesCompleted: 3,
    atRisk: true,
    lastActive: "5 days ago",
    riskReason: "Low engagement and below-target scores across multiple modules",
    recentScores: [45, 48, 42, 50, 55, 52, 58, 54],
    strengths: [
      { name: "Verbal Participation", score: 75 },
      { name: "Context Knowledge", score: 70 },
    ],
    weaknesses: [
      { name: "Written Expression", score: 42 },
      { name: "Essay Length", score: 38 },
      { name: "Spelling & Grammar", score: 45 },
      { name: "Exam Technique", score: 48 },
    ],    modules: [
      { name: "Macbeth", progress: 100, score: 55, status: "Complete" },
      { name: "An Inspector Calls", progress: 60, score: 50, status: "In Progress" },
      { name: "Poetry Anthology", progress: 25, score: 48, status: "In Progress" },
      { name: "Language Paper 1", progress: 100, score: 58, status: "Complete" },
      { name: "Language Paper 2", progress: 30, score: 45, status: "In Progress" },
      { name: "Creative Writing", progress: 100, score: 52, status: "Complete" },
      { name: "Unseen Poetry", progress: 0, score: 0, status: "Not Started" },
      { name: "A Christmas Carol", progress: 0, score: 0, status: "Not Started" },
    ],
    mockExams: [
      { name: "English Lang Paper 1 Mock", score: 52, grade: "3", date: "2026-03-15" },
      { name: "English Lit Paper 1 Mock", score: 48, grade: "3", date: "2026-02-28" },
    ],
    essays: [
      { title: "Macbeth: Lady Macbeth Power", score: 50, feedback: "Shows understanding but needs longer, more developed paragraphs.", date: "2026-03-15", teacherReviewed: true },
      { title: "Language P1 Q2: Language Analysis", score: 48, feedback: "Identifies some devices but explanations need more depth.", date: "2026-03-05", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Macbeth Key Quotes", score: 10, maxScore: 20, date: "2026-03-22" },
      { name: "Language Devices", score: 8, maxScore: 20, date: "2026-03-18" },
      { name: "Inspector Calls Context", score: 12, maxScore: 20, date: "2026-03-12" },
    ],
    activityTimeline: [
      { action: "Submitted", detail: "Language P1 Q2 Practice", date: "2026-03-15" },
      { action: "Scored 50%", detail: "Macbeth Key Quotes Quiz", date: "2026-03-12" },
      { action: "Reviewed", detail: "Teacher feedback on Macbeth Essay", date: "2026-03-08" },
      { action: "Completed", detail: "Inspector Calls Act 1 Notes", date: "2026-03-02" },
      { action: "Achieved Grade 3", detail: "English Lang Paper 1 Mock", date: "2026-02-28" },
    ],
    recommendations: [
      "Schedule weekly 1:1 writing support sessions to build written expression confidence.",
      "Use sentence starters and writing scaffolds to increase essay length and fluency.",
      "Focus on learning 5 key quotations per text -- quality over quantity.",
      "Complete Language Paper 2 module as priority to prepare for mock exams.",
      "Consider additional EAL support resources for grammar and spelling development.",
    ],
  },  {
    id: "s4",
    name: "James Whitfield",
    email: "james.w@demo-school.edu",
    yearGroup: "Year 10",
    className: "10A English",
    classId: "c1",
    teacherName: "Ms. Thompson",
    status: "At Risk",
    overallProgress: 28,
    averageScore: 35,
    assignmentsCompleted: 7,
    assignmentsTotal: 26,
    modulesCompleted: 1,
    atRisk: true,
    lastActive: "12 days ago",
    riskReason: "Very low assignment completion, frequent absences, declining scores",
    recentScores: [40, 35, 38, 30, 32, 28, 35, 30],
    strengths: [
      { name: "Class Discussion", score: 65 },
    ],
    weaknesses: [
      { name: "Assignment Completion", score: 27 },
      { name: "Written Expression", score: 32 },
      { name: "Essay Structure", score: 30 },
      { name: "Exam Technique", score: 28 },
      { name: "Quotation Recall", score: 25 },
    ],
    modules: [
      { name: "Macbeth", progress: 100, score: 40, status: "Complete" },
      { name: "An Inspector Calls", progress: 30, score: 35, status: "In Progress" },
      { name: "Poetry Anthology", progress: 10, score: 0, status: "In Progress" },      { name: "Language Paper 1", progress: 45, score: 38, status: "In Progress" },
      { name: "Language Paper 2", progress: 15, score: 0, status: "In Progress" },
      { name: "Creative Writing", progress: 40, score: 32, status: "In Progress" },
      { name: "Unseen Poetry", progress: 0, score: 0, status: "Not Started" },
      { name: "A Christmas Carol", progress: 0, score: 0, status: "Not Started" },
    ],
    mockExams: [
      { name: "English Lang Paper 1 Mock", score: 35, grade: "2", date: "2026-03-15" },
      { name: "English Lit Paper 1 Mock", score: 30, grade: "2", date: "2026-02-28" },
    ],
    essays: [
      { title: "Macbeth: Violence in the Play", score: 35, feedback: "Essay is too short. Needs to develop ideas fully. Book a support session.", date: "2026-03-10", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Macbeth Key Quotes", score: 6, maxScore: 20, date: "2026-03-22" },
      { name: "Language Devices", score: 5, maxScore: 20, date: "2026-03-18" },
    ],
    activityTimeline: [
      { action: "Incomplete", detail: "Language Paper 1 Q5 -- not submitted", date: "2026-03-18" },
      { action: "Scored 30%", detail: "Macbeth Key Quotes Quiz", date: "2026-03-15" },
      { action: "Absent", detail: "Missed Poetry Anthology lesson", date: "2026-03-12" },
      { action: "Submitted late", detail: "Macbeth Violence Essay (3 days late)", date: "2026-03-10" },
      { action: "Achieved Grade 2", detail: "English Lang Paper 1 Mock", date: "2026-02-28" },
    ],
    recommendations: [
      "URGENT: Arrange parent/carer meeting to discuss engagement and support plan.",
      "Set up structured intervention timetable with daily check-ins.",
      "Break assignments into smaller, achievable chunks with closer deadlines.",
      "Assign a peer mentor from higher-achieving students for collaborative work.",
      "Refer to pastoral team to explore any barriers to learning.",
    ],
  },  {
    id: "s5",
    name: "Sophie Chen",
    email: "sophie.c@demo-school.edu",
    yearGroup: "Year 11",
    className: "11B English",
    classId: "c2",
    teacherName: "Mr. Davies",
    status: "Excelling",
    overallProgress: 96,
    averageScore: 94,
    assignmentsCompleted: 30,
    assignmentsTotal: 30,
    modulesCompleted: 10,
    atRisk: false,
    lastActive: "3 hours ago",
    riskReason: "",
    recentScores: [88, 90, 92, 91, 95, 93, 96, 97],
    strengths: [
      { name: "Critical Analysis", score: 97 },
      { name: "Essay Structure", score: 96 },
      { name: "Creative Writing", score: 95 },
      { name: "Quotation Integration", score: 94 },
      { name: "Exam Technique", score: 93 },
    ],
    weaknesses: [
      { name: "Time Management", score: 78 },
    ],
    modules: [
      { name: "Macbeth", progress: 100, score: 96, status: "Complete" },
      { name: "An Inspector Calls", progress: 100, score: 94, status: "Complete" },
      { name: "Poetry Anthology", progress: 100, score: 92, status: "Complete" },      { name: "Language Paper 1", progress: 100, score: 95, status: "Complete" },
      { name: "Language Paper 2", progress: 100, score: 93, status: "Complete" },
      { name: "Creative Writing", progress: 100, score: 97, status: "Complete" },
      { name: "Unseen Poetry", progress: 100, score: 90, status: "Complete" },
      { name: "A Christmas Carol", progress: 100, score: 94, status: "Complete" },
    ],
    mockExams: [
      { name: "English Lang Paper 1 Mock", score: 95, grade: "9", date: "2026-03-15" },
      { name: "English Lit Paper 1 Mock", score: 96, grade: "9", date: "2026-02-28" },
      { name: "English Lang Paper 2 Mock", score: 93, grade: "8", date: "2026-02-01" },
      { name: "English Lit Paper 2 Mock", score: 94, grade: "9", date: "2026-01-18" },
    ],
    essays: [
      { title: "Macbeth: Masculinity and Power", score: 96, feedback: "Outstanding critical analysis with sophisticated vocabulary. Grade 9 response.", date: "2026-03-20", teacherReviewed: true },
      { title: "Inspector Calls: Social Class Essay", score: 94, feedback: "Exceptional use of context. Perhaps explore feminist critical theory too.", date: "2026-03-12", teacherReviewed: true },
      { title: "Language P1 Q5: Narrative Writing", score: 97, feedback: "Brilliant command of language. Consider entering creative writing competitions.", date: "2026-03-05", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Macbeth Key Quotes", score: 20, maxScore: 20, date: "2026-03-22" },
      { name: "Language Devices", score: 19, maxScore: 20, date: "2026-03-18" },
      { name: "Inspector Calls Context", score: 20, maxScore: 20, date: "2026-03-12" },
      { name: "Poetry Terminology", score: 18, maxScore: 20, date: "2026-03-05" },
    ],
    activityTimeline: [
      { action: "Completed", detail: "All revision modules for Literature", date: "2026-03-22" },
      { action: "Scored 100%", detail: "Macbeth Key Quotes Quiz", date: "2026-03-20" },
      { action: "Submitted", detail: "Extension essay on Feminist Criticism", date: "2026-03-18" },
      { action: "Achieved Grade 9", detail: "English Lang Paper 1 Mock", date: "2026-03-15" },
      { action: "Completed", detail: "Creative Writing portfolio (distinction)", date: "2026-03-10" },
    ],
    recommendations: [
      "Challenge with A-Level bridging material to maintain engagement.",
      "Encourage entering external writing competitions (Young Writers, Foyle).",
      "Practise strict timed conditions to optimise exam time management.",
      "Consider peer mentoring role to help support other students.",
    ],
  },
  // ── s6: Excelling, Year 9 ────────────────────────────────────────────────
  {
    id: "s6",
    name: "Priya Sharma",
    email: "priya.s@demo-school.edu",
    yearGroup: "Year 9",
    className: "9C English",
    classId: "c3",
    teacherName: "Mrs. Clarke",
    status: "Excelling",
    overallProgress: 91,
    averageScore: 90,
    assignmentsCompleted: 22,
    assignmentsTotal: 24,
    modulesCompleted: 7,
    atRisk: false,
    lastActive: "1 hour ago",
    riskReason: "",
    recentScores: [82, 85, 88, 90, 87, 92, 91, 94],
    strengths: [
      { name: "Creative Writing", score: 96 },
      { name: "Reading Comprehension", score: 94 },
      { name: "Vocabulary Range", score: 92 },
      { name: "Analytical Thinking", score: 90 },
    ],
    weaknesses: [
      { name: "Timed Essay Conditions", score: 72 },
      { name: "Handwriting Presentation", score: 70 },
    ],
    modules: [
      { name: "Of Mice and Men", progress: 100, score: 92, status: "Complete" },
      { name: "Poetry: Conflict", progress: 100, score: 90, status: "Complete" },
      { name: "Persuasive Writing", progress: 100, score: 94, status: "Complete" },
      { name: "Reading Non-Fiction", progress: 100, score: 88, status: "Complete" },
      { name: "Shakespeare Introduction", progress: 100, score: 91, status: "Complete" },
      { name: "Creative Writing KS3", progress: 85, score: 95, status: "In Progress" },
    ],
    mockExams: [
      { name: "KS3 End of Year Reading", score: 92, grade: "8a", date: "2026-03-12" },
      { name: "KS3 End of Year Writing", score: 90, grade: "7a", date: "2026-03-12" },
      { name: "Shakespeare Assessment", score: 88, grade: "7a", date: "2026-02-15" },
    ],
    essays: [
      { title: "Of Mice and Men: The American Dream", score: 94, feedback: "Exceptional response with mature critical voice. Consider entering essay competitions.", date: "2026-03-18", teacherReviewed: true },
      { title: "Descriptive Writing: City at Dawn", score: 96, feedback: "Outstanding sensory language and structural control. A Level standard.", date: "2026-03-08", teacherReviewed: true },
      { title: "Persuasive Speech: Climate Action", score: 92, feedback: "Powerful rhetoric. Excellent use of tricolon and anaphora.", date: "2026-02-25", teacherReviewed: true },
      { title: "Poetry Response: Bayonet Charge", score: 88, feedback: "Sophisticated analysis. Explore context more to push to top marks.", date: "2026-02-12", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Literary Devices Basics", score: 19, maxScore: 20, date: "2026-03-20" },
      { name: "Of Mice and Men Characters", score: 20, maxScore: 20, date: "2026-03-14" },
      { name: "Punctuation Rules", score: 17, maxScore: 20, date: "2026-03-08" },
      { name: "Poetry Terms", score: 18, maxScore: 20, date: "2026-02-28" },
      { name: "Spelling Test 4", score: 19, maxScore: 20, date: "2026-02-20" },
    ],
    activityTimeline: [
      { action: "Submitted", detail: "Of Mice and Men Essay", date: "2026-03-18" },
      { action: "Scored 95%", detail: "Literary Devices Quiz", date: "2026-03-15" },
      { action: "Won", detail: "School Creative Writing Competition", date: "2026-03-12" },
      { action: "Completed", detail: "Shakespeare Introduction Module", date: "2026-03-10" },
      { action: "Submitted", detail: "Descriptive Writing Portfolio", date: "2026-03-08" },
      { action: "Reviewed", detail: "Teacher feedback on Persuasive Speech", date: "2026-03-05" },
      { action: "Scored 100%", detail: "Of Mice and Men Quiz", date: "2026-02-28" },
      { action: "Achieved Grade 8a", detail: "KS3 Reading Assessment", date: "2026-02-20" },
      { action: "Submitted", detail: "Bayonet Charge Poetry Response", date: "2026-02-12" },
    ],
    recommendations: [
      "Provide GCSE-level extension tasks to maintain challenge and engagement.",
      "Encourage entering Young Writers or BBC 500 Words competition.",
      "Practise timed writing to improve speed without sacrificing quality.",
      "Consider peer mentoring role for struggling students in the class.",
    ],
  },
  // ── s7: On Track, Year 7 ─────────────────────────────────────────────────
  {
    id: "s7",
    name: "Marcus Taylor",
    email: "marcus.t@demo-school.edu",
    yearGroup: "Year 7",
    className: "Year 7 English",
    classId: "c8",
    teacherName: "Ms. Williams",
    status: "On Track",
    overallProgress: 64,
    averageScore: 62,
    assignmentsCompleted: 16,
    assignmentsTotal: 22,
    modulesCompleted: 3,
    atRisk: false,
    lastActive: "Today",
    riskReason: "",
    recentScores: [55, 58, 60, 62, 65, 60, 68, 64],
    strengths: [
      { name: "Verbal Reasoning", score: 78 },
      { name: "Inference Skills", score: 72 },
      { name: "Group Discussion", score: 70 },
    ],
    weaknesses: [
      { name: "Extended Writing", score: 52 },
      { name: "Spelling Accuracy", score: 48 },
      { name: "Handwriting Legibility", score: 50 },
    ],
    modules: [
      { name: "Wonder (novel study)", progress: 100, score: 65, status: "Complete" },
      { name: "Poetry: Animals", progress: 70, score: 60, status: "In Progress" },
      { name: "Autobiography Writing", progress: 100, score: 62, status: "Complete" },
      { name: "Myths and Legends", progress: 55, score: 58, status: "In Progress" },
      { name: "Introduction to Shakespeare", progress: 100, score: 64, status: "Complete" },
      { name: "Spelling & Grammar Basics", progress: 40, score: 50, status: "In Progress" },
    ],
    mockExams: [
      { name: "Year 7 Reading Test", score: 65, grade: "5c", date: "2026-03-05" },
      { name: "Year 7 Writing Test", score: 60, grade: "4a", date: "2026-03-05" },
      { name: "Spelling Assessment", score: 52, grade: "4b", date: "2026-02-10" },
    ],
    essays: [
      { title: "Wonder: Auggie's Courage", score: 64, feedback: "Good empathy shown. Develop ideas with more evidence from the text.", date: "2026-03-12", teacherReviewed: true },
      { title: "My Autobiography: Chapter 1", score: 62, feedback: "Engaging voice. Focus on full sentences and paragraphing.", date: "2026-02-28", teacherReviewed: true },
      { title: "Retelling: Perseus and Medusa", score: 58, feedback: "Exciting narrative but needs more descriptive detail.", date: "2026-02-15", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Wonder Characters", score: 14, maxScore: 20, date: "2026-03-18" },
      { name: "Parts of Speech", score: 11, maxScore: 20, date: "2026-03-10" },
      { name: "Poetry Terms Intro", score: 12, maxScore: 20, date: "2026-03-02" },
      { name: "Spelling Test 5", score: 10, maxScore: 20, date: "2026-02-22" },
      { name: "Punctuation Basics", score: 13, maxScore: 20, date: "2026-02-14" },
    ],
    activityTimeline: [
      { action: "Submitted", detail: "Wonder Essay", date: "2026-03-12" },
      { action: "Scored 70%", detail: "Wonder Characters Quiz", date: "2026-03-10" },
      { action: "Started", detail: "Myths and Legends Module", date: "2026-03-08" },
      { action: "Reviewed", detail: "Teacher feedback on Autobiography", date: "2026-03-05" },
      { action: "Completed", detail: "Autobiography Writing Module", date: "2026-02-28" },
      { action: "Scored 55%", detail: "Parts of Speech Quiz", date: "2026-02-22" },
      { action: "Submitted", detail: "Perseus Retelling", date: "2026-02-15" },
      { action: "Completed", detail: "Introduction to Shakespeare", date: "2026-02-10" },
    ],
    recommendations: [
      "Use writing frames for extended responses to build paragraph confidence.",
      "Practise spelling with weekly look-cover-write-check lists from class vocabulary.",
      "Join the lunchtime reading club to build comprehension stamina.",
      "Consider word processing for longer writing tasks if handwriting remains a barrier.",
    ],
  },
  // ── s8: On Track, Year 8 ─────────────────────────────────────────────────
  {
    id: "s8",
    name: "Emily Foster",
    email: "emily.f@demo-school.edu",
    yearGroup: "Year 8",
    className: "Year 8 English",
    classId: "c6",
    teacherName: "Mr. Roberts",
    status: "On Track",
    overallProgress: 70,
    averageScore: 68,
    assignmentsCompleted: 18,
    assignmentsTotal: 24,
    modulesCompleted: 4,
    atRisk: false,
    lastActive: "3 hours ago",
    riskReason: "",
    recentScores: [62, 64, 66, 68, 70, 72, 68, 74],
    strengths: [
      { name: "Textual Analysis", score: 78 },
      { name: "Empathetic Response", score: 76 },
      { name: "Poetry Appreciation", score: 74 },
    ],
    weaknesses: [
      { name: "Argumentative Writing", score: 58 },
      { name: "Formal Register", score: 55 },
    ],
    modules: [
      { name: "Private Peaceful", progress: 100, score: 72, status: "Complete" },
      { name: "Poetry: Identity", progress: 80, score: 70, status: "In Progress" },
      { name: "Descriptive Writing", progress: 100, score: 74, status: "Complete" },
      { name: "Non-Fiction Reading", progress: 65, score: 64, status: "In Progress" },
      { name: "Shakespeare: The Tempest", progress: 100, score: 68, status: "Complete" },
      { name: "Debate & Rhetoric", progress: 50, score: 60, status: "In Progress" },
    ],
    mockExams: [
      { name: "KS3 Reading Assessment", score: 70, grade: "5a", date: "2026-03-08" },
      { name: "KS3 Writing Assessment", score: 68, grade: "5b", date: "2026-03-08" },
      { name: "Shakespeare Test", score: 66, grade: "5b", date: "2026-02-12" },
    ],
    essays: [
      { title: "Private Peaceful: Bravery and Sacrifice", score: 72, feedback: "Thoughtful response with good personal engagement. Push for more formal analysis.", date: "2026-03-14", teacherReviewed: true },
      { title: "Descriptive Writing: A Storm at Sea", score: 76, feedback: "Excellent use of sensory detail and extended metaphor.", date: "2026-03-02", teacherReviewed: true },
      { title: "The Tempest: Prospero's Power", score: 66, feedback: "Shows understanding but needs more formal analytical vocabulary.", date: "2026-02-18", teacherReviewed: true },
      { title: "Letter to MP: School Funding", score: 60, feedback: "Good ideas but register slips from formal to informal. Practise persuasive form.", date: "2026-02-05", teacherReviewed: false },
    ],
    quizAttempts: [
      { name: "Literary Devices KS3", score: 15, maxScore: 20, date: "2026-03-18" },
      { name: "Private Peaceful Characters", score: 16, maxScore: 20, date: "2026-03-12" },
      { name: "Grammar Essentials", score: 13, maxScore: 20, date: "2026-03-05" },
      { name: "The Tempest Key Scenes", score: 14, maxScore: 20, date: "2026-02-25" },
      { name: "Spelling & Vocabulary 3", score: 14, maxScore: 20, date: "2026-02-15" },
    ],
    activityTimeline: [
      { action: "Submitted", detail: "Private Peaceful Essay", date: "2026-03-14" },
      { action: "Scored 75%", detail: "Literary Devices Quiz", date: "2026-03-12" },
      { action: "Completed", detail: "Poetry Identity Section 3", date: "2026-03-10" },
      { action: "Started", detail: "Debate & Rhetoric Module", date: "2026-03-08" },
      { action: "Reviewed", detail: "Teacher feedback on Descriptive Writing", date: "2026-03-05" },
      { action: "Submitted", detail: "Descriptive Writing Final", date: "2026-03-02" },
      { action: "Completed", detail: "The Tempest Module", date: "2026-02-22" },
      { action: "Scored 70%", detail: "The Tempest Key Scenes Quiz", date: "2026-02-15" },
    ],
    recommendations: [
      "Practise formal letter and speech writing to strengthen argumentative register.",
      "Read non-fiction articles weekly to build familiarity with formal language.",
      "Continue strong descriptive writing -- consider submitting to school magazine.",
      "Use analytical sentence starters to bridge from personal to formal response.",
    ],
  },
  // ── s9: On Track, Year 11 ────────────────────────────────────────────────
  {
    id: "s9",
    name: "Daniel Okafor",
    email: "daniel.o@demo-school.edu",
    yearGroup: "Year 11",
    className: "11A English Lang",
    classId: "c5",
    teacherName: "Ms. Khan",
    status: "On Track",
    overallProgress: 78,
    averageScore: 76,
    assignmentsCompleted: 20,
    assignmentsTotal: 24,
    modulesCompleted: 6,
    atRisk: false,
    lastActive: "Yesterday",
    riskReason: "",
    recentScores: [70, 72, 74, 76, 78, 75, 80, 77],
    strengths: [
      { name: "Language Analysis", score: 84 },
      { name: "Comparison Skills", score: 80 },
      { name: "Exam Technique", score: 78 },
    ],
    weaknesses: [
      { name: "Creative Writing Openings", score: 62 },
      { name: "Vocabulary Range", score: 60 },
    ],
    modules: [
      { name: "Language Paper 1 Section A", progress: 100, score: 80, status: "Complete" },
      { name: "Language Paper 1 Section B", progress: 100, score: 72, status: "Complete" },
      { name: "Language Paper 2 Section A", progress: 85, score: 78, status: "In Progress" },
      { name: "Language Paper 2 Section B", progress: 70, score: 74, status: "In Progress" },
      { name: "Spoken Language", progress: 100, score: 82, status: "Complete" },
      { name: "Revision & Practice Papers", progress: 60, score: 76, status: "In Progress" },
    ],
    mockExams: [
      { name: "English Lang Paper 1 Mock", score: 78, grade: "6", date: "2026-03-15" },
      { name: "English Lang Paper 2 Mock", score: 76, grade: "6", date: "2026-02-28" },
      { name: "Spoken Language Assessment", score: 80, grade: "Merit", date: "2026-02-01" },
    ],
    essays: [
      { title: "Lang P1 Q5: Descriptive Writing", score: 72, feedback: "Solid structure. Opening needs more impact -- try starting in medias res.", date: "2026-03-18", teacherReviewed: true },
      { title: "Lang P2 Q5: Argumentative Writing", score: 78, feedback: "Strong rhetorical devices. Excellent counter-argument technique.", date: "2026-03-08", teacherReviewed: true },
      { title: "Lang P1 Q2: Language Analysis", score: 80, feedback: "Precise analysis with well-embedded quotations. Keep this standard.", date: "2026-02-22", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Language Paper 1 Terminology", score: 16, maxScore: 20, date: "2026-03-22" },
      { name: "Rhetorical Devices", score: 15, maxScore: 20, date: "2026-03-18" },
      { name: "Narrative Techniques", score: 14, maxScore: 20, date: "2026-03-12" },
      { name: "Grammar & Syntax", score: 13, maxScore: 20, date: "2026-03-05" },
      { name: "Spelling Test 8", score: 12, maxScore: 20, date: "2026-02-28" },
    ],
    activityTimeline: [
      { action: "Submitted", detail: "Lang P1 Q5 Practice Essay", date: "2026-03-18" },
      { action: "Scored 80%", detail: "Language Paper 1 Terminology Quiz", date: "2026-03-15" },
      { action: "Completed", detail: "Paper 2 Section A Module", date: "2026-03-12" },
      { action: "Started", detail: "Revision & Practice Papers", date: "2026-03-10" },
      { action: "Reviewed", detail: "Teacher feedback on Argumentative Essay", date: "2026-03-08" },
      { action: "Achieved Grade 6", detail: "English Lang Paper 1 Mock", date: "2026-03-05" },
      { action: "Submitted", detail: "Language Analysis Practice", date: "2026-02-22" },
      { action: "Completed", detail: "Spoken Language Assessment", date: "2026-02-15" },
    ],
    recommendations: [
      "Study published openings to improve creative writing introductions.",
      "Build a wider vocabulary bank with context-specific word lists.",
      "Continue strong exam technique -- aim for Grade 7 boundary in next mock.",
      "Complete Paper 2 Section B module to ensure full exam coverage.",
    ],
  },
  // ── s10: On Track, Year 10 ───────────────────────────────────────────────
  {
    id: "s10",
    name: "Chloe Morgan",
    email: "chloe.m@demo-school.edu",
    yearGroup: "Year 10",
    className: "10B English Lit",
    classId: "c4",
    teacherName: "Mr. Davies",
    status: "On Track",
    overallProgress: 72,
    averageScore: 70,
    assignmentsCompleted: 18,
    assignmentsTotal: 24,
    modulesCompleted: 4,
    atRisk: false,
    lastActive: "Today",
    riskReason: "",
    recentScores: [64, 66, 68, 70, 72, 69, 74, 72],
    strengths: [
      { name: "Character Analysis", score: 80 },
      { name: "Context Understanding", score: 78 },
      { name: "Group Discussion", score: 76 },
    ],
    weaknesses: [
      { name: "Poetic Form Analysis", score: 56 },
      { name: "Timed Writing Speed", score: 58 },
    ],
    modules: [
      { name: "Romeo and Juliet", progress: 100, score: 74, status: "Complete" },
      { name: "An Inspector Calls", progress: 100, score: 72, status: "Complete" },
      { name: "Poetry Anthology", progress: 65, score: 66, status: "In Progress" },
      { name: "A Christmas Carol", progress: 100, score: 70, status: "Complete" },
      { name: "Unseen Poetry", progress: 35, score: 58, status: "In Progress" },
      { name: "Exam Revision", progress: 20, score: 0, status: "In Progress" },
    ],
    mockExams: [
      { name: "English Lit Paper 1 Mock", score: 72, grade: "5", date: "2026-03-15" },
      { name: "English Lit Paper 2 Mock", score: 68, grade: "5", date: "2026-02-28" },
      { name: "Unseen Poetry Practice", score: 60, grade: "4", date: "2026-02-01" },
    ],
    essays: [
      { title: "Romeo and Juliet: Fate and Free Will", score: 74, feedback: "Good argument well supported by quotations. Push for more critical perspective.", date: "2026-03-18", teacherReviewed: true },
      { title: "Inspector Calls: Birling as a Symbol", score: 72, feedback: "Strong contextual awareness. Explore Priestley's dramatic methods more.", date: "2026-03-05", teacherReviewed: true },
      { title: "Christmas Carol: Scrooge's Transformation", score: 70, feedback: "Solid response. Use more varied vocabulary for higher marks.", date: "2026-02-20", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Romeo and Juliet Quotes", score: 15, maxScore: 20, date: "2026-03-22" },
      { name: "Inspector Calls Context", score: 14, maxScore: 20, date: "2026-03-18" },
      { name: "Poetry Terminology", score: 11, maxScore: 20, date: "2026-03-12" },
      { name: "Christmas Carol Themes", score: 14, maxScore: 20, date: "2026-03-05" },
      { name: "Unseen Poetry Practice", score: 10, maxScore: 20, date: "2026-02-28" },
    ],
    activityTimeline: [
      { action: "Submitted", detail: "Romeo and Juliet Essay", date: "2026-03-18" },
      { action: "Scored 75%", detail: "Romeo and Juliet Quotes Quiz", date: "2026-03-15" },
      { action: "Completed", detail: "Poetry Anthology Section 4", date: "2026-03-12" },
      { action: "Started", detail: "Unseen Poetry Module", date: "2026-03-10" },
      { action: "Reviewed", detail: "Teacher feedback on Inspector Calls Essay", date: "2026-03-08" },
      { action: "Achieved Grade 5", detail: "English Lit Paper 1 Mock", date: "2026-03-05" },
      { action: "Submitted", detail: "Christmas Carol Essay", date: "2026-02-20" },
      { action: "Completed", detail: "A Christmas Carol Module", date: "2026-02-15" },
    ],
    recommendations: [
      "Focus on unseen poetry practice -- learn the SMILE framework for analysis.",
      "Build timed writing stamina with weekly practice under exam conditions.",
      "Study poetic forms (sonnet, ballad, dramatic monologue) with examples.",
      "Aim for Grade 6 in next mock by developing vocabulary and critical language.",
    ],
  },
  // ── s11: On Track, Year 10 (IGCSE) ───────────────────────────────────────
  {
    id: "s11",
    name: "Yuki Tanaka",
    email: "yuki.t@demo-school.edu",
    yearGroup: "Year 10",
    className: "IGCSE Language A",
    classId: "c7",
    teacherName: "Dr. Chen",
    status: "On Track",
    overallProgress: 80,
    averageScore: 78,
    assignmentsCompleted: 18,
    assignmentsTotal: 20,
    modulesCompleted: 5,
    atRisk: false,
    lastActive: "Today",
    riskReason: "",
    recentScores: [72, 74, 76, 78, 80, 78, 82, 80],
    strengths: [
      { name: "Summary Writing", score: 86 },
      { name: "Directed Writing", score: 84 },
      { name: "Reading Comprehension", score: 82 },
    ],
    weaknesses: [
      { name: "Descriptive Composition", score: 64 },
      { name: "Inference Beyond the Text", score: 66 },
    ],
    modules: [
      { name: "IGCSE Reading Paper 1", progress: 100, score: 82, status: "Complete" },
      { name: "IGCSE Directed Writing", progress: 100, score: 80, status: "Complete" },
      { name: "IGCSE Summary Skills", progress: 100, score: 84, status: "Complete" },
      { name: "IGCSE Composition: Narrative", progress: 70, score: 72, status: "In Progress" },
      { name: "IGCSE Composition: Descriptive", progress: 55, score: 64, status: "In Progress" },
      { name: "IGCSE Exam Practice", progress: 40, score: 76, status: "In Progress" },
    ],
    mockExams: [
      { name: "IGCSE Paper 1 Mock", score: 80, grade: "B", date: "2026-03-15" },
      { name: "IGCSE Paper 2 Mock", score: 76, grade: "B", date: "2026-02-28" },
      { name: "Summary Skills Test", score: 84, grade: "A", date: "2026-02-01" },
    ],
    essays: [
      { title: "Directed Writing: Letter to Editor on Deforestation", score: 82, feedback: "Strong register and persuasive techniques. Consider audience awareness more.", date: "2026-03-18", teacherReviewed: true },
      { title: "Narrative Composition: The Unexpected Journey", score: 74, feedback: "Good plot structure. Develop descriptive passages and character interiority.", date: "2026-03-05", teacherReviewed: true },
      { title: "Summary: Coral Reef Decline", score: 86, feedback: "Excellent concision and accuracy. One of the best summaries in the class.", date: "2026-02-20", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "IGCSE Reading Techniques", score: 17, maxScore: 20, date: "2026-03-22" },
      { name: "Summary Writing Rules", score: 18, maxScore: 20, date: "2026-03-18" },
      { name: "Directed Writing Conventions", score: 16, maxScore: 20, date: "2026-03-12" },
      { name: "Descriptive Techniques", score: 13, maxScore: 20, date: "2026-03-05" },
      { name: "Vocabulary: Formal Register", score: 15, maxScore: 20, date: "2026-02-28" },
    ],
    activityTimeline: [
      { action: "Submitted", detail: "Directed Writing Practice", date: "2026-03-18" },
      { action: "Scored 85%", detail: "IGCSE Reading Techniques Quiz", date: "2026-03-15" },
      { action: "Completed", detail: "Summary Skills Module", date: "2026-03-12" },
      { action: "Started", detail: "Descriptive Composition Module", date: "2026-03-10" },
      { action: "Reviewed", detail: "Teacher feedback on Narrative Composition", date: "2026-03-08" },
      { action: "Achieved Grade B", detail: "IGCSE Paper 1 Mock", date: "2026-03-05" },
      { action: "Submitted", detail: "Coral Reef Summary Exercise", date: "2026-02-20" },
      { action: "Completed", detail: "Directed Writing Module", date: "2026-02-15" },
    ],
    recommendations: [
      "Study model descriptive compositions to develop sensory language and atmosphere.",
      "Practise making inferences by reading between the lines in unseen passages.",
      "Aim for Grade A in next mock by strengthening composition marks.",
      "Use reading journal to note effective descriptive techniques from personal reading.",
    ],
  },
  // ── s12: Needs Support, Year 9 ───────────────────────────────────────────
  {
    id: "s12",
    name: "Ryan Fletcher",
    email: "ryan.f@demo-school.edu",
    yearGroup: "Year 9",
    className: "9A English Lit",
    classId: "c9",
    teacherName: "Mrs. Okafor",
    status: "Needs Support",
    overallProgress: 45,
    averageScore: 48,
    assignmentsCompleted: 10,
    assignmentsTotal: 22,
    modulesCompleted: 2,
    atRisk: true,
    lastActive: "3 days ago",
    riskReason: "Declining scores and low assignment completion rate",
    recentScores: [50, 48, 45, 52, 46, 50, 44, 48],
    strengths: [
      { name: "Verbal Comprehension", score: 68 },
      { name: "Peer Collaboration", score: 65 },
    ],
    weaknesses: [
      { name: "Independent Writing", score: 40 },
      { name: "Reading Stamina", score: 42 },
      { name: "Punctuation", score: 38 },
    ],
    modules: [
      { name: "Much Ado About Nothing", progress: 100, score: 52, status: "Complete" },
      { name: "Poetry: War & Conflict", progress: 40, score: 45, status: "In Progress" },
      { name: "Narrative Writing", progress: 100, score: 48, status: "Complete" },
      { name: "Non-Fiction Texts", progress: 25, score: 40, status: "In Progress" },
      { name: "Gothic Literature", progress: 30, score: 42, status: "In Progress" },
      { name: "Speaking & Listening", progress: 60, score: 58, status: "In Progress" },
    ],
    mockExams: [
      { name: "KS3 Reading Assessment", score: 48, grade: "4c", date: "2026-03-12" },
      { name: "KS3 Writing Assessment", score: 42, grade: "3a", date: "2026-03-12" },
      { name: "Shakespeare Assessment", score: 45, grade: "4c", date: "2026-02-15" },
    ],
    essays: [
      { title: "Much Ado: Beatrice and Benedick", score: 48, feedback: "Basic understanding shown. Needs to develop points beyond surface level.", date: "2026-03-10", teacherReviewed: true },
      { title: "Narrative Writing: The Chase", score: 52, feedback: "Some good ideas. Work on paragraphing and varied sentence structures.", date: "2026-02-25", teacherReviewed: true },
      { title: "Gothic Extract Response", score: 40, feedback: "Very brief. Use the writing frame and aim for three developed paragraphs.", date: "2026-02-12", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Shakespeare Terminology", score: 9, maxScore: 20, date: "2026-03-20" },
      { name: "Much Ado Characters", score: 11, maxScore: 20, date: "2026-03-14" },
      { name: "Punctuation Rules", score: 7, maxScore: 20, date: "2026-03-08" },
      { name: "Poetry Terms", score: 8, maxScore: 20, date: "2026-02-28" },
      { name: "Spelling Test 4", score: 10, maxScore: 20, date: "2026-02-20" },
    ],
    activityTimeline: [
      { action: "Submitted late", detail: "Much Ado Essay (2 days late)", date: "2026-03-10" },
      { action: "Scored 45%", detail: "Shakespeare Terminology Quiz", date: "2026-03-08" },
      { action: "Started", detail: "Gothic Literature Module", date: "2026-03-05" },
      { action: "Absent", detail: "Missed Poetry lesson", date: "2026-03-02" },
      { action: "Reviewed", detail: "Teacher feedback on Narrative Writing", date: "2026-02-28" },
      { action: "Submitted", detail: "Narrative Writing Draft", date: "2026-02-25" },
      { action: "Scored 40%", detail: "Gothic Extract Response", date: "2026-02-12" },
      { action: "Completed", detail: "Much Ado Module", date: "2026-02-08" },
    ],
    recommendations: [
      "Provide differentiated reading materials at appropriate challenge level.",
      "Use structured writing frames for all extended writing tasks.",
      "Set shorter, more frequent writing targets rather than long essays.",
      "Pair with a reading buddy for class reading activities.",
      "Refer to literacy intervention programme for targeted punctuation support.",
    ],
  },
  // ── s13: Needs Support, Year 7 ───────────────────────────────────────────
  {
    id: "s13",
    name: "Jasmine Patel",
    email: "jasmine.p@demo-school.edu",
    yearGroup: "Year 7",
    className: "Year 7 English",
    classId: "c8",
    teacherName: "Ms. Williams",
    status: "Needs Support",
    overallProgress: 50,
    averageScore: 48,
    assignmentsCompleted: 14,
    assignmentsTotal: 22,
    modulesCompleted: 3,
    atRisk: true,
    lastActive: "2 days ago",
    riskReason: "Reading speed significantly below age-related expectations",
    recentScores: [46, 48, 44, 50, 52, 48, 54, 50],
    strengths: [
      { name: "Listening Comprehension", score: 72 },
      { name: "Visual Literacy", score: 68 },
    ],
    weaknesses: [
      { name: "Written Fluency", score: 44 },
      { name: "Sentence Structure", score: 42 },
      { name: "Reading Speed", score: 38 },
    ],
    modules: [
      { name: "Wonder (novel study)", progress: 100, score: 52, status: "Complete" },
      { name: "Poetry: Animals", progress: 55, score: 48, status: "In Progress" },
      { name: "Autobiography Writing", progress: 100, score: 50, status: "Complete" },
      { name: "Myths and Legends", progress: 40, score: 46, status: "In Progress" },
      { name: "Introduction to Shakespeare", progress: 100, score: 48, status: "Complete" },
      { name: "Spelling & Grammar Basics", progress: 65, score: 42, status: "In Progress" },
    ],
    mockExams: [
      { name: "Year 7 Reading Test", score: 48, grade: "3a", date: "2026-03-05" },
      { name: "Year 7 Writing Test", score: 46, grade: "3b", date: "2026-03-05" },
      { name: "Spelling Assessment", score: 40, grade: "3c", date: "2026-02-10" },
    ],
    essays: [
      { title: "Wonder: Auggie's Journey", score: 50, feedback: "Good empathy shown. Practise using connectives to link your ideas.", date: "2026-03-12", teacherReviewed: true },
      { title: "My Autobiography: Chapter 1", score: 48, feedback: "Interesting content. Focus on full stops and capital letters.", date: "2026-02-28", teacherReviewed: true },
      { title: "Retelling: Theseus and the Minotaur", score: 44, feedback: "Good story knowledge. Needs more descriptive detail in writing.", date: "2026-02-15", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Wonder Characters", score: 12, maxScore: 20, date: "2026-03-18" },
      { name: "Parts of Speech", score: 9, maxScore: 20, date: "2026-03-10" },
      { name: "Poetry Terms Intro", score: 10, maxScore: 20, date: "2026-03-02" },
      { name: "Spelling Test 5", score: 8, maxScore: 20, date: "2026-02-22" },
      { name: "Punctuation Basics", score: 9, maxScore: 20, date: "2026-02-14" },
    ],
    activityTimeline: [
      { action: "Submitted", detail: "Wonder Essay", date: "2026-03-12" },
      { action: "Scored 60%", detail: "Wonder Characters Quiz", date: "2026-03-10" },
      { action: "Started", detail: "Myths and Legends Module", date: "2026-03-08" },
      { action: "Reviewed", detail: "Teacher feedback on Autobiography", date: "2026-03-05" },
      { action: "Completed", detail: "Autobiography Writing Module", date: "2026-02-28" },
      { action: "Scored 45%", detail: "Parts of Speech Quiz", date: "2026-02-22" },
      { action: "Submitted", detail: "Theseus Retelling", date: "2026-02-15" },
      { action: "Completed", detail: "Introduction to Shakespeare", date: "2026-02-10" },
    ],
    recommendations: [
      "Provide sentence starter cards for all writing tasks to build fluency.",
      "Use paired reading with a Year 9 reading buddy twice per week.",
      "Focus on basic punctuation through daily 5-minute starter activities.",
      "Set personal spelling list of 10 words per week from class texts.",
      "Consider referral to SEN team for reading speed assessment.",
    ],
  },
  // ── s14: At Risk, Year 11 ────────────────────────────────────────────────
  {
    id: "s14",
    name: "Tyler Brooks",
    email: "tyler.b@demo-school.edu",
    yearGroup: "Year 11",
    className: "11B English",
    classId: "c2",
    teacherName: "Mr. Patel",
    status: "At Risk",
    overallProgress: 22,
    averageScore: 30,
    assignmentsCompleted: 5,
    assignmentsTotal: 26,
    modulesCompleted: 0,
    atRisk: true,
    lastActive: "2 weeks ago",
    riskReason: "Attendance below 60%; no assignments submitted in 3 weeks",
    recentScores: [35, 30, 28, 25, 32, 22, 28, 20],
    strengths: [
      { name: "Verbal Understanding", score: 55 },
    ],
    weaknesses: [
      { name: "Attendance", score: 20 },
      { name: "Assignment Submission", score: 19 },
      { name: "Written Expression", score: 28 },
      { name: "Reading Comprehension", score: 32 },
      { name: "Exam Preparation", score: 22 },
    ],
    modules: [
      { name: "Macbeth", progress: 60, score: 32, status: "In Progress" },
      { name: "An Inspector Calls", progress: 20, score: 28, status: "In Progress" },
      { name: "Poetry Anthology", progress: 5, score: 0, status: "In Progress" },
      { name: "Language Paper 1", progress: 30, score: 30, status: "In Progress" },
      { name: "Language Paper 2", progress: 10, score: 0, status: "In Progress" },
      { name: "Creative Writing", progress: 25, score: 25, status: "In Progress" },
      { name: "Unseen Poetry", progress: 0, score: 0, status: "Not Started" },
      { name: "A Christmas Carol", progress: 0, score: 0, status: "Not Started" },
    ],
    mockExams: [
      { name: "English Lang Paper 1 Mock", score: 28, grade: "1", date: "2026-03-15" },
      { name: "English Lit Paper 1 Mock", score: 22, grade: "1", date: "2026-02-28" },
    ],
    essays: [
      { title: "Macbeth: Power Essay", score: 30, feedback: "Attempt shows some understanding but needs significantly more development.", date: "2026-03-05", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Macbeth Key Quotes", score: 4, maxScore: 20, date: "2026-03-22" },
      { name: "Language Devices", score: 3, maxScore: 20, date: "2026-03-18" },
    ],
    activityTimeline: [
      { action: "Absent", detail: "Missed 3 consecutive lessons", date: "2026-03-20" },
      { action: "Scored 20%", detail: "Macbeth Key Quotes Quiz", date: "2026-03-15" },
      { action: "Incomplete", detail: "Inspector Calls homework not submitted", date: "2026-03-10" },
      { action: "Absent", detail: "Missed Language Paper 1 lesson", date: "2026-03-08" },
      { action: "Submitted late", detail: "Macbeth Power Essay (1 week late)", date: "2026-03-05" },
      { action: "Achieved Grade 1", detail: "English Lit Paper 1 Mock", date: "2026-02-28" },
      { action: "Absent", detail: "Missed Poetry lesson", date: "2026-02-25" },
      { action: "Absent", detail: "Missed Creative Writing lesson", date: "2026-02-20" },
    ],
    recommendations: [
      "CRITICAL: Attendance below 60% -- immediate pastoral and safeguarding referral required.",
      "Arrange emergency meeting with parent/carer, Head of Year, and SENCO.",
      "Provide 1:1 catch-up sessions during registration or break times.",
      "Consider alternative provision or modified timetable to support re-engagement.",
      "Set up daily check-in system with form tutor and subject teacher.",
    ],
  },
  // ── s15: At Risk, Year 8 ─────────────────────────────────────────────────
  {
    id: "s15",
    name: "Kayla Henderson",
    email: "kayla.h@demo-school.edu",
    yearGroup: "Year 8",
    className: "Year 8 English",
    classId: "c6",
    teacherName: "Mr. Roberts",
    status: "At Risk",
    overallProgress: 32,
    averageScore: 38,
    assignmentsCompleted: 8,
    assignmentsTotal: 24,
    modulesCompleted: 1,
    atRisk: true,
    lastActive: "4 days ago",
    riskReason: "Reading confidence very low; written output significantly below expectations",
    recentScores: [38, 35, 40, 36, 42, 34, 38, 35],
    strengths: [
      { name: "Creativity (Art-Based)", score: 62 },
      { name: "Drama Participation", score: 60 },
    ],
    weaknesses: [
      { name: "Reading Confidence", score: 30 },
      { name: "Written Output", score: 28 },
      { name: "Concentration", score: 32 },
      { name: "Homework Completion", score: 33 },
    ],
    modules: [
      { name: "Private Peaceful", progress: 70, score: 40, status: "In Progress" },
      { name: "Poetry: Identity", progress: 20, score: 35, status: "In Progress" },
      { name: "Descriptive Writing", progress: 100, score: 42, status: "Complete" },
      { name: "Non-Fiction Reading", progress: 15, score: 0, status: "In Progress" },
      { name: "Shakespeare: The Tempest", progress: 40, score: 35, status: "In Progress" },
      { name: "Media Literacy", progress: 10, score: 0, status: "In Progress" },
      { name: "Debate & Rhetoric", progress: 55, score: 38, status: "In Progress" },
    ],
    mockExams: [
      { name: "KS3 Reading Assessment", score: 35, grade: "3c", date: "2026-03-08" },
      { name: "KS3 Writing Assessment", score: 38, grade: "3b", date: "2026-03-08" },
    ],
    essays: [
      { title: "Private Peaceful: Brothers' Bond", score: 40, feedback: "Emotional response but very short. Needs to write more and use evidence.", date: "2026-03-08", teacherReviewed: true },
      { title: "Descriptive Writing: My Favourite Place", score: 42, feedback: "Some nice ideas. Work on sentence variety and paragraphing.", date: "2026-02-20", teacherReviewed: true },
    ],
    quizAttempts: [
      { name: "Literary Devices KS3", score: 7, maxScore: 20, date: "2026-03-18" },
      { name: "Private Peaceful Characters", score: 8, maxScore: 20, date: "2026-03-12" },
      { name: "Grammar Essentials", score: 6, maxScore: 20, date: "2026-03-05" },
      { name: "The Tempest Key Scenes", score: 7, maxScore: 20, date: "2026-02-25" },
      { name: "Spelling & Vocabulary 3", score: 8, maxScore: 20, date: "2026-02-15" },
    ],
    activityTimeline: [
      { action: "Incomplete", detail: "Private Peaceful Chapter 8 questions", date: "2026-03-18" },
      { action: "Scored 35%", detail: "Literary Devices Quiz", date: "2026-03-15" },
      { action: "Submitted", detail: "Private Peaceful Essay (with TA support)", date: "2026-03-08" },
      { action: "Absent", detail: "Missed Poetry lesson", date: "2026-03-05" },
      { action: "Incomplete", detail: "Non-Fiction Reading homework", date: "2026-03-02" },
      { action: "Achieved Grade 3c", detail: "KS3 Reading Assessment", date: "2026-02-28" },
      { action: "Submitted", detail: "Descriptive Writing with scaffold", date: "2026-02-20" },
      { action: "Absent", detail: "Missed Shakespeare lesson", date: "2026-02-15" },
      { action: "Reviewed", detail: "Learning support plan meeting", date: "2026-02-10" },
    ],
    recommendations: [
      "Implement individual learning support plan with TA assistance in lessons.",
      "Use visual and drama-based approaches to engage with texts.",
      "Provide audio versions of class texts alongside written copies.",
      "Set up structured homework support session after school on Tuesdays.",
      "Link English tasks to art and drama interests where possible.",
    ],
  },
];

// ── Teacher Demo Data ──────────────────────────────────────────────────────

export const DEMO_TEACHER = {
  id: "t-mitchell",
  name: "Mrs Mitchell",
  email: "mitchell@riverside.demo",
  department: "English",
  role: "Head of KS4 English",
};

export interface TeacherDemoStudent {
  id: string;
  name: string;
  atRisk: boolean;
  ragStatus: "green" | "amber" | "red";
  riskReason: string;
  overallScore: number;
  completionRate: number;
  currentGrade: string;
  predictedGrade: string;
  lastActive: string;
  trend: "up" | "down" | "stable";
}

export interface TeacherDemoClass {
  id: string;
  name: string;
  yearGroup: number;
  examBoard: string;
  studentCount: number;
  avgScore: number;
  completionRate: number;
  atRiskCount: number;
  students: TeacherDemoStudent[];
}

export const TEACHER_DEMO_CLASSES: TeacherDemoClass[] = [
  {
    id: "tc1",
    name: "10A English Literature",
    yearGroup: 10,
    examBoard: "AQA",
    studentCount: 28,
    avgScore: 68,
    completionRate: 74,
    atRiskCount: 3,
    students: [
      { id: "s1", name: "Amelia Richardson", atRisk: false, ragStatus: "green", riskReason: "", overallScore: 88, completionRate: 92, currentGrade: "8", predictedGrade: "9", lastActive: "Today", trend: "up" },
      { id: "s2", name: "Oliver Bennett", atRisk: false, ragStatus: "green", riskReason: "", overallScore: 72, completionRate: 78, currentGrade: "6", predictedGrade: "7", lastActive: "Today", trend: "up" },
      { id: "s3", name: "Fatima Al-Rashid", atRisk: true, ragStatus: "red", riskReason: "Score dropped 15% over last 3 weeks", overallScore: 52, completionRate: 45, currentGrade: "4", predictedGrade: "5", lastActive: "3 days ago", trend: "down" },
      { id: "ts1", name: "James Whitfield", atRisk: true, ragStatus: "red", riskReason: "4 consecutive missed assignments", overallScore: 41, completionRate: 30, currentGrade: "3", predictedGrade: "4", lastActive: "1 week ago", trend: "down" },
      { id: "ts2", name: "Priya Patel", atRisk: false, ragStatus: "amber", riskReason: "", overallScore: 62, completionRate: 65, currentGrade: "5", predictedGrade: "6", lastActive: "Yesterday", trend: "stable" },
      { id: "ts3", name: "Liam O'Connor", atRisk: true, ragStatus: "red", riskReason: "Below target grade by 2 levels", overallScore: 38, completionRate: 28, currentGrade: "2", predictedGrade: "4", lastActive: "5 days ago", trend: "down" },
      { id: "ts4", name: "Emily Watson", atRisk: false, ragStatus: "green", riskReason: "", overallScore: 81, completionRate: 85, currentGrade: "7", predictedGrade: "8", lastActive: "Today", trend: "up" },
    ],
  },
  {
    id: "tc2",
    name: "10B English Language",
    yearGroup: 10,
    examBoard: "AQA",
    studentCount: 30,
    avgScore: 71,
    completionRate: 78,
    atRiskCount: 2,
    students: [
      { id: "ts5", name: "Zara Hussain", atRisk: false, ragStatus: "green", riskReason: "", overallScore: 85, completionRate: 90, currentGrade: "7", predictedGrade: "8", lastActive: "Today", trend: "up" },
      { id: "ts6", name: "Daniel Foster", atRisk: true, ragStatus: "amber", riskReason: "Inconsistent scores -- ranging from 35% to 72%", overallScore: 49, completionRate: 52, currentGrade: "4", predictedGrade: "5", lastActive: "2 days ago", trend: "down" },
      { id: "ts7", name: "Chloe Martin", atRisk: false, ragStatus: "green", riskReason: "", overallScore: 76, completionRate: 80, currentGrade: "6", predictedGrade: "7", lastActive: "Today", trend: "stable" },
      { id: "ts8", name: "Ryan Osei", atRisk: true, ragStatus: "red", riskReason: "Attendance below 80%, 6 missed classes", overallScore: 44, completionRate: 35, currentGrade: "3", predictedGrade: "4", lastActive: "4 days ago", trend: "down" },
      { id: "ts9", name: "Hannah Clarke", atRisk: false, ragStatus: "green", riskReason: "", overallScore: 79, completionRate: 82, currentGrade: "6", predictedGrade: "7", lastActive: "Yesterday", trend: "up" },
    ],
  },
  {
    id: "tc3",
    name: "11A English Literature",
    yearGroup: 11,
    examBoard: "AQA",
    studentCount: 26,
    avgScore: 74,
    completionRate: 82,
    atRiskCount: 1,
    students: [
      { id: "s5", name: "Sophie Chen", atRisk: false, ragStatus: "green", riskReason: "", overallScore: 94, completionRate: 98, currentGrade: "9", predictedGrade: "9", lastActive: "Today", trend: "up" },
      { id: "ts10", name: "Marcus Brown", atRisk: false, ragStatus: "green", riskReason: "", overallScore: 78, completionRate: 82, currentGrade: "6", predictedGrade: "7", lastActive: "Today", trend: "stable" },
      { id: "ts11", name: "Isabella Torres", atRisk: false, ragStatus: "amber", riskReason: "", overallScore: 65, completionRate: 68, currentGrade: "5", predictedGrade: "6", lastActive: "Yesterday", trend: "stable" },
      { id: "ts12", name: "Ethan Walker", atRisk: true, ragStatus: "red", riskReason: "Mock exam score 32% -- well below target", overallScore: 42, completionRate: 38, currentGrade: "3", predictedGrade: "4", lastActive: "3 days ago", trend: "down" },
      { id: "ts13", name: "Grace Liu", atRisk: false, ragStatus: "green", riskReason: "", overallScore: 82, completionRate: 88, currentGrade: "7", predictedGrade: "8", lastActive: "Today", trend: "up" },
    ],
  },
];

export interface TeacherDemoLesson {
  id: string;
  time: string;
  className: string;
  topic: string;
  room: string;
}

export const TEACHER_DEMO_LESSONS: TeacherDemoLesson[] = [
  { id: "tl1", time: "09:00 - 10:00", className: "10A English Literature", topic: "Macbeth Act 3: The Banquet Scene", room: "Room 204" },
  { id: "tl2", time: "11:15 - 12:15", className: "10B English Language", topic: "Language Paper 1 Q5: Descriptive Writing", room: "Room 204" },
  { id: "tl3", time: "13:30 - 14:30", className: "11A English Literature", topic: "An Inspector Calls: Revision & Essay Practice", room: "Room 112" },
];

export interface TeacherDemoSubmission {
  id: string;
  studentId: string;
  studentName: string;
  className: string;
  title: string;
  type: "essay" | "homework" | "quiz";
  score: number;
  maxScore: number;
  submittedAt: string;
}

export const TEACHER_DEMO_SUBMISSIONS: TeacherDemoSubmission[] = [
  { id: "sub1", studentId: "s1", studentName: "Amelia Richardson", className: "10A English Lit", title: "Macbeth: Ambition as a Destructive Force", type: "essay", score: 38, maxScore: 40, submittedAt: "2 hours ago" },
  { id: "sub2", studentId: "ts5", studentName: "Zara Hussain", className: "10B English Lang", title: "Language P1 Q5: Descriptive Writing", type: "essay", score: 32, maxScore: 40, submittedAt: "3 hours ago" },
  { id: "sub3", studentId: "ts10", studentName: "Marcus Brown", className: "11A English Lit", title: "Inspector Calls: Key Quotes Homework", type: "homework", score: 17, maxScore: 20, submittedAt: "5 hours ago" },
  { id: "sub4", studentId: "s3", studentName: "Fatima Al-Rashid", className: "10A English Lit", title: "Poetry Anthology: Comparison Practice", type: "homework", score: 10, maxScore: 20, submittedAt: "Yesterday" },
  { id: "sub5", studentId: "s5", studentName: "Sophie Chen", className: "11A English Lit", title: "Macbeth Key Quotes Quiz", type: "quiz", score: 20, maxScore: 20, submittedAt: "Yesterday" },
];