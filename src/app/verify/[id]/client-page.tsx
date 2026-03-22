'use client'

import { useState, useEffect } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { getCourseName } from '@/lib/utils'
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

    // Use denormalized student_name from the certificate itself.
    // This avoids a profiles query that would fail for unauthenticated visitors
    // (profiles RLS restricts reads to the owning user).
    // Fall back to a profiles lookup for older certificates without student_name.
    if (cert.student_name) {
      setStudentName(cert.student_name)
    } else {
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', cert.user_id)
        .single()

      setStudentName(profile?.full_name || 'Student')
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!found || !certificate) {
    notFound()
  }

  const issuedDate = new Date(certificate.issued_at)
  const courseName = getCourseName(certificate.course_id)

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="max-w-lg w-full">
        {/* Verification Badge */}
        <div className="bg-card border border-primary/30 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary/10 border-b border-primary/20 px-6 py-4 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <div>
              <h1 className="text-lg font-bold text-primary">
                Certificate Verified
              </h1>
              <p className="text-muted-foreground text-xs">
                This certificate is authentic and valid.
              </p>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="p-6 space-y-5">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Awarded To
                </p>
                <p className="text-foreground font-semibold">{studentName}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Course
                </p>
                <p className="text-foreground font-semibold">{courseName}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Grade
                  </p>
                  <p className="text-foreground font-semibold">
                    {certificate.grade}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Score
                  </p>
                  <p className="text-foreground font-semibold">
                    {certificate.score}%
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Issued
                </p>
                <p className="text-foreground font-semibold">
                  {issuedDate.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground text-center font-mono">
                Certificate ID: {certificate.id}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-background/50 border-t border-border px-6 py-3 text-center">
            <Link
              href="/"
              className="text-primary text-sm hover:underline"
            >
              The English Hub
            </Link>
            <span className="text-muted-foreground text-sm mx-2">|</span>
            <span className="text-muted-foreground text-xs">
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
