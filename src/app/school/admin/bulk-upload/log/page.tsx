/**
 * Admin-only list of past bulk-upload jobs (Wave 5, web-only).
 *
 * Server component — reads straight from Prisma. Access-control happens in
 * two layers:
 *   1. The outer `school/layout.tsx` guard redirects non-members away.
 *   2. This component additionally calls `verifySchoolMember([admin])` and
 *      redirects to `/school` on a negative result, so non-admin members
 *      (teachers, HoDs) cannot view the audit trail.
 *
 * Sorted newest-first. Limited to the signed-in user's school.
 */

import { redirect } from 'next/navigation';
import Link from 'next/link';

import { createServerSupabaseClient } from '@/lib/supabase/server';
import { verifySchoolMember } from '@/lib/school-auth';
import { prisma } from '@/lib/prisma';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function BulkUploadLogPage() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login?next=/school/admin/bulk-upload/log');

  const member = await verifySchoolMember(user.id, ['admin']);
  if (!member) redirect('/school');

  const schoolId = member.school_id as string;

  const jobs = await prisma.bulkUploadJob.findMany({
    where: { schoolId },
    orderBy: { createdAt: 'desc' },
    take: 50,
  });

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Bulk-upload history
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              The 50 most recent CSV imports at your school.
            </p>
          </div>
          <Link
            href="/school/admin/bulk-upload"
            className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
          >
            New upload
          </Link>
        </header>

        {jobs.length === 0 ? (
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-base">No imports yet</CardTitle>
              <CardDescription>
                When you run your first bulk upload the job will appear here.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900 text-xs uppercase text-zinc-500">
                  <th className="px-3 py-2 text-left">When</th>
                  <th className="px-3 py-2 text-left">File</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-right">Rows</th>
                  <th className="px-3 py-2 text-right">Created</th>
                  <th className="px-3 py-2 text-right">Updated</th>
                  <th className="px-3 py-2 text-right">Errors</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j) => (
                  <tr
                    key={j.id}
                    className="border-b border-zinc-800/60 last:border-0"
                  >
                    <td className="px-3 py-2 whitespace-nowrap text-zinc-300">
                      {j.createdAt.toISOString().slice(0, 19).replace('T', ' ')}
                    </td>
                    <td className="px-3 py-2 text-zinc-200 font-mono text-xs">
                      {j.fileName}
                    </td>
                    <td className="px-3 py-2">
                      <StatusBadge status={j.status} />
                    </td>
                    <td className="px-3 py-2 text-right tabular-nums">
                      {j.rowCount}
                    </td>
                    <td className="px-3 py-2 text-right tabular-nums text-emerald-300">
                      {j.createdCount}
                    </td>
                    <td className="px-3 py-2 text-right tabular-nums text-indigo-300">
                      {j.updatedCount}
                    </td>
                    <td className="px-3 py-2 text-right tabular-nums text-red-300">
                      {j.errorCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === 'completed'
      ? 'border-emerald-800 bg-emerald-950/40 text-emerald-300'
      : status === 'failed'
        ? 'border-red-800 bg-red-950/40 text-red-300'
        : 'border-amber-800 bg-amber-950/40 text-amber-200';
  return (
    <span
      className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${tone}`}
    >
      {status}
    </span>
  );
}
