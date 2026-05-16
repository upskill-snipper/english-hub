'use client'

import { useState } from 'react'
import { openPrintableDocument } from '@/lib/generate-download'
import { Sparkles, Download, CheckCircle, XCircle, Loader2, Users, FileText } from 'lucide-react'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

// ---------------------------------------------------------------------------
// Generated quiz data (An Inspector Calls)
// ---------------------------------------------------------------------------

const GENERATED_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Who is the first character to be interrogated by Inspector Goole?',
    options: ['Mr Birling', 'Sheila Birling', 'Gerald Croft', 'Mrs Birling'],
    correctIndex: 0,
    explanation:
      'Mr Birling is the first to be questioned, as Eva Smith was fired from his factory.',
  },
  {
    id: 2,
    question: 'What is the name of the girl whose death is investigated?',
    options: ['Daisy Renton', 'Eva Smith', 'Both names are used', 'Mary Jones'],
    correctIndex: 2,
    explanation: 'She is known as both Eva Smith and Daisy Renton at different points in the play.',
  },
  {
    id: 3,
    question: "What year is 'An Inspector Calls' set in?",
    options: ['1945', '1912', '1918', '1930'],
    correctIndex: 1,
    explanation: 'The play is set in 1912, before WWI, though written in 1945.',
  },
  {
    id: 4,
    question: 'What event are the Birlings celebrating at the start of the play?',
    options: [
      'A birthday',
      'Christmas',
      "Sheila and Gerald's engagement",
      "Mr Birling's knighthood",
    ],
    correctIndex: 2,
    explanation: 'The family is celebrating the engagement of Sheila Birling and Gerald Croft.',
  },
  {
    id: 5,
    question: 'Why did Eva Smith lose her job at Birling and Company?',
    options: [
      'She was caught stealing',
      'She led a strike for higher wages',
      'She was always late',
      'She argued with a customer',
    ],
    correctIndex: 1,
    explanation: 'Eva was sacked after leading a group of workers in a strike for higher pay.',
  },
  {
    id: 6,
    question: "Which character says 'the young ones' are 'more impressionable'?",
    options: ['Inspector Goole', 'Mr Birling', 'Mrs Birling', 'Eric'],
    correctIndex: 0,
    explanation:
      "The Inspector makes this observation about Sheila and Eric's willingness to accept responsibility.",
  },
  {
    id: 7,
    question: "What is Gerald's connection to Eva/Daisy?",
    options: [
      'He employed her',
      'He was her landlord',
      'He had an affair with her',
      'He refused her charity',
    ],
    correctIndex: 2,
    explanation:
      'Gerald had a romantic affair with Daisy Renton, providing her with accommodation.',
  },
  {
    id: 8,
    question: 'What does Mr Birling predict will not happen?',
    options: ['A general election', 'A war', 'A stock market crash', 'The Titanic sinking'],
    correctIndex: 1,
    explanation:
      "Mr Birling confidently predicts there will be no war, showing his dramatic irony given the play's 1945 audience.",
  },
  {
    id: 9,
    question: 'How did Eva Smith die?',
    options: [
      'She drowned',
      'She swallowed disinfectant',
      'She was hit by a car',
      'She fell from a building',
    ],
    correctIndex: 1,
    explanation: 'Eva died by swallowing disinfectant, which burned her insides.',
  },
  {
    id: 10,
    question: 'What is the final twist of the play?',
    options: [
      'Eva is found alive',
      'The Inspector returns',
      'A real inspector phones to say a girl has just died',
      'Mr Birling confesses everything',
    ],
    correctIndex: 2,
    explanation:
      'After discovering Goole may not be a real inspector, a phone call reveals that a girl has died and an inspector is on his way.',
  },
]

// ---------------------------------------------------------------------------
// Download helpers
// ---------------------------------------------------------------------------

function downloadQuiz(questions: QuizQuestion[]) {
  const e = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const body = `
    <p><strong>Name:</strong> _______________________________ &nbsp;&nbsp; <strong>Date:</strong> ______________</p>
    <p>Answer all questions by circling the correct letter.</p>
    ${questions
      .map(
        (q) => `
      <div class="section">
        <p><strong>${q.id}.</strong> ${e(q.question)}</p>
        <table style="margin-left:20px;border:none">
          ${q.options.map((opt, i) => `<tr style="border:none"><td style="border:none;padding:3px 8px;font-weight:600">${String.fromCharCode(65 + i)})</td><td style="border:none;padding:3px 8px">${e(opt)}</td></tr>`).join('')}
        </table>
      </div>`,
      )
      .join('')}`
  openPrintableDocument('Quiz: An Inspector Calls', body, {
    subtitle: 'Year 11 | Higher | 10 questions',
  })
}

