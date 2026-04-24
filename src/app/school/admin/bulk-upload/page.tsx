/**
 * School admin — bulk student CSV upload (web-only, Wave 5).
 *
 * Four-step flow:
 *   1. Upload      — drag-drop or file picker. Template download + GDPR notice.
 *   2. Preview     — parsed rows in a table with per-row error indicators and a
 *                     "Download errors CSV" CTA.
 *   3. Confirm     — summary card ("32 new students, 4 existing, 2 excluded"),
 *                     idempotency-keyed submit button.
 *   4. Done        — success summary plus a "View import log" deep-link.
 *
 * Admin-gating: the API endpoints refuse non-admins with a 403. The page is
 * also listed at `/school/admin/bulk-upload` — the existing `school/layout.tsx`
 * guard runs verifySchoolMember() and redirects non-members away, which is the
 * belt-and-braces defence.
 *
 * GDPR: the page MUST surface the data-protection reminder before the admin
 * can start the upload. That notice is a checkbox; the submit button on step
 * 3 is disabled until it is ticked.
 *
 * British English copy.
 */

'use client';

import { useState, useCallback, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
  Upload,
  FileSpreadsheet,
  Download,
  CheckCircle,
  AlertCircle,
  Loader2,
  X,
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  STUDENT_CSV_TEMPLATE_FILENAME,
  getStudentCsvTemplate,
} from '@/lib/school/csv-template';
import {
  errorsToCsv,
  type ParseError,
  type StudentRow,
} from '@/lib/school/csv-parse';

// ---------------------------------------------------------------------------
// Local types
// ---------------------------------------------------------------------------

type Step = 'upload' | 'preview' | 'confirm' | 'done';

interface ValidateResponse {
  valid: StudentRow[];
  errors: ParseError[];
  totalRows: number;
  knownClassCodesChecked: boolean;
  fileName: string;
}

interface CommitResponse {
  jobId: string;
  created: number;
  updated: number;
  skipped: number;
  errors: ParseError[];
  idempotent?: boolean;
}

// ---------------------------------------------------------------------------
// Browser-safe helpers
// ---------------------------------------------------------------------------

