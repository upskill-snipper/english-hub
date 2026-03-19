'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center p-4">
      <div className="bg-[#0f1828] border border-[#1a2840] rounded-xl max-w-md w-full text-center space-y-4 p-8">
        <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[#f1f5f9]">Something went wrong</h2>
        <p className="text-[#94a3b8]">We encountered an unexpected error. Please try again.</p>
        <button onClick={reset} className="inline-flex items-center justify-center px-6 py-2.5 bg-[#10b981] hover:bg-[#059669] text-white font-medium rounded-lg transition-colors">
          Try Again
        </button>
      </div>
    </div>
  )
}
