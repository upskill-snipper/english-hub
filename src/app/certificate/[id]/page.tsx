import type { Metadata } from 'next'
import CertificatePage from './client-page'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
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
