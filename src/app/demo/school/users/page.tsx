"use client"

import { useState, useMemo } from "react"
import {
  Search,
  UserPlus,
  Upload,
  MoreHorizontal,
  Pencil,
  Trash2,
  KeyRound,
  GraduationCap,
  Users,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/Toast"
import {
  DEMO_TEACHERS,
  DEMO_STUDENTS,
  type DemoTeacher,
  type DemoStudent,
} from "@/data/demo-data"

type UserRow =
  | { type: "teacher"; data: DemoTeacher }
  | { type: "student"; data: DemoStudent }

function demoToast(toast: ReturnType<typeof useToast>["toast"]) {
  toast("info", "Available with full account")
}

export default function DemoUsersPage() {
  const { toast } = useToast()
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const allUsers: UserRow[] = useMemo(() => {
    const teachers: UserRow[] = DEMO_TEACHERS.map((t) => ({ type: "teacher", data: t }))
    const students: UserRow[] = DEMO_STUDENTS.map((s) => ({ type: "student", data: s }))
    return [...teachers, ...students]
  }, [])

  const filteredUsers = useMemo(() => {
    let users = allUsers

    if (activeTab === "teachers") {
      users = users.filter((u) => u.type === "teacher")
    } else if (activeTab === "students") {
      users = users.filter((u) => u.type === "student")
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      users = users.filter((u) => {
        if (u.type === "teacher") {
          return (
            u.data.name.toLowerCase().includes(q) ||
            u.data.email.toLowerCase().includes(q) ||
            u.data.department.toLowerCase().includes(q)
          )
        }
        return (
          u.data.name.toLowerCase().includes(q) ||
          u.data.className.toLowerCase().includes(q)
        )
      })
    }

    return users
  }, [allUsers, activeTab, search])

  const teacherCount = DEMO_TEACHERS.length
  const studentCount = DEMO_STUDENTS.length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage all teachers and students in your school.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => demoToast(toast)}>
            <Upload className="h-4 w-4" />
            Import Users
          </Button>
          <Button onClick={() => demoToast(toast)}>
            <UserPlus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <p className="text-2xl font-bold">{teacherCount + studentCount}</p>
          <p className="text-xs text-muted-foreground">Total Users</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <p className="text-2xl font-bold">{teacherCount}</p>
          <p className="text-xs text-muted-foreground">Teachers</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <p className="text-2xl font-bold">{studentCount}</p>
          <p className="text-xs text-muted-foreground">Students</p>
        </div>
      </div>

      {/* Tabs + Search */}
      <Tabs defaultValue="all" onValueChange={(val) => setActiveTab(val as string)}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TabsList>
            <TabsTrigger value="all">
              All Users
              <Badge variant="secondary" className="ml-1.5 h-5 px-1.5 text-[10px]">
                {teacherCount + studentCount}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="teachers">
              Teachers
              <Badge variant="secondary" className="ml-1.5 h-5 px-1.5 text-[10px]">
                {teacherCount}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="students">
              Students
              <Badge variant="secondary" className="ml-1.5 h-5 px-1.5 text-[10px]">
                {studentCount}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <TabsContent value="all">
          <UserTable rows={filteredUsers} toast={toast} />
        </TabsContent>
        <TabsContent value="teachers">
          <UserTable rows={filteredUsers} toast={toast} />
        </TabsContent>
        <TabsContent value="students">
          <UserTable rows={filteredUsers} toast={toast} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

/* ─── User Table ────────────────────────────────────────────────────────── */

function UserTable({
  rows,
  toast,
}: {
  rows: UserRow[]
  toast: ReturnType<typeof useToast>["toast"]
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  function handleAction() {
    setOpenMenu(null)
    demoToast(toast)
  }

  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Name</th>
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Role</th>
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Details</th>
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Status</th>
            <th className="px-4 py-2.5 text-right font-medium text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-10 text-center text-muted-foreground">
                No users match your search.
              </td>
            </tr>
          )}
          {rows.map((row) => {
            const id = row.type === "teacher" ? row.data.id : row.data.id
            const name = row.data.name
            const isTeacher = row.type === "teacher"
            const teacher = isTeacher ? (row.data as DemoTeacher) : null
            const student = !isTeacher ? (row.data as DemoStudent) : null

            return (
              <tr key={`${row.type}-${id}`} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                {/* Name */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                      isTeacher
                        ? "bg-teal-800/10 text-teal-700"
                        : "bg-primary/10 text-primary"
                    }`}>
                      {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-xs text-muted-foreground">
                        {isTeacher ? teacher!.email : `Year ${student!.yearGroup}`}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td className="px-4 py-3">
                  <Badge variant={isTeacher ? "outline" : "secondary"} className="gap-1">
                    {isTeacher ? (
                      <GraduationCap className="h-3 w-3" />
                    ) : (
                      <Users className="h-3 w-3" />
                    )}
                    {isTeacher ? "Teacher" : "Student"}
                  </Badge>
                </td>

                {/* Details */}
                <td className="px-4 py-3 text-muted-foreground">
                  {isTeacher ? (
                    <span>{teacher!.department} -- {teacher!.classCount} classes</span>
                  ) : (
                    <span>{student!.className} -- {student!.overallProgress}% progress</span>
                  )}
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  {!isTeacher && student!.atRisk ? (
                    <div className="flex items-center gap-1.5 text-clay-600">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">At Risk</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-green-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-xs font-medium">Active</span>
                    </div>
                  )}
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-right">
                  <div className="relative inline-block">
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={() => setOpenMenu(openMenu === id ? null : id)}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                    {openMenu === id && (
                      <>
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setOpenMenu(null)}
                        />
                        <div className="absolute right-0 top-full z-50 mt-1 w-44 rounded-lg border border-border bg-card py-1 shadow-lg">
                          <button
                            className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-muted/50 transition-colors"
                            onClick={handleAction}
                          >
                            <Pencil className="h-3.5 w-3.5" />
                            Edit User
                          </button>
                          <button
                            className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-muted/50 transition-colors"
                            onClick={handleAction}
                          >
                            <KeyRound className="h-3.5 w-3.5" />
                            Reset Password
                          </button>
                          <button
                            className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-muted/50 transition-colors"
                            onClick={handleAction}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            Remove User
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
