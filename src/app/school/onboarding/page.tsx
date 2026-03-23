import type { Metadata } from 'next'
import { OnboardingWizard } from '@/components/school/OnboardingWizard'

export const metadata: Metadata = {
  title: 'Teacher Onboarding | The English Hub',
  description:
    'Get started with The English Hub. Set up your school, create your first class, and explore lesson plans in just a few minutes.',
  robots: { index: false, follow: false },
}

export default function OnboardingPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-start justify-center bg-background">
      <OnboardingWizard />
    </div>
  )
}
