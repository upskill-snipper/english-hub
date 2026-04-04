"use client"

import { useState } from "react"
import {
  Upload,
  Download,
  FileSpreadsheet,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  Copy,
  Check,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/Toast"

const MOCK_IMPORT_RESULTS = [
  { name: "Alice Cooper", email: "acooper@riverside.demo", password: "Sunset42!", yearGroup: 10, status: "created" as const },
  { name: "Ben Harris", email: "bharris@riverside.demo", password: "Mountain7#", yearGroup: 10, status: "created" as const },
  { name: "Charlotte Adams", email: "cadams@riverside.demo", password: "River99$", yearGroup: 11, status: "created" as const },
  { name: "David Wong", email: "dwong@riverside.demo", password: "Castle55@", yearGroup: 9, status: "created" as const },
  { name: "Eleanor Park", email: "epark@riverside.demo", password: "Breeze33!", yearGroup: 10, status: "created" as const },
  { name: "Freddie Scott", email: "fscott@riverside.demo", password: "Leaf88#", yearGroup: 11, status: "created" as const },
  { name: "Grace Patel", email: "gpatel@riverside.demo", password: "Cloud27$", yearGroup: 9, status: "created" as const },
  { name: "Harry Thompson", email: "hthompson@riverside.demo", password: "Stone44@", yearGroup: 10, status: "created" as const },
]

const MOCK_ERRORS = [
  { row: 12, name: "J. Smith", reason: "Duplicate email address" },
  { row: 25, name: "K. Brown", reason: "Missing year group" },
  { row: 38, name: "L. Taylor", reason: "Invalid email format" },
]

export default function DemoImportPage() {
  const { toast } = useToast()
  const [isDragOver, setIsDragOver] = useState(false)
  const [showPasswords, setShowPasswords] = useState(false)
  const [copiedRow, setCopiedRow] = useState<number | null>(null)

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    setIsDragOver(true)
  }

  function handleDragLeave() {
    setIsDragOver(false)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsDragOver(false)
    toast("info", "Import is available with a registered school account")
  }

  function handleFileClick() {
    toast("info", "Import is available with a registered school account")
  }

  function handleCopyCredentials(index: number) {
    const student = MOCK_IMPORT_RESULTS[index]
    navigator.clipboard
      .writeText(`Email: ${student.email}\nPassword: ${student.password}`)
      .catch(() => {})
    setCopiedRow(index)
    setTimeout(() => setCopiedRow(null), 2000)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Bulk Import</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Import students and teachers from a spreadsheet. Accounts are created automatically.
        </p>
      </div>

      {/* Step 1: Download Template */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            1
          </div>
          <h2 className="text-base font-semibold">Download Template</h2>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Download the CSV template, fill it with your student or teacher data, then upload it below.
        </p>
        <Button variant="outline" render={<a href="/api/school/export/template" download />}>
            <FileSpreadsheet className="h-4 w-4" />
            Download CSV Template
        </Button>
      </section>

      {/* Step 2: Upload */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            2
          </div>
          <h2 className="text-base font-semibold">Upload Filled Template</h2>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleFileClick}
          className={`cursor-pointer rounded-lg border-2 border-dashed p-10 text-center transition-colors ${
            isDragOver
              ? "border-primary bg-primary/5"
              : "border-border hover:border-muted-foreground/40"
          }`}
        >
          <Upload className="mx-auto h-10 w-10 text-muted-foreground/50" />
          <p className="mt-3 text-sm font-medium">
            Drop your CSV file here or click to browse
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Supports .csv files up to 5MB
          </p>
        </div>
      </section>

      {/* Step 3: Mock Results */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            3
          </div>
          <h2 className="text-base font-semibold">Import Results</h2>
          <Badge className="bg-amber-500/15 text-amber-400 border-amber-500/25 text-[10px] uppercase tracking-wider">
            Sample
          </Badge>
        </div>

        {/* Summary */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/5 p-4">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-lg font-bold text-green-500">47</p>
              <p className="text-xs text-muted-foreground">Student accounts created</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
            <XCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-lg font-bold text-red-500">3</p>
              <p className="text-xs text-muted-foreground">Errors (rows skipped)</p>
            </div>
          </div>
        </div>

        {/* Errors */}
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-semibold text-red-400">Errors</h3>
          <div className="space-y-2">
            {MOCK_ERRORS.map((err) => (
              <div
                key={err.row}
                className="flex items-center gap-3 rounded-md border border-red-500/15 bg-red-500/5 px-3 py-2 text-sm"
              >
                <span className="font-mono text-xs text-muted-foreground">Row {err.row}</span>
                <span className="font-medium">{err.name}</span>
                <span className="text-muted-foreground">--</span>
                <span className="text-red-400">{err.reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials Table */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Created Accounts (showing 8 of 47)</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPasswords(!showPasswords)}
          >
            {showPasswords ? (
              <EyeOff className="h-3.5 w-3.5" />
            ) : (
              <Eye className="h-3.5 w-3.5" />
            )}
            {showPasswords ? "Hide Passwords" : "Show Passwords"}
          </Button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Name</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Email</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Password</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Year</th>
                <th className="px-4 py-2.5 text-right font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_IMPORT_RESULTS.map((student, i) => (
                <tr key={student.email} className="border-b border-border last:border-0">
                  <td className="px-4 py-2.5 font-medium">{student.name}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{student.email}</td>
                  <td className="px-4 py-2.5 font-mono text-xs">
                    {showPasswords ? student.password : "************"}
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">Y{student.yearGroup}</td>
                  <td className="px-4 py-2.5 text-right">
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={() => handleCopyCredentials(i)}
                    >
                      {copiedRow === i ? (
                        <Check className="h-3.5 w-3.5 text-green-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Download button */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Passwords are auto-generated. Students can change them after first login.
          </p>
          <Button
            onClick={() => toast("info", "Register to use import")}
          >
            <Download className="h-4 w-4" />
            Download Login Details
          </Button>
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 text-center">
        <Sparkles className="mx-auto h-6 w-6 text-amber-400" />
        <h3 className="mt-2 text-base font-semibold">Ready to import your students?</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Register your school to bulk-import students and teachers with automatic account creation.
        </p>
        <Button render={<a href="/for-schools/register" />} className="mt-4">
            Register Your School
        </Button>
      </div>
    </div>
  )
}
