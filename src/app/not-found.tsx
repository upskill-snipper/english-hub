import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center p-4">
      <div className="bg-[#0f1828] border border-[#1a2840] rounded-xl max-w-md w-full text-center space-y-4 p-8">
        <div className="text-6xl font-bold text-[#10b981]">404</div>
        <h2 className="text-xl font-bold text-[#f1f5f9]">Page not found</h2>
        <p className="text-[#94a3b8]">The page you are looking for does not exist or has been moved.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center px-5 py-2.5 border border-[#1a2840] text-[#f1f5f9] font-medium rounded-lg hover:bg-[#1a2840]/50 transition-colors">Home</Link>
          <Link href="/courses" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#10b981] hover:bg-[#059669] text-white font-medium rounded-lg transition-colors">Browse Courses</Link>
        </div>
      </div>
    </div>
  )
}
