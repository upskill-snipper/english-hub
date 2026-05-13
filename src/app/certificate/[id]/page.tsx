import type { Metadata } from 'next'
import CertificatePage from './client-page'
import { t } from '@/lib/i18n/t'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const title = await t('certificate.page_title')
  const description = await t('certificate.page_description')

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
