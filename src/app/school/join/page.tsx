"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { School, CheckCircle, AlertCircle, ArrowRight, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface JoinResult {
  schoolName: string
  schoolId: string
  role: string
  class_name: string | null
}

export default function JoinSchoolPage() {
  const router = useRouter()
  const [code, setCode] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<JoinResult | null>(null)

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const trimmed = code.trim().toUpperCase()
    if (!trimmed) {
      setError("Please enter a join code.")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/school/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: trimmed }),
      })

      const data = await res.json()

      if (!res.ok) {
        const msg: string = data.error ?? "Something went wrong. Please try again."
        // Normalise API messages to the clean display strings specified
        if (msg.toLowerCase().includes("invalid") || msg.toLowerCase().includes("not found")) {
          setError("Invalid code. Please check the code and try again.")
        } else if (msg.toLowerCase().includes("expired")) {
          setError("Code expired. Please ask your teacher for a new code.")
        } else if (
          msg.toLowerCase().includes("already") ||
          msg.toLowerCase().includes("already a member")
        ) {
          setError("Already a member. You are already linked to this school.")
        } else {
          setError(msg)
        }
        return
      }

      setResult(data)
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  // --- Success state ---
  if (result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-green-500/30 bg-green-500/5 text-center">
            <CardContent className="pt-8 pb-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                {"You've joined "}
                <span className="text-green-400">{result.schoolName}</span>
                {"!"}
              </h1>
              {result.class_name && (
                <p className="text-sm text-zinc-400 mb-1">
                  Class: <span className="text-zinc-200 font-medium">{result.class_name}</span>
                </p>
              )}
              <p className="text-sm text-zinc-400 mb-8">
                You are now linked as a{" "}
                <span className="text-zinc-200 font-medium">{result.role}</span>.
              </p>
              <Button
                size="lg"
                className="gap-2"
                onClick={() => router.push("/dashboard")}
              >
                Go to your dashboard
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // --- Form state ---
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4 py-12">
      <div className="w-full max-w-md space-y-4">
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <School className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl text-white">Join Your School</CardTitle>
            <CardDescription className="text-zinc-400">
              Enter the join code provided by your teacher or school admin.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Info box */}
            <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-300">
              Your teacher or school admin should have given you a join code. Enter it here to link
              your account to your school.
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleJoin} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="joinCode" className="text-zinc-200">
                  Join code
                </Label>
                <Input
                  id="joinCode"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))}
                  placeholder="e.g. ABC123"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 text-center text-xl font-mono tracking-[0.35em] uppercase"
                  maxLength={6}
                  autoFocus
                  autoComplete="off"
                  spellCheck={false}
                />
                <p className="text-xs text-zinc-500 text-center">6-character code, letters and numbers</p>
              </div>

              <Button
                type="submit"
                disabled={loading || code.trim().length === 0}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Joining...
                  </>
                ) : (
                  "Join School"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-0 pt-0 pb-5">
            <div className="w-full border-t border-zinc-800 mb-4" />
            <p className="text-xs text-zinc-500 text-center leading-relaxed">
              If you were created via bulk import, you are already linked to your school.{" "}
              <Link href="/auth/login" className="text-zinc-400 underline underline-offset-2 hover:text-zinc-200">
                Log in normally.
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
