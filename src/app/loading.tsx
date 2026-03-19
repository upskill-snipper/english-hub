export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#1a2840] border-t-[#10b981] rounded-full animate-spin" />
        <p className="text-[#94a3b8]">Loading...</p>
      </div>
    </div>
  )
}
