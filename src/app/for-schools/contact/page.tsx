"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  Star,
  Users,
  Clock,
  Gift,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ROLES = [
  "Head of Department",
  "Head of English",
  "Deputy Head",
  "Headteacher",
  "MAT Lead",
  "Other",
];

const STUDENT_COUNTS = [
  "Under 100",
  "100-300",
  "300-500",
  "500-1000",
  "1000+",
];

const EXAM_BOARDS = ["AQA", "Edexcel", "OCR", "WJEC", "IGCSE/CAIE"];

const COUNTRY_CODES = [
  { code: "+44", label: "UK (+44)" },
  { code: "+1", label: "US/CA (+1)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+974", label: "Qatar (+974)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+852", label: "HK (+852)" },
  { code: "+61", label: "Australia (+61)" },
];

const PREFERRED_CONTACT_OPTIONS = ["Email", "Phone", "Either"] as const;

// ---------------------------------------------------------------------------
// NativeSelect (matches register page style)
// ---------------------------------------------------------------------------

function NativeSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/20"
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

// ---------------------------------------------------------------------------
// FieldError
// ---------------------------------------------------------------------------

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 text-xs text-destructive mt-1">
      <AlertCircle className="h-3 w-3 shrink-0" />
      {msg}
    </p>
  );
}

// ---------------------------------------------------------------------------
// Form state
// ---------------------------------------------------------------------------

interface ContactForm {
  schoolName: string;
  contactName: string;
  email: string;
  countryCode: string;
  phone: string;
  preferredContact: string;
  role: string;
  studentCount: string;
  examBoard: string;
  message: string;
}

const INITIAL_FORM: ContactForm = {
  schoolName: "",
  contactName: "",
  email: "",
  countryCode: "+44",
  phone: "",
  preferredContact: "Email",
  role: "",
  studentCount: "",
  examBoard: "",
  message: "",
};

// ---------------------------------------------------------------------------
// Side panel — Founding Schools info
// ---------------------------------------------------------------------------

