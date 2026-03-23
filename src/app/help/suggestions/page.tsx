"use client";

import { useState } from "react";
import Link from "next/link";

const SUGGESTION_CATEGORIES = [
  { value: "feature", label: "New Feature", icon: "💡" },
  { value: "content", label: "Content Request", icon: "📚" },
  { value: "ui", label: "Design / UI", icon: "🎨" },
  { value: "exam-board", label: "Exam Board Coverage", icon: "📝" },
  { value: "tools", label: "Study Tools", icon: "🛠️" },
  { value: "other", label: "Other", icon: "💬" },
];

export default function SuggestionsPage() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to /api/support/suggestion
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
            <div className="w-16 h-16 bg-[#2E86C1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💡</span>
            </div>
            <h2 className="text-xl font-bold text-[#1A5276] mb-2">Thank You!</h2>
            <p className="text-slate-600 text-sm mb-6">
              Your suggestion has been received. We review every idea and use them to make The English Hub better for everyone.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href="/help" className="px-5 py-2 bg-[#2E86C1] text-white rounded-lg text-sm font-medium hover:bg-[#2474A8] transition-colors">
                Back to Help Centre
              </Link>
              <button
                onClick={() => { setSubmitted(false); setCategory(""); setTitle(""); setDescription(""); }}
                className="px-5 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm hover:bg-slate-50 transition-colors"
              >
                Submit Another
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Link href="/help" className="text-sm text-[#2E86C1] hover:underline mb-4 inline-block">
            ← Back to Help Centre
          </Link>
          <h1 className="text-3xl font-bold text-[#1A5276] mb-2">Suggestions</h1>
          <p className="text-slate-600 mb-8">
            Have an idea to improve The English Hub? We&apos;d love to hear it. Every suggestion is read by our team.
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-[#1A5276] mb-3">
                What area is your suggestion about? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SUGGESTION_CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setCategory(cat.value)}
                    className={`flex items-center gap-2 p-3 rounded-lg border text-left transition-all ${
                      category === cat.value
                        ? "border-[#2E86C1] bg-[#2E86C1]/5 ring-1 ring-[#2E86C1]/20"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-lg">{cat.icon}</span>
                    <span className="text-sm font-medium text-[#1A5276]">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-[#1A5276] mb-1">
                Suggestion title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="A short summary of your idea"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/30 focus:border-[#2E86C1]"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-[#1A5276] mb-1">
                Tell us more <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-slate-400 mb-2">
                Describe your suggestion in detail. How would it help you or other students?
              </p>
              <textarea
                id="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="I think it would be great if..."
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/30 focus:border-[#2E86C1] resize-y"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#1A5276] mb-1">
                Your email <span className="text-slate-400 font-normal">(optional — we may follow up)</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/30 focus:border-[#2E86C1]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!category || !title.trim() || !description.trim()}
              className="w-full py-3 bg-[#2E86C1] text-white font-semibold rounded-lg hover:bg-[#2474A8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Suggestion
            </button>
          </form>

          {/* Popular Suggestions */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-[#1A5276] mb-4">Popular Requests</h2>
            <div className="space-y-3">
              {[
                { title: "Past paper question bank", votes: 47, status: "Planned" },
                { title: "Audio recordings of poems", votes: 35, status: "Under Review" },
                { title: "Dark mode", votes: 31, status: "Planned" },
                { title: "WJEC full text guides", votes: 28, status: "In Progress" },
                { title: "Mobile app", votes: 24, status: "Under Review" },
              ].map((req, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#2E86C1] bg-[#2E86C1]/10 px-2.5 py-1 rounded-md min-w-[40px] text-center">
                      {req.votes}
                    </span>
                    <span className="text-sm text-[#1A5276] font-medium">{req.title}</span>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    req.status === "Planned" ? "bg-green-100 text-green-700" :
                    req.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                    "bg-amber-100 text-amber-700"
                  }`}>
                    {req.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
