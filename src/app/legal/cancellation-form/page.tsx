'use client'

import { useState, useCallback } from 'react'

type Tab = 'online' | 'printable'

interface FormData {
  fullName: string
  email: string
  address: string
  subscriptionPlan: string
  startDate: string
  reason: string
  confirmed: boolean
}

const SUBSCRIPTION_PLANS = [
  { value: '', label: 'Select your plan' },
  // Current (Early Access / Founding) rates
  { value: 'student-monthly', label: 'Student Monthly (£3.99/month — Early Access)' },
  { value: 'student-annual', label: 'Student Annual (£29.99/year — Early Access)' },
  { value: 'student-annual-promo', label: 'Student Annual with affiliate code (£20/year)' },
  { value: 'teacher-monthly', label: 'Teacher Monthly (£6.99/month — Early Access)' },
  { value: 'teacher-annual', label: 'Teacher Annual (£67.99/year — Early Access)' },
  // Projected Standard rates (from August 2026)
  { value: 'student-monthly-standard', label: 'Student Monthly (£7.99/month — Standard)' },
  { value: 'student-annual-standard', label: 'Student Annual (£69.99/year — Standard)' },
  { value: 'teacher-monthly-standard', label: 'Teacher Monthly (£11.99/month — Standard)' },
  { value: 'teacher-annual-standard', label: 'Teacher Annual (£99/year — Standard)' },
  // Grandfathered legacy rates
  { value: 'student-monthly-legacy-349', label: 'Student Monthly (legacy — £3.49/month)' },
  { value: 'student-annual-legacy-20', label: 'Student Annual (legacy — £20/year flat)' },
  { value: 'student-monthly-legacy-899', label: 'Student Monthly (legacy — £8.99/month)' },
  { value: 'student-annual-legacy-6799', label: 'Student Annual (legacy — £67.99/year)' },
  { value: 'teacher-monthly-legacy-799', label: 'Teacher Monthly (legacy — £7.99/month)' },
  { value: 'teacher-monthly-legacy-1299', label: 'Teacher Monthly (legacy — £12.99/month)' },
  { value: 'teacher-annual-legacy-9999', label: 'Teacher Annual (legacy — £99.99/year)' },
  { value: 'school-founding-3k', label: 'Founding School (wave 1 — £3,000/year)' },
  { value: 'school-founding-4k', label: 'Founding School (£4,000/year)' },
  { value: 'school', label: 'School / Institutional Plan (other)' },
]

const CANCELLATION_REASONS = [
  { value: '', label: 'Select a reason (optional)' },
  { value: 'too-expensive', label: 'Too expensive' },
  { value: 'not-using', label: 'Not using the service enough' },
  { value: 'found-alternative', label: 'Found an alternative' },
  { value: 'missing-features', label: 'Missing features I need' },
  { value: 'technical-issues', label: 'Technical issues' },
  { value: 'temporary', label: 'Temporary break' },
  { value: 'other', label: 'Other' },
]

function generateRefNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `CAN-${timestamp}-${random}`
}