function FoundingSchoolsPanel() {
  return (
    <div className="space-y-6">
      {/* Founding Schools card */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-foreground">
              Why join the Founding Schools Programme?
            </h3>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Gift className="h-4 w-4 mt-0.5 shrink-0 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Free access until August 2026
                </span>{" "}
                — no payment required to get started
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="h-4 w-4 mt-0.5 shrink-0 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Unlimited teachers and students
                </span>{" "}
                — whole-department access on a single site license
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="h-4 w-4 mt-0.5 shrink-0 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Locked-in founding pricing
                </span>{" "}
                — guaranteed best rate when the programme ends
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Direct line to the product team
                </span>{" "}
                — your feedback shapes the platform
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Live within 48 hours
                </span>{" "}
                — we handle onboarding and teacher training
              </span>
            </li>
          </ul>

          <div className="rounded-md border border-yellow-500/30 bg-yellow-500/10 px-4 py-3">
            <p className="text-sm font-semibold text-yellow-300">
              Only 10 schools. Programme closes when full.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What to expect */}
      <Card className="border-muted/40 bg-card/50">
        <CardContent className="pt-6 space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            What we&apos;ll cover
          </h3>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-sm text-muted-foreground">
                Your department size and exam board
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-sm text-muted-foreground">
                A live walkthrough of the platform
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-sm text-muted-foreground">
                Founding pricing for your school
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-sm text-muted-foreground">
                Onboarding timeline (most schools are live within 48 hours)
              </span>
            </li>
          </ul>
          <p className="text-sm italic text-muted-foreground pt-1">
            No obligation. No sales deck. Just a conversation.
          </p>

          <div className="rounded-md border border-primary/20 bg-primary/5 px-4 py-3 mt-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Missed exams?</span>{" "}
              Our analytics data can also support schools in cases where students
              miss exams, providing predicted grades based on continuous assessment
              data, mock exam performance, and coursework to ensure fair outcomes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Success screen
// ---------------------------------------------------------------------------

function SuccessScreen() {
  return (
    <div className="flex flex-col items-center gap-6 py-12 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-500/10">
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
      </div>
      <div className="space-y-2 max-w-md">
        <h2 className="text-2xl font-bold text-foreground">
          Thanks! We&apos;ll be in touch within 24 hours.
        </h2>
        <p className="text-muted-foreground">
          One of our schools team will reach out to schedule your 20-minute call.
          Check your inbox (and spam folder) for a confirmation.
        </p>
      </div>
      <Button render={<Link href="/for-schools" />} variant="outline">
        <ChevronLeft className="h-4 w-4" />
        Back to Schools
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function BookACallPage() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);

  function patch(update: Partial<ContactForm>) {
    setForm((prev) => ({ ...prev, ...update }));
  }

  // -------------------------------------------------------------------------
  // Validation
  // -------------------------------------------------------------------------

  function validate(): boolean {
    const errs: Partial<Record<keyof ContactForm, string>> = {};
    if (!form.schoolName.trim()) errs.schoolName = "School name is required.";
    if (!form.contactName.trim()) errs.contactName = "Your name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.role) errs.role = "Please select your role.";
    if (!form.studentCount) errs.studentCount = "Please select student count.";
    if (!form.examBoard) errs.examBoard = "Please select your exam board.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  // -------------------------------------------------------------------------
  // Submit
  // -------------------------------------------------------------------------

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/school/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (res.ok) {
        setSuccess(true);
      } else {
        setSubmitError(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Could not send your request. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  if (success) {
    return (
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="mx-auto max-w-2xl">
          <SuccessScreen />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <Link
            href="/for-schools"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Schools
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Book a Call with Our Schools Team
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            A 20-minute conversation about whether The English Hub fits your
            department.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Contact form */}
          <Card className="border-muted/40 bg-card/50 backdrop-blur">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* School name */}
                <div className="space-y-1.5">
                  <Label htmlFor="schoolName">School Name *</Label>
                  <Input
                    id="schoolName"
                    placeholder="e.g. Oakfield Academy"
                    value={form.schoolName}
                    onChange={(e) => patch({ schoolName: e.target.value })}
                  />
                  <FieldError msg={errors.schoolName} />
                </div>

                {/* Contact name */}
                <div className="space-y-1.5">
                  <Label htmlFor="contactName">Your Name *</Label>
                  <Input
                    id="contactName"
                    placeholder="e.g. Jane Smith"
                    value={form.contactName}
                    onChange={(e) => patch({ contactName: e.target.value })}
                  />
                  <FieldError msg={errors.contactName} />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane.smith@school.ac.uk"
                    value={form.email}
                    onChange={(e) => patch({ email: e.target.value })}
                  />
                  <FieldError msg={errors.email} />
                </div>

                {/* Phone with country code */}
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <div className="flex gap-2">
                    <select
                      id="countryCode"
                      value={form.countryCode}
                      onChange={(e) => patch({ countryCode: e.target.value })}
                      className="flex h-10 w-[140px] shrink-0 rounded-lg border border-input bg-transparent px-2 py-2 text-sm text-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25"
                    >
                      {COUNTRY_CODES.map((cc) => (
                        <option key={cc.code} value={cc.code}>
                          {cc.label}
                        </option>
                      ))}
                    </select>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="7700 000000"
                      value={form.phone}
                      onChange={(e) => patch({ phone: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>

                {/* Preferred contact method */}
                <div className="space-y-1.5">
                  <Label>Preferred Contact Method</Label>
                  <div className="flex gap-4">
                    {PREFERRED_CONTACT_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer text-sm text-foreground"
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={option}
                          checked={form.preferredContact === option}
                          onChange={(e) =>
                            patch({ preferredContact: e.target.value })
                          }
                          className="accent-primary h-4 w-4"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Role */}
                <div className="space-y-1.5">
                  <Label htmlFor="role">Role *</Label>
                  <NativeSelect
                    id="role"
                    value={form.role}
                    onChange={(v) => patch({ role: v })}
                    options={ROLES}
                    placeholder="Select your role..."
                  />
                  <FieldError msg={errors.role} />
                </div>

                {/* Student count */}
                <div className="space-y-1.5">
                  <Label htmlFor="studentCount">
                    Number of Students in English Department *
                  </Label>
                  <NativeSelect
                    id="studentCount"
                    value={form.studentCount}
                    onChange={(v) => patch({ studentCount: v })}
                    options={STUDENT_COUNTS}
                    placeholder="Select student count..."
                  />
                  <FieldError msg={errors.studentCount} />
                </div>

                {/* Exam board */}
                <div className="space-y-1.5">
                  <Label htmlFor="examBoard">Exam Board *</Label>
                  <NativeSelect
                    id="examBoard"
                    value={form.examBoard}
                    onChange={(v) => patch({ examBoard: v })}
                    options={EXAM_BOARDS}
                    placeholder="Select exam board..."
                  />
                  <FieldError msg={errors.examBoard} />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Anything else you'd like us to know ahead of the call?"
                    value={form.message}
                    onChange={(e) => patch({ message: e.target.value })}
                    rows={4}
                  />
                </div>

                {/* Submit error */}
                {submitError && (
                  <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                    <p className="text-sm text-destructive">{submitError}</p>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full gap-1.5"
                  size="lg"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Phone className="h-4 w-4" />
                      Book My Call
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Side panel */}
          <div className="hidden lg:block">
            <FoundingSchoolsPanel />
          </div>
        </div>

        {/* Mobile side panel (shown below form on small screens) */}
        <div className="mt-8 lg:hidden">
          <FoundingSchoolsPanel />
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prefer to register directly?{" "}
          <Link
            href="/for-schools/register"
            className="text-primary underline-offset-2 hover:underline"
          >
            Self-serve registration
          </Link>
        </p>
      </div>
    </main>
  );
}
