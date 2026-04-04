import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Mail,
  ArrowRight,
  BookOpen,
  Users,
  Download,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Registration Successful | The English Hub for Schools",
  description: "Your school account has been created.",
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PageProps {
  searchParams: Promise<{ schoolName?: string; adminEmail?: string; founder?: string }>;
}

// ---------------------------------------------------------------------------
// Next steps data
// ---------------------------------------------------------------------------

const NEXT_STEPS = [
  {
    icon: Mail,
    label: "Check your email and click the verification link",
  },
  {
    icon: BookOpen,
    label: "Log in to your school admin portal at /school/dashboard",
  },
  {
    icon: HelpCircle,
    label: "Follow the setup guide to add your teachers and students",
  },
  {
    icon: Download,
    label: "Download your school's login credentials spreadsheet",
  },
  {
    icon: Users,
    label: "Share login details with staff and students",
  },
];

// ---------------------------------------------------------------------------
// Checkmark animation — inline <style> via a wrapper component
// ---------------------------------------------------------------------------

function CheckmarkAnimation() {
  return (
    <>
      <style>{`
        @keyframes scale-in {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes draw-circle {
          0%   { stroke-dashoffset: 283; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes draw-check {
          0%   { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .checkmark-wrapper {
          animation: scale-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .checkmark-circle {
          stroke-dasharray: 283;
          stroke-dashoffset: 283;
          animation: draw-circle 0.6s ease-out 0.2s forwards;
        }
        .checkmark-tick {
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
          animation: draw-check 0.4s ease-out 0.7s forwards;
        }
      `}</style>

      <div className="flex justify-center mb-8">
        <div className="checkmark-wrapper w-24 h-24">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer glow disc */}
            <circle cx="50" cy="50" r="48" fill="hsl(var(--primary) / 0.12)" />
            {/* Animated circle border */}
            <circle
              className="checkmark-circle"
              cx="50"
              cy="50"
              r="45"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
            {/* Animated tick */}
            <polyline
              className="checkmark-tick"
              points="28,52 43,67 72,36"
              stroke="hsl(var(--primary))"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function SchoolRegistrationSuccessPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const schoolName = params.schoolName ?? "Your School";
  const adminEmail = params.adminEmail ?? "";
  const isFounder = params.founder === "true";

  return (
    <div className="space-y-6">
      {/* Hero card */}
      <Card className="text-center">
        <CardContent className="pt-10 pb-8 px-8">
          <CheckmarkAnimation />

          <h1 className="text-2xl font-bold tracking-tight text-foreground mb-2">
            Your School Account is Created!
          </h1>

          {/* School name */}
          <p className="text-lg font-semibold text-primary mb-4">{schoolName}</p>

          {/* Email confirmation */}
          {adminEmail && (
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 border border-border/60 rounded-lg px-4 py-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>
                We've sent a verification email to{" "}
                <span className="font-medium text-foreground">{adminEmail}</span>
              </span>
            </div>
          )}

          {/* FOUNDER badge */}
          {isFounder && (
            <div className="mt-5 flex justify-center">
              <Badge className="bg-amber-500/15 text-amber-400 border border-amber-500/30 px-4 py-1.5 text-sm font-semibold">
                FOUNDER access activated &mdash; free until 31 August 2026
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Next steps card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold text-foreground">
            Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-6">
          <ol className="space-y-3">
            {NEXT_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div className="flex items-start gap-2.5 flex-1">
                    <Icon className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-snug">
                      {step.label}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </CardContent>
      </Card>

      {/* CTA buttons */}
      <div className="flex flex-col gap-3">
        <Button size="lg" className="w-full" render={<Link href="/auth/login" />}>
            Go to Login
            <ArrowRight className="w-4 h-4" />
        </Button>

        <Button size="lg" variant="outline" className="w-full" render={<Link href="/school/guide" />}>
            <BookOpen className="w-4 h-4" />
            View Setup Guide
        </Button>

        <Button size="lg" variant="secondary" className="w-full" disabled>
          <Download className="w-4 h-4" />
          Download Getting Started PDF
          <Badge className="ml-auto text-xs bg-muted text-muted-foreground border-0 py-0.5">
            Coming soon
          </Badge>
        </Button>
      </div>

      {/* Help */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2 pb-4">
        <HelpCircle className="w-4 h-4 shrink-0" />
        <span>
          Need help? Email us at{" "}
          <a
            href="mailto:schools@theenglishhub.app"
            className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            schools@theenglishhub.app
          </a>
        </span>
      </div>
    </div>
  );
}
