'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import allCourses from '@/data/courses'
import type { Certificate } from '@/lib/types'
import {
  ShieldCheck,
  ShieldX,
  Loader2,
  Award,
  Calendar,
  GraduationCap,
  BarChart3,
  User,
} from 'lucide-react'

export default function VerifyPage() {
  const { id } = useParams<{ id: string }>()
  const supabase = createClient()

  const [certificate, setCertificate] = useState<Certificate | null>(null)
  const [studentName, setStudentName] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [found, setFound] = useState(false)

  useEffect(() => {
    verifyCertificate()
  }, [id])

  async function verifyCertificate() {
    setLoading(true)

    const { data: cert, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !cert) {
      setFound(false)
      setLoading(false)
      return
    }

    setCertificate(cert)
    setFound(true)

    // Fetch student name
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', cert.user_id)
      .single()

    setStudentName(profile?.full_name || 'Student')
    setLoading(false)
  }

  function getCourseName(courseId: string): string {
    const course = allCourses.find((c) => c.id === courseId)
    return course?.title || courseId
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <Loader2 className="w-8 h-8 animate-spin text-brand-accent" />
      </div>
    )
  }

  if (!found || !certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-brand-bg">
        <div className="max-w-md w-full text-center">
          <div className="bg-brand-card border border-red-500/30 rounded-2xl p-8">
            <ShieldX className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-brand-text mb-2">
              Certificate Not Found
            </h1>
            <p className="text-brand-muted mb-6">
              We could not verify this certificate. It may have been removed or
              the ID may be incorrect.
            </p>
            <p className="text-xs text-brand-muted/60 font-mono mb-6">
              ID: {id}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand-accent hover:underline text-sm"
            >
              Visit The English Hub
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const issuedDate = new Date(certificate.issued_at)
  const courseName = getCourseName(certificate.course_id)

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-brand-bg">
      <div className="max-w-lg w-full">
        {/* Verification Badge */}
        <div className="bg-brand-card border border-brand-accent/30 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-brand-accent/10 border-b border-brand-accent/20 px-6 py-4 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-accent" />
            <div>
              <h1 className="text-lg font-bold text-brand-accent">
                Certificate Verified
              </h1>
              <p className="text-brand-muted text-xs">
                This certificate is authentic and valid
              </p>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="p-6 space-y-5">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-brand-muted mt-0.5" />
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-wider">
                  Awarded To
                </p>
                <p className="text-brand-text font-semibold">{studentName}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-brand-muted mt-0.5" />
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-wider">
                  Course
                </p>
                <p className="text-brand-text font-semibold">{courseName}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-brand-muted mt-0.5" />
                <div>
                  <p className="text-xs text-brand-muted uppercase tracking-wider">
                    Grade
                  </p>
                  <p className="text-brand-text font-semibold">
                    {certificate.grade}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-brand-muted mt-0.5" />
                <div>
                  <p className="text-xs text-brand-muted uppercase tracking-wider">
                    Score
                  </p>
                  <p className="text-brand-text font-semibold">
                    {certificate.score}%
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-brand-muted mt-0.5" />
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-wider">
                  Issued
                </p>
                <p className="text-brand-text font-semibold">
                  {issuedDate.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border pt-4">
              <p className="text-xs text-brand-muted text-center font-mono">
                Certificate ID: {certificate.id}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-brand-bg/50 border-t border-brand-border px-6 py-3 text-center">
            <Link
              href="/"
              className="text-brand-accent text-sm hover:underline"
            >
              The English Hub
            </Link>
            <span className="text-brand-muted text-sm mx-2">|</span>
            <span className="text-brand-muted text-xs">
              Verified on{' '}
              {new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
