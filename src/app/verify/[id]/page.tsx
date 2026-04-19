import type { Metadata } from 'next'
import VerifyPage from './client-page'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const title = 'Verify Certificate | The English Hub'
  const description =
    'Verify the authenticity of a Certificate of Achievement issued by The English Hub for GCSE English course completion.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://theenglishhub.app/verify/${params.id}`,
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
  return <VerifyPage />
}