function downloadAnswerSheet(questions: QuizQuestion[]) {
  const e = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const body = `
    <table>
      <tr><th>Q</th><th>Answer</th><th>Explanation</th></tr>
      ${questions
        .map((q) => {
          const letter = String.fromCharCode(65 + q.correctIndex)
          return `<tr><td><strong>${q.id}</strong></td><td><strong>${letter})</strong> ${e(q.options[q.correctIndex])}</td><td>${e(q.explanation)}</td></tr>`
        })
        .join('')}
    </table>`
  openPrintableDocument('Answer Sheet: An Inspector Calls', body, {
    subtitle: 'Year 11 | Higher | 10 questions',
  })
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function QuizBuilderDemoPage() {
  const [topic, setTopic] = useState('An Inspector Calls')
  const [yearGroup, setYearGroup] = useState('11')
  const [difficulty, setDifficulty] = useState('Higher')
  const [numQuestions, setNumQuestions] = useState('10')
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [showToast, setShowToast] = useState(false)

  function handleGenerate() {
    setGenerating(true)
    setGenerated(false)
    setTimeout(() => {
      setGenerating(false)
      setGenerated(true)
    }, 1500)
  }

  function handleAssign() {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-clay-600 dark:text-clay-400">
            <span className="font-semibold">Teacher Demo</span> -- Try the Quiz Builder with sample
            data. No account needed.
          </p>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-tight text-foreground flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-primary" />
            Quiz Builder
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Generate multiple-choice quizzes aligned to your exam board in seconds.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-border/60 bg-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Topic */}
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">
                Topic / Text
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-lg border border-border/60 bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                placeholder="e.g. An Inspector Calls, Macbeth..."
              />
            </div>

            {/* Year Group */}
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">
                Year Group
              </label>
              <select
                value={yearGroup}
                onChange={(e) => setYearGroup(e.target.value)}
                className="w-full rounded-lg border border-border/60 bg-muted px-4 py-2.5 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
              >
                <option value="7">Year 7</option>
                <option value="8">Year 8</option>
                <option value="9">Year 9</option>
                <option value="10">Year 10</option>
                <option value="11">Year 11</option>
                <option value="12">Year 12</option>
                <option value="13">Year 13</option>
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">
                Difficulty
              </label>
              <div className="flex gap-3">
                {['Foundation', 'Higher'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                      difficulty === d
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-border/60 bg-muted text-muted-foreground hover:text-muted-foreground hover:border-border/60'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Number of questions */}
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">
                Number of Questions
              </label>
              <div className="flex gap-3">
                {['5', '10', '15'].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNumQuestions(n)}
                    className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                      numQuestions === n
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-border/60 bg-muted text-muted-foreground hover:text-muted-foreground hover:border-border/60'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generate button */}
          <div className="mt-6">
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating Quiz...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Generate Quiz
                </>
              )}
            </button>
          </div>
        </div>

        {/* Generated quiz */}
        {generated && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Quiz header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-medium text-foreground">
                  An Inspector Calls -- Knowledge Quiz
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Year {yearGroup} | {difficulty} | {GENERATED_QUESTIONS.length} questions
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => downloadQuiz(GENERATED_QUESTIONS)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-muted text-sm text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download Quiz
                </button>
                <button
                  onClick={() => downloadAnswerSheet(GENERATED_QUESTIONS)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-muted text-sm text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Download Answer Sheet
                </button>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {GENERATED_QUESTIONS.map((q) => (
                <div key={q.id} className="rounded-xl border border-border/60 bg-card p-5">
                  <p className="text-sm font-medium text-foreground mb-3">
                    <span className="text-primary mr-2">{q.id}.</span>
                    {q.question}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                    {q.options.map((opt, i) => {
                      const letter = String.fromCharCode(65 + i)
                      const isCorrect = i === q.correctIndex
                      return (
                        <div
                          key={i}
                          className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                            isCorrect
                              ? 'border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400'
                              : 'border-border/60 bg-card text-muted-foreground'
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                          ) : (
                            <XCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
                          )}
                          <span>
                            {letter}) {opt}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="rounded-lg bg-card border border-border/60 px-3 py-2">
                    <p className="text-xs text-muted-foreground">
                      <span className="text-muted-foreground font-medium">Mark scheme: </span>
                      {q.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Assign button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={handleAssign}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 bg-primary/10 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                <Users className="h-4 w-4" />
                Assign to Class
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="rounded-lg border border-border/60 bg-muted px-5 py-3 shadow-xl">
            <p className="text-sm text-foreground">
              Available with full account --{' '}
              <a href="/auth/teacher-register" className="text-primary hover:underline">
                Start free trial
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