function triggerDownload(filename: string, content: string, mime = 'text/csv;charset=utf-8;') {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function newIdempotencyKey(): string {
  // Browser-side — use crypto.randomUUID() where available, fall back to a
  // timestamp + random-string combo.
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `bulk-${crypto.randomUUID()}`;
  }
  return `bulk-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function BulkUploadPage() {
  const [step, setStep] = useState<Step>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [validation, setValidation] = useState<ValidateResponse | null>(null);
  const [commit, setCommit] = useState<CommitResponse | null>(null);
  const [gdprConfirmed, setGdprConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [validateError, setValidateError] = useState<string | null>(null);
  const [commitError, setCommitError] = useState<string | null>(null);
  const idempotencyKeyRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ──────────────────────────────────────────────────────────────────────────
  // Upload step
  // ──────────────────────────────────────────────────────────────────────────

  const handleValidate = useCallback(async (f: File) => {
    setValidateError(null);
    setFile(f);
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('file', f);
      const res = await fetch('/api/school/bulk-upload/validate', {
        method: 'POST',
        body: fd,
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({ error: 'Validation failed' }));
        throw new Error(body.error || `HTTP ${res.status}`);
      }
      const data = (await res.json()) as ValidateResponse;
      setValidation(data);
      setStep('preview');
    } catch (err) {
      setValidateError(err instanceof Error ? err.message : String(err));
    } finally {
      setSubmitting(false);
    }
  }, []);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const f = e.dataTransfer.files[0];
      if (f) void handleValidate(f);
    },
    [handleValidate],
  );
  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0];
      if (f) void handleValidate(f);
    },
    [handleValidate],
  );

  const downloadTemplate = useCallback(() => {
    triggerDownload(STUDENT_CSV_TEMPLATE_FILENAME, getStudentCsvTemplate());
  }, []);

  const downloadErrorsCsv = useCallback(() => {
    if (!validation || validation.errors.length === 0) return;
    triggerDownload('bulk-upload-errors.csv', errorsToCsv(validation.errors));
  }, [validation]);

  const reset = useCallback(() => {
    setStep('upload');
    setFile(null);
    setValidation(null);
    setCommit(null);
    setGdprConfirmed(false);
    setValidateError(null);
    setCommitError(null);
    idempotencyKeyRef.current = null;
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, []);

  // ──────────────────────────────────────────────────────────────────────────
  // Confirm step — commit
  // ──────────────────────────────────────────────────────────────────────────

  const handleCommit = useCallback(async () => {
    if (!validation || !file) return;
    setCommitError(null);
    setSubmitting(true);
    try {
      if (!idempotencyKeyRef.current) {
        idempotencyKeyRef.current = newIdempotencyKey();
      }
      const res = await fetch('/api/school/bulk-upload/commit', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          fileName: file.name,
          idempotencyKey: idempotencyKeyRef.current,
          rows: validation.valid,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({ error: 'Commit failed' }));
        throw new Error(body.error || `HTTP ${res.status}`);
      }
      const data = (await res.json()) as CommitResponse;
      setCommit(data);
      setStep('done');
    } catch (err) {
      setCommitError(err instanceof Error ? err.message : String(err));
    } finally {
      setSubmitting(false);
    }
  }, [validation, file]);

  // ──────────────────────────────────────────────────────────────────────────
  // Derived
  // ──────────────────────────────────────────────────────────────────────────

  const errorRowSet = useMemo(() => {
    if (!validation) return new Set<number>();
    return new Set(validation.errors.map((e) => e.row));
  }, [validation]);

  const uniqueErrorRowCount = errorRowSet.size;
  const validRowCount = validation?.valid.length ?? 0;

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Bulk upload students
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Upload a CSV to create student accounts in bulk. Review, preview,
              confirm.
            </p>
          </div>
          <Link
            href="/school/admin/bulk-upload/log"
            className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
          >
            View import log
          </Link>
        </header>

        {/* Step indicator */}
        <StepIndicator current={step} />

        {/* ── Step 1: Upload ── */}
        {step === 'upload' && (
          <>
            <DataProtectionNotice />
            <Card className="border-zinc-800 bg-zinc-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileSpreadsheet className="size-4 text-indigo-400" />
                  Download template
                </CardTitle>
                <CardDescription>
                  Fill in the template, save as CSV, then upload below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" onClick={downloadTemplate} className="gap-2">
                  <Download className="size-4" />
                  Download student CSV template
                </Button>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['firstName', 'lastName', 'email', 'yearGroup', 'classCode'].map(
                    (col) => (
                      <Badge key={col} variant="secondary" className="font-mono">
                        {col}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Upload className="size-4 text-indigo-400" />
                  Upload your CSV
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click();
                  }}
                  className={[
                    'flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-8 py-14 text-center transition-all',
                    isDragging
                      ? 'border-indigo-500 bg-indigo-950/30'
                      : 'border-zinc-700 bg-zinc-950/40 hover:border-indigo-600',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'flex size-14 items-center justify-center rounded-full',
                      isDragging ? 'bg-indigo-600/20' : 'bg-zinc-800',
                    ].join(' ')}
                  >
                    <Upload
                      className={[
                        'size-6',
                        isDragging ? 'text-indigo-400' : 'text-zinc-500',
                      ].join(' ')}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {isDragging ? 'Drop file here' : 'Drag and drop your CSV here'}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      or <span className="text-indigo-400 underline">click to browse</span>
                    </p>
                  </div>
                  <p className="text-xs text-zinc-600">.csv only, max 500 rows</p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv,text/csv"
                  className="hidden"
                  onChange={onFileChange}
                />

                {submitting && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                    <Loader2 className="size-4 animate-spin" />
                    Parsing and validating…
                  </div>
                )}
                {validateError && (
                  <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-900/50 bg-red-950/30 px-3 py-2 text-sm text-red-300">
                    <AlertCircle className="size-4 mt-0.5" />
                    {validateError}
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}

        {/* ── Step 2: Preview ── */}
        {step === 'preview' && validation && (
          <>
            <FileBar file={file} totalRows={validation.totalRows} onRemove={reset} />

            {/* Validation summary */}
            {uniqueErrorRowCount > 0 ? (
              <div className="flex items-start gap-3 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm">
                <AlertCircle className="size-4 mt-0.5 shrink-0 text-red-400" />
                <div className="flex-1 text-red-300">
                  <div className="font-semibold">
                    {uniqueErrorRowCount} row{uniqueErrorRowCount !== 1 ? 's' : ''} with errors
                  </div>
                  <div className="text-xs text-red-400/80 mt-0.5">
                    Rows with errors will be excluded from the import.
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={downloadErrorsCsv}>
                  <Download className="size-3.5 mr-1.5" />
                  Errors CSV
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-lg border border-emerald-900/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle className="size-4" />
                All {validation.totalRows} rows are valid.
              </div>
            )}

            {!validation.knownClassCodesChecked && (
              <div className="flex items-start gap-2 rounded-lg border border-amber-900/50 bg-amber-950/20 px-4 py-3 text-sm text-amber-200">
                <AlertCircle className="size-4 mt-0.5 shrink-0" />
                Class codes could not be validated against this school's class list.
                Proceed with care.
              </div>
            )}

            <PreviewTable
              rows={validation.valid}
              errors={validation.errors}
              errorRowSet={errorRowSet}
            />

            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={reset}>
                <ArrowLeft className="size-4 mr-1.5" />
                Start over
              </Button>
              <Button
                onClick={() => setStep('confirm')}
                disabled={validRowCount === 0}
                className="bg-indigo-600 hover:bg-indigo-500"
              >
                Review and confirm
                <ArrowRight className="size-4 ml-1.5" />
              </Button>
            </div>
          </>
        )}

        {/* ── Step 3: Confirm ── */}
        {step === 'confirm' && validation && (
          <>
            <Card className="border-zinc-800 bg-zinc-900">
              <CardHeader>
                <CardTitle>Ready to import?</CardTitle>
                <CardDescription>
                  Once you confirm, accounts will be created and welcome emails
                  sent. This cannot be undone in one click.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <SummaryPill
                    label="Valid rows"
                    value={validRowCount}
                    tone="emerald"
                  />
                  <SummaryPill
                    label="Excluded (errors)"
                    value={uniqueErrorRowCount}
                    tone="red"
                  />
                  <SummaryPill
                    label="Total in file"
                    value={validation.totalRows}
                    tone="zinc"
                  />
                </div>

                <label className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-950/40 p-3 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 size-4"
                    checked={gdprConfirmed}
                    onChange={(e) => setGdprConfirmed(e.target.checked)}
                    aria-describedby="gdpr-notice"
                  />
                  <span id="gdpr-notice" className="text-zinc-300">
                    I confirm that uploading this student data is a processing
                    activity under GDPR, that my organisation has a lawful basis
                    for creating these accounts, and that minors' data will be
                    handled in line with the ICO's Age-Appropriate Design Code.
                  </span>
                </label>

                {commitError && (
                  <div className="rounded-lg border border-red-900/50 bg-red-950/30 px-3 py-2 text-sm text-red-300">
                    {commitError}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setStep('preview')}>
                <ArrowLeft className="size-4 mr-1.5" />
                Back to preview
              </Button>
              <Button
                onClick={handleCommit}
                disabled={!gdprConfirmed || submitting || validRowCount === 0}
                className="bg-indigo-600 hover:bg-indigo-500"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 mr-1.5 animate-spin" />
                    Importing…
                  </>
                ) : (
                  <>
                    Import {validRowCount} student{validRowCount !== 1 ? 's' : ''}
                    <ArrowRight className="size-4 ml-1.5" />
                  </>
                )}
              </Button>
            </div>
          </>
        )}

        {/* ── Step 4: Done ── */}
        {step === 'done' && commit && (
          <Card className="border-emerald-900/50 bg-emerald-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="size-5 text-emerald-400" />
                Import complete
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <SummaryPill label="Created" value={commit.created} tone="emerald" />
                <SummaryPill label="Updated" value={commit.updated} tone="indigo" />
                <SummaryPill label="Skipped" value={commit.skipped} tone="zinc" />
              </div>
              {commit.idempotent && (
                <div className="text-xs text-zinc-500">
                  This run matched a previous submission — no duplicate accounts
                  were created.
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                <Link href={`/school/admin/bulk-upload/log`}>
                  <Button variant="outline">View import log</Button>
                </Link>
                <Button variant="outline" onClick={reset}>
                  Upload another file
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function StepIndicator({ current }: { current: Step }) {
  const steps: Array<{ id: Step; label: string }> = [
    { id: 'upload', label: '1. Upload' },
    { id: 'preview', label: '2. Preview' },
    { id: 'confirm', label: '3. Confirm' },
    { id: 'done', label: '4. Done' },
  ];
  const currentIdx = steps.findIndex((s) => s.id === current);
  return (
    <ol className="flex flex-wrap gap-2" aria-label="Progress">
      {steps.map((s, idx) => {
        const done = idx < currentIdx;
        const active = idx === currentIdx;
        return (
          <li
            key={s.id}
            aria-current={active ? 'step' : undefined}
            className={[
              'rounded-full px-3 py-1 text-xs font-medium border',
              active
                ? 'border-indigo-500 bg-indigo-600/20 text-indigo-200'
                : done
                  ? 'border-emerald-800 bg-emerald-950/40 text-emerald-300'
                  : 'border-zinc-800 bg-zinc-900 text-zinc-500',
            ].join(' ')}
          >
            {s.label}
          </li>
        );
      })}
    </ol>
  );
}

function DataProtectionNotice() {
  return (
    <Card className="border-amber-900/40 bg-amber-950/10">
      <CardContent className="pt-5 pb-5">
        <div className="flex items-start gap-3">
          <ShieldAlert className="size-5 shrink-0 mt-0.5 text-amber-500" />
          <div className="space-y-1.5 text-sm">
            <p className="font-semibold text-amber-200">Data-protection reminder</p>
            <p className="text-zinc-300">
              Uploading student data is a processing activity under the UK GDPR.
              By continuing you confirm that you have a lawful basis for this
              processing and that all students (or their parents/guardians where
              the student is under 13) have been informed as required.
            </p>
            <p className="text-zinc-400 text-xs">
              Accounts for under-18s are handled in line with the ICO's
              Age-Appropriate Design Code (Children's Code).
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function FileBar({
  file,
  totalRows,
  onRemove,
}: {
  file: File | null;
  totalRows: number;
  onRemove: () => void;
}) {
  if (!file) return null;
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3">
      <div className="flex items-center gap-3">
        <FileSpreadsheet className="size-5 text-indigo-400" />
        <div>
          <p className="text-sm font-medium">{file.name}</p>
          <p className="text-xs text-zinc-500">{totalRows} rows</p>
        </div>
      </div>
      <button
        onClick={onRemove}
        aria-label="Remove file"
        className="rounded-md p-1 text-zinc-500 hover:bg-zinc-800"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}

function PreviewTable({
  rows,
  errors,
  errorRowSet,
}: {
  rows: ReadonlyArray<StudentRow>;
  errors: ReadonlyArray<ParseError>;
  errorRowSet: Set<number>;
}) {
  // Merge valid + error rows into a single display list, keyed by row number.
  type DisplayRow = {
    row: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    yearGroup?: string;
    classCode?: string;
    errors: ParseError[];
  };

  const rowMap = new Map<number, DisplayRow>();
  for (const r of rows) {
    rowMap.set(r.row, {
      row: r.row,
      firstName: r.firstName,
      lastName: r.lastName,
      email: r.email,
      yearGroup: r.yearGroup,
      classCode: r.classCode,
      errors: [],
    });
  }
  for (const e of errors) {
    const existing = rowMap.get(e.row);
    if (existing) {
      existing.errors.push(e);
    } else {
      rowMap.set(e.row, { row: e.row, errors: [e] });
    }
  }
  const display = Array.from(rowMap.values()).sort((a, b) => a.row - b.row);

  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900 text-xs uppercase text-zinc-500">
            <th className="px-3 py-2 text-left w-12">#</th>
            <th className="px-3 py-2 text-left">First</th>
            <th className="px-3 py-2 text-left">Last</th>
            <th className="px-3 py-2 text-left">Email</th>
            <th className="px-3 py-2 text-left">Year</th>
            <th className="px-3 py-2 text-left">Class</th>
            <th className="px-3 py-2 text-left w-24">Status</th>
          </tr>
        </thead>
        <tbody>
          {display.slice(0, 50).map((r) => {
            const hasError = errorRowSet.has(r.row);
            return (
              <tr
                key={r.row}
                className={[
                  'border-b border-zinc-800/60 last:border-0',
                  hasError ? 'bg-red-950/30' : '',
                ].join(' ')}
              >
                <td className="px-3 py-2 tabular-nums text-zinc-500">{r.row}</td>
                <td className="px-3 py-2">{r.firstName ?? <em className="text-red-400">—</em>}</td>
                <td className="px-3 py-2">{r.lastName ?? <em className="text-red-400">—</em>}</td>
                <td className="px-3 py-2 font-mono text-xs">
                  {r.email ?? <em className="text-red-400">—</em>}
                </td>
                <td className="px-3 py-2">{r.yearGroup ?? <em className="text-red-400">—</em>}</td>
                <td className="px-3 py-2">{r.classCode ?? <em className="text-red-400">—</em>}</td>
                <td className="px-3 py-2">
                  {hasError ? (
                    <span className="inline-flex items-center gap-1 text-red-400 text-xs">
                      <AlertCircle className="size-3.5" />
                      {r.errors[0]?.code.replace(/_/g, ' ').toLowerCase()}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-xs">
                      <CheckCircle className="size-3.5" />
                      ready
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {display.length > 50 && (
        <div className="px-3 py-2 text-xs text-zinc-500 border-t border-zinc-800 text-center">
          Showing first 50 of {display.length} rows.
        </div>
      )}
    </div>
  );
}

function SummaryPill({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: 'emerald' | 'red' | 'indigo' | 'zinc';
}) {
  const palette: Record<typeof tone, string> = {
    emerald: 'border-emerald-900/50 bg-emerald-950/30 text-emerald-200',
    red: 'border-red-900/50 bg-red-950/30 text-red-200',
    indigo: 'border-indigo-900/50 bg-indigo-950/30 text-indigo-200',
    zinc: 'border-zinc-800 bg-zinc-950/40 text-zinc-200',
  };
  return (
    <div className={`rounded-lg border px-4 py-3 ${palette[tone]}`}>
      <div className="text-2xl font-bold tabular-nums">{value}</div>
      <div className="text-xs uppercase tracking-wider opacity-80">{label}</div>
    </div>
  );
}
