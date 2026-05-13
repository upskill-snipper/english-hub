import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
;('use client')

import { useState } from 'react'
import {
  School,
  Crown,
  Copy,
  Check,
  Bell,
  Shield,
  Users,
  Mail,
  Key,
  Sparkles,
  BookOpen,
  ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/components/ui/Toast'
import { DEMO_SCHOOL } from '@/data/demo-data'

const DEMO_ADMINS = [
  { name: 'Dr. Sarah Mitchell', email: 'mitchell@riverside.demo', role: 'Owner' },
  { name: 'Mr. James Ward', email: 'ward@riverside.demo', role: 'Admin' },
  { name: 'Ms. Lucy Fletcher', email: 'fletcher@riverside.demo', role: 'Admin' },
]

const DEMO_JOIN_CODE = 'RIVER-2025-XK9'

export default function DemoSettingsPage() {
  const locale = useLocale()
  const tr = (en: string): string => {
    if (locale !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  const { toast } = useToast()

  const [schoolName, setSchoolName] = useState(DEMO_SCHOOL.name)
  const [schoolAddress, setSchoolAddress] = useState('42 Riverside Drive, London, SE1 7PB')
  const [schoolPhone, setSchoolPhone] = useState('+44 20 7946 0123')
  const [schoolEmail, setSchoolEmail] = useState('admin@riverside.demo')

  const [notifyNewStudent, setNotifyNewStudent] = useState(true)
  const [notifyWeeklyReport, setNotifyWeeklyReport] = useState(true)
  const [notifyAtRisk, setNotifyAtRisk] = useState(true)
  const [notifyTeacherActivity, setNotifyTeacherActivity] = useState(false)

  const [codeCopied, setCodeCopied] = useState(false)

  function handleSave() {
    toast('info', 'Changes saved in demo mode. Register for your own school.')
  }

  function handleCopyCode() {
    navigator.clipboard.writeText(DEMO_JOIN_CODE).catch(() => {})
    setCodeCopied(true)
    toast('success', 'Join code copied to clipboard')
    setTimeout(() => setCodeCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your school profile, subscription, and admin access.
        </p>
      </div>

      {/* School Profile */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <School className="h-4.5 w-4.5 text-primary" />
          </div>
          <div>
            <h2 className="text-base font-semibold">{tr(`School Profile`)}</h2>
            <p className="text-xs text-muted-foreground">
              {tr(`Basic information about your school`)}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">{tr(`School Name`)}</label>
            <Input value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">{tr(`Email Address`)}</label>
            <Input value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Address</label>
            <Input value={schoolAddress} onChange={(e) => setSchoolAddress(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">{tr(`Phone Number`)}</label>
            <Input value={schoolPhone} onChange={(e) => setSchoolPhone(e.target.value)} />
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <Button onClick={handleSave}>{tr(`Save Changes`)}</Button>
        </div>
      </section>

      {/* Exam Board & Curriculum */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-4.5 w-4.5 text-primary" />
          </div>
          <div>
            <h2 className="text-base font-semibold">{tr(`Exam Board & Curriculum`)}</h2>
            <p className="text-xs text-muted-foreground">
              {tr(`Configure your exam board and active specifications`)}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">{tr(`Exam Board`)}</label>
            <Input value={DEMO_SCHOOL.examBoard} readOnly className="bg-muted/50" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">{tr(`Academic Year`)}</label>
            <div className="relative">
              <select
                defaultValue="2025-2026"
                onChange={() => handleSave()}
                className="w-full appearance-none rounded-md border border-border bg-background px-3 py-2 pr-8 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label className="text-sm font-medium text-foreground">
            {tr(`Active Curriculum Areas`)}
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/25 gap-1.5">
              <Check className="h-3 w-3" />
              GCSE English Language
            </Badge>
            <Badge className="bg-green-500/10 text-green-400 border-green-500/25 gap-1.5">
              <Check className="h-3 w-3" />
              GCSE English Literature
            </Badge>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          All content, assessments, and reports are tailored to your exam board specification.
        </p>

        <div className="mt-5 flex justify-end">
          <Button onClick={handleSave}>{tr(`Save Curriculum Settings`)}</Button>
        </div>
      </section>

      {/* Subscription */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
            <Crown className="h-4.5 w-4.5 text-clay-600" />
          </div>
          <div>
            <h2 className="text-base font-semibold">Subscription</h2>
            <p className="text-xs text-muted-foreground">{tr(`Your current plan and usage`)}</p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-lg font-bold text-clay-600">FOUNDER</h3>
                <Badge className="bg-amber-500/15 text-clay-600 border-amber-500/25 text-[10px] uppercase tracking-wider">
                  Lifetime Access
                </Badge>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Unlimited students, unlimited teachers, all features included.
              </p>
            </div>
            <Sparkles className="h-8 w-8 text-clay-600/40" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="rounded-md bg-background/50 p-3 text-center">
              <p className="text-xl font-bold">342</p>
              <p className="text-xs text-muted-foreground">Students</p>
            </div>
            <div className="rounded-md bg-background/50 p-3 text-center">
              <p className="text-xl font-bold">18</p>
              <p className="text-xs text-muted-foreground">Teachers</p>
            </div>
            <div className="rounded-md bg-background/50 p-3 text-center">
              <p className="text-xl font-bold">24</p>
              <p className="text-xs text-muted-foreground">Classes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin List */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-4.5 w-4.5 text-primary" />
            </div>
            <div>
              <h2 className="text-base font-semibold">Administrators</h2>
              <p className="text-xs text-muted-foreground">
                {tr(`People who can manage this school`)}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast('info', 'Changes saved in demo mode. Register for your own school.')
            }
          >
            <Users className="h-3.5 w-3.5" />
            Add Admin
          </Button>
        </div>

        <div className="space-y-3">
          {DEMO_ADMINS.map((admin) => (
            <div
              key={admin.email}
              className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {admin.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-medium">{admin.name}</p>
                  <p className="text-xs text-muted-foreground">{admin.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={admin.role === 'Owner' ? 'default' : 'secondary'}>
                  {admin.role}
                </Badge>
                {admin.role !== 'Owner' && (
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={() =>
                      toast('info', 'Changes saved in demo mode. Register for your own school.')
                    }
                  >
                    <span className="text-xs text-muted-foreground">Remove</span>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notifications */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Bell className="h-4.5 w-4.5 text-primary" />
          </div>
          <div>
            <h2 className="text-base font-semibold">Notifications</h2>
            <p className="text-xs text-muted-foreground">
              {tr(`Configure email alerts and updates`)}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{tr(`New student signups`)}</p>
                <p className="text-xs text-muted-foreground">
                  {tr(`Get notified when a student joins via the join code`)}
                </p>
              </div>
            </div>
            <Switch checked={notifyNewStudent} onCheckedChange={setNotifyNewStudent} />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{tr(`Weekly progress report`)}</p>
                <p className="text-xs text-muted-foreground">
                  {tr(`Receive a summary of school-wide activity every Monday`)}
                </p>
              </div>
            </div>
            <Switch checked={notifyWeeklyReport} onCheckedChange={setNotifyWeeklyReport} />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{tr(`At-risk student alerts`)}</p>
                <p className="text-xs text-muted-foreground">
                  {tr(`Immediate alerts when students fall behind`)}
                </p>
              </div>
            </div>
            <Switch checked={notifyAtRisk} onCheckedChange={setNotifyAtRisk} />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{tr(`Teacher activity updates`)}</p>
                <p className="text-xs text-muted-foreground">
                  {tr(`Notifications when teachers create or modify classes`)}
                </p>
              </div>
            </div>
            <Switch checked={notifyTeacherActivity} onCheckedChange={setNotifyTeacherActivity} />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSave}>{tr(`Save Notification Preferences`)}</Button>
        </div>
      </section>

      {/* Join Code */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Key className="h-4.5 w-4.5 text-primary" />
          </div>
          <div>
            <h2 className="text-base font-semibold">Join Code</h2>
            <p className="text-xs text-muted-foreground">
              {tr(`Share this code so students and teachers can join your school`)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 rounded-lg border border-dashed border-border bg-background/50 px-4 py-3 text-center">
            <p className="font-mono text-xl font-bold tracking-widest">{DEMO_JOIN_CODE}</p>
          </div>
          <Button variant="outline" size="default" onClick={handleCopyCode}>
            {codeCopied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {codeCopied ? 'Copied' : 'Copy'}
          </Button>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Students and teachers enter this code when creating an account to automatically join
          Riverside Academy.
        </p>
      </section>
    </div>
  )
}
