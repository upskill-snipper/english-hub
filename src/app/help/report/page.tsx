"use client";

import { useState } from "react";
import Link from "next/link";

const ISSUE_TYPES = [
  { value: "bug", label: "Bug / Something broken", description: "A feature isn't working as expected" },
  { value: "content", label: "Content error", description: "Incorrect information, typo, or missing content" },
  { value: "accessibility", label: "Accessibility issue", description: "Difficulty using the site with assistive technology" },
  { value: "performance", label: "Performance issue", description: "Slow loading, freezing, or crashing" },
  { value: "security", label: "Security concern", description: "Privacy or security vulnerability" },
  { value: "other", label: "Other", description: "Something else not listed above" },
];

const BROWSERS = ["Chrome", "Firefox", "Safari", "Edge", "Other"];

export default function ReportIssuePage() {
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [browser, setBrowser] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to /api/support/report
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <main className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-card rounded-2xl shadow-md border border-border p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Report Submitted</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Thank you for reporting this issue. Our team will investigate and get back to you if needed.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href="/help" className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/80 transition-colors">
                Back to Help Centre
              </Link>
              <button
                onClick={() => { setSubmitted(false); setIssueType(""); setDescription(""); setPageUrl(""); setBrowser(""); }}
                className="px-5 py-2 border border-border text-muted-foreground rounded-lg text-sm hover:bg-muted transition-colors"
              >
                Report Another
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Link href="/help" className="text-sm text-primary hover:underline mb-4 inline-block">
            ← Back to Help Centre
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Report an Issue</h1>
          <p className="text-muted-foreground mb-8">
            Found something that isn&apos;t working? Let us know and we&apos;ll fix it as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-md p-6 sm:p-8 space-y-6">
            {/* Issue Type */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                What type of issue are you reporting? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ISSUE_TYPES.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setIssueType(type.value)}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      issueType === type.value
                        ? "border-[#2E86C1] bg-primary/5 ring-1 ring-primary/20"
                        : "border-border hover:border-slate-300"
                    }`}
                  >
                    <p className="font-medium text-sm text-foreground">{type.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-1">
                Describe the issue <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-muted-foreground mb-2">Please include steps to reproduce the issue if possible.</p>
              <textarea
                id="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="When I click on... I expected... but instead..."
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-[#2E86C1] resize-y"
                required
              />
            </div>

            {/* Page URL */}
            <div>
              <label htmlFor="pageUrl" className="block text-sm font-semibold text-foreground mb-1">
                Page URL <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                id="pageUrl"
                type="url"
                value={pageUrl}
                onChange={(e) => setPageUrl(e.target.value)}
                placeholder="https://theenglishhub.co.uk/resources/..."
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-[#2E86C1]"
              />
            </div>

            {/* Browser */}
            <div>
              <label htmlFor="browser" className="block text-sm font-semibold text-foreground mb-1">
                Browser <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <select
                id="browser"
                value={browser}
                onChange={(e) => setBrowser(e.target.value)}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-[#2E86C1]"
              >
                <option value="">Select browser</option>
                {BROWSERS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">
                Your email <span className="text-muted-foreground font-normal">(optional — for follow-up)</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-[#2E86C1]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!issueType || !description.trim()}
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Report
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
