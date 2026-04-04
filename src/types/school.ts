// School roles
export type SchoolRole = "admin" | "head_of_department" | "teacher"
export type SchoolUserRole = SchoolRole | "student"

// School access types
export type SchoolAccessType = "founder" | "paid" | "trial" | "expired"
export type SubscriptionStatus = "trialing" | "active" | "past_due" | "cancelled" | "founder" | "expired"

// School entity
export interface School {
  id: string
  name: string
  slug: string
  address?: string
  city?: string
  postcode?: string
  contactEmail: string
  contactPhone?: string
  schoolType: "secondary" | "sixth_form" | "independent" | "academy" | "mat" | "other"
  subscriptionStatus: SubscriptionStatus
  accessType: SchoolAccessType
  accessUntil?: string
  promoCodeUsed?: string
  seatLimit: number
  seatsUsed: number
  examBoard?: string
  curriculum?: string[]
  logoUrl?: string
  createdAt: string
}

// School member (teacher/admin)
export interface SchoolMember {
  id: string
  schoolId: string
  userId?: string
  role: SchoolRole
  fullName: string
  email: string
  department?: string
  inviteStatus: "pending" | "accepted" | "expired"
  inviteToken?: string
  invitedAt: string
  acceptedAt?: string
  lastActiveAt?: string
}

// School student
export interface SchoolStudent {
  id: string
  schoolId: string
  userId: string
  yearGroup?: string
  className?: string
  status: "active" | "suspended" | "removed"
  joinedAt: string
  // Joined from profiles:
  email?: string
  firstName?: string
  lastName?: string
  lastActiveAt?: string
}

// Class
export interface SchoolClass {
  id: string
  schoolId: string
  teacherId?: string
  name: string
  yearGroup?: string
  examBoard?: string
  academicYear: string
  studentCount: number
  isActive: boolean
  // Teacher details joined:
  teacherName?: string
  teacherEmail?: string
}

// Bulk import job
export interface ImportJob {
  id: string
  schoolId: string
  importType: "students" | "teachers"
  status: "pending" | "processing" | "completed" | "failed"
  totalRows: number
  successCount: number
  errorCount: number
  errorDetails: ImportError[]
  startedAt: string
  completedAt?: string
  expiresAt?: string
}

export interface ImportError {
  row: number
  email: string
  error: string
}

// Import result (for credential download)
export interface ImportResult {
  id: string
  jobId: string
  userId?: string
  email: string
  firstName: string
  lastName: string
  role: "student" | "teacher"
  yearGroup?: string
  className?: string
  temporaryPassword: string
  status: "created" | "failed" | "duplicate"
  errorMessage?: string
}

// Promo code
export interface PromoCode {
  id: string
  code: string
  description?: string
  discountType: "percent" | "fixed" | "free_until_date"
  discountValue?: number
  freeUntilDate?: string
  maxUses?: number
  uses: number
  isActive: boolean
  validFrom: string
  validUntil?: string
}

// School analytics
export interface SchoolAnalytics {
  totalStudents: number
  totalTeachers: number
  totalClasses: number
  activeStudentsThisWeek: number
  assignmentsThisWeek: number
  averageScore: number
  atRiskStudents: AtRiskStudent[]
  yearGroupStats: YearGroupStat[]
  topClasses: ClassStat[]
}

export interface AtRiskStudent {
  userId: string
  name: string
  email: string
  yearGroup?: string
  lastActiveAt?: string
  averageScore?: number
  completionRate?: number
  issues: string[]
}

export interface YearGroupStat {
  yearGroup: string
  studentCount: number
  averageProgress: number
  assignmentsCompleted: number
  atRiskCount: number
}

export interface ClassStat {
  classId: string
  className: string
  teacherName: string
  studentCount: number
  averageScore: number
  completionRate: number
}

// School access info (returned by /api/school/access)
export interface SchoolAccessInfo {
  schoolId: string
  schoolName: string
  accessType: SchoolAccessType
  accessUntil: string | null
  isActive: boolean
  daysRemaining: number | null
  userRole: SchoolUserRole
  renewalPrice: number
  renewalCurrency: string
}

// Import row (from Excel/CSV)
export interface StudentImportRow {
  firstName: string
  lastName: string
  email: string
  yearGroup?: string
  className?: string
}

export interface TeacherImportRow {
  firstName: string
  lastName: string
  email: string
  jobTitle?: string
  classes?: string // comma separated
}
