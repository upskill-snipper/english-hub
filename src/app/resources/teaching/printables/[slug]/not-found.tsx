import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button-variants'
import { tMany } from '@/lib/i18n/t'

export default async function PrintableNotFound() {
  const [title, body, back, teaching] = await tMany([
    'not_found.printable.title',
    'not_found.printable.body',
    'not_found.printable.back',
    'not_found.printable.teaching',
  ])

  return (
    <main className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="mt-4 text-base text-muted-foreground leading-relaxed">{body}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/resources/teaching/printables"
          className={buttonVariants({ variant: 'default' })}
        >
          {back}
        </Link>
        <Link href="/resources/teaching" className={buttonVariants({ variant: 'outline' })}>
          {teaching}
        </Link>
      </div>
    </main>
  )
}
