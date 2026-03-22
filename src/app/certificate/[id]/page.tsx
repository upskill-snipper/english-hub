import type { Metadata } from 'next'
import CertificatePage from './client-page'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = 'Certificate of Achievement | The English Hub'
  const description = 'View and verify this Certificate of Achievement from The English Hub. Awarded for successful completion of a GCSE English course.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://theenglishhub.app/certificate/${params.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: false,
    },
  }
}

export default function Page() {
  return <CertificatePage />
}
