// Force dynamic rendering for Shakespeare pages - they call requireIgcseBoard
// which reads cookies(), incompatible with static prerendering.
export const dynamic = 'force-dynamic'

export default function ShakespeareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
