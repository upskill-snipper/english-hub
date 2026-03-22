'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAuthStore } from '@/store/auth-store'
import type {
  ClassAnalytics,
  StudentAnalytics,
  WeakArea,
  Recommendation,
  TrendData,
} from '@/lib/types'

interface UseClassAnalyticsReturn {
  analytics: ClassAnalytics | null
  students: StudentAnalytics[]
  weakAreas: WeakArea[]
  recommendations: Recommendation[]
  trends: TrendData[]
  isLoading: boolean
  error: string | null
  refetch: () => void
}

export function useClassAnalytics(classId: string): UseClassAnalyticsReturn {
  const { user } = useAuthStore()
  const [analytics, setAnalytics] = useState<ClassAnalytics | null>(null)
  const [students, setStudents] = useState<StudentAnalytics[]>([])
  const [weakAreas, setWeakAreas] = useState<WeakArea[]>([])
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [trends, setTrends] = useState<TrendData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchClassAnalytics = useCallback(async () => {
    if (!user || !classId) {
      setIsLoading(false)
      return
    }

    try {
      setError(null)
      setIsLoading(true)

      const res = await fetch(`/api/school/classes/${classId}/analytics`)

      if (!res.ok) {
        throw new Error('Failed to fetch class analytics')
      }

      const data = await res.json()

      setAnalytics(data.analytics ?? null)
      setStudents(data.students ?? [])
      setWeakAreas(data.analytics?.weak_areas ?? [])
      setRecommendations(data.analytics?.recommendations ?? [])
      setTrends(data.trends ?? [])
    } catch (err) {
      console.error('Class analytics fetch error:', err)
      setError('Failed to load class analytics. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [user, classId])

  useEffect(() => {
    fetchClassAnalytics()
  }, [fetchClassAnalytics])

  return {
    analytics,
    students,
    weakAreas,
    recommendations,
    trends,
    isLoading,
    error,
    refetch: fetchClassAnalytics,
  }
}
