'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { getCourseName } from '@/lib/utils'
import type { Certificate } from '@/lib/types'
import {
  Award,
  Download,
  Share2,
  Loader2,
  ArrowLeft,
  CheckCircle,
  ExternalLink,
} from 'lucide-react'

export default function CertificatePage() {
  const { id } = useParams<{ id: string }>()
  const supabase = createClient()
  const certificateRef = useRef<HTMLDivElement>(null)

  const [certificate, setCertificate] = useState<Certificate | null>(null)
  const [studentName, setStudentName] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [shareSuccess, setShareSuccess] = useState(false)

  useEffect(() => {
    fetchCertificate()
  }, [id])

  async function fetchCertificate() {
    setLoading(true)
    setError(null)

    const { data: cert, error: certError } = await supabase
      .from('certificates')
      .select('*')
      .eq('id', id)
      .single()

    if (certError || !cert) {
      setError('Certificate not found.')
      setLoading(false)
      return
    }

    setCertificate(cert)

    // Fetch student name
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', cert.user_id)
      .single()

    setStudentName(profile?.full_name || 'Student')
    setLoading(false)
  }

  function getGradeColor(grade: string): string {
    switch (grade) {
      case 'Distinction':
        return 'text-yellow-400'
      case 'Merit':
        return 'text-primary'
      default:
        return 'text-brand-blue'
    }
  }

  function handlePrint() {
    window.print()
  }

  async function handleShare() {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'The English Hub Certificate',
          text: `Certificate of ${certificate?.grade} awarded to ${studentName}`,
          url,
        })
      } catch {
        // User cancelled or share failed
      }
    } else {
      await navigator.clipboard.writeText(url)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error || !certificate) {
    notFound()
  }

  const issuedDate = new Date(certificate.issued_at)
  const courseName = getCourseName(certificate.course_id)
  const verifyUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/verify/${certificate.id}`

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Actions bar - hidden when printing */}
        <div className="print:hidden flex items-center justify-between mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to dashboard
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              {shareSuccess ? (
                <>
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Copied!
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  Share
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="btn-primary text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Certificate */}
        <div
          ref={certificateRef}
          className="bg-card border-2 border-primary/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/40 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />

          <div className="text-center relative z-10">
            {/* Logo / Header */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.3em] mb-1">
              The English Hub
            </h2>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Certificate of Achievement
            </h1>

            {/* Divider */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />

            {/* Recipient */}
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
              This is to certify that
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              {studentName}
            </p>

            {/* Course */}
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
              has successfully completed
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
              {courseName}
            </p>

            {/* Grade and Score */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-background/50 rounded-xl px-6 py-4 mb-8">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                  Grade
                </p>
                <p
                  className={`text-xl font-bold ${getGradeColor(
                    certificate.grade
                  )}`}
                >
                  {certificate.grade}
                </p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                  Score
                </p>
                <p className="text-xl font-bold text-foreground">
                  {certificate.score}%
                </p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                  Date
                </p>
                <p className="text-xl font-bold text-foreground">
                  {issuedDate.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />

            {/* Verification */}
            <div className="text-center">
              <p className="text-muted-foreground text-xs mb-1">
                Certificate ID: {certificate.id}
              </p>
              <Link
                href={verifyUrl}
                className="inline-flex items-center gap-1 text-primary text-xs hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                Verify at {verifyUrl}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
