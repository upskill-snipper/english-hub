"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Building2,
  User,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Tag,
  AlertCircle,
  Check,
  Loader2,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SchoolForm {
  schoolName: string;
  schoolType: string;
  examBoard: string;
  curriculum: string[];
  address: string;
  city: string;
  postcode: string;
  country: string;
}

interface AdminForm {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface PlanForm {
  promoCode: string;
  agreedTerms: boolean;
  agreedPrivacy: boolean;
}

// ---------------------------------------------------------------------------
// Step config
// ---------------------------------------------------------------------------

const STEPS = [
  { id: 1, label: "School Details", icon: Building2 },
  { id: 2, label: "Admin Contact", icon: User },
  { id: 3, label: "Plan & Promo", icon: CreditCard },
];

const SCHOOL_TYPES = [
  "Secondary School",
  "Sixth Form",
  "Independent School",
  "Academy",
  "MAT",
  "Other",
];

const JOB_TITLES = [
  "Head of English",
  "HOD",
  "Teacher",
  "IT Admin",
  "Deputy Head",
  "Principal",
  "Other",
];

const EXAM_BOARDS = [
  "AQA",
  "Edexcel (Pearson)",
  "OCR",
  "WJEC/Eduqas",
  "IGCSE (Cambridge/CAIE)",
];

const CURRICULUM_OPTIONS = [
  "GCSE English Language",
  "GCSE English Literature",
  "A-Level English Language",
  "A-Level English Literature",
  "KS3 English (Years 7-9)",
];

const COUNTRIES = ["UK", "Qatar", "Other"];

// ---------------------------------------------------------------------------
// Shared styled native select
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
      className="flex h-9 w-full rounded-md border border-input bg-input/30 px-3 py-1.5 text-sm text-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring disabled:cursor-not-allowed disabled:opacity-50"
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
// Progress indicator
// ---------------------------------------------------------------------------

function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {STEPS.map((step, idx) => {
        const Icon = step.icon;
        const isComplete = currentStep > step.id;
        const isActive = currentStep === step.id;
        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={[
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all",
                  isComplete
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/30 bg-muted/30 text-muted-foreground",
                ].join(" ")}
              >
                {isComplete ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
              </div>
              <span
                className={[
                  "text-xs font-medium whitespace-nowrap",
                  isActive ? "text-foreground" : "text-muted-foreground",
                ].join(" ")}
              >
                {step.label}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <div
                className={[
                  "mx-3 mb-5 h-0.5 w-16 sm:w-24 transition-all",
                  currentStep > step.id ? "bg-emerald-500" : "bg-muted/40",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Field error helper
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
// Step 1 — School Details
// ---------------------------------------------------------------------------

function Step1({
  data,
  onChange,
  errors,
}: {
  data: SchoolForm;
  onChange: (patch: Partial<SchoolForm>) => void;
  errors: Partial<Record<keyof SchoolForm, string>>;
}) {
  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="schoolName">School Name *</Label>
        <Input
          id="schoolName"
          placeholder="e.g. Oakfield Academy"
          value={data.schoolName}
          onChange={(e) => onChange({ schoolName: e.target.value })}
          className="bg-input/30"
        />
        <FieldError msg={errors.schoolName} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="schoolType">School Type *</Label>
        <NativeSelect
          id="schoolType"
          value={data.schoolType}
          onChange={(v) => onChange({ schoolType: v })}
          options={SCHOOL_TYPES}
          placeholder="Select school type..."
        />
        <FieldError msg={errors.schoolType} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="examBoard">Exam Board *</Label>
        <NativeSelect
          id="examBoard"
          value={data.examBoard}
          onChange={(v) => onChange({ examBoard: v })}
          options={EXAM_BOARDS}
          placeholder="Select exam board..."
        />
        <p className="text-xs text-muted-foreground mt-0.5">
          All content, assessments, and resources will be tailored to your selected exam board.
        </p>
        <FieldError msg={errors.examBoard} />
      </div>

      <div className="space-y-2">
        <Label>Curriculum *</Label>
        <p className="text-xs text-muted-foreground -mt-1">
          Select all qualifications your school teaches.
        </p>
        <div className="space-y-2">
          {CURRICULUM_OPTIONS.map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={data.curriculum.includes(option)}
                onChange={(e) => {
                  const next = e.target.checked
                    ? [...data.curriculum, option]
                    : data.curriculum.filter((c) => c !== option);
                  onChange({ curriculum: next });
                }}
                className="h-4 w-4 accent-primary rounded"
              />
              <span className="text-sm text-foreground">{option}</span>
            </label>
          ))}
        </div>
        <FieldError msg={errors.curriculum} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="address">School Address</Label>
        <Input
          id="address"
          placeholder="Street address"
          value={data.address}
          onChange={(e) => onChange({ address: e.target.value })}
          className="bg-input/30"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            placeholder="e.g. Manchester"
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            className="bg-input/30"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="postcode">Postcode</Label>
          <Input
            id="postcode"
            placeholder="e.g. M1 2AB"
            value={data.postcode}
            onChange={(e) => onChange({ postcode: e.target.value })}
            className="bg-input/30"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="country">Country *</Label>
        <NativeSelect
          id="country"
          value={data.country}
          onChange={(v) => onChange({ country: v })}
          options={COUNTRIES}
          placeholder="Select country..."
        />
        <FieldError msg={errors.country} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Step 2 — Admin Contact
// ---------------------------------------------------------------------------

function Step2({
  data,
  onChange,
  errors,
}: {
  data: AdminForm;
  onChange: (patch: Partial<AdminForm>) => void;
  errors: Partial<Record<keyof AdminForm, string>>;
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            placeholder="Jane"
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            className="bg-input/30"
          />
          <FieldError msg={errors.firstName} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            placeholder="Smith"
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            className="bg-input/30"
          />
          <FieldError msg={errors.lastName} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="jobTitle">Job Title *</Label>
        <NativeSelect
          id="jobTitle"
          value={data.jobTitle}
          onChange={(v) => onChange({ jobTitle: v })}
          options={JOB_TITLES}
          placeholder="Select job title..."
        />
        <FieldError msg={errors.jobTitle} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="jane.smith@school.ac.uk"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          className="bg-input/30"
        />
        <FieldError msg={errors.email} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone Number (optional)</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+44 7700 000000"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          className="bg-input/30"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          type="password"
          placeholder="At least 8 characters"
          value={data.password}
          onChange={(e) => onChange({ password: e.target.value })}
          className="bg-input/30"
        />
        <FieldError msg={errors.password} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          value={data.confirmPassword}
          onChange={(e) => onChange({ confirmPassword: e.target.value })}
          className="bg-input/30"
        />
        <FieldError msg={errors.confirmPassword} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Step 3 — Plan & Promo
// ---------------------------------------------------------------------------

function Step3({
  data,
  onChange,
  errors,
  promoStatus,
  promoMessage,
  validatingPromo,
  onValidatePromo,
}: {
  data: PlanForm;
  onChange: (patch: Partial<PlanForm>) => void;
  errors: Partial<Record<keyof PlanForm, string>>;
  promoStatus: "idle" | "valid" | "invalid";
  promoMessage: string;
  validatingPromo: boolean;
  onValidatePromo: () => void;
}) {
  return (
    <div className="space-y-6">
      {/* Plan card */}
      <div className="rounded-lg border border-muted/40 bg-muted/10 p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">School Site License</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Unlimited teachers and students at your school
            </p>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500" /> All courses and resources</li>
              <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500" /> Class management and analytics</li>
              <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500" /> Teacher and student accounts</li>
              <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500" /> Downloadable resources</li>
              <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500" /> Dedicated school admin dashboard</li>
            </ul>
          </div>
          <div className="text-right shrink-0">
            <p className="text-2xl font-bold text-foreground">1,500</p>
            <p className="text-xs text-muted-foreground">/year</p>
          </div>
        </div>
      </div>

      {/* Promo code */}
      <div className="space-y-2">
        <Label htmlFor="promoCode">Promo Code</Label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Tag className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="promoCode"
              placeholder="Enter promo code"
              value={data.promoCode}
              onChange={(e) => onChange({ promoCode: e.target.value.toUpperCase() })}
              className="bg-input/30 pl-8 font-mono tracking-widest uppercase"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={onValidatePromo}
            disabled={validatingPromo || !data.promoCode.trim()}
            className="shrink-0"
          >
            {validatingPromo ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Validate"
            )}
          </Button>
        </div>

        {promoStatus === "valid" && (
          <div className="flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <p className="text-sm text-emerald-400 font-medium">{promoMessage}</p>
          </div>
        )}
        {promoStatus === "invalid" && (
          <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2">
            <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
            <p className="text-sm text-destructive">{promoMessage}</p>
          </div>
        )}
      </div>

      {/* FOUNDER free-access badge */}
      {promoStatus === "valid" && data.promoCode === "FOUNDER" && (
        <div className="flex items-center gap-3 rounded-lg border border-yellow-500/40 bg-yellow-500/10 px-4 py-3">
          <Star className="h-5 w-5 shrink-0 text-yellow-400" />
          <div>
            <p className="text-sm font-semibold text-yellow-300">FREE access until August 2026</p>
            <p className="text-xs text-yellow-400/80 mt-0.5">
              Your FOUNDER code gives you full access at no charge until August 2026, then
              1,500/year.
            </p>
          </div>
          <Badge className="ml-auto shrink-0 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
            FOUNDER
          </Badge>
        </div>
      )}

      {/* Terms */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={data.agreedTerms}
            onChange={(e) => onChange({ agreedTerms: e.target.checked })}
            className="mt-0.5 h-4 w-4 accent-primary rounded"
          />
          <span className="text-sm text-muted-foreground leading-relaxed">
            I agree to the{" "}
            <Link href="/terms" className="text-primary underline-offset-2 hover:underline">
              Terms of Service
            </Link>
          </span>
        </label>
        <FieldError msg={errors.agreedTerms} />

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={data.agreedPrivacy}
            onChange={(e) => onChange({ agreedPrivacy: e.target.checked })}
            className="mt-0.5 h-4 w-4 accent-primary rounded"
          />
          <span className="text-sm text-muted-foreground leading-relaxed">
            I agree to the{" "}
            <Link href="/privacy" className="text-primary underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
          </span>
        </label>
        <FieldError msg={errors.agreedPrivacy} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Success state
// ---------------------------------------------------------------------------

function SuccessScreen() {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-500/10">
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Account Created!</h2>
        <p className="text-muted-foreground max-w-sm">
          Check your email to verify your address, then log in to access your School Admin
          dashboard.
        </p>
      </div>
      <div className="rounded-lg border border-muted/40 bg-muted/10 p-4 text-left w-full max-w-sm">
        <p className="text-sm font-semibold text-foreground mb-2">As School Admin you can:</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> Add and manage teachers</li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> Add and manage students</li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> View all analytics across classes</li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> Create and manage class groups</li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> Download resources and materials</li>
        </ul>
      </div>
      <Link
        href="/auth/login"
        className="inline-flex h-11 w-full max-w-sm items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Go to Login
      </Link>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function SchoolRegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Step 1 data
  const [schoolData, setSchoolData] = useState<SchoolForm>({
    schoolName: "",
    schoolType: "",
    examBoard: "",
    curriculum: [],
    address: "",
    city: "",
    postcode: "",
    country: "",
  });
  const [schoolErrors, setSchoolErrors] = useState<Partial<Record<keyof SchoolForm, string>>>({});

  // Step 2 data
  const [adminData, setAdminData] = useState<AdminForm>({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [adminErrors, setAdminErrors] = useState<Partial<Record<keyof AdminForm, string>>>({});

  // Step 3 data
  const [planData, setPlanData] = useState<PlanForm>({
    promoCode: "",
    agreedTerms: false,
    agreedPrivacy: false,
  });
  const [planErrors, setPlanErrors] = useState<Partial<Record<keyof PlanForm, string>>>({});
  const [promoStatus, setPromoStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const [promoMessage, setPromoMessage] = useState("");
  const [validatingPromo, setValidatingPromo] = useState(false);

  // Pre-fill FOUNDER code if query param present
  useEffect(() => {
    const promo = searchParams.get("promo");
    if (promo) {
      setPlanData((prev) => ({ ...prev, promoCode: promo.toUpperCase() }));
    }
  }, [searchParams]);

  // ---------------------------------------------------------------------------
  // Validation
  // ---------------------------------------------------------------------------

  function validateStep1(): boolean {
    const errs: Partial<Record<keyof SchoolForm, string>> = {};
    if (!schoolData.schoolName.trim()) errs.schoolName = "School name is required.";
    if (!schoolData.schoolType) errs.schoolType = "Please select a school type.";
    if (!schoolData.examBoard) errs.examBoard = "Please select your exam board.";
    if (schoolData.curriculum.length === 0) errs.curriculum = "Please select at least one curriculum.";
    if (!schoolData.country) errs.country = "Please select a country.";
    setSchoolErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateStep2(): boolean {
    const errs: Partial<Record<keyof AdminForm, string>> = {};
    if (!adminData.firstName.trim()) errs.firstName = "First name is required.";
    if (!adminData.lastName.trim()) errs.lastName = "Last name is required.";
    if (!adminData.jobTitle) errs.jobTitle = "Please select your job title.";
    if (!adminData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adminData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!adminData.password) {
      errs.password = "Password is required.";
    } else if (adminData.password.length < 8) {
      errs.password = "Password must be at least 8 characters.";
    }
    if (!adminData.confirmPassword) {
      errs.confirmPassword = "Please confirm your password.";
    } else if (adminData.password !== adminData.confirmPassword) {
      errs.confirmPassword = "Passwords do not match.";
    }
    setAdminErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateStep3(): boolean {
    const errs: Partial<Record<keyof PlanForm, string>> = {};
    if (!planData.agreedTerms) errs.agreedTerms = "You must agree to the Terms of Service.";
    if (!planData.agreedPrivacy) errs.agreedPrivacy = "You must agree to the Privacy Policy.";
    setPlanErrors(errs);
    return Object.keys(errs).length === 0;
  }

  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------

  function handleNext() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => s + 1);
  }

  function handleBack() {
    setStep((s) => s - 1);
  }

  // ---------------------------------------------------------------------------
  // Promo validation
  // ---------------------------------------------------------------------------

  async function handleValidatePromo() {
    if (!planData.promoCode.trim()) return;
    setValidatingPromo(true);
    setPromoStatus("idle");
    setPromoMessage("");
    try {
      const res = await fetch("/api/school/promo/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: planData.promoCode }),
      });
      const json = await res.json();
      if (res.ok && json.valid) {
        setPromoStatus("valid");
        setPromoMessage(json.message ?? "Promo code applied!");
      } else {
        setPromoStatus("invalid");
        setPromoMessage(json.error ?? "Invalid or expired promo code.");
      }
    } catch {
      setPromoStatus("invalid");
      setPromoMessage("Could not validate code. Please try again.");
    } finally {
      setValidatingPromo(false);
    }
  }

  // ---------------------------------------------------------------------------
  // Submit
  // ---------------------------------------------------------------------------

  async function handleSubmit() {
    if (!validateStep3()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/school/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          school: schoolData,
          admin: {
            firstName: adminData.firstName,
            lastName: adminData.lastName,
            jobTitle: adminData.jobTitle,
            email: adminData.email,
            phone: adminData.phone,
            password: adminData.password,
          },
          plan: {
            promoCode: planData.promoCode || undefined,
            promoValidated: promoStatus === "valid",
          },
        }),
      });
      const json = await res.json();
      if (res.ok) {
        setSuccess(true);
      } else {
        setSubmitError(json.error ?? "Registration failed. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <Link
            href="/for-schools"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Schools
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Register Your School
          </h1>
          <p className="mt-2 text-muted-foreground">
            Get started with The English Hub for your whole school. Setup takes under 5 minutes.
          </p>
        </div>

        {/* FOUNDER promo banner */}
        {!success && (
          <div className="mb-8 flex items-center gap-3 rounded-lg border border-yellow-500/40 bg-yellow-500/10 px-5 py-4">
            <Star className="h-5 w-5 shrink-0 text-yellow-400" />
            <p className="text-sm text-yellow-200 leading-relaxed">
              <span className="font-bold text-yellow-300">Use promo code FOUNDER</span> for{" "}
              <span className="font-semibold">FREE access until August 2026</span> — then
              1,500/year. Limited pilot spots available.
            </p>
            <Badge className="ml-auto shrink-0 border-yellow-500/40 bg-yellow-500/15 text-yellow-300 text-xs">
              Limited
            </Badge>
          </div>
        )}

        {/* Card */}
        <Card className="border-muted/40 bg-card/50 backdrop-blur">
          <CardHeader className="pb-2">
            {!success && <StepIndicator currentStep={step} />}
            {success ? null : (
              <>
                <CardTitle className="text-lg">
                  {STEPS[step - 1].label}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Tell us about your school so we can set up your account."}
                  {step === 2 && "Create your School Admin account. You can add more staff later."}
                  {step === 3 && "Review your plan, apply a promo code, and confirm your account."}
                </CardDescription>
              </>
            )}
          </CardHeader>

          <CardContent className="pt-2">
            {success ? (
              <SuccessScreen />
            ) : (
              <>
                {step === 1 && (
                  <Step1
                    data={schoolData}
                    onChange={(patch) => setSchoolData((prev) => ({ ...prev, ...patch }))}
                    errors={schoolErrors}
                  />
                )}
                {step === 2 && (
                  <Step2
                    data={adminData}
                    onChange={(patch) => setAdminData((prev) => ({ ...prev, ...patch }))}
                    errors={adminErrors}
                  />
                )}
                {step === 3 && (
                  <Step3
                    data={planData}
                    onChange={(patch) => setPlanData((prev) => ({ ...prev, ...patch }))}
                    errors={planErrors}
                    promoStatus={promoStatus}
                    promoMessage={promoMessage}
                    validatingPromo={validatingPromo}
                    onValidatePromo={handleValidatePromo}
                  />
                )}

                {/* Submit error */}
                {submitError && (
                  <div className="mt-4 flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                    <p className="text-sm text-destructive">{submitError}</p>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="mt-8 flex items-center justify-between gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="gap-1.5"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>

                  {step < 3 ? (
                    <Button type="button" onClick={handleNext} className="gap-1.5">
                      Continue
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="gap-1.5"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        <>
                          Create School Account
                          <CheckCircle2 className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>

                {/* Step counter */}
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Step {step} of {STEPS.length}
                </p>
              </>
            )}
          </CardContent>
        </Card>

        {/* Footer note */}
        {!success && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary underline-offset-2 hover:underline">
              Log in here
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}
