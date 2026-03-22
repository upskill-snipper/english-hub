'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAuthStore } from '@/store/auth-store'
import type { StudentAnalytics, TrendData } from '@/lib/types'

interface ModuleDetail {
  module_id: string
  module_name: string
  course_id: string
  course_name: string
  completed: boolean
  quiz_score: number | null
  time_spent_seconds: number
  completed_at: string | null
}

interface StudentRecommendation {
  priority: 1 | 2 | 3
  title: string
  description: string
  suggested_action: string
  course_ids?: string[]
}

interface UseStudentAnalyticsReturn {
  student: StudentAnalytics | null
  modules: ModuleDetail[]
  trends: TrendData[]
  recommendations: StudentRecommendation[]
  isLoading: boolean
  error: string | null
  refetch: () => void
}

export function useStudentAnalytics(studentId: string): UseStudentAnalyticsReturn {
  const { user } = useAuthStore()
  const [student, setStudent] = useState<StudentAnalytics | null>(null)
  const [modules, setModules] = useState<ModuleDetail[]>([])
  const [trends, setTrends] = useState<TrendData[]>([])
  const [recommendations, setRecommendations] = useState<StudentRecommendation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStudentAnalytics = useCallback(async () => {
    if (!user || !studentId) {
      setIsLoading(false)
      return
    }

    try {
      setError(null)
      setIsLoading(true)

      const [studentRes, trendsRes] = await Promise.all([
        fetch(`/api/school/students/${studentId}`),
        fetch(`/api/school/students/${studentId}/trends`),
      ])

      if (!studentRes.ok) {
        throw new Error('Failed to fetch student data')
      }

      const studentData = await studentRes.json()

      setStudent(studentData.student ?? null)
      setModules(studentData.modules ?? [])
      setRecommendations(studentData.recommendations ?? [])

      if (trendsRes.ok) {
        const trendsData = await trendsRes.json()
        setTrends(trendsData.trends ?? [])
      } else {
        console.error('Failed to fetch student trends')
        setTrends([])
      }
    } catch (err) {
      console.error('Student analytics fetch error:', err)
      setError('Failed to load student data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [user, studentId])

  useEffect(() => {
    fetchStudentAnalytics()
  }, [fetchStudentAnalytics])

  return {
    student,
    modules,
    trends,
    recommendations,
    isLoading,
    error,
    refetch: fetchStudentAnalytics,
  }
}