export default function CancellationFormPage() {
  const [activeTab, setActiveTab] = useState<Tab>('online')
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    address: '',
    subscriptionPlan: '',
    startDate: '',
    reason: '',
    confirmed: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    refNumber?: string
    error?: string
  } | null>(null)

  const updateField = useCallback((field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.confirmed) return

    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const response = await fetch('/api/stripe/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          address: formData.address || undefined,
          subscriptionPlan: formData.subscriptionPlan,
          startDate: formData.startDate,
          reason: formData.reason || undefined,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || 'Failed to process cancellation. Please try again.')
      }

      const data = await response.json()
      const refNumber = data.referenceNumber || generateRefNumber()

      setSubmitResult({ success: true, refNumber })
    } catch (err) {
      setSubmitResult({
        success: false,
        error: err instanceof Error ? err.message : 'An unexpected error occurred.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.subscriptionPlan !== '' &&
    formData.startDate !== '' &&
    formData.confirmed

  return (
    <>
      {/* Print-only styles */}
      <style>{`
        @media print {
          /* Hide everything except the printable form */
          header, aside, nav, footer,
          details, .no-print,
          [data-tab="online"],
          [data-tab-controls] {
            display: none !important;
          }

          [data-tab="printable"] {
            display: block !important;
          }

          /* Reset page styling for print */
          body {
            background: white !important;
            color: black !important;
            font-size: 12pt !important;
          }

          .prose {
            max-width: 100% !important;
          }

          article {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
          }

          /* Form field lines for print */
          .print-line {
            border-bottom: 1px solid black;
            min-width: 200px;
            display: inline-block;
            padding-bottom: 2px;
          }

          .print-signature-line {
            border-bottom: 1px solid black;
            min-width: 300px;
            display: inline-block;
            height: 40px;
          }
        }
      `}</style>

      <div className="not-prose">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Cancellation Form</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Cancel your subscription in accordance with the Consumer Contracts (Information,
          Cancellation and Additional Charges) Regulations 2013.
        </p>

        {/* Tab controls */}
        <div
          data-tab-controls=""
          className="flex border-b border-border mb-8"
          role="tablist"
          aria-label="Cancellation form options"
        >
          <button
            role="tab"
            aria-selected={activeTab === 'online'}
            aria-controls="panel-online"
            id="tab-online"
            onClick={() => setActiveTab('online')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              activeTab === 'online'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-muted-foreground hover:border-border'
            }`}
          >
            Online Cancellation
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'printable'}
            aria-controls="panel-printable"
            id="tab-printable"
            onClick={() => setActiveTab('printable')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              activeTab === 'printable'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-muted-foreground hover:border-border'
            }`}
          >
            Printable Model Form
          </button>
        </div>

        {/* Online Cancellation Tab */}
        <div
          id="panel-online"
          role="tabpanel"
          aria-labelledby="tab-online"
          data-tab="online"
          className={activeTab === 'online' ? 'block' : 'hidden'}
        >
          {submitResult?.success ? (
            <SuccessMessage refNumber={submitResult.refNumber!} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitResult?.error && (
                <div
                  className="bg-warn/5 border border-warn/20 text-warn px-4 py-3 rounded-lg"
                  role="alert"
                >
                  <p className="font-medium">Cancellation could not be processed</p>
                  <p className="text-sm mt-1">{submitResult.error}</p>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Full name <span className="text-warn">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm shadow-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Email address <span className="text-warn">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm shadow-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Address <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <textarea
                  id="address"
                  rows={3}
                  value={formData.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm shadow-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Your address"
                />
              </div>

              {/* Subscription Plan */}
              <div>
                <label
                  htmlFor="subscriptionPlan"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Subscription plan <span className="text-warn">*</span>
                </label>
                <select
                  id="subscriptionPlan"
                  required
                  value={formData.subscriptionPlan}
                  onChange={(e) => updateField('subscriptionPlan', e.target.value)}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm shadow-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-card"
                >
                  {SUBSCRIPTION_PLANS.map((plan) => (
                    <option key={plan.value} value={plan.value}>
                      {plan.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Start Date */}
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Subscription start date <span className="text-warn">*</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  required
                  value={formData.startDate}
                  onChange={(e) => updateField('startDate', e.target.value)}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm shadow-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>

              {/* Reason */}
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Reason for cancellation{' '}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <select
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => updateField('reason', e.target.value)}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm shadow-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-card"
                >
                  {CANCELLATION_REASONS.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Confirmation checkbox */}
              <div className="bg-muted rounded-lg p-4 border border-border">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.confirmed}
                    onChange={(e) => updateField('confirmed', e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    required
                  />
                  <span className="text-sm text-muted-foreground">
                    I wish to cancel my subscription. I understand that this action will end my
                    access to The English Hub services at the end of my current billing period.{' '}
                    <span className="text-warn">*</span>
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-warn text-white font-medium text-sm shadow-md hover:bg-warn-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-warn focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit Cancellation Request'
                  )}
                </button>
                <a
                  href="/dashboard"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
                >
                  Keep my subscription
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Printable Model Form Tab */}
        <div
          id="panel-printable"
          role="tabpanel"
          aria-labelledby="tab-printable"
          data-tab="printable"
          className={activeTab === 'printable' ? 'block' : 'hidden'}
        >
          <div className="mb-6 flex items-center gap-4 no-print">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white font-medium text-sm shadow-md hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print this form
            </button>
            <p className="text-sm text-muted-foreground">
              Print and complete by hand, then post or email to us.
            </p>
          </div>

          {/* The legally prescribed model form */}
          <div className="border border-border rounded-lg p-6 sm:p-8 bg-card space-y-6">
            <div className="text-center border-b border-border pb-6">
              <h2 className="text-xl font-bold text-foreground">Model Cancellation Form</h2>
              <p className="text-sm text-muted-foreground mt-2 italic">
                (Complete and return this form only if you wish to withdraw from the contract)
              </p>
            </div>

            <div className="space-y-4 text-sm text-foreground leading-relaxed">
              {/* Addressee */}
              <div>
                <p className="font-medium">To:</p>
                <p>Upskill Energy Limited</p>
                <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@Upskillenergy.com" className="text-primary hover:underline">
                    info@Upskillenergy.com
                  </a>
                </p>
              </div>

              {/* Notice statement */}
              <div className="bg-muted rounded-lg p-4 border border-border">
                <p>
                  I/We (*) hereby give notice that I/We (*) cancel my/our (*) contract for the
                  provision of the following service:
                </p>
                <p className="font-medium mt-2">The English Hub subscription service</p>
              </div>

              {/* Form fields */}
              <div className="space-y-5 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
                  <span className="font-medium whitespace-nowrap">
                    Ordered on (*) / received on (*):
                  </span>
                  <span className="flex-1 border-b border-foreground min-h-[24px] print-line">
                    &nbsp;
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
                  <span className="font-medium whitespace-nowrap">Name of consumer(s):</span>
                  <span className="flex-1 border-b border-foreground min-h-[24px] print-line">
                    &nbsp;
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
                  <span className="font-medium whitespace-nowrap">Address of consumer(s):</span>
                  <span className="flex-1 border-b border-foreground min-h-[24px] print-line">
                    &nbsp;
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
                  <span className="font-medium whitespace-nowrap">Email address:</span>
                  <span className="flex-1 border-b border-foreground min-h-[24px] print-line">
                    &nbsp;
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
                  <span className="font-medium whitespace-nowrap">Subscription plan:</span>
                  <span className="flex-1 border-b border-foreground min-h-[24px] print-line">
                    &nbsp;
                  </span>
                </div>
              </div>

              {/* Signature */}
              <div className="pt-6 space-y-5 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
                  <span className="font-medium whitespace-nowrap">
                    Signature of consumer(s)
                    <br />
                    <span className="text-xs text-muted-foreground font-normal">
                      (only if this form is sent on paper)
                    </span>
                    :
                  </span>
                  <span className="flex-1 border-b border-foreground min-h-[40px] print-signature-line">
                    &nbsp;
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
                  <span className="font-medium whitespace-nowrap">Date:</span>
                  <span className="flex-1 border-b border-foreground min-h-[24px] print-line">
                    &nbsp;
                  </span>
                </div>
              </div>

              {/* Delete as appropriate */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground italic">(*) Delete as appropriate</p>
              </div>
            </div>
          </div>

          {/* Additional info below the form */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 no-print">
            <h3 className="text-sm font-semibold text-primary mb-2">How to submit this form</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">1.</span>
                <span>Print this page using the button above</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">2.</span>
                <span>Complete all required fields</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">3.</span>
                <span>
                  Post to: Upskill Energy Limited, 71-75 Shelton Street, Covent Garden, London, WC2H
                  9JQ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">4.</span>
                <span>
                  Or scan and email to:{' '}
                  <a href="mailto:info@Upskillenergy.com" className="text-primary hover:underline">
                    info@Upskillenergy.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

/** Success confirmation shown after successful cancellation */
function SuccessMessage({ refNumber }: { refNumber: string }) {
  return (
    <div className="text-center py-8 space-y-6">
      <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div>
        <h2 className="text-xl font-bold text-foreground">Cancellation request submitted</h2>
        <p className="text-muted-foreground mt-2">
          Your cancellation has been received and is being processed.
        </p>
      </div>

      <div className="bg-muted rounded-lg p-4 border border-border inline-block">
        <p className="text-sm text-muted-foreground">Reference number</p>
        <p className="text-lg font-mono font-bold text-primary mt-1">{refNumber}</p>
      </div>

      <div className="text-sm text-muted-foreground max-w-md mx-auto space-y-2">
        <p>
          A confirmation email has been sent to your email address. Please keep your reference
          number for your records.
        </p>
        <p>
          Your subscription will remain active until the end of your current billing period. You
          will not be charged again.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="/dashboard"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-white font-medium text-sm shadow-md hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
        >
          Return to Dashboard
        </a>
        <a
          href="/legal/cancellation"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
        >
          View Cancellation Policy
        </a>
      </div>
    </div>
  )
}
